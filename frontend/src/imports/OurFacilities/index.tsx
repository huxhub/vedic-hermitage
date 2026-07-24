import svgPaths from "./svg-20oxlbqem0";
import imgHero from "./05bc4e7b97a67c6c94ef31da1bb032e9ec44e90f.png";
import imgRectangle from "./acd0261ab752207bff80a03fe626fcf4726ffebd.png";
import imgRectangle1 from "./15973c61583f70c9e7aadf2ddb9daeae67843264.png";
import imgRectangle2 from "./431c4620143fa788306b57c7d940dd9e37de432f.png";
import imgRectangle3 from "./4ae484e8ab7a9e2ceababf3c257c1e948b0c7028.png";
import imgRectangle4 from "./96f915e543f3e49b4def76e2f19f0d0fee8700cf.png";

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        OUR FACILITIES
      </p>
      <p className="font-['Playfair_Display:Medium',sans-serif] font-medium relative shrink-0 text-[72px] text-white">Where Nature Meets Healing</p>
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col h-[600px] items-center justify-center relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(44,74,46,0.4)] inset-0" />
      </div>
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
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-70 relative shrink-0 text-[#2d241e] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Packages
      </p>
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[15px] underline whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
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

function Frame3() {
  return (
    <div className="bg-[#faf6f0] content-stretch flex flex-col items-center justify-center px-[200px] py-[60px] relative shrink-0 w-[1440px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#6b5e54] text-[20px] text-center w-[1040px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Vedic Hermitage offers authentic Ayurveda treatments inherited from Poorvaaacharyas (Classical Ayurveda Experts) to lead a felicitous life enriched with health, wealth and reputation through the consummated healing process.
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center py-[4px] relative shrink-0" data-name="Frame">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#c4622d] text-[14px] tracking-[0.5px] underline whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Discover More
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[300px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2d241e] text-[40px] w-[600px]">Natural Pond</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#6b5e54] text-[18px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Serene natural water body surrounded by tropical greenery for silent reflection and Pranic healing
      </p>
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#faf6f0] h-[520px] relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[80px] items-center px-[80px] py-[60px] relative size-full">
          <div className="h-[400px] relative rounded-[12px] shrink-0 w-[600px]" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle} />
          </div>
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center py-[4px] relative shrink-0" data-name="Frame">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#c4622d] text-[14px] tracking-[0.5px] underline whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Discover More
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[300px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#443c35] text-[40px] w-[600px]">Organic Food</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#443c35] text-[18px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Farm-to-table Sattvic cuisine prepared with herbs grown in our organic garden
      </p>
      <Frame9 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white h-[520px] relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[80px] items-center px-[80px] py-[60px] relative size-full">
          <Frame8 />
          <div className="h-[400px] relative rounded-[12px] shrink-0 w-[600px]" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center py-[4px] relative shrink-0" data-name="Frame">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#c4622d] text-[14px] tracking-[0.5px] underline whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Discover More
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[300px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2d241e] text-[40px] w-[600px]">Meditation Huts</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#6b5e54] text-[18px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Private bamboo huts nestled deep in nature for undisturbed meditation and pranayama
      </p>
      <Frame12 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#faf6f0] h-[520px] relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[80px] items-center px-[80px] py-[60px] relative size-full">
          <div className="h-[400px] relative rounded-[12px] shrink-0 w-[600px]" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle2} />
          </div>
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center py-[4px] relative shrink-0" data-name="Frame">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#c4622d] text-[14px] tracking-[0.5px] underline whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Discover More
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[300px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#443c35] text-[40px] w-[600px]">Neat Environment</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#443c35] text-[18px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Pristine, immaculately maintained 12-acre grounds promoting calm and cleanliness
      </p>
      <Frame15 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white h-[520px] relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[80px] items-center px-[80px] py-[60px] relative size-full">
          <Frame14 />
          <div className="h-[400px] relative rounded-[12px] shrink-0 w-[600px]" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center py-[4px] relative shrink-0" data-name="Frame">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#c4622d] text-[14px] tracking-[0.5px] underline whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Discover More
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[300px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2d241e] text-[40px] w-[600px]">Treatment Rooms</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#6b5e54] text-[18px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Traditionally designed rooms with teakwood tables, copper vessels, and natural light
      </p>
      <Frame18 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#faf6f0] h-[520px] relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[80px] items-center px-[80px] py-[60px] relative size-full">
          <div className="h-[400px] relative rounded-[12px] shrink-0 w-[600px]" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle4} />
          </div>
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-start px-[24px] py-[12px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[1.5px] border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Book Your Stay Today
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#2c4a2e] h-[200px] relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[80px] relative size-full">
          <p className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[40px] text-white whitespace-nowrap">Experience Our Facilities in Person</p>
          <Frame20 />
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

function Frame23() {
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
      <Frame23 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[405px]" data-name="Frame">
      <Logo1 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full opacity-60 relative shrink-0 text-[#eae7e2] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        A sacred legacy of healing through nature. We preserve the purity of Ayurvedic traditions for generations.
      </p>
    </div>
  );
}

function Frame25() {
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

function Frame26() {
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

function Frame24() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[80px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame29() {
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

function Frame30() {
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

function Frame31() {
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

function Frame28() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Frame">
      <Frame29 />
      <Frame30 />
      <Frame31 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[296px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d4a843] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Follow Our Story
      </p>
      <Frame28 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame22 />
      <Frame24 />
      <Frame27 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-normal items-center justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:Regular',sans-serif] opacity-40 relative shrink-0 text-[#eae7e2] text-[14px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        © 2024 Vedic Hermitage Ayurmana. All Rights Reserved.
      </p>
      <p className="font-['Playfair_Display:Italic',sans-serif] italic opacity-80 relative shrink-0 text-[#d4a843] text-[20px]">Healing Through Nature. Rooted in Tradition.</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0823529" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame33 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#2c4a2e] relative shrink-0 w-full" data-name="footer">
      <div className="content-stretch flex flex-col gap-[64px] items-start p-[80px] relative size-full">
        <Frame21 />
        <Frame32 />
      </div>
    </div>
  );
}

export default function OurFacilities() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="OUR FACILITIES">
      <Hero />
      <Navbar />
      <Frame3 />
      <Frame4 />
      <Frame7 />
      <Frame10 />
      <Frame13 />
      <Frame16 />
      <Frame19 />
      <Footer />
    </div>
  );
}