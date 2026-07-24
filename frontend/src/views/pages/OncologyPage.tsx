import { motion } from "motion/react";
import { Link } from "react-router";
import { ParallaxHero, PageHeroContent, Label, playfair, dmSans, fadeUp, dur } from "./shared";
import svgPaths from "@/imports/AyurvedaLandingPage/svg-hyqo47z0o2";

import imgHero from "@/imports/AyurvedicOncologySupport/8088512d89fc2a3c0fbb9bcbfe6de55b80172f3b.png";
import imgLeft from "@/imports/AyurvedicOncologySupport/6431c763bdc056da95e4ba7f2bab7ac12f27cc4c.png";
import imgDoctor from "@/imports/CancerCare/2ec3adce8c93eedaca14d4c590998e756a429eb6.png";

const supportItems = [
  "Detoxification to clear accumulated toxins",
  "Herbal support for cellular health",
  "Nervous system calming",
  "Sattvic nutritional support",
];

const protocols = [
  { title: "Immune Boosting Rasayana", desc: "Specialized protocols utilizing rare herbal formulations and targeted therapy techniques to support immune resilience during and after conventional treatments." },
  { title: "Detox & Panchakarma", desc: "Gentle Panchakarma procedures adapted for sensitive patients to clear accumulated toxins from chemotherapy and radiation safely." },
  { title: "Pain & Inflammation Management", desc: "Classical herbal preparations and external therapies to reduce pain, swelling, and discomfort without interfering with conventional oncology care." },
  { title: "Stress & Mental Wellness", desc: "Shirodhara, meditation, pranayama, and adaptogenic herbs to restore mental peace and emotional resilience throughout the treatment journey." },
];

export default function OncologyPage() {
  return (
    <div>
      <ParallaxHero src={imgHero} height={640} overlay="rgba(44,74,46,0.5)">
        <PageHeroContent
          label="Ayurvedic Oncology Support"
          title="Compassionate Care Through Ancient Wisdom"
          subtitle="Complementary Ayurvedic support for cancer patients — helping manage side effects, restore strength, and improve quality of life."
        />
      </ParallaxHero>

      {/* Disclaimer */}
      <div className="bg-[#fdf4e3] flex items-center justify-center py-5 px-8 text-center">
        <p className="text-[#c4622d] text-[14px] font-semibold" style={{ fontFamily: dmSans }}>
          DISCLAIMER: Our Ayurvedic treatments complement conventional cancer care and are not a replacement for medical treatment. Always consult your oncologist.
        </p>
      </div>

      {/* How Ayurveda Supports */}
      <section className="px-6 md:px-20 py-16 md:py-[120px]">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
          <motion.div className="w-full max-w-[560px] h-[320px] sm:h-[450px] md:h-[520px] rounded-[8px] overflow-hidden shrink-0" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}>
            <img src={imgLeft} alt="" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div className="flex flex-col gap-6 md:gap-8 flex-1" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ ...dur, delay: 0.16 }}>
            <h2 className="text-[28px] sm:text-[38px] md:text-[48px] font-normal leading-[1.15] text-[#2d241e]" style={{ fontFamily: playfair }}>How Ayurveda Supports Cancer Care</h2>
            <p className="text-[16px] sm:text-[18px] leading-[1.7] text-[#6b5e54]" style={{ fontFamily: dmSans }}>
              Ayurveda offers a holistic approach to supporting the body during and after conventional cancer treatments. Through specialized Rasayana (rejuvenation) therapies, we focus on immune modulation, reducing the harsh side effects of chemotherapy and radiation, and restoring fundamental vitality (Ojas).
            </p>
            <div className="flex flex-col gap-4">
              {supportItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                    <path d={svgPaths.p1e29ca40} stroke="#D4A843" strokeWidth="2" />
                  </svg>
                  <span className="text-[14px] sm:text-[16px] text-[#2d241e]" style={{ fontFamily: dmSans }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Protocols */}
      <section className="bg-[#faf6f0] px-6 md:px-20 py-16 md:py-[120px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-16">
          <motion.div className="flex flex-col items-center gap-4" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}>
            <Label>Our Focus</Label>
            <h2 className="text-[32px] sm:text-[44px] md:text-[56px] leading-[1.15] font-medium text-[#2d241e] text-center" style={{ fontFamily: playfair }}>Treatment Protocols</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {protocols.map((p, i) => (
              <motion.div key={p.title} className="bg-white border border-[#d9d1c7] rounded-[8px] p-6 md:p-8 flex flex-col gap-3 md:gap-4 shadow-sm" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ ...dur, delay: i * 0.1 }}>
                <h3 className="text-[18px] sm:text-[22px] font-semibold text-[#2c4a2e]" style={{ fontFamily: playfair }}>{p.title}</h3>
                <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[#6b5e54]" style={{ fontFamily: dmSans }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 md:px-20 py-16 md:py-[120px] flex justify-center">
        <motion.div className="max-w-[900px] flex flex-col items-center gap-8 md:gap-10 text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}>
          <div className="w-16 h-px bg-[#d4a843] mx-auto" />
          <p className="text-[20px] sm:text-[24px] md:text-[28px] leading-[1.5] text-[#2d241e] italic" style={{ fontFamily: dmSans }}>
            "Ayurveda gave me the strength to endure my hospital treatments and helped me reclaim my life afterward. The compassion here is as healing as the herbs."
          </p>
          <span className="text-[12px] font-bold uppercase text-[#c4622d] tracking-wider" style={{ fontFamily: dmSans }}>— Recovery Guest Story</span>
        </motion.div>
      </section>

      {/* Doctor */}
      <section className="bg-[#2c4a2e] px-6 md:px-20 py-16 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
          <motion.div className="flex flex-col gap-6 md:gap-8 flex-1 w-full" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}>
            <span className="text-[14px] font-semibold uppercase text-[#d4a843]" style={{ fontFamily: dmSans }}>Chief Physician</span>
            <h3 className="text-[28px] sm:text-[38px] md:text-[48px] font-normal leading-[1.15] text-white" style={{ fontFamily: playfair }}>Dr. Rajeev Menon</h3>
            
            {/* Mobile Image */}
            <div className="block lg:hidden w-full h-[300px] rounded-[8px] overflow-hidden my-2">
              <img src={imgDoctor} alt="Dr. Rajeev Menon" className="w-full h-full object-cover" />
            </div>

            <p className="text-[15px] sm:text-[18px] leading-[1.7] text-white/80" style={{ fontFamily: dmSans }}>
              With over 25 years of clinical experience in Ayurvedic oncology, Dr. Menon leads our medical team with a philosophy rooted in the balance of ancient text and modern patient safety.
            </p>
            <button className="self-start border-[1.5px] border-[#d4a843] text-[#d4a843] px-6 py-3 rounded-md text-[12px] font-semibold uppercase hover:bg-[#d4a843]/10 transition-colors" style={{ fontFamily: dmSans }}>
              View Credentials
            </button>
          </motion.div>
          
          {/* Desktop Image */}
          <motion.div className="hidden lg:block w-full max-w-[460px] h-[350px] sm:h-[480px] md:h-[560px] rounded-[8px] overflow-hidden shrink-0" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ ...dur, delay: 0.16 }}>
            <img src={imgDoctor} alt="Dr. Rajeev Menon" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center py-16 md:py-[120px] px-8 gap-8 text-center">
        <motion.div className="flex flex-col items-center gap-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}>
          <h3 className="text-[32px] sm:text-[44px] md:text-[56px] font-normal text-[#2d241e] leading-[1.15]" style={{ fontFamily: playfair }}>Begin Your Healing Journey</h3>
          <Link to="/contact" className="bg-[#c4622d] text-white px-8 py-4 rounded-md text-[14px] font-semibold uppercase hover:bg-[#b5562a] transition-colors" style={{ fontFamily: dmSans }}>
            Schedule a Confidential Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
