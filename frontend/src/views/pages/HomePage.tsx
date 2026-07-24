import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Label, CircleCheckSVG, SmallCheckSVG, ClockSVG, playfair, dmSans, fadeUp, dur } from "./shared";
import svgPaths from "@/imports/AyurvedaLandingPage-2/svg-se7b6a4pns";
import ClipPathGroup from "@/imports/ClipPathGroup/index";

// ── Images ────────────────────────────────────────────────────────────────────
const frameGlob = import.meta.glob("../../imports/hero video frames/*.jpg", { eager: true, import: "default" });
const getNumber = (path: string) => {
  const match = path.match(/_(\d+)\.jpg$/);
  return match ? parseInt(match[1], 10) : 0;
};
const frames = Object.entries(frameGlob)
  .sort(([a], [b]) => getNumber(a) - getNumber(b))
  .map(([_, val]) => val as string);
import imgAbout from "@/imports/AyurvedaLandingPage-2/3d25701f3df9be1a18f70dd17d93144a3b31b15d.png";
import imgTx1 from "@/imports/AyurvedaLandingPage/eec12e62778dadd1fb3a6530bdada5cccae38092.png";
import imgTx2 from "@/imports/AyurvedaLandingPage/ed4942762bfea5258f3063eb9cc6384dcb7cd6b1.png";
import imgTx3 from "@/imports/AyurvedaLandingPage/d76a0594717cb4ac1670a8785de616377ca9ba99.png";
import imgTx4 from "@/imports/AyurvedaLandingPage/e5dd23e4661ae55488279208ba92feaca24f3fab.png";
import imgTx5 from "@/imports/AyurvedaLandingPage/91877287006c415a6f60189fcb2e22c87e9a4a33.png";
import imgTx6 from "@/imports/AyurvedaLandingPage/823e3472863bd026aed51cb8e046b8244254dd2c.png";
// Facility card images
import imgFacImg from "@/imports/AyurvedaLandingPage/de4b2ea82a4873f099ee76357c0ba835582303a8.png";
import imgFacImg1 from "@/imports/AyurvedaLandingPage/e49042bbf297762d8fbceca50836c3c942181d52.png";
import imgFacImg2 from "@/imports/AyurvedaLandingPage/6ba3a9a527648c4224da30297d3301e54368b2d6.png";
import imgFacImg3 from "@/imports/AyurvedaLandingPage/b4cbf7df350ed808af46fee9a6dc02777e0c6a71.png";
import imgFacImg4 from "@/imports/AyurvedaLandingPage/d14ddf2a08d80bf98e11e2a10e5a301ef61db5d8.png";
// Cancer in Ayurveda
import imgCancerLeft from "@/imports/AyurvedaLandingPage-2/4d168fe5d289cf379da85b25848d0b2a3addd74a.png";
// Testimonial avatars
import imgAvatar1 from "@/imports/AyurvedaLandingPage/bc78108376a5add8241382b474cbd568bbdeb482.png";
import imgAvatar2 from "@/imports/AyurvedaLandingPage/db463b3c67175d2422c88c61903215bf37f98b43.png";
import imgAvatar3 from "@/imports/AyurvedaLandingPage/4296f37a5975c7092834c632b3869b8b6a70deac.png";
// Photo strip
import imgStrip1 from "@/imports/AyurvedaLandingPage/ec690af8e05302e3cf8e32c023bb610388137663.png";
import imgStrip2 from "@/imports/AyurvedaLandingPage/05643dd0d54b005d86bc0e19265ca37a215f137e.png";
import imgStrip3 from "@/imports/AyurvedaLandingPage/56acaf9ec6f41df6f5f9fb2c64171b6983b54234.png";
import imgStrip4 from "@/imports/AyurvedaLandingPage/f502bc4fa4678b15faaa4feff7ebe946bff708f9.png";
import imgStrip5 from "@/imports/AyurvedaLandingPage/a64bc54b800b3ca53aca955630409ae9f1f676de.png";
// CTA bg
import imgCtaBg from "@/imports/AyurvedaLandingPage/c28e40e9312d4cabe682b83616b6ec85830e0db3.png";

// ── Data ──────────────────────────────────────────────────────────────────────
const treatments = [
  { title: "Panchakarma Detox", desc: "A comprehensive five-step purification process to remove toxins.", duration: "90 min", img: imgTx1 },
  { title: "Abhyanga Massage", desc: "A rhythmic body massage using medicated oils tailored to your Dosha.", duration: "60 min", img: imgTx2 },
  { title: "Shirodhara Oil Therapy", desc: "A continuous flow of warm oil over the forehead to calm the nervous system.", duration: "45 min", img: imgTx3 },
  { title: "Pizhichil Oil Bath", desc: "A unique combination of oil massage and heat therapy for rejuvenation.", duration: "90 min", img: imgTx4 },
  { title: "Nasyam Cleansing", desc: "Therapeutic cleansing of the sinus and head region with herbal extracts.", duration: "30 min", img: imgTx5 },
  { title: "Kizhi Pouch Massage", desc: "Massage with warm herbal pouches to relieve pain and inflammation.", duration: "60 min", img: imgTx6 },
  { title: "Yoga & Wellness", desc: "Holistic yoga practices for physical, mental, and spiritual well-being.", duration: "60 min", img: imgStrip5, link: "/yoga" },
];

const packages = [
  { title: "7-Day Rejuvenation", subtitle: "Restorative Healing", items: ["Daily Abhyanga", "Yoga & Meditation", "Satvik Diet Plan", "Dosha Consultation"] },
  { title: "14-Day Panchakarma", subtitle: "Deep Detoxification", items: ["Full Detox Cycle", "Internal Oleation", "Panchakarma Therapies", "Physician Oversight"] },
  { title: "21-Day Transformation", subtitle: "Life Reset Program", items: ["Intensive Healing", "Stress Management", "Immunity Boosting", "Long-term Wellness Plan"] },
];

const stats = [
  { value: "200+ Years", label: "Heritage", icon: svgPaths.p1ebf1e80 },
  { value: "Physicians", label: "Expert Physicians", icon: svgPaths.p1b7f30c0 },
  { value: "5000+", label: "Guests Healed", icon: svgPaths.pa360100 },
  { value: "Certified", label: "Organic Herbs", icon: svgPaths.p261ac300 },
];

const facilityCards = [
  { title: "Natural Pond", desc: "Serene natural water body for relaxation", img: imgFacImg },
  { title: "Organic Food", desc: "Farm-fresh Sattvic meals and herbal cuisine", img: imgFacImg1 },
  { title: "Meditation Huts", desc: "Private huts nestled in nature for deep meditation", img: imgFacImg2 },
  { title: "Neat Environment", desc: "Pristine, peaceful and immaculately maintained grounds", img: imgFacImg3 },
  { title: "Treatment Rooms", desc: "Traditionally designed, fully equipped therapy rooms", img: imgFacImg4 },
];

const testimonials = [
  { quote: "An absolute sanctuary. The Shirodhara therapy completely reset my nervous system after years of burnout. Life-changing.", name: "Sarah M.", location: "United Kingdom", avatar: imgAvatar1 },
  { quote: "The most authentic Ayurvedic experience I've had. The physicians are incredibly knowledgeable and the nature surroundings are breathtaking.", name: "David L.", location: "Australia", avatar: imgAvatar2 },
  { quote: "Ayurmana is where tradition lives. The Panchakarma detox was intense but I feel 10 years younger. Deeply grateful.", name: "Meera K.", location: "India", avatar: imgAvatar3 },
];

const stripImages = [
  { src: imgStrip1, className: "" },
  { src: imgStrip2, className: "" },
  { src: imgStrip3, className: "" },
  { src: imgStrip4, className: "" },
  { src: imgStrip5, className: "" },
  { src: imgAbout, className: "md:hidden" },
];

// ── Components ────────────────────────────────────────────────────────────────
function HeroParallaxSection() {
  const [activeFrame, setActiveFrame] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const canvasWidthRef = useRef(window.innerWidth);
  const canvasHeightRef = useRef(window.innerHeight);
  const dprRef = useRef(window.devicePixelRatio || 1);

  // Preload frames in the background as actual HTMLImageElement references
  useEffect(() => {
    let index = 0;
    let loadedCount = 0;
    let isCancelled = false;

    const preloadNext = () => {
      if (index >= frames.length || isCancelled) return;
      const img = new Image();
      img.src = frames[index];
      const next = () => {
        if (!isCancelled) {
          imagesRef.current[index] = img;
          loadedCount++;
          if (loadedCount === frames.length) {
            setImagesLoaded(true);
          }
          index++;
          preloadNext();
        }
      };
      img.onload = next;
      img.onerror = next;
    };

    const timer = setTimeout(preloadNext, 100);
    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, []);

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const drawFrameRef = useRef<(index: number) => void>(() => { });
  const animatingRef = useRef(false);

  // Track scroll position to update target progress and run smooth animation loop
  useEffect(() => {
    let animId: number | null = null;
    const lerpSpeed = 0.08; // smooth factor: lower = smoother, higher = faster response

    const updateAnimation = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;

      // If the difference is extremely small, snap to target and stop animation
      if (Math.abs(diff) < 0.0001) {
        currentProgressRef.current = targetProgressRef.current;
        animatingRef.current = false;
        animId = null;
      } else {
        currentProgressRef.current += diff * lerpSpeed;
        animId = requestAnimationFrame(updateAnimation);
      }

      const frameIndex = Math.max(0, Math.min(frames.length - 1, Math.round(currentProgressRef.current * (frames.length - 1))));

      if (drawFrameRef.current) {
        drawFrameRef.current(frameIndex);
      }

      setActiveFrame((prev) => {
        if (prev !== frameIndex) {
          return frameIndex;
        }
        return prev;
      });
    };

    const startAnimationLoop = () => {
      if (!animatingRef.current) {
        animatingRef.current = true;
        animId = requestAnimationFrame(updateAnimation);
      }
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const stickyHeight = window.innerHeight;
      const scrollRange = rect.height - stickyHeight;
      const scrolled = window.scrollY;
      const progress = scrollRange > 0 ? Math.max(0, Math.min(1, scrolled / scrollRange)) : 0;

      targetProgressRef.current = progress;
      startAnimationLoop();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call to set target and render first frame
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animId) {
        cancelAnimationFrame(animId);
      }
    };
  }, [imagesLoaded]);

  // Update root attribute to control navbar visibility in CSS
  useEffect(() => {
    document.documentElement.setAttribute("data-active-frame", String(activeFrame));
    return () => {
      document.documentElement.removeAttribute("data-active-frame");
    };
  }, [activeFrame]);

  // Define drawFrame function and save to ref to avoid stale closure issues
  useEffect(() => {
    drawFrameRef.current = (index: number) => {
      const canvas = canvasRef.current;
      if (!canvas || !imagesLoaded) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = imagesRef.current[index];
      if (!img) return;

      const dpr = dprRef.current;
      const canvasWidth = canvasWidthRef.current;
      const canvasHeight = canvasHeightRef.current;

      ctx.save();
      ctx.scale(dpr, dpr);

      const imgWidth = img.naturalWidth || img.width;
      const imgHeight = img.naturalHeight || img.height;
      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = canvasWidth / canvasHeight;

      let drawWidth = canvasWidth;
      let drawHeight = canvasHeight;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > canvasRatio) {
        drawWidth = canvasHeight * imgRatio;
        offsetX = (canvasWidth - drawWidth) / 2;
      } else {
        drawHeight = canvasWidth / imgRatio;
        offsetY = (canvasHeight - drawHeight) / 2;
      }

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "low";
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      ctx.restore();
    };
  }, [imagesLoaded]);

  // Handle canvas sizing on mount and resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;

      canvasWidthRef.current = canvasWidth;
      canvasHeightRef.current = canvasHeight;
      dprRef.current = dpr;

      canvas.width = canvasWidth * dpr;
      canvas.height = canvasHeight * dpr;
      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;

      // Redraw the current frame immediately on resize
      const frameIndex = Math.max(0, Math.min(frames.length - 1, Math.round(currentProgressRef.current * (frames.length - 1))));
      if (drawFrameRef.current) {
        drawFrameRef.current(frameIndex);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imagesLoaded]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "300vh", marginTop: "-80px" }}>
      <div
        className="sticky left-0 right-0 overflow-hidden flex items-center justify-center w-full"
        style={{
          top: "0px",
          height: "100vh",
        }}
      >
        {/* Active Frame Image / Canvas */}
        <div
          className="absolute inset-0 w-full h-full select-none pointer-events-none"
          style={{
            filter: "contrast(1.18) brightness(1.14) saturate(1.08)",
          }}
        >
          {imagesLoaded ? (
            <canvas ref={canvasRef} className="w-full h-full block" />
          ) : (
            frames.length > 0 && (
              <img
                src={frames[activeFrame]}
                alt="Vedic Hermitage"
                className="w-full h-full object-cover"
              />
            )
          )}
        </div>

        {/* Cinematic Vignette Overlay to cover watermark */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          style={{
            background: "radial-gradient(circle at center, transparent 15%, rgba(0, 0, 0, 0.3) 55%, rgba(0, 0, 0, 0.95) 85%, rgba(0, 0, 0, 1) 100%)"
          }}
        />

        {/* Blackout Patch to cover Canva watermark on all frames */}
        <div
          className="absolute pointer-events-none z-10 rounded-full"
          style={{
            left: "91.9%",
            top: "91%",
            width: "90px",
            height: "90px",
            background: "#000000",
            filter: "blur(12px)",
            transform: "translate(-50%, -50%)",
            opacity: 0.99,
          }}
        />

        {/* Centered Vedic Logo on 1st Frame */}
        <motion.div
          className="absolute z-20 pointer-events-none flex items-center justify-center hero-logo-container"
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: activeFrame === 0 ? 1 : 0,
            scale: activeFrame === 0 ? 1 : 0.9,
            y: activeFrame === 0 ? 0 : -20,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            width: "min(360px, 70vw)",
            height: "auto",
            aspectRatio: "326 / 80",
          } as React.CSSProperties}
        >
          <style>{`
            .hero-logo-container path:not(#Vector):not(#Vector_2):not(#Vector_3):not(#Vector_4):not(#Vector_5) {
              fill: #ffffff !important;
            }
          `}</style>
          <ClipPathGroup />
        </motion.div>

        {/* Title and Buttons - Fades in at the 7th frame (index >= 6) */}
        <motion.div
          className="relative z-10 flex flex-col items-center gap-5 md:gap-6 text-center px-4 sm:px-8 max-w-[840px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: activeFrame >= 6 ? 1 : 0,
            y: activeFrame >= 6 ? 0 : 30,
            pointerEvents: activeFrame >= 6 ? "auto" : "none",
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-[26px] sm:text-[40px] md:text-[58px] leading-[1.2] font-semibold text-white tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Rediscover Balance Through Ancient Ayurvedic Wisdom
          </h1>
          <p className="text-[14px] sm:text-[18px] leading-[1.6] text-white/90 max-w-[580px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Nestled in the foothills of the Western Ghats, we offer authentic Panchakarma therapies and personalized Ayurvedic healing programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-3 w-full sm:w-auto">
            <Link to="/treatments" className="bg-[#c4622d] text-white px-6 py-3 rounded-md text-[14px] font-semibold uppercase hover:bg-[#b5562a] transition-colors text-center" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Explore Treatments
            </Link>
            <Link to="/about" className="border-[1.5px] border-white/70 text-white px-6 py-3 rounded-md text-[14px] font-semibold uppercase bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors text-center" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Watch Our Story
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <HeroParallaxSection />

      {/* ── Announce bar ── */}
      <div className="bg-[#c4622d] flex items-center justify-center py-4 px-6">
        <p className="text-white text-[12px] sm:text-[14px] font-medium uppercase tracking-wide text-center leading-[1.5]" style={{ fontFamily: dmSans }}>
          Over 200 Years of Authentic Ayurvedic Tradition  |  Certified Physicians  |  Kerala Heritage Retreat
        </p>
      </div>

      {/* ── About section ── */}
      <section className="bg-[#faf7f2] px-6 md:px-20 py-16 md:py-[120px]">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10 items-center lg:items-start">
          <motion.div className="w-full lg:w-[600px] h-[350px] sm:h-[450px] md:h-[600px] rounded-[8px] overflow-hidden shrink-0" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} transition={dur}>
            <img src={imgAbout} alt="About" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
          </motion.div>
          <motion.div className="flex flex-col gap-8 lg:gap-10 justify-center self-stretch flex-1" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} transition={{ ...dur, delay: 0.18 }}>
            <div className="flex flex-col gap-4">
              <Label>Our Heritage</Label>
              <h2 className="text-[32px] sm:text-[44px] md:text-[56px] leading-[1.15] font-medium text-[#2d241e]" style={{ fontFamily: playfair }}>A Sanctuary for Healing</h2>
              <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                Rooted in the ancient Vedic sciences, Vedic Hermitage Ayurmana is a gateway to holistic restoration. We believe health is a dynamic balance between mind, body, and spirit.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {["Personalized Dosha assessment", "Traditional Panchakarma", "Organic Herbal Remedies", "Expert Ayurvedic Physicians"].map((item) => (
                <div key={item} className="flex items-center gap-3"><CircleCheckSVG /><span className="text-[15px] sm:text-[16px] text-[#2d241e]" style={{ fontFamily: dmSans }}>{item}</span></div>
              ))}
            </div>
            <Link to="/about" className="flex items-center gap-2 group">
              <span className="text-[15px] font-semibold underline text-[#c4622d] group-hover:opacity-75 transition-opacity" style={{ fontFamily: dmSans }}>Our Story</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d={svgPaths.p3bfa7a00} stroke="#C4622D" strokeLinecap="round" strokeWidth="2" /></svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Treatments ── */}
      <section className="bg-white px-6 md:px-20 py-16 md:py-[120px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-16">
          <motion.div className="flex flex-col items-center gap-4" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}>
            <Label>Ancient Arts</Label>
            <h2 className="text-[32px] sm:text-[44px] md:text-[56px] leading-[1.15] font-medium text-[#2d241e] text-center" style={{ fontFamily: playfair }}>Our Signature Treatments</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((t, i) => (
              <motion.div key={t.title} className="bg-[#faf7f2] rounded-[8px] overflow-hidden flex flex-col group" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ ...dur, delay: (i % 3) * 0.1 }}>
                <div className="h-[240px] sm:h-[280px] overflow-hidden">
                  <img src={t.img} alt={t.title} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="text-[24px] sm:text-[28px] font-medium text-[#2d241e]" style={{ fontFamily: playfair }}>{t.title}</h3>
                  <p className="text-[14px] leading-[1.5] text-[#6b5e54]" style={{ fontFamily: dmSans }}>{t.desc}</p>
                </div>
                <div className="border-t border-[#d9d1c7] px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5"><ClockSVG /><span className="text-[13px] font-semibold text-[#c4622d]" style={{ fontFamily: dmSans }}>{t.duration}</span></div>
                  <Link to={t.link || "/treatments"} className="text-[13px] font-semibold text-[#c4622d] group-hover:underline" style={{ fontFamily: dmSans }}>Learn More</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="bg-[#2c4a2e] px-6 md:px-20 py-16 md:py-[120px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-16 md:gap-20">
          <motion.div className="flex flex-col items-center gap-4" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}>
            <Label light>Curated Journeys</Label>
            <h2 className="text-[32px] sm:text-[44px] md:text-[56px] leading-[1.15] font-medium text-[#eae7e2] text-center" style={{ fontFamily: playfair }}>Healing Retreat Packages</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div key={pkg.title} className="bg-white/[0.03] border border-white/[0.13] rounded-[12px] p-8 sm:p-12 flex flex-col justify-between" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ ...dur, delay: i * 0.12 }}>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[28px] sm:text-[36px] text-white font-medium" style={{ fontFamily: playfair }}>{pkg.title}</h3>
                    <span className="text-[13px] sm:text-[14px] font-semibold uppercase text-[#c4622d]" style={{ fontFamily: dmSans }}>{pkg.subtitle}</span>
                  </div>
                  <div className="flex flex-col gap-4">
                    {pkg.items.map((item) => (
                      <div key={item} className="flex items-center gap-3"><SmallCheckSVG /><span className="text-[15px] sm:text-[16px] text-[#eae7e2] opacity-80" style={{ fontFamily: dmSans }}>{item}</span></div>
                    ))}
                  </div>
                </div>
                <div className="pt-8 sm:pt-12">
                  <Link to="/packages" className="block w-full bg-[#c4622d] text-white py-3 rounded-md text-[14px] font-semibold uppercase hover:bg-[#b5562a] transition-colors text-center" style={{ fontFamily: dmSans }}>
                    Enquire Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-[#faf7f2] px-6 md:px-20 py-12 md:py-20">
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-start justify-center md:justify-between gap-10 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.value} className="flex flex-col items-center gap-4 w-[140px] sm:w-[241px]" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ ...dur, delay: i * 0.1 }}>
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d={stat.icon} stroke="#C4622D" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <p className="text-[26px] sm:text-[32px] font-semibold text-[#2d241e]" style={{ fontFamily: playfair }}>{stat.value}</p>
                <p className="text-[12px] sm:text-[14px] font-medium uppercase text-[#6b5e54]" style={{ fontFamily: dmSans }}>{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Facilities card grid ── */}
      <section className="bg-[#faf7f2] px-6 md:px-20 pb-16 md:pb-[120px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-16">
          <motion.div className="flex flex-col items-center gap-4" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}>
            <Label>Our Facilities</Label>
            <h2 className="text-[32px] sm:text-[44px] md:text-[56px] leading-[1.15] font-medium text-[#2d241e] text-center" style={{ fontFamily: playfair }}>World-Class Ayurvedic Facilities</h2>
            <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#6b5e54] text-center max-w-[900px]" style={{ fontFamily: dmSans }}>
              Vedic Hermitage offers authentic Ayurveda treatments that have been inherited from Poorvaaacharyas (Classical Ayurveda Experts) which ensures you to lead a felicitous life enriched with health, wealth and reputation through the consummated healing process.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {facilityCards.map((f, i) => (
              <motion.div key={f.title} className="bg-white rounded-[12px] overflow-hidden shadow-[0px_4px_24px_0px_rgba(0,0,0,0.03)] flex flex-col w-full" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ ...dur, delay: i * 0.08 }}>
                <div className="h-[180px] sm:h-[220px] overflow-hidden">
                  <img src={f.img} alt={f.title} className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-700" />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-[20px] sm:text-[24px] font-medium text-[#c4622d]" style={{ fontFamily: playfair }}>{f.title}</h3>
                  <p className="text-[13px] sm:text-[14px] leading-[1.5] text-[#6b5e54]" style={{ fontFamily: dmSans }}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link to="/facilities" className="border-[1.5px] border-[#c4622d] text-[#c4622d] px-8 py-3 rounded-md text-[14px] font-semibold uppercase hover:bg-[#c4622d] hover:text-white transition-colors" style={{ fontFamily: dmSans }}>
              Explore All Facilities
            </Link>
          </div>
        </div>
      </section>

      {/* ── Cancer in Ayurveda ── */}
      <div className="bg-[#faf6f0] flex flex-col lg:flex-row h-auto overflow-hidden">
        <motion.div className="w-full lg:w-[600px] h-[300px] sm:h-[400px] lg:h-auto shrink-0 relative" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}>
          <img src={imgCancerLeft} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[rgba(44,74,46,0.15)]" />
        </motion.div>
        <motion.div className="flex flex-col gap-6 p-6 sm:p-12 lg:p-20 justify-center flex-1" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ ...dur, delay: 0.16 }}>
          <span className="text-[13px] font-semibold uppercase text-[#d4a843] tracking-wide" style={{ fontFamily: dmSans }}>Ancient Wisdom</span>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.15] font-medium text-[#2c4a2e]" style={{ fontFamily: playfair }}>Cancer in Ayurveda</h2>
          <div className="w-10 h-[2px] bg-[#c4622d]" />
          <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[1.7] text-[#2d241e]" style={{ fontFamily: dmSans }}>
            <p>
              Cancer in our ancient Ayurvedic literature is referred to as Karkidagaroga. Cancer was not considered as Maharoga probably because it was not very prevalent at that time or perhaps the treatment was considered relatively easy.
            </p>
            <p>
              These five elements go through the process of Panchikarana which is the method and process of subtle matter transforming into gross matter. This is done through Quintuplication whereby the Panchabhootas first divide into two parts one part of which was further divided into four parts.
            </p>
          </div>
          <Link to="/oncology" className="flex items-center gap-2 self-start bg-[#c4622d] text-white px-6 py-3 rounded-md text-[14px] font-semibold uppercase hover:bg-[#b5562a] transition-colors" style={{ fontFamily: dmSans }}>
            Read More
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d={svgPaths.p3bfa7a00} stroke="white" strokeLinecap="round" strokeWidth="2" /></svg>
          </Link>
        </motion.div>
      </div>

      {/* ── Testimonials ── */}
      <section className="bg-[#faf8f5] px-6 md:px-20 py-16 md:py-[120px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-16">
          <motion.div className="flex flex-col items-center gap-4" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}>
            <Label>Kind Words</Label>
            <h2 className="text-[32px] sm:text-[44px] md:text-[56px] leading-[1.15] font-medium text-[#2d241e] text-center" style={{ fontFamily: playfair }}>Words from Our Guests</h2>
          </motion.div>
          <div className="marquee-container py-4">
            <div className="animate-marquee flex">
              {/* Set A */}
              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={`set-a-${i}`} className="pr-8 shrink-0">
                  <div className="bg-white rounded-[12px] p-6 sm:p-10 flex flex-col gap-6 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] w-[290px] sm:w-[420px] h-full">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="opacity-30">
                      <path d={svgPaths.p1817a900} stroke="#C4622D" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                    <p className="text-[14px] sm:text-[16px] leading-[1.6] text-[#2d241e] italic flex-1" style={{ fontFamily: dmSans }}>
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <p className="text-[14px] sm:text-[15px] font-semibold text-[#2d241e]" style={{ fontFamily: dmSans }}>{t.name}</p>
                        <p className="text-[12px] text-[#6b5e54]" style={{ fontFamily: dmSans }}>{t.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Set B */}
              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={`set-b-${i}`} className="pr-8 shrink-0">
                  <div className="bg-white rounded-[12px] p-6 sm:p-10 flex flex-col gap-6 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] w-[290px] sm:w-[420px] h-full">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="opacity-30">
                      <path d={svgPaths.p1817a900} stroke="#C4622D" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                    <p className="text-[14px] sm:text-[16px] leading-[1.6] text-[#2d241e] italic flex-1" style={{ fontFamily: dmSans }}>
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <p className="text-[14px] sm:text-[15px] font-semibold text-[#2d241e]" style={{ fontFamily: dmSans }}>{t.name}</p>
                        <p className="text-[12px] text-[#6b5e54]" style={{ fontFamily: dmSans }}>{t.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Photo strip ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:flex h-auto md:h-[400px] overflow-hidden">
        {stripImages.map((item, i) => (
          <motion.div
            key={i}
            className={`overflow-hidden relative group cursor-pointer h-[200px] md:h-full flex-1 ${item.className}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <img src={item.src} alt="" className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700" />
            <div className="absolute inset-0 bg-[#2c4a2e]/0 group-hover:bg-[#2c4a2e]/20 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>

      {/* ── Final CTA ── */}
      <div className="relative flex flex-col items-center justify-center py-20 md:py-[140px] overflow-hidden px-6">
        <img src={imgCtaBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(196,98,45,0.9)]" />
        <motion.div
          className="relative z-10 flex flex-col items-center gap-8 md:gap-10 max-w-[720px] text-center w-full"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] sm:text-[48px] md:text-[64px] leading-[1.1] font-normal text-white" style={{ fontFamily: playfair }}>
              Begin Your Healing Journey Today
            </h2>
            <p className="text-[16px] sm:text-[20px] leading-[1.6] text-white/90" style={{ fontFamily: dmSans }}>
              Schedule a personalized consultation with our expert physicians.
            </p>
          </div>
          <div className="bg-white rounded flex flex-col sm:flex-row items-stretch sm:items-center min-h-[64px] sm:h-16 overflow-hidden w-full max-w-[600px] shadow-lg">
            <input
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-4 sm:py-0 text-[16px] text-[#6b5e54] outline-none bg-transparent"
              style={{ fontFamily: dmSans }}
            />
            <button
              onClick={() => { if (email) { window.location.href = "/contact"; } }}
              className="bg-[#c4622d] text-white px-6 py-4 sm:py-0 h-full text-[14px] font-semibold uppercase hover:bg-[#b5562a] transition-colors whitespace-nowrap"
              style={{ fontFamily: dmSans }}
            >
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
