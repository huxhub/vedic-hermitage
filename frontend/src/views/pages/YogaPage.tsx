import { motion } from "motion/react";
import { Link } from "react-router";
import { ParallaxHero, PageHeroContent, Label, ClockSVG, playfair, dmSans, fadeUp, dur } from "./shared";

import imgHero from "@/imports/AyurvedaLandingPage/b541fd91c507a1093a8f548773aad89c39634714.png";
import { allTreatmentsData } from "@/data/treatmentsData";

const yogaTreatments = allTreatmentsData.filter(t => t.category === "yoga");

export default function YogaPage() {
  return (
    <div>
      <ParallaxHero src={imgHero} height={600} overlay="rgba(44,74,46,0.5)">
        <PageHeroContent
          label="Mind, Body, Spirit"
          title="Yoga & Wellness"
          subtitle="Discover harmony and inner peace through our authentic yoga traditions and mindful practices."
        />
      </ParallaxHero>

      {/* Announce bar */}
      <div className="bg-[#c4622d] flex items-center justify-center py-5 px-6 text-center">
        <p className="text-white text-[13px] sm:text-[14px] font-medium uppercase tracking-wide" style={{ fontFamily: dmSans }}>
          Join our daily guided sessions in the open-air yoga shala
        </p>
      </div>

      {/* Grid */}
      <section className="bg-white px-6 md:px-20 py-16 md:py-[120px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-16">
          <motion.div className="flex flex-col items-center gap-4 text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}>
            <Label>Holistic Practice</Label>
            <h2 className="text-[32px] sm:text-[44px] md:text-[56px] leading-[1.15] font-medium text-[#2d241e]" style={{ fontFamily: playfair }}>Yoga Sections &amp; Treatments</h2>
            <p className="text-[15px] sm:text-[18px] leading-[1.6] text-[#6b5e54] max-w-[640px]" style={{ fontFamily: dmSans }}>
              Embrace a transformative journey with our diverse yoga offerings, designed to align your physical, mental, and spiritual well-being.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {yogaTreatments.map((t, i) => (
              <motion.div key={t.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ ...dur, delay: (i % 3) * 0.1 }}>
                <Link to={`/yoga/${t.id}`} className="bg-[#faf7f2] rounded-[8px] overflow-hidden flex flex-col group cursor-pointer shadow-sm h-full">
                  <div className="h-[240px] sm:h-[280px] overflow-hidden relative shrink-0">
                    <img src={t.img} alt={t.title} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-[#2c4a2e] text-white text-[11px] font-semibold uppercase px-3 py-1.5 rounded" style={{ fontFamily: dmSans }}>
                      {t.tag}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
                    <h3 className="text-[22px] sm:text-[26px] font-medium text-[#2d241e]" style={{ fontFamily: playfair }}>{t.title}</h3>
                    <p className="text-[14px] leading-[1.6] text-[#6b5e54]" style={{ fontFamily: dmSans }}>{t.desc}</p>
                  </div>
                  <div className="border-t border-[#d9d1c7] px-5 sm:px-6 py-4 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1.5"><ClockSVG /><span className="text-[13px] font-semibold text-[#c4622d]" style={{ fontFamily: dmSans }}>{t.duration}</span></div>
                    <span className="text-[13px] font-semibold text-[#c4622d] group-hover:underline" style={{ fontFamily: dmSans }}>View Details</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness CTA */}
      <section className="bg-[#faf7f2] px-6 md:px-20 py-16 md:py-24">
        <motion.div className="max-w-[1280px] mx-auto bg-[#2c4a2e] rounded-[16px] p-6 sm:p-10 lg:p-16 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center justify-between" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}>
          <div className="flex flex-col gap-3 md:gap-4 max-w-[640px]">
            <h3 className="text-[26px] sm:text-[34px] md:text-[40px] font-normal text-white leading-[1.2]" style={{ fontFamily: playfair }}>Private Yoga Consultation</h3>
            <p className="text-[15px] sm:text-[17px] leading-[1.6] text-white/75" style={{ fontFamily: dmSans }}>
              Work one-on-one with our experienced yoga masters to develop a personalized practice tailored to your unique body, goals, and lifestyle.
            </p>
          </div>
          <Link to="/contact" className="bg-[#c4622d] text-white px-8 py-4 rounded-md text-[14px] font-semibold uppercase hover:bg-[#b5562a] transition-colors w-full sm:w-auto text-center whitespace-nowrap" style={{ fontFamily: dmSans }}>
            Book a Session
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
