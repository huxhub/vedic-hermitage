import { Link } from "react-router";
import { motion } from "motion/react";
import { ParallaxHero, Label, playfair, dmSans, fadeUp, dur } from "./shared";
import svgPaths from "@/imports/CancerCare/svg-38qtshekuq";

import imgHero from "@/imports/CancerCare/8088512d89fc2a3c0fbb9bcbfe6de55b80172f3b.png";
import imgLeft from "@/imports/CancerCare/6431c763bdc056da95e4ba7f2bab7ac12f27cc4c.png";
import imgDoctor from "@/imports/CancerCare/2ec3adce8c93eedaca14d4c590998e756a429eb6.png";

// Gold diamond check icon
function DiamondCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
      <path d={svgPaths.pa255000} stroke="#D4A843" strokeWidth="2" />
    </svg>
  );
}

const supportItems = [
  "Detoxification to clear toxins",
  "Herbal support for cellular health",
  "Nervous system calming",
  "Sattvic nutritional support",
];

const protocols = [
  { title: "Immune Boosting Rasayana", desc: "Specialized protocols utilizing rare herbal formulations and targeted therapy techniques to address specific patient needs during recovery." },
  { title: "Detox & Panchakarma", desc: "Specialized protocols utilizing rare herbal formulations and targeted therapy techniques to address specific patient needs during recovery." },
  { title: "Pain & Inflammation Management", desc: "Specialized protocols utilizing rare herbal formulations and targeted therapy techniques to address specific patient needs during recovery." },
  { title: "Stress & Mental Wellness", desc: "Specialized protocols utilizing rare herbal formulations and targeted therapy techniques to address specific patient needs during recovery." },
];

export default function CancerCarePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <ParallaxHero src={imgHero} height={600} overlay="rgba(44,74,46,0.5)">
        <motion.div
          className="flex flex-col items-center gap-6 text-center px-8 max-w-[1000px] mx-auto"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[13px] sm:text-[14px] font-semibold uppercase text-[#d4a843] tracking-wide" style={{ fontFamily: dmSans }}>
            Ayurvedic Oncology Support
          </span>
          <h1 className="text-[32px] sm:text-[54px] md:text-[72px] leading-[1.15] font-medium text-white" style={{ fontFamily: playfair }}>
            Compassionate Care Through Ancient Wisdom
          </h1>
          <p className="text-[15px] sm:text-[18px] md:text-[20px] leading-[1.6] text-white/90 max-w-[720px]" style={{ fontFamily: dmSans }}>
            Complementary Ayurvedic support for cancer patients — helping manage side effects, restore strength, and improve quality of life.
          </p>
        </motion.div>
      </ParallaxHero>

      {/* ── Disclaimer ── */}
      <div className="bg-[#fdf4e3] flex items-center justify-center py-6 px-8 text-center">
        <p className="text-[14px] font-semibold text-[#c4622d]" style={{ fontFamily: dmSans }}>
          DISCLAIMER: Our Ayurvedic treatments complement conventional cancer care and are not a replacement for medical treatment. Always consult your oncologist.
        </p>
      </div>

      {/* ── How Ayurveda Supports ── */}
      <section className="px-6 md:px-20 py-16 md:py-[120px]">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
          <motion.div
            className="w-full max-w-[624px] h-[320px] sm:h-[450px] md:h-[560px] rounded-[8px] overflow-hidden shrink-0"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}
          >
            <img src={imgLeft} alt="" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            className="flex flex-col gap-6 md:gap-8 flex-1"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ ...dur, delay: 0.16 }}
          >
            <h2 className="text-[28px] sm:text-[38px] md:text-[48px] font-normal leading-[1.15] text-[#2d241e]" style={{ fontFamily: playfair }}>
              How Ayurveda Supports Cancer Care
            </h2>
            <p className="text-[16px] sm:text-[18px] leading-[1.7] text-[#6b5e54]" style={{ fontFamily: dmSans }}>
              Ayurveda offers a holistic approach to supporting the body during and after conventional cancer treatments. Through specialized Rasayana (rejuvenation) therapies, we focus on immune modulation, reducing the harsh side effects of chemotherapy and radiation, and restoring fundamental vitality (Ojas).
            </p>
            <div className="flex flex-col gap-4">
              {supportItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <DiamondCheck />
                  <span className="text-[14px] sm:text-[16px] text-[#2d241e]" style={{ fontFamily: dmSans }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Treatment Protocols ── */}
      <section className="bg-[#faf6f0] px-6 md:px-20 py-16 md:py-[120px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-16">
          <motion.div
            className="flex flex-col items-center gap-4"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}
          >
            <Label>Our Focus</Label>
            <h2 className="text-[32px] sm:text-[44px] md:text-[56px] leading-[1.15] font-medium text-[#2d241e] text-center" style={{ fontFamily: playfair }}>
              Treatment Protocols
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {protocols.map((p, i) => (
              <motion.div
                key={p.title}
                className="bg-[#faf6f0] border border-[#d9d1c7] rounded-[8px] p-6 flex flex-col gap-3 shadow-sm"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ ...dur, delay: i * 0.1 }}
              >
                <h3 className="text-[18px] font-semibold text-[#2c4a2e]" style={{ fontFamily: playfair }}>{p.title}</h3>
                <p className="text-[14px] leading-[1.6] text-[#6b5e54]" style={{ fontFamily: dmSans }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guest Testimonial ── */}
      <section className="px-6 md:px-20 py-16 md:py-[120px] flex justify-center">
        <motion.div
          className="max-w-[900px] flex flex-col items-center gap-8 md:gap-10 text-center"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}
        >
          <svg width="41" height="41" viewBox="0 0 41 41" fill="none" className="opacity-30">
            <path d={svgPaths.p2bfd5f80} stroke="#D4A843" strokeWidth="2" />
          </svg>
          <p className="text-[20px] sm:text-[24px] md:text-[28px] leading-[1.5] text-[#2d241e] italic" style={{ fontFamily: dmSans }}>
            "Ayurveda gave me the strength to endure my hospital treatments and helped me reclaim my life afterward. The compassion here is as healing as the herbs."
          </p>
          <p className="text-[12px] font-bold uppercase text-[#c4622d] tracking-wider" style={{ fontFamily: dmSans }}>
            — Recovery Guest Story
          </p>
        </motion.div>
      </section>

      {/* ── Chief Physician ── */}
      <section className="bg-[#2c4a2e] px-6 md:px-20 py-16 md:py-[120px]">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
          <motion.div
            className="flex flex-col gap-6 md:gap-8 flex-1 w-full"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}
          >
            <span className="text-[14px] font-semibold uppercase text-[#d4a843]" style={{ fontFamily: dmSans }}>
              Chief Physician
            </span>
            <h2 className="text-[28px] sm:text-[38px] md:text-[48px] font-normal leading-[1.15] text-white" style={{ fontFamily: playfair }}>Dr. Rajeev Menon</h2>
            
            {/* Mobile Image */}
            <div className="block lg:hidden w-full h-[300px] rounded-[8px] overflow-hidden my-2">
              <img src={imgDoctor} alt="Dr. Rajeev Menon" className="w-full h-full object-cover" />
            </div>

            <p className="text-[15px] sm:text-[18px] leading-[1.7] text-white/80" style={{ fontFamily: dmSans }}>
              With over 25 years of clinical experience in Ayurvedic oncology, Dr. Menon leads our medical team with a philosophy rooted in the balance of ancient text and modern patient safety.
            </p>
            <button
              className="self-start border-[1.5px] border-[#d4a843] text-[#d4a843] px-6 py-3 rounded-md text-[12px] font-semibold uppercase hover:bg-[#d4a843]/10 transition-colors"
              style={{ fontFamily: dmSans }}
            >
              View Credentials
            </button>
          </motion.div>
          
          {/* Desktop Image */}
          <motion.div
            className="hidden lg:block w-full max-w-[500px] h-[350px] sm:h-[480px] md:h-[600px] rounded-[8px] overflow-hidden shrink-0"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ ...dur, delay: 0.16 }}
          >
            <img src={imgDoctor} alt="Dr. Rajeev Menon" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* ── Begin Your Healing Journey CTA ── */}
      <section className="flex flex-col items-center py-16 md:py-[120px] px-8 gap-6 text-center">
        <motion.div
          className="flex flex-col items-center gap-6 w-full max-w-[90vw]"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}
        >
          <h2 className="text-[32px] sm:text-[48px] md:text-[64px] font-normal text-[#2d241e] leading-[1.15]" style={{ fontFamily: playfair }}>
            Begin Your Healing Journey
          </h2>
          <Link
            to="/contact"
            className="bg-[#c4622d] text-white px-8 py-4 rounded-md text-[14px] font-semibold uppercase hover:bg-[#b5562a] transition-colors"
            style={{ fontFamily: dmSans }}
          >
            Schedule a Confidential Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
