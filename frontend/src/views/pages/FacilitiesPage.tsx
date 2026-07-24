import { motion } from "motion/react";
import { Link } from "react-router";
import { ParallaxHero, PageHeroContent, playfair, dmSans, fadeUp, dur } from "./shared";

import imgHero from "@/imports/OurFacilities/05bc4e7b97a67c6c94ef31da1bb032e9ec44e90f.png";
import imgFac1 from "@/imports/OurFacilities/4ae484e8ab7a9e2ceababf3c257c1e948b0c7028.png";
import imgFac2 from "@/imports/OurFacilities/15973c61583f70c9e7aadf2ddb9daeae67843264.png";
import imgFac3 from "@/imports/OurFacilities/431c4620143fa788306b57c7d940dd9e37de432f.png";
import imgFac4 from "@/imports/OurFacilities/4ae484e8ab7a9e2ceababf3c257c1e948b0c7028.png";
import imgFac5 from "@/imports/OurFacilities/96f915e543f3e49b4def76e2f19f0d0fee8700cf.png";

const facilities = [
  { title: "Natural Pond", desc: "Serene natural water body surrounded by tropical greenery for silent reflection and Pranic healing. The pond's calm waters mirror the stillness we cultivate within each guest.", img: imgFac1, reverse: false },
  { title: "Organic Food", desc: "Farm-to-table Sattvic cuisine prepared with herbs and vegetables grown in our organic garden. Every meal is a healing act — designed by our nutrition physicians to complement your treatment programme.", img: imgFac2, reverse: true },
  { title: "Meditation Huts", desc: "Private bamboo huts nestled deep in nature for undisturbed meditation and pranayama practice. Each hut is surrounded by medicinal plants and positioned to capture morning light.", img: imgFac3, reverse: false },
  { title: "Neat Environment", desc: "Pristine, immaculately maintained 12-acre grounds promoting calm and cleanliness — a fundamental principle of Ayurvedic healing. Every surface, pathway, and garden is tended with devotion.", img: imgFac4, reverse: true },
  { title: "Treatment Rooms", desc: "Traditionally designed rooms with teakwood droni tables, copper vessels, and warm natural light. Built following Vastu Shastra principles to optimise healing energy flow.", img: imgFac5, reverse: false },
];

export default function FacilitiesPage() {
  return (
    <div>
      <ParallaxHero src={imgHero} height={640} overlay="rgba(44,74,46,0.42)">
        <PageHeroContent label="Our Facilities" title="Where Nature Meets Healing" />
      </ParallaxHero>

      {/* Intro */}
      <div className="bg-[#faf6f0] py-12 sm:py-16 flex justify-center px-6 sm:px-8">
        <p className="text-[16px] sm:text-[20px] leading-[1.6] text-[#6b5e54] text-center max-w-[1040px]" style={{ fontFamily: dmSans }}>
          Vedic Hermitage offers authentic Ayurveda treatments inherited from Poorvaaacharyas (Classical Ayurveda Experts) to lead a felicitous life enriched with health, wealth and reputation through the consummated healing process.
        </p>
      </div>

      {/* Facility rows */}
      {facilities.map((f, i) => {
        const bg = i % 2 === 0 ? "#faf6f0" : "#ffffff";
        return (
          <div key={f.title} style={{ background: bg }} className="px-6 md:px-20 py-12 md:py-[80px]">
            <div className={`max-w-[1280px] mx-auto flex flex-col ${f.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-20 items-center`}>
              <motion.div
                className="w-full max-w-[600px] h-[260px] sm:h-[360px] md:h-[420px] rounded-[12px] overflow-hidden shrink-0"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} transition={dur}
              >
                <img src={f.img} alt={f.title} className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
              </motion.div>
              <motion.div
                className="flex flex-col gap-4 md:gap-5 flex-1 w-full"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} transition={{ ...dur, delay: 0.16 }}
              >
                <div className="w-8 h-px bg-[#c4622d]" />
                <h3 className="text-[28px] sm:text-[34px] md:text-[40px] font-medium text-[#2d241e]" style={{ fontFamily: playfair }}>{f.title}</h3>
                <p className="text-[15px] sm:text-[18px] leading-[1.7] text-[#6b5e54]" style={{ fontFamily: dmSans }}>{f.desc}</p>
              </motion.div>
            </div>
          </div>
        );
      })}

      {/* Book CTA */}
      <div className="bg-[#2c4a2e] px-6 md:px-20 py-12 md:py-16 flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-between">
        <p className="text-[24px] sm:text-[32px] md:text-[40px] font-normal text-white text-center md:text-left" style={{ fontFamily: playfair }}>Experience Our Facilities in Person</p>
        <Link
          to="/contact"
          className="border-[1.5px] border-white text-white px-8 py-3 rounded-md text-[13px] font-semibold uppercase hover:bg-white/10 transition-colors whitespace-nowrap"
          style={{ fontFamily: dmSans }}
        >
          Book Your Stay Today
        </Link>
      </div>
    </div>
  );
}
