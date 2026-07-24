import svgPaths from "./svg-0tlbg3eh0n";
import imgHero from "./2931faa4fb3b24cc54f99029e860b2cd40ee76df.png";
import imgLine from "./efbca7487de5478448ab58933b718f149685568c.png";

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        CONTACT US
      </p>
      <p className="font-['Playfair_Display:Medium',sans-serif] font-medium relative shrink-0 text-[72px] text-white">{`We'd Love to Hear From You`}</p>
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col h-[400px] items-center justify-center relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(44,74,46,0.6)] inset-0" />
      </div>
      <Frame1 />
    </div>
  );
}

function Flower() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="flower-2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="flower-2">
          <path d={svgPaths.p34509280} fill="var(--fill-0, #2C4A2E)" id="Vector" stroke="var(--stroke-0, #D4A843)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-semibold items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Playfair_Display:SemiBold',sans-serif] mb-[-2px] relative shrink-0 text-[#2c4a2e] text-[22px]">VEDIC HERMITAGE</p>
      <p className="font-['DM_Sans:SemiBold',sans-serif] relative shrink-0 text-[#d4a843] text-[10px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Ayurmana
      </p>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="logo">
      <Flower />
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#c4622d] content-stretch flex items-start px-[20px] py-[10px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[15px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Book a Retreat
      </p>
    </div>
  );
}

function NavLinks() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="nav-links">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-70 relative shrink-0 text-[#2d241e] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Home
      </p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-70 relative shrink-0 text-[#2d241e] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Treatments
      </p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-70 relative shrink-0 text-[#2d241e] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Packages
      </p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-70 relative shrink-0 text-[#2d241e] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Facilities
      </p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-70 relative shrink-0 text-[#2d241e] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Gallery
      </p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-70 relative shrink-0 text-[#2d241e] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        About
      </p>
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[15px] underline whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Contact
      </p>
      <Frame3 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-white content-stretch flex h-[80px] items-center justify-between left-0 px-[80px] top-0 w-[1440px]" data-name="navbar">
      <div aria-hidden className="absolute border border-[#e6e2dc] border-solid inset-0 pointer-events-none" />
      <Logo />
      <NavLinks />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#faf6f0] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start p-[16px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Enter your name
        </p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Full Name
      </p>
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#faf6f0] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start p-[16px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Enter your email
        </p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Email Address
      </p>
      <Frame11 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame8 />
      <Frame10 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#faf6f0] h-[160px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start p-[16px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          How can we help you?
        </p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Message
      </p>
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#c4622d] content-stretch flex items-start justify-center px-[24px] py-[12px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Send Message
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame7 />
      <Frame12 />
      <Frame14 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[40px] whitespace-nowrap">Send a Message</p>
      <Frame6 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Address
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6b5e54] text-[16px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Vedic Hermitage Ayurmana, Thrissur, Kerala – 680 001, India
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Phone
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#2d241e] text-[16px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        +91 99999 88888
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Email
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#2d241e] text-[16px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        info@vedichermitage.com
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Working Hours
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6b5e54] text-[16px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Mon–Sat: 9 AM – 6 PM IST
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start relative shrink-0 whitespace-nowrap" data-name="Frame">
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <rect height="31" rx="15.5" stroke="var(--stroke-0, #D4A843)" width="31" x="0.5" y="0.5" />
          <path d={svgPaths.p36d08a00} fill="var(--fill-0, #D4A843)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <rect height="31" rx="15.5" stroke="var(--stroke-0, #D4A843)" width="31" x="0.5" y="0.5" />
          <path d={svgPaths.p29594fc0} fill="var(--fill-0, #D4A843)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Frame">
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-[400px]" data-name="Frame">
      <Frame16 />
      <Frame21 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex gap-[100px] items-start p-[120px] relative size-full">
        <Frame5 />
        <Frame15 />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#faf6f0] content-stretch flex h-[400px] items-center justify-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b5e54] text-[32px] whitespace-nowrap">Map View: Kerala, India</p>
      <div className="absolute h-0 left-0 top-0 w-[1440px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" height="1" src={imgLine} width="1440" />
        </div>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="chevron-right">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #D4A843)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d241e] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        How to reach us
      </p>
      <ChevronRight />
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="chevron-right">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #D4A843)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d241e] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Language spoken
      </p>
      <ChevronRight1 />
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="chevron-right">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #D4A843)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d241e] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Nearest airport
      </p>
      <ChevronRight2 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[80px] items-start justify-center p-[64px] relative size-full">
          <Frame26 />
          <Frame27 />
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Flower1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="flower-2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="flower-2">
          <path d={svgPaths.p17b38df0} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-semibold items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Playfair_Display:SemiBold',sans-serif] mb-[-2px] relative shrink-0 text-[28px] text-white">VEDIC HERMITAGE</p>
      <p className="font-['DM_Sans:SemiBold',sans-serif] relative shrink-0 text-[#d4a843] text-[12px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Ayurmana
      </p>
    </div>
  );
}

function Logo1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="logo">
      <Flower1 />
      <Frame31 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[405px]" data-name="Frame">
      <Logo1 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full opacity-60 relative shrink-0 text-[#eae7e2] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        A sacred legacy of healing through nature. We preserve the purity of Ayurvedic traditions for generations.
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Explore
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal opacity-80 relative shrink-0 text-[#eae7e2] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Treatments
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal opacity-80 relative shrink-0 text-[#eae7e2] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Packages
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal opacity-80 relative shrink-0 text-[#eae7e2] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Accommodation
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal opacity-80 relative shrink-0 text-[#eae7e2] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Dining
      </p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Wellness
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal opacity-80 relative shrink-0 text-[#eae7e2] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Dosha Quiz
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal opacity-80 relative shrink-0 text-[#eae7e2] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Yoga Classes
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal opacity-80 relative shrink-0 text-[#eae7e2] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Meditation
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal opacity-80 relative shrink-0 text-[#eae7e2] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Herb Garden
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[80px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame" opacity="0.7">
          <path d={svgPaths.p313b8700} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame" opacity="0.7">
          <path d={svgPaths.p2c821c00} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_2078)" id="Frame" opacity="0.7">
          <path d={svgPaths.p12e4b1a0} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2078">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Frame">
      <Frame37 />
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[296px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d4a843] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Follow Our Story
      </p>
      <Frame36 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame30 />
      <Frame32 />
      <Frame35 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-normal items-center justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:Regular',sans-serif] opacity-40 relative shrink-0 text-[#eae7e2] text-[14px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        © 2024 Vedic Hermitage Ayurmana. All Rights Reserved.
      </p>
      <p className="font-['Playfair_Display:Italic',sans-serif] italic opacity-80 relative shrink-0 text-[#d4a843] text-[20px]">Healing Through Nature. Rooted in Tradition.</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0823529" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame41 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#2c4a2e] relative shrink-0 w-full" data-name="footer">
      <div className="content-stretch flex flex-col gap-[64px] items-start p-[80px] relative size-full">
        <Frame29 />
        <Frame40 />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Frame">
      <Hero />
      <Navbar />
      <Frame4 />
      <Frame24 />
      <Frame25 />
      <Footer />
    </div>
  );
}