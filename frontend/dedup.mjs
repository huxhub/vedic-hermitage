import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const srcDir = path.resolve('src');
const importsDir = path.join(srcDir, 'imports');

// Custom glob alternative
function getFiles(dir, exts) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(filePath, exts));
    } else {
      if (exts.some(ext => filePath.endsWith(ext))) {
        results.push(filePath);
      }
    }
  }
  return results;
}

// 1. Find all images
const imageFiles = getFiles(importsDir, ['.png', '.jpg', '.jpeg', '.svg']);
console.log(`Found ${imageFiles.length} image files.`);

// 2. Compute hashes and group
const fileHashes = new Map();
for (const file of imageFiles) {
  const buffer = fs.readFileSync(file);
  const hash = crypto.createHash('sha256').update(buffer).digest('hex');
  
  if (!fileHashes.has(hash)) {
    fileHashes.set(hash, []);
  }
  fileHashes.get(hash).push(file);
}

const replacementMap = new Map();
let duplicateCount = 0;

// 3. Find duplicates and pick a primary
for (const [hash, files] of fileHashes.entries()) {
  if (files.length > 1) {
    // Sort files to pick the shortest path or consistent primary
    files.sort((a, b) => a.length - b.length);
    const primary = files[0];
    
    for (let i = 1; i < files.length; i++) {
      const duplicate = files[i];
      
      const primaryImportPath = '@/imports/' + path.relative(importsDir, primary).replace(/\\/g, '/');
      const duplicateImportPath = '@/imports/' + path.relative(importsDir, duplicate).replace(/\\/g, '/');
      
      replacementMap.set(duplicateImportPath, primaryImportPath);
      replacementMap.set(duplicate, primary); // for deletion
      duplicateCount++;
    }
  }
}

console.log(`Found ${duplicateCount} duplicate files.`);

if (duplicateCount === 0) {
  console.log('No duplicates found. Exiting.');
  process.exit(0);
}

// 4. Update all source files
const sourceFiles = getFiles(srcDir, ['.ts', '.tsx']);
let updatedFilesCount = 0;

for (const file of sourceFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let hasChanges = false;
  
  for (const [dupImport, primImport] of replacementMap.entries()) {
    if (typeof dupImport === 'string' && dupImport.startsWith('@/imports/')) {
      // Replace all occurrences of the duplicate import path with the primary import path
      // Escape the duplicate string for regex
      const regex = new RegExp(dupImport.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      if (regex.test(content)) {
        content = content.replace(regex, primImport);
        hasChanges = true;
      }
    }
  }
  
  if (hasChanges) {
    fs.writeFileSync(file, content, 'utf8');
    updatedFilesCount++;
  }
}

console.log(`Updated ${updatedFilesCount} source files.`);

// 5. Delete duplicate files
let deletedCount = 0;
for (const [dupPath, primPath] of replacementMap.entries()) {
  if (typeof dupPath === 'string' && path.isAbsolute(dupPath)) {
    try {
      fs.unlinkSync(dupPath);
      deletedCount++;
    } catch (e) {
      console.error(`Failed to delete ${dupPath}:`, e);
    }
  }
}

console.log(`Deleted ${deletedCount} duplicate files.`);
