import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import svgPaths from "@/imports/AyurvedaLandingPage/svg-hyqo47z0o2";

export const playfair = "'Playfair Display', serif";
export const dmSans = "'DM Sans', sans-serif";

export const fadeUp = { hidden: { opacity: 0, y: 44 }, visible: { opacity: 1, y: 0 } };
export const ease = [0.22, 1, 0.36, 1] as const;
export const dur = { duration: 0.75, ease };

// Parallax hook
export function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      setY((rect.top + rect.height / 2 - window.innerHeight / 2) * speed);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [speed]);
  return { ref, y };
}

// Parallax hero
export function ParallaxHero({
  src,
  height = 700,
  overlay = "rgba(44,74,46,0.42)",
  children,
}: {
  src: string;
  height?: number;
  overlay?: string;
  children?: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const speedVal = isMobile ? 0.08 : 0.28;
  const { ref, y } = useParallax(speedVal);

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden w-full"
      style={{ height: isMobile ? "calc(100dvh - 80px)" : height }}
    >
      <div
        className="absolute pointer-events-none"
        style={{ inset: isMobile ? "-40% 0" : "-12% 0", transform: `translateY(${y}px)`, willChange: "transform" }}
      >
        <img src={src} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: overlay }} />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

// Page hero title block
export function PageHeroContent({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-4 text-center px-6 md:px-8 max-w-[900px] mx-auto"
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease }}
    >
      <span className="text-[12px] md:text-[14px] font-semibold uppercase text-[#d4a843] tracking-wide" style={{ fontFamily: dmSans }}>
        {label}
      </span>
      <h1 className="text-[32px] sm:text-[48px] md:text-[72px] leading-[1.15] font-medium text-white" style={{ fontFamily: playfair }}>
        {title}
      </h1>
      {subtitle && (
        <p className="text-[15px] md:text-[20px] leading-[1.6] text-white/90 max-w-[680px]" style={{ fontFamily: dmSans }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

// Section label
export function Label({ children, light = false }: { children: string; light?: boolean }) {
  const color = light ? "#d4a843" : "#c4622d";
  return (
    <div className="flex items-center gap-3">
      <svg width="24" height="1" viewBox="0 0 24 1" fill="none">
        <line x2="24" y1="0.5" y2="0.5" stroke={color} />
      </svg>
      <span className="text-[13px] font-semibold uppercase tracking-wide" style={{ fontFamily: dmSans, color }}>
        {children}
      </span>
    </div>
  );
}

// Common SVG icons
export function CircleCheckSVG() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <defs><clipPath id="cc2"><rect width="18" height="18" fill="white" /></clipPath></defs>
      <g clipPath="url(#cc2)">
        <path d={svgPaths.p1e29ca40} stroke="#C4622D" strokeLinecap="round" strokeWidth="2" />
      </g>
    </svg>
  );
}

export function SmallCheckSVG({ color = "#C4622D" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgPaths.p221839c0} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

export function ClockSVG() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <defs><clipPath id="cl2"><rect width="14" height="14" fill="white" /></clipPath></defs>
      <g clipPath="url(#cl2)">
        <path d={svgPaths.p3da783c0} stroke="#C4622D" strokeLinecap="round" strokeWidth="2" />
      </g>
    </svg>
  );
}

export { motion };
