import { execSync } from 'child_process';
try {
  const output = execSync('npx tsc --noEmit', { encoding: 'utf-8' });
  console.log('No TS errors');
} catch (e) {
  console.log('TS Error:');
  console.log(e.stdout);
  console.log(e.stderr);
}
