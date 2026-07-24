import { useParams, Navigate, Link } from "react-router";
import { motion } from "motion/react";
import { ParallaxHero, PageHeroContent, Label, ClockSVG, SmallCheckSVG, playfair, dmSans, fadeUp, dur } from "./shared";
import { allTreatmentsData } from "@/data/treatmentsData";

export default function TreatmentDetailPage() {
  const { id } = useParams<{ id: string }>();
  const treatment = allTreatmentsData.find(t => t.id === id);

  if (!treatment) {
    return <Navigate to="/treatments" replace />;
  }

  const isYoga = treatment.category === "yoga";
  const parentPath = isYoga ? "/yoga" : "/treatments";
  const parentLabel = isYoga ? "Yoga & Wellness" : "All Treatments";

  return (
    <div className="bg-white pb-20">
      <ParallaxHero src={treatment.img} height={500} overlay="rgba(44,74,46,0.6)">
        <PageHeroContent
          label={treatment.tag}
          title={treatment.title}
        />
      </ParallaxHero>

      {/* Announce bar */}
      <div className="bg-[#c4622d] flex items-center justify-center py-4 px-6 text-center">
        <Link to={parentPath} className="text-white text-[13px] sm:text-[14px] font-medium uppercase tracking-wide hover:underline" style={{ fontFamily: dmSans }}>
          &larr; Back to {parentLabel}
        </Link>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 md:px-20 py-16 md:py-[100px] flex flex-col gap-12">
        
        {/* Main Content */}
        <motion.div className="flex flex-col gap-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}>
          <div className="flex items-center justify-between">
            <Label>{treatment.tag}</Label>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#faf7f2] rounded text-[#c4622d]">
              <ClockSVG />
              <span className="text-[14px] font-semibold" style={{ fontFamily: dmSans }}>{treatment.duration}</span>
            </div>
          </div>
          
          <h2 className="text-[32px] sm:text-[44px] leading-[1.15] font-medium text-[#2d241e]" style={{ fontFamily: playfair }}>
            {treatment.title}
          </h2>
          
          <p className="text-[16px] sm:text-[18px] leading-[1.8] text-[#6b5e54]" style={{ fontFamily: dmSans }}>
            {treatment.fullDesc}
          </p>
        </motion.div>

        <div className="h-px bg-[#d9d1c7] w-full" />

        {/* Benefits */}
        <motion.div className="flex flex-col gap-8" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ ...dur, delay: 0.1 }}>
          <h3 className="text-[24px] sm:text-[28px] font-medium text-[#2d241e]" style={{ fontFamily: playfair }}>
            Key Benefits
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {treatment.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#faf7f2] p-4 rounded-[8px]">
                <div className="mt-0.5 shrink-0"><SmallCheckSVG color="#c4622d" /></div>
                <span className="text-[15px] sm:text-[16px] text-[#2d241e] leading-[1.5]" style={{ fontFamily: dmSans }}>{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div className="mt-8 bg-[#2c4a2e] rounded-[16px] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ ...dur, delay: 0.2 }}>
          <div className="flex flex-col gap-3 max-w-[500px]">
            <h4 className="text-[24px] sm:text-[28px] text-white font-medium" style={{ fontFamily: playfair }}>Ready to begin your healing journey?</h4>
            <p className="text-[15px] text-white/80" style={{ fontFamily: dmSans }}>Book a consultation with our Ayurvedic experts to see if {treatment.title} is right for your unique Dosha.</p>
          </div>
          <Link to="/contact" className="bg-[#c4622d] text-white px-8 py-4 rounded-md text-[14px] font-semibold uppercase hover:bg-[#b5562a] transition-colors whitespace-nowrap" style={{ fontFamily: dmSans }}>
            Enquire Now
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
