import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ParallaxHero, Label, playfair, dmSans, fadeUp, dur } from "./shared";
import svgPaths from "@/imports/HealingPackages-1/svg-pfxndf5swk";

import imgHero from "@/imports/HealingPackages/e9a5aece1af89b301b17ee5574b151327380d284.png";

// ── Check icon ─────────────────────────────────────────────────────────────────
function CheckIcon({ white = false }: { white?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <defs><clipPath id="chk"><rect width="16" height="16" fill="white" /></clipPath></defs>
      <g clipPath="url(#chk)">
        <path d={svgPaths.p2668e840} stroke={white ? "#D4A843" : "#D4A843"} strokeWidth="2" />
      </g>
    </svg>
  );
}

// ── Plus / Minus icon for FAQ ──────────────────────────────────────────────────
function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 transition-transform duration-300" style={{ transform: open ? "rotate(45deg)" : "none" }}>
      <path d={svgPaths.p3e11a380} stroke="#D4A843" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

// ── Package data ───────────────────────────────────────────────────────────────
const packages = [
  {
    id: "7day",
    label: "Restorative Healing",
    title: "7-Day Rejuvenation Retreat",
    price: "₹45,000",
    priceSuffix: " / person",
    bg: "#faf6f0",
    textColor: "#2d241e",
    subtitleColor: "#d4a843",
    priceColor: "#2d241e",
    fromColor: "#6b5e54",
    items: [
      "Initial Dosha assessment",
      "Daily Abhyanga massage",
      "Shirodhara therapy",
      "Yoga & meditation",
      "Satvik meals",
      "Premium Accommodation",
    ],
  },
  {
    id: "14day",
    label: "Deep Purification",
    title: "14-Day Panchakarma Detox",
    price: "₹85,000",
    priceSuffix: " / person",
    bg: "#2c4a2e",
    textColor: "#ffffff",
    subtitleColor: "#d4a843",
    priceColor: "#ffffff",
    fromColor: "#ffffff",
    items: [
      "Complete Panchakarma protocol",
      "Vamana & Virechana therapies",
      "Basti treatment",
      "Herbal steam bath",
      "Daily physician consultation",
      "All meals & accommodation",
    ],
  },
  {
    id: "21day",
    label: "Life Reset Program",
    title: "21-Day Total Transformation",
    price: "₹1,40,000",
    priceSuffix: " / person",
    bg: "#faf6f0",
    textColor: "#2d241e",
    subtitleColor: "#d4a843",
    priceColor: "#2d241e",
    fromColor: "#6b5e54",
    items: [
      "Full Panchakarma + Rasayana",
      "Kshara Sutra consultation",
      "Intensive Yoga & Pranayama",
      "Personalized herbal medicine",
      "Nutritional counseling",
      "Luxury Suite Accommodation",
    ],
  },
];

// ── FAQ data ───────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "When is the best time to visit for a retreat?",
    a: "Kerala's climate is ideal year-round. The cooler months of October to February offer the most comfortable conditions for intensive Panchakarma. The monsoon season (June–August) is traditionally considered the most potent time for Ayurvedic treatments.",
  },
  {
    q: "Are the packages suitable for first-time Ayurveda guests?",
    a: "Yes. All programmes begin with a detailed Dosha assessment conducted by our chief physician. First-time guests are gently guided through each step, and treatments are always calibrated to your current state of health.",
  },
  {
    q: "What is included in the accommodation?",
    a: "All packages include accommodation in our traditional Kerala-style rooms or suites, depending on the programme. Rooms are equipped with natural ventilation, Ayurvedic bedding, and private bathrooms with herbal bathing products.",
  },
  {
    q: "Can I continue my prescribed medications during the retreat?",
    a: "Absolutely. Our physicians will review all existing medications before your programme begins and work alongside your regular healthcare providers to ensure safe, complementary care throughout your stay.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 4–6 weeks in advance to ensure availability and allow time for your pre-arrival health intake form. Peak season bookings (October–February) should be made 2–3 months ahead.",
  },
];

// ── FAQ Item ───────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-[8px] border border-[#d9d1c7] overflow-hidden cursor-pointer"
      onClick={() => setOpen((o) => !o)}
    >
      <div className="flex items-center justify-between p-5 sm:p-6">
        <p className="text-[15px] sm:text-[18px] font-semibold text-[#2d241e] flex-1 pr-4" style={{ fontFamily: dmSans }}>
          {q}
        </p>
        <PlusIcon open={open} />
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <div className="h-px bg-[#e6e2dc] mb-4 sm:mb-5" />
              <p className="text-[14px] sm:text-[16px] leading-[1.7] text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Package card ───────────────────────────────────────────────────────────────
function PackageCard({ pkg, index }: { pkg: (typeof packages)[0]; index: number }) {
  const isLight = pkg.bg !== "#2c4a2e";
  return (
    <motion.div
      className="rounded-[12px] w-full"
      style={{ background: pkg.bg }}
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ ...dur, delay: index * 0.1 }}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 p-6 sm:p-10 lg:p-16">
        {/* Left: label + title + features */}
        <div className="flex flex-col gap-6 md:gap-10 flex-1 min-w-0 w-full">
          <div className="flex flex-col gap-2">
            <span className="text-[13px] sm:text-[14px] font-semibold uppercase" style={{ fontFamily: dmSans, color: pkg.subtitleColor }}>
              {pkg.label}
            </span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-medium leading-[1.15]" style={{ fontFamily: playfair, color: pkg.textColor }}>
              {pkg.title}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {pkg.items.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckIcon white={!isLight} />
                <span className="text-[14px] sm:text-[16px] opacity-80" style={{ fontFamily: dmSans, color: pkg.textColor }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: price + CTA */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 w-full lg:w-[300px] shrink-0 text-center mt-6 lg:mt-0 pt-6 lg:pt-0 border-t lg:border-t-0 border-[#d9d1c7]/30">
          <span className="text-[13px] sm:text-[14px]" style={{ fontFamily: dmSans, color: pkg.fromColor }}>From</span>
          <div>
            <span className="text-[32px] sm:text-[40px] font-semibold" style={{ fontFamily: playfair, color: pkg.priceColor }}>
              {pkg.price}
            </span>
            <span className="text-[14px] sm:text-[16px] font-normal" style={{ fontFamily: playfair, color: pkg.priceColor }}>
              {pkg.priceSuffix}
            </span>
          </div>
          <Link
            to="/contact"
            className="bg-[#c4622d] text-white px-8 py-3.5 rounded-md text-[14px] font-semibold uppercase hover:bg-[#b5562a] transition-colors w-full sm:w-auto"
            style={{ fontFamily: dmSans }}
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────────
export default function PackagesPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <ParallaxHero src={imgHero} height={500} overlay="rgba(0,0,0,0.15)">
        <motion.div
          className="flex flex-col items-center gap-6 text-center px-8"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[14px] font-semibold uppercase text-[#d4a843] tracking-wide" style={{ fontFamily: dmSans }}>
            Healing Packages
          </span>
          <h1 className="text-[32px] sm:text-[48px] md:text-[72px] font-medium text-white leading-[1.1]" style={{ fontFamily: playfair }}>
            Choose Your Path to Wellness
          </h1>
        </motion.div>
      </ParallaxHero>

      {/* ── Intro ── */}
      <div className="bg-white flex justify-center py-12 sm:py-16 px-6 sm:px-8">
        <motion.p
          className="text-[16px] sm:text-[20px] leading-[1.6] text-[#6b5e54] text-center max-w-[900px]"
          style={{ fontFamily: dmSans }}
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}
        >
          Our carefully curated retreat packages combine authentic Panchakarma therapies, personalized physician consultations, Sattvic meals, and immersive nature experiences.
        </motion.p>
      </div>

      {/* ── Package cards ── */}
      <section className="bg-white px-6 md:px-20 pb-12 md:pb-16">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>
      </section>

      {/* ── Custom Package CTA ── */}
      <section className="bg-white px-6 md:px-20 pb-12 md:pb-20">
        <motion.div
          className="max-w-[1280px] mx-auto bg-[#faf6f0] border border-[#d9d1c7] rounded-[12px] flex flex-col md:flex-row gap-6 items-center justify-between p-6 sm:p-12 text-center md:text-left"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-[22px] sm:text-[28px] md:text-[32px] font-normal text-[#2d241e]" style={{ fontFamily: playfair }}>
              Need a Custom Package?
            </h3>
            <p className="text-[15px] sm:text-[16px] text-[#6b5e54]" style={{ fontFamily: dmSans }}>
              Our physicians will design a personalized program just for you.
            </p>
          </div>
          <Link
            to="/contact"
            className="border-[1.5px] border-[#c4622d] text-[#c4622d] px-6 py-3 rounded-md text-[12px] font-semibold uppercase hover:bg-[#c4622d] hover:text-white transition-colors whitespace-nowrap"
            style={{ fontFamily: dmSans }}
          >
            Contact Us
          </Link>
        </motion.div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white px-6 md:px-20 py-16 md:py-[120px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-16">
          <motion.div
            className="flex flex-col items-center gap-4"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}
          >
            <Label>FAQ</Label>
            <h2 className="text-[32px] sm:text-[44px] md:text-[56px] leading-[1.15] font-medium text-[#2d241e] text-center" style={{ fontFamily: playfair }}>
              Common Questions
            </h2>
          </motion.div>
          <motion.div
            className="flex flex-col gap-4"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ ...dur, delay: 0.1 }}
          >
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
