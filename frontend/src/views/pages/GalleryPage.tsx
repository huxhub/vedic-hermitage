import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ParallaxHero, playfair, dmSans, fadeUp, dur } from "./shared";
import svgPaths from "@/imports/Gallery-1/svg-a0ttegdfdb";

import imgHero from "@/imports/Gallery-1/f64907bc5d5efd0f951b9466796a724d3e252b6b.png";
import imgImage0 from "@/imports/Gallery-1/fd954b93dd8eb4110d08ff50c37294ab4731c9e0.png";
import imgImage1 from "@/imports/Gallery-1/69db35beb147eb4285c5cb99fb1e3df1d8c3bbc8.png";
import imgImage2 from "@/imports/Gallery-1/cc602af4bfb5b7b2a35d3806ad34905dd2881b77.png";
import imgImage3 from "@/imports/Gallery-1/bf26e31e76c1a38c5e329fa92642bcca6a492462.png";
import imgImage4 from "@/imports/Gallery-1/c1f18c2dc180af1b3496d4e3db6b3b36b1ce07c5.png";
import imgImage5 from "@/imports/Gallery-1/4cf88660277dfe1f62c5d0d2af60a5e67172bb7c.png";
import imgImage6 from "@/imports/Gallery-1/6aa3d8e4095b268af9fceb8be632454ef2266110.png";
import imgImage7 from "@/imports/Gallery-1/67417c631e8f2871a5c3f8da68876fd8eb823b7e.png";
import imgImage8 from "@/imports/Gallery-1/7178948e66e4a78127162b3d5db2b78d726bf493.png";
import imgImage9 from "@/imports/Gallery-1/c781a9c23d725f8b5739de4e0926c8e91e6bcf7e.png";
import imgImage10 from "@/imports/Gallery-1/6ddbaabb394e10f89de84fa976ec2b2c739f9c04.png";
import imgImage11 from "@/imports/Gallery-1/7eb09d607eddcd1e495a6aedc89aa33ea4085949.png";

// ── Data ──────────────────────────────────────────────────────────────────────
const allCards = [
  { img: imgImage0, cat: "Treatments", title: "Treatment room interior" },
  { img: imgImage1, cat: "Treatments", title: "Oil therapy session" },
  { img: imgImage2, cat: "Property", title: "Kerala aerial view" },
  { img: imgImage3, cat: "Nature", title: "Herb garden" },
  { img: imgImage4, cat: "Property", title: "Meditation hut exterior" },
  { img: imgImage5, cat: "Treatments", title: "Panchakarma room" },
  { img: imgImage6, cat: "Food", title: "Organic food spread" },
  { img: imgImage7, cat: "Property", title: "Property entrance gate" },
  { img: imgImage8, cat: "Nature", title: "Yoga session at sunrise" },
  { img: imgImage9, cat: "Treatments", title: "Shirodhara therapy" },
  { img: imgImage10, cat: "Ceremonies", title: "Traditional lamps ceremony" },
  { img: imgImage11, cat: "Nature", title: "Guest relaxing by pond" },
];

const TABS = ["All", "Treatments", "Property", "Nature", "Food", "Ceremonies"] as const;
const PAGE_SIZE = 12;

// ── Card component ─────────────────────────────────────────────────────────────
function GalleryCard({
  img, cat, title, onClick,
}: { img: string; cat: string; title: string; onClick: () => void }) {
  return (
    <div
      className="h-[300px] overflow-hidden relative rounded-[10px] w-full cursor-pointer group"
      onClick={onClick}
    >
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700"
      />
      {/* gradient scrim */}
      <div className="absolute inset-x-0 bottom-0 h-[90px] bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end gap-1 px-4 py-3.5">
        <p className="text-[12px] font-semibold uppercase text-[#d4a843]" style={{ fontFamily: dmSans }}>
          {cat}
        </p>
        <p className="text-[16px] font-normal text-white" style={{ fontFamily: playfair }}>
          {title}
        </p>
      </div>
    </div>
  );
}

// ── Lightbox ───────────────────────────────────────────────────────────────────
function Lightbox({ src, title, cat, onClose }: { src: string; title: string; cat: string; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-[95vw] max-h-[90vh] flex flex-col gap-3"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={title} className="rounded-[8px] max-w-[95vw] max-h-[75vh] object-contain" />
        <div className="flex flex-col gap-1 px-2">
          <span className="text-[12px] font-semibold uppercase text-[#d4a843]" style={{ fontFamily: dmSans }}>{cat}</span>
          <span className="text-[16px] sm:text-[18px] font-normal text-white" style={{ fontFamily: playfair }}>{title}</span>
        </div>
      </motion.div>
      <button
        className="absolute top-4 right-4 sm:top-6 sm:right-8 text-white/70 hover:text-white text-[36px] sm:text-[40px] leading-none transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
    </motion.div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [lightbox, setLightbox] = useState<{ src: string; title: string; cat: string } | null>(null);

  const filtered = activeTab === "All" ? allCards : allCards.filter((c) => c.cat === activeTab);
  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setVisible(PAGE_SIZE);
  };

  return (
    <div>
      {/* ── Hero ── */}
      <ParallaxHero src={imgHero} height={500} overlay="rgba(44,74,46,0.6)">
        <motion.div
          className="flex flex-col items-center gap-6 text-center px-8"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[14px] font-semibold uppercase text-[#d4a843] tracking-wide" style={{ fontFamily: dmSans }}>
            Gallery
          </span>
          <h1 className="text-[32px] sm:text-[48px] md:text-[72px] font-medium text-white leading-[1.1]" style={{ fontFamily: playfair }}>
            A Glimpse Into Our World
          </h1>
          <p className="text-[16px] sm:text-[18px] leading-[1.6] text-white/90 max-w-[640px]" style={{ fontFamily: dmSans }}>
            Explore the beauty of our retreat, treatments, and natural surroundings.
          </p>
        </motion.div>
      </ParallaxHero>

      {/* ── Filter tabs ── */}
      <div className="bg-[#faf7f2] sticky top-20 z-40 border-b border-[#e6e2dc] overflow-x-auto scrollbar-none">
        <div className="flex gap-3 items-center px-6 md:px-20 py-4 md:py-6 min-w-max">
          {TABS.map((tab) => {
            const active = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className="px-5 py-2.5 md:py-3 rounded-full text-[13px] md:text-[14px] font-semibold uppercase transition-all duration-200 whitespace-nowrap"
                style={{
                  fontFamily: dmSans,
                  background: active ? "#2c4a2e" : "transparent",
                  color: active ? "white" : "#6b5e54",
                  border: active ? "none" : "1px solid #d9d1c7",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Gallery grid ── */}
      <div className="bg-[#faf6f0] px-6 md:px-20 py-12 md:py-[60px]">
        <div className="flex flex-col gap-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              {shown.map((card) => (
                <GalleryCard
                  key={card.title}
                  img={card.img}
                  cat={card.cat}
                  title={card.title}
                  onClick={() => setLightbox({ src: card.img, title: card.title, cat: card.cat })}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="flex justify-center pt-12 md:pt-16 pb-4">
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="px-8 py-3 rounded-md border-[1.5px] border-[#c4622d] text-[#c4622d] text-[14px] font-semibold uppercase hover:bg-[#c4622d] hover:text-white transition-colors"
              style={{ fontFamily: dmSans }}
            >
              Load More Photos
            </button>
          </div>
        )}
      </div>

      {/* ── Instagram CTA ── */}
      <div className="bg-[#2c4a2e] flex flex-col items-center gap-6 px-6 md:px-20 py-12 md:py-16 text-center">
        <motion.div
          className="flex flex-col items-center gap-6"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}
        >
          {/* Instagram icon */}
          <div className="bg-[#d4a843] w-14 h-14 rounded-full flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d={svgPaths.p3094c00} stroke="#2C4A2E" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-medium text-white leading-[1.2]" style={{ fontFamily: playfair }}>
            Follow Our Journey
          </h2>
          <p className="text-[16px] font-semibold text-[#d4a843]" style={{ fontFamily: dmSans }}>
            @vedichermitage
          </p>
          <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#eae7e2]/80 max-w-[640px]" style={{ fontFamily: dmSans }}>
            Tag us in your photos for a chance to be featured.
          </p>
          <button
            className="px-6 py-3 rounded-md border-[1.5px] border-[#d4a843] text-[#d4a843] text-[14px] font-semibold uppercase hover:bg-[#d4a843] hover:text-[#2c4a2e] transition-colors"
            style={{ fontFamily: dmSans }}
          >
            Follow on Instagram
          </button>
        </motion.div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            src={lightbox.src}
            title={lightbox.title}
            cat={lightbox.cat}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
