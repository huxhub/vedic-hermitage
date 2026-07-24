import { useState } from "react";
import { motion } from "motion/react";
import { ParallaxHero, PageHeroContent, playfair, dmSans, fadeUp, dur } from "./shared";

import imgHero from "@/imports/Frame/2931faa4fb3b24cc54f99029e860b2cd40ee76df.png";

const contactInfo = [
  { label: "Address", value: "Vedic Hermitage Ayurmana, Thrissur, Kerala – 680 001, India" },
  { label: "Phone", value: "+91 99999 88888" },
  { label: "Email", value: "info@vedichermitage.com" },
  { label: "Working Hours", value: "Mon–Sat: 9 AM – 6 PM IST" },
];

const navLinks = [
  { label: "How to reach us", href: "#" },
  { label: "Language spoken", href: "#" },
  { label: "Nearest airport", href: "#" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <ParallaxHero src={imgHero} height={440} overlay="rgba(44,74,46,0.6)">
        <PageHeroContent label="Contact Us" title={"We'd Love to Hear From You"} />
      </ParallaxHero>

      {/* Form + Info */}
      <section className="px-6 md:px-20 py-16 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-[100px] items-start">
          {/* Form */}
          <motion.div className="flex-1 flex flex-col gap-8 md:gap-12 w-full" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}>
            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-normal text-[#2d241e]" style={{ fontFamily: playfair }}>Send a Message</h2>

            {sent ? (
              <div className="bg-[#faf6f0] border border-[#d9d1c7] rounded-[8px] p-8 text-center">
                <p className="text-[22px] sm:text-[24px] font-medium text-[#2c4a2e] mb-2" style={{ fontFamily: playfair }}>Thank you for reaching out!</p>
                <p className="text-[15px] sm:text-[16px] text-[#6b5e54]" style={{ fontFamily: dmSans }}>We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-5">
                  {[
                    { label: "Full Name", key: "name", type: "text", placeholder: "Enter your name" },
                    { label: "Email Address", key: "email", type: "email", placeholder: "Enter your email" },
                  ].map((f) => (
                    <div key={f.key} className="flex-1 flex flex-col gap-2">
                      <label className="text-[13px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        required
                        value={form[f.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        className="bg-[#faf6f0] border border-[#d9d1c7] rounded p-4 text-[14px] text-[#2d241e] outline-none focus:border-[#c4622d] transition-colors"
                        style={{ fontFamily: dmSans }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>Message</label>
                  <textarea
                    rows={7}
                    placeholder="How can we help you?"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-[#faf6f0] border border-[#d9d1c7] rounded p-4 text-[14px] text-[#2d241e] outline-none focus:border-[#c4622d] transition-colors resize-none"
                    style={{ fontFamily: dmSans }}
                  />
                </div>
                <button
                  type="submit"
                  className="self-start bg-[#c4622d] text-white px-8 py-3 rounded-md text-[14px] font-semibold uppercase hover:bg-[#b5562a] transition-colors"
                  style={{ fontFamily: dmSans }}
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div className="w-full lg:w-[400px] flex flex-col gap-8 md:gap-10 shrink-0" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ ...dur, delay: 0.16 }}>
            {contactInfo.map((info) => (
              <div key={info.label} className="flex flex-col gap-2">
                <span className="text-[14px] font-semibold uppercase text-[#c4622d]" style={{ fontFamily: dmSans }}>{info.label}</span>
                <span className="text-[15px] sm:text-[16px] leading-[1.5] text-[#6b5e54]" style={{ fontFamily: dmSans }}>{info.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map placeholder */}
      <div className="bg-[#faf6f0] h-[300px] sm:h-[400px] flex items-center justify-center border-y border-[#e6e2dc] px-6">
        <div className="text-center flex flex-col gap-3">
          <p className="text-[24px] sm:text-[32px] font-normal text-[#6b5e54]" style={{ fontFamily: playfair }}>Map View: Kerala, India</p>
          <p className="text-[14px] sm:text-[15px] text-[#6b5e54]/70" style={{ fontFamily: dmSans }}>Thrissur, Kerala – 680 001</p>
        </div>
      </div>

      {/* Nav links */}
      <div className="bg-white border-b border-[#e6e2dc] flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-20 py-8 sm:py-10">
        {navLinks.map(({ label, href }) => (
          <a key={label} href={href} className="flex items-center gap-2 cursor-pointer hover:opacity-75 transition-opacity">
            <span className="text-[13px] font-semibold text-[#2d241e]" style={{ fontFamily: dmSans }}>{label}</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5.25 10.5L8.75 7L5.25 3.5" stroke="#D4A843" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
