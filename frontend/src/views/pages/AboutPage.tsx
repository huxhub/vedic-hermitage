import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ParallaxHero, Label, playfair, dmSans, fadeUp, dur } from "./shared";
import svgPaths from "@/imports/AboutPage-1/svg-h53yke1rt2";

import imgHero from "@/imports/AboutPage-1/23edc7170f4a5dd7662be736bc245a04c29ab5bc.png";
import imgVintage from "@/imports/AboutPage-1/e08f5d9583b3e4a2b8d3c53098f482deb0291836.png";
import imgProperty from "@/imports/Frame/2931faa4fb3b24cc54f99029e860b2cd40ee76df.png";
import imgTeam1 from "@/imports/AboutPage-1/e9c592d47be53bf92c672175b3b6948e607d30bc.png";
import imgTeam2 from "@/imports/AboutPage-1/d69e2c85b1eb607bfc2fddedaea3c9853b9ee5e4.png";
import imgTeam3 from "@/imports/AboutPage-1/a7e6545048c953cb7b66191ff46e4c470d9c1a88.png";
import imgTeam4 from "@/imports/AboutPage-1/9571f80e4968de26533a9ddf15412156afd2a661.png";
import imgTestiAvatar1 from "@/imports/AboutPage-1/7376849085702e417cdbbf3cef62324c794877c1.png";
import imgTestiAvatar2 from "@/imports/AboutPage-1/f8a92807b482c716ef776fe2d7980bdca8e3374b.png";

const team = [
  { name: "Dr. Rajeev Menon", role: "Chief Ayurvedic Physician", desc: "With 30 years of clinical expertise in internal medicine and chronic disorder management.", img: imgTeam1 },
  { name: "Dr. Lakshmi Nair", role: "Panchakarma Specialist", desc: "An expert in detox protocols and women's holistic wellness through Ayurvedic sciences.", img: imgTeam2 },
  { name: "Dr. Anand Krishnan", role: "Yoga & Meditation Guide", desc: "Leading our spiritual integration programs with a focus on Pranayama and mindfulness.", img: imgTeam3 },
  { name: "Meera Varma", role: "Head Therapist", desc: "Overseeing the technical precision of our Abhyanga and Shirodhara body therapies.", img: imgTeam4 },
];

const testimonials = [
  {
    quote: "The personalized attention and the depth of knowledge shown by the physicians changed my perspective on health entirely. I arrived exhausted and left with a renewed sense of purpose.",
    name: "Isabella R.",
    detail: "Spain • 21-Day Transformation",
    avatar: imgTestiAvatar1,
  },
  {
    quote: "Authenticity is the word that defines Ayurmana. It is not a spa; it is a clinical center where traditional values are honored in every massage, meal, and meditation.",
    name: "Marcus T.",
    detail: "United States • 14-Day Panchakarma",
    avatar: imgTestiAvatar2,
  },
];

const philosophy = [
  {
    title: "Ahara",
    subtitle: "Nourishing Food",
    desc: "Healing begins from within. Our Satvik meals are tailored to balance your unique Dosha.",
    iconPath: svgPaths.p33805f00,
  },
  {
    title: "Vihara",
    subtitle: "Mindful Living",
    desc: "Connecting with the rhythm of nature through meditation and yoga to settle the spirit.",
    iconPath: svgPaths.p10a30bb0,
  },
  {
    title: "Aushadhi",
    subtitle: "Herbal Medicine",
    desc: "Rare herbs harvested from our private garden, prepared into potent therapeutic oils.",
    iconPath: svgPaths.p15c0d200,
  },
];

function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };
  const prev = () => go((index - 1 + testimonials.length) % testimonials.length);
  const next = () => go((index + 1) % testimonials.length);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const t = testimonials[index];

  return (
    <section className="bg-white px-6 md:px-20 py-16 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-12 md:gap-16">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-4 w-full"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}
        >
          <Label>Lives Transformed</Label>
          <h2 className="text-[32px] sm:text-[44px] md:text-[56px] leading-[1.15] font-normal text-[#2d241e] text-center" style={{ fontFamily: playfair }}>
            Words from Our Heart
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="w-full flex flex-col items-center gap-8 md:gap-10">
          <div className="w-full overflow-hidden relative min-h-[260px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#faf7f2] rounded-[12px] p-6 sm:p-12 flex flex-col gap-6 sm:gap-8 shadow-[0px_4px_12px_rgba(0,0,0,0.03)]"
              >
                {/* Quote mark */}
                <svg width="36" height="28" viewBox="0 0 36 28" fill="none" className="opacity-20">
                  <path d="M0 28V17.6C0 12.267 1.333 8.067 4 5C6.667 1.933 10.667 0.267 16 0H18.667V5.6C15.733 5.6 13.6 6.4 12.267 8C10.933 9.6 10.267 11.733 10.267 14.4V16H18.667V28H0ZM18.667 28V17.6C18.667 12.267 20 8.067 22.667 5C25.333 1.933 29.333 0.267 34.667 0H36V5.6C33.333 5.6 31.333 6.4 29.867 8C28.533 9.6 27.867 11.733 27.867 14.4V16H36V28H18.667Z" fill="#2C4A2E"/>
                </svg>

                <p className="text-[16px] sm:text-[22px] leading-[1.65] text-[#2d241e] italic" style={{ fontFamily: dmSans }}>
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-[#c4622d]/20" />
                  <div>
                    <p className="text-[16px] sm:text-[18px] font-semibold text-[#2d241e]" style={{ fontFamily: dmSans }}>{t.name}</p>
                    <p className="text-[13px] sm:text-[14px] text-[#6b5e54]" style={{ fontFamily: dmSans }}>{t.detail}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-[#d9d1c7] flex items-center justify-center hover:border-[#c4622d] hover:bg-[#c4622d] hover:text-white transition-all group"
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 13L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#2d241e] group-hover:text-white" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className="transition-all duration-300"
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <div
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === index ? 24 : 8,
                      height: 8,
                      background: i === index ? "#c4622d" : "#d9d1c7",
                    }}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-[#d9d1c7] flex items-center justify-center hover:border-[#c4622d] hover:bg-[#c4622d] hover:text-white transition-all group"
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7 13L11 9L7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#2d241e] group-hover:text-white" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <ParallaxHero src={imgHero} height={720} overlay="rgba(44,74,46,0.3)">
        <motion.div
          className="flex flex-col items-center gap-6 text-center px-8 max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[14px] font-semibold uppercase text-[#c4622d] tracking-wide" style={{ fontFamily: dmSans }}>
            Our Story
          </span>
          <h1 className="text-[32px] sm:text-[54px] md:text-[72px] leading-[1.1] font-medium text-white" style={{ fontFamily: playfair }}>
            Rooted in Tradition. Devoted to Healing.
          </h1>
        </motion.div>
      </ParallaxHero>

      {/* ── Founding Story ── */}
      <section className="bg-[#faf7f2] px-6 md:px-20 py-16 md:py-[120px]">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
          <motion.div
            className="w-full max-w-[560px] h-[320px] sm:h-[450px] md:h-[600px] rounded-[8px] overflow-hidden shrink-0"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}
          >
            <img src={imgVintage} alt="Heritage" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            className="flex flex-col gap-6 flex-1"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ ...dur, delay: 0.18 }}
          >
            <Label>A Legacy of Two Centuries</Label>
            <h2 className="text-[32px] sm:text-[44px] md:text-[56px] leading-[1.15] font-medium text-[#2d241e]" style={{ fontFamily: playfair }}>
              Generations of Ayurvedic Mastery
            </h2>
            <p className="text-[15px] sm:text-[18px] leading-[1.6] text-[#6b5e54]" style={{ fontFamily: dmSans }}>
              Founded in the late 19th century by a family of distinguished Vaidyas (Ayurvedic physicians), Vedic Hermitage Ayurmana was established as a sanctuary for those seeking true restoration. What began as a humble ancestral home has evolved into a world-renowned retreat, yet our commitment to the original Vedic protocols remains unchanged.
            </p>
            <p className="text-[15px] sm:text-[18px] leading-[1.6] text-[#6b5e54]" style={{ fontFamily: dmSans }}>
              Today, the fourth generation of the family continues to welcome seekers from around the globe, offering a profound connection to the timeless wisdom of Kerala's healing heritage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Philosophy — The Ayurvedic Way of Life ── */}
      <section className="bg-white px-6 md:px-20 py-16 md:py-[120px]">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-12 md:gap-20">
          <motion.div className="flex flex-col items-center gap-5 w-full" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}>
            <Label>Our Philosophy</Label>
            <h2 className="text-[32px] sm:text-[44px] md:text-[56px] font-normal text-[#2d241e] text-center" style={{ fontFamily: playfair }}>
              The Ayurvedic Way of Life
            </h2>
            <div className="w-20 h-[2px] bg-[#c4622d]" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 w-full">
            {philosophy.map((p, i) => (
              <motion.div
                key={p.title}
                className="flex flex-col items-center gap-6 text-center"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ ...dur, delay: i * 0.12 }}
              >
                <div className="bg-[#faf7f2] w-20 h-20 rounded-[40px] flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d={p.iconPath} stroke="#C4622D" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <p className="text-[26px] sm:text-[32px] font-normal text-[#2d241e]" style={{ fontFamily: playfair }}>{p.title}</p>
                  <p className="text-[13px] sm:text-[14px] font-semibold uppercase text-[#c4622d]" style={{ fontFamily: dmSans }}>{p.subtitle}</p>
                </div>
                <p className="text-[15px] sm:text-[16px] leading-[1.5] text-[#6b5e54]" style={{ fontFamily: dmSans }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team — The Guardians of Tradition ── */}
      <section className="bg-[#2c4a2e] px-6 md:px-20 py-16 md:py-[120px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-20">
          <motion.div className="flex flex-col gap-4" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}>
            <Label light>Our Healers & Physicians</Label>
            <h2 className="text-[32px] sm:text-[44px] md:text-[56px] font-normal text-white" style={{ fontFamily: playfair }}>The Guardians of Tradition</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="bg-white/[0.03] border border-white/[0.08] rounded-[12px] p-6 sm:p-8 flex flex-col gap-6"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ ...dur, delay: i * 0.1 }}
              >
                <img src={member.img} alt={member.name} className="w-[120px] h-[120px] rounded-full object-cover" />
                <div className="flex flex-col gap-1">
                  <p className="text-[22px] sm:text-[28px] font-normal text-white" style={{ fontFamily: playfair }}>{member.name}</p>
                  <p className="text-[13px] sm:text-[14px] font-semibold uppercase text-[#c4622d]" style={{ fontFamily: dmSans }}>{member.role}</p>
                </div>
                <p className="text-[13px] sm:text-[14px] leading-[1.5] text-white/60" style={{ fontFamily: dmSans }}>{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Property Section — full-width image ── */}
      <div className="relative h-[300px] sm:h-[450px] md:h-[640px] overflow-hidden">
        <img src={imgProperty} alt="Property" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-end p-6 sm:p-12 md:p-20">
          <motion.p
            className="text-[20px] sm:text-[26px] md:text-[32px] italic font-normal text-white whitespace-normal"
            style={{ fontFamily: playfair }}
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}
          >
            Set across 12 acres in the Western Ghats, Kerala
          </motion.p>
        </div>
      </div>

      {/* ── Vision & Mission ── */}
      <section className="bg-[#c4622d] px-6 md:px-20 py-12 md:py-20">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
          <motion.div className="flex-1 flex flex-col gap-4" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}>
            <p className="text-[14px] font-semibold uppercase text-white/70" style={{ fontFamily: dmSans }}>Our Vision</p>
            <p className="text-[22px] sm:text-[28px] md:text-[36px] font-normal text-white leading-[1.2]" style={{ fontFamily: playfair }}>
              {"To be the world's most trusted authentic Ayurvedic healing retreat."}
            </p>
          </motion.div>
          <div className="hidden lg:block w-px h-40 bg-white/20 self-center" />
          <motion.div className="flex-1 flex flex-col gap-4" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ ...dur, delay: 0.15 }}>
            <p className="text-[14px] font-semibold uppercase text-white/70" style={{ fontFamily: dmSans }}>Our Mission</p>
            <p className="text-[22px] sm:text-[28px] md:text-[36px] font-normal text-white leading-[1.2]" style={{ fontFamily: playfair }}>
              To restore health, harmony and happiness through the timeless science of Ayurveda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Guest Stories / Testimonials carousel ── */}
      <TestimonialsCarousel />

      {/* ── CTA ── */}
      <section className="bg-[#faf7f2] py-16 md:py-24 flex flex-col items-center gap-6 text-center px-8">
        <motion.div className="flex flex-col items-center gap-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}>
          <h2 className="text-[32px] sm:text-[44px] md:text-[56px] font-normal text-[#2d241e]" style={{ fontFamily: playfair }}>Come Experience Vedic Hermitage</h2>
          <Link to="/contact" className="bg-[#c4622d] text-white px-8 py-4 rounded-md text-[14px] font-semibold uppercase hover:bg-[#b5562a] transition-colors" style={{ fontFamily: dmSans }}>
            Plan Your Visit
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
