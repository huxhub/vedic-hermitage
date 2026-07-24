import { useState } from "react";
import { motion } from "motion/react";
import { ParallaxHero, PageHeroContent, playfair, dmSans, fadeUp, dur } from "./shared";

import imgHero from "@/imports/Frame/2931faa4fb3b24cc54f99029e860b2cd40ee76df.png";
import mapSvg from "@/imports/contact/map.svg";

const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Vedic+Hermitage+-+Ayur+Mana/@10.7938681,76.3028862,14z";

const contactInfo = [
  { label: "Address", value: "Swastika Ayurveda Foundation , Vedic Hermitage , Edakode Vaniyamkulam , Ottapalam, Palakkad" },
  { label: "Phone", value: "+91 9061313555 / +91 9207313555" },
  { label: "Email", value: "info@vedichermitage.com" },
  { label: "Working Hours", value: "Mon–Sun: 8 AM – 8 PM " },
];

const navLinks = [
  { label: "How to reach us", href: GOOGLE_MAPS_URL },
  { label: "Language spoken", href: "#" },
  { label: "Nearest airport", href: "#" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    { label: "Full Name", key: "name", type: "text", placeholder: "Enter your name" },
                    { label: "Email Address", key: "email", type: "email", placeholder: "Enter your email" },
                    { label: "Contact Number", key: "phone", type: "tel", placeholder: "Enter your contact number" },
                  ].map((f) => (
                    <div key={f.key} className="flex flex-col gap-2">
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

            {/* Clickable Location Map SVG Card */}
            <div className="pt-2 flex flex-col gap-3">
              <span className="text-[14px] font-semibold uppercase text-[#c4622d]" style={{ fontFamily: dmSans }}>Location Map</span>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 p-4 rounded-[10px] bg-[#faf6f0] border border-[#d9d1c7] hover:border-[#c4622d] transition-all group cursor-pointer shadow-sm hover:shadow-md max-w-[300px]"
                title="Open location on Google Maps"
              >
                <img
                  src={mapSvg}
                  alt="Vedic Hermitage Location Map"
                  className="w-16 h-auto shrink-0 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="flex flex-col gap-1">
                  {/* <span className="text-[14px] font-semibold text-[#2d241e] group-hover:text-[#c4622d] transition-colors" style={{ fontFamily: dmSans }}>
                    View on Google Maps
                  </span> */}
                  <span className="text-[12px] text-[#6b5e54] flex items-center gap-1" style={{ fontFamily: dmSans }}>
                    Get Directions ↗
                  </span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

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
