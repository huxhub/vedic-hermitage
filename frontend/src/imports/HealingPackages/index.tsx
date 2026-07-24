import svgPaths from "./svg-tz1kw38x7o";
import imgHero from "./e9a5aece1af89b301b17ee5574b151327380d284.png";

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        HEALING PACKAGES
      </p>
      <p className="font-['Playfair_Display:Medium',sans-serif] font-medium relative shrink-0 text-[72px] text-white">Choose Your Path to Wellness</p>
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col h-[500px] items-center justify-center relative shrink-0 w-full" data-name="hero">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
      <Frame />
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

function Frame1() {
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
      <Frame1 />
    </div>
  );
}

function Frame2() {
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
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[15px] underline whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
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
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-70 relative shrink-0 text-[#2d241e] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Contact
      </p>
      <Frame2 />
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

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#6b5e54] text-[20px] text-center w-[900px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Our carefully curated retreat packages combine authentic Panchakarma therapies, personalized physician consultations, Sattvic meals, and immersive nature experiences.
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Restorative Healing
      </p>
      <p className="font-['Playfair_Display:Medium',sans-serif] font-medium relative shrink-0 text-[#2d241e] text-[48px]">7-Day Rejuvenation Retreat</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2114)" id="Frame">
          <path d={svgPaths.p2668e840} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2114">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame11 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Initial Dosha assessment
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2114)" id="Frame">
          <path d={svgPaths.p2668e840} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2114">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame13 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Daily Abhyanga massage
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2114)" id="Frame">
          <path d={svgPaths.p2668e840} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2114">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame15 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Shirodhara therapy
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2114)" id="Frame">
          <path d={svgPaths.p2668e840} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2114">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame17 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>{`Yoga & meditation`}</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2114)" id="Frame">
          <path d={svgPaths.p2668e840} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2114">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame19 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Satvik meals
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2114)" id="Frame">
          <path d={svgPaths.p2668e840} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2114">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame21 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Premium Accommodation
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame10 />
      <Frame12 />
      <Frame14 />
      <Frame16 />
      <Frame18 />
      <Frame20 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-w-px relative" data-name="Frame">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#c4622d] content-stretch flex items-start justify-center px-[24px] py-[12px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Book Now
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[300px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b5e54] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        From
      </p>
      <p className="[word-break:break-word] font-['Cormorant_Garamond:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#2d241e] text-[0px] whitespace-nowrap">
        <span className="font-['Playfair_Display:SemiBold',sans-serif] leading-[normal] text-[40px]">₹45,000</span>
        <span className="font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] text-[16px]">{` / person`}</span>
      </p>
      <Frame23 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#faf6f0] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[64px] items-center p-[64px] relative size-full">
          <Frame7 />
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Deep Purification
      </p>
      <p className="font-['Playfair_Display:Medium',sans-serif] font-medium relative shrink-0 text-[48px] text-white">14-Day Panchakarma Detox</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2114)" id="Frame">
          <path d={svgPaths.p2668e840} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2114">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame29 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Complete Panchakarma protocol
      </p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2114)" id="Frame">
          <path d={svgPaths.p2668e840} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2114">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame31 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>{`Vamana & Virechana therapies`}</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2114)" id="Frame">
          <path d={svgPaths.p2668e840} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2114">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame33 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Basti treatment
      </p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2114)" id="Frame">
          <path d={svgPaths.p2668e840} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2114">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame35 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Herbal steam bath
      </p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2114)" id="Frame">
          <path d={svgPaths.p2668e840} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2114">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame37 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Daily physician consultation
      </p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2114)" id="Frame">
          <path d={svgPaths.p2668e840} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2114">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame39 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>{`All meals & accommodation`}</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame28 />
      <Frame30 />
      <Frame32 />
      <Frame34 />
      <Frame36 />
      <Frame38 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-w-px relative" data-name="Frame">
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-[#c4622d] content-stretch flex items-start justify-center px-[24px] py-[12px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Book Now
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[300px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        From
      </p>
      <p className="[word-break:break-word] font-['Cormorant_Garamond:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[0px] text-white whitespace-nowrap">
        <span className="font-['Playfair_Display:SemiBold',sans-serif] leading-[normal] text-[40px]">#85,000</span>
        <span className="font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] text-[16px]">{` / person`}</span>
      </p>
      <Frame41 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#2c4a2e] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[64px] items-center p-[64px] relative size-full">
          <Frame25 />
          <Frame40 />
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Life Reset Program
      </p>
      <p className="font-['Playfair_Display:Medium',sans-serif] font-medium relative shrink-0 text-[#2d241e] text-[48px]">21-Day Total Transformation</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2114)" id="Frame">
          <path d={svgPaths.p2668e840} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2114">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame47 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Full Panchakarma + Rasayana
      </p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2114)" id="Frame">
          <path d={svgPaths.p2668e840} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2114">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame49 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Kshara Sutra consultation
      </p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2114)" id="Frame">
          <path d={svgPaths.p2668e840} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2114">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame51 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>{`Intensive Yoga & Pranayama`}</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2114)" id="Frame">
          <path d={svgPaths.p2668e840} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2114">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame53 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Personalized herbal medicine
      </p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2114)" id="Frame">
          <path d={svgPaths.p2668e840} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2114">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame55 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Nutritional counseling
      </p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2114)" id="Frame">
          <path d={svgPaths.p2668e840} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2114">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame57 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Luxury Suite Accommodation
      </p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame46 />
      <Frame48 />
      <Frame50 />
      <Frame52 />
      <Frame54 />
      <Frame56 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-w-px relative" data-name="Frame">
      <Frame44 />
      <Frame45 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[#c4622d] content-stretch flex items-start justify-center px-[24px] py-[12px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Book Now
      </p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[300px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b5e54] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        From
      </p>
      <p className="[word-break:break-word] font-['Cormorant_Garamond:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#2d241e] text-[0px] whitespace-nowrap">
        <span className="font-['Playfair_Display:SemiBold',sans-serif] leading-[normal] text-[40px]">₹1,40,000</span>
        <span className="font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] text-[16px]">{` / person`}</span>
      </p>
      <Frame59 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#faf6f0] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[64px] items-center p-[64px] relative size-full">
          <Frame43 />
          <Frame58 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame6 />
      <Frame24 />
      <Frame42 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[8px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Playfair_Display:Regular',sans-serif] relative shrink-0 text-[#2d241e] text-[32px]">Need a Custom Package?</p>
      <p className="font-['DM_Sans:Regular',sans-serif] relative shrink-0 text-[#6b5e54] text-[16px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Our physicians will design a personalized program just for you.
      </p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex items-start px-[24px] py-[12px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#c4622d] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Contact Us
      </p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[#faf6f0] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[48px] relative size-full">
          <Frame61 />
          <Frame62 />
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <div className="h-0 relative shrink-0 w-[24px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
            <line id="Line" stroke="var(--stroke-0, #C4622D)" x2="24" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[13px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        FAQ
      </p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame65 />
      <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.1] min-w-full relative shrink-0 text-[#2d241e] text-[56px] text-center w-[min-content]">Common Questions</p>
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="plus">
          <path d={svgPaths.p3e11a380} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame67() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d241e] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
            Question about retreats and duration 1
          </p>
          <Plus />
        </div>
      </div>
    </div>
  );
}

function Plus1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="plus">
          <path d={svgPaths.p3e11a380} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame68() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d241e] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
            Question about retreats and duration 2
          </p>
          <Plus1 />
        </div>
      </div>
    </div>
  );
}

function Plus2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="plus">
          <path d={svgPaths.p3e11a380} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame69() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d241e] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
            Question about retreats and duration 3
          </p>
          <Plus2 />
        </div>
      </div>
    </div>
  );
}

function Plus3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="plus">
          <path d={svgPaths.p3e11a380} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame70() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d241e] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
            Question about retreats and duration 4
          </p>
          <Plus3 />
        </div>
      </div>
    </div>
  );
}

function Plus4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="plus">
          <path d={svgPaths.p3e11a380} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame71() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d241e] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
            Question about retreats and duration 5
          </p>
          <Plus4 />
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame67 />
      <Frame68 />
      <Frame69 />
      <Frame70 />
      <Frame71 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame64 />
      <Frame66 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[80px] items-start p-[120px] relative size-full">
        <Frame4 />
        <Frame5 />
        <Frame60 />
        <Frame63 />
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

function Frame74() {
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
      <Frame74 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[405px]" data-name="Frame">
      <Logo1 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full opacity-60 relative shrink-0 text-[#eae7e2] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        A sacred legacy of healing through nature. We preserve the purity of Ayurvedic traditions for generations.
      </p>
    </div>
  );
}

function Frame76() {
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

function Frame77() {
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

function Frame75() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[80px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <Frame76 />
      <Frame77 />
    </div>
  );
}

function Frame80() {
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

function Frame81() {
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

function Frame82() {
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

function Frame79() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Frame">
      <Frame80 />
      <Frame81 />
      <Frame82 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[296px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d4a843] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Follow Our Story
      </p>
      <Frame79 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame73 />
      <Frame75 />
      <Frame78 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-normal items-center justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:Regular',sans-serif] opacity-40 relative shrink-0 text-[#eae7e2] text-[14px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        © 2024 Vedic Hermitage Ayurmana. All Rights Reserved.
      </p>
      <p className="font-['Playfair_Display:Italic',sans-serif] italic opacity-80 relative shrink-0 text-[#d4a843] text-[20px]">Healing Through Nature. Rooted in Tradition.</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0823529" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame84 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#2c4a2e] relative shrink-0 w-full" data-name="footer">
      <div className="content-stretch flex flex-col gap-[64px] items-start p-[80px] relative size-full">
        <Frame72 />
        <Frame83 />
      </div>
    </div>
  );
}

export default function HealingPackages() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="HEALING PACKAGES">
      <Hero />
      <Navbar />
      <Frame3 />
      <Footer />
    </div>
  );
}