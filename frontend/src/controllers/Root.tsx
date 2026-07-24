import { useEffect, useState, useRef } from "react";
import { Outlet, Link, useLocation } from "react-router";
import svgPaths from "@/imports/AyurvedaLandingPage/svg-hyqo47z0o2";
import ClipPathGroup from "@/imports/ClipPathGroup/index";
import Lenis from "lenis";

const playfair = "'Playfair Display', serif";
const dmSans = "'DM Sans', sans-serif";

function Logo() {
  return (
    <div className="relative" style={{ width: 220, height: 54 }}>
      <ClipPathGroup />
    </div>
  );
}

const navItems = [
  { label: "Home", path: "/" },
  { label: "Treatments", path: "/treatments" },
  { label: "Packages", path: "/packages" },
  { label: "Facilities", path: "/facilities" },
  { label: "Gallery", path: "/gallery" },
  { label: "Cancer Care", path: "/cancer-care" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Root() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-between px-6 lg:px-20 transition-all duration-300"
        style={{
          background: "white",
          borderBottom: "1px solid #e6e2dc",
          boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.07)" : "none",
        }}
      >
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map(({ label, path }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className="text-[15px] text-[#2d241e] whitespace-nowrap transition-opacity duration-200 hover:opacity-100"
                style={{
                  fontFamily: dmSans,
                  opacity: active ? 1 : 0.65,
                  textDecoration: active ? "underline" : "none",
                  textUnderlineOffset: "4px",
                }}
              >
                {label}
              </Link>
            );
          })}
          <Link
            to="/book-retreat"
            className="bg-[#c4622d] text-white px-5 py-[10px] rounded-md text-[15px] font-semibold uppercase hover:bg-[#b5562a] transition-colors whitespace-nowrap"
            style={{ fontFamily: dmSans }}
          >
            Book a Retreat
          </Link>
        </nav>

        {/* Hamburger menu button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`h-[2px] w-6 bg-[#2d241e] transition-transform duration-300 origin-center ${
              menuOpen ? "rotate-[45deg] translate-y-[8px]" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-[#2d241e] transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-[#2d241e] transition-transform duration-300 origin-center ${
              menuOpen ? "-rotate-[45deg] -translate-y-[8px]" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 z-[49] bg-white flex flex-col justify-center items-center gap-6 transition-all duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "80px", height: "calc(100vh - 80px)" }}
      >
        {navItems.map(({ label, path }) => {
          const active = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="text-[20px] text-[#2d241e] font-medium transition-opacity hover:opacity-100"
              style={{
                fontFamily: dmSans,
                opacity: active ? 1 : 0.65,
                textDecoration: active ? "underline" : "none",
                textUnderlineOffset: "4px",
              }}
            >
              {label}
            </Link>
          );
        })}
        <Link
          to="/book-retreat"
          onClick={() => setMenuOpen(false)}
          className="bg-[#c4622d] text-white px-8 py-3 rounded-md text-[16px] font-semibold uppercase hover:bg-[#b5562a] transition-colors mt-4"
          style={{ fontFamily: dmSans }}
        >
          Book a Retreat
        </Link>
      </div>

      {/* Page content */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      {/* Shared Footer */}
      <footer className="bg-[#2c4a2e] px-6 lg:px-20 py-12 lg:py-20">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8">
            <div className="flex flex-col gap-6 max-w-[405px]">
              <Link to="/">
                <div className="relative" style={{ width: 200, height: 49 }}>
                  <ClipPathGroup />
                </div>
              </Link>
              <p className="text-[16px] leading-[1.6] text-[#eae7e2] opacity-60" style={{ fontFamily: dmSans }}>
                A sacred legacy of healing through nature. We preserve the purity of Ayurvedic traditions for generations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-12 sm:gap-20">
              {[
                { heading: "Explore", items: [{ label: "Treatments", path: "/treatments" }, { label: "Packages", path: "/packages" }, { label: "Facilities", path: "/facilities" }, { label: "Gallery", path: "/gallery" }] },
                { heading: "Wellness", items: [{ label: "About Us", path: "/about" }, { label: "Oncology Support", path: "/oncology" }, { label: "Contact", path: "/contact" }, { label: "Book Retreat", path: "/contact" }] },
              ].map((col) => (
                <div key={col.heading} className="flex flex-col gap-5">
                  <span className="text-[14px] font-semibold uppercase text-[#d4a843]" style={{ fontFamily: dmSans }}>{col.heading}</span>
                  {col.items.map((item) => (
                    <Link key={item.label} to={item.path} className="text-[15px] text-[#eae7e2] opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: dmSans }}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-[14px] font-semibold uppercase text-[#d4a843]" style={{ fontFamily: dmSans }}>Follow Our Story</span>
              <div className="flex gap-4">
                {["FB", "IG", "YT"].map((s) => (
                  <div key={s} className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center cursor-pointer hover:border-white/60 transition-colors">
                    <span className="text-white/60 text-[11px] font-semibold" style={{ fontFamily: dmSans }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="h-px bg-white/[0.08]" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <span className="text-[14px] text-[#eae7e2] opacity-40" style={{ fontFamily: dmSans }}>
                © 2024 Vedic Hermitage Ayurmana. All Rights Reserved.
              </span>
              <span className="text-[16px] sm:text-[20px] italic text-[#d4a843] opacity-80" style={{ fontFamily: playfair }}>
                Healing Through Nature. Rooted in Tradition.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
