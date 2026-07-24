import svgPaths from "./svg-wxdp7fqb77";
import imgHero from "./8088512d89fc2a3c0fbb9bcbfe6de55b80172f3b.png";
import imgRectangle from "./6431c763bdc056da95e4ba7f2bab7ac12f27cc4c.png";
import imgRectangle1 from "./2ec3adce8c93eedaca14d4c590998e756a429eb6.png";

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[1000px]" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d4a843] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        AYURVEDIC ONCOLOGY SUPPORT
      </p>
      <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[72px] text-center text-white w-[min-content]">Compassionate Care Through Ancient Wisdom</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] opacity-90 relative shrink-0 text-[20px] text-center text-white w-[720px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Complementary Ayurvedic support for cancer patients — helping manage side effects, restore strength, and improve quality of life.
      </p>
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col h-[600px] items-center justify-center relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(44,74,46,0.5)] inset-0" />
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

function Frame3() {
  return (
    <div className="bg-[#fdf4e3] content-stretch flex items-start justify-center py-[24px] relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        DISCLAIMER: Our Ayurvedic treatments complement conventional cancer care and are not a replacement for medical treatment. Always consult your oncologist.
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path d={svgPaths.pa255000} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame8 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Detoxification to clear toxins
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path d={svgPaths.pa255000} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame10 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Herbal support for cellular health
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path d={svgPaths.pa255000} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame12 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Nervous system calming
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path d={svgPaths.pa255000} id="Vector" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame14 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Sattvic nutritional support
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Frame">
      <Frame7 />
      <Frame9 />
      <Frame11 />
      <Frame13 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#2d241e] text-[48px] w-[min-content]">How Ayurveda Supports Cancer Care</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.7] min-w-full relative shrink-0 text-[#6b5e54] text-[18px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Ayurveda offers a holistic approach to supporting the body during and after conventional cancer treatments. Through specialized Rasayana (rejuvenation) therapies, we focus on immune modulation, reducing the harsh side effects of chemotherapy and radiation, and restoring fundamental vitality (Ojas).
      </p>
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[80px] items-center p-[120px] relative size-full">
          <div className="h-[560px] relative rounded-[8px] shrink-0 w-[624px]" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle} />
          </div>
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
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
        Our Focus
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame17 />
      <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.1] min-w-full relative shrink-0 text-[#2d241e] text-[56px] text-center w-[min-content]">Treatment Protocols</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#faf6f0] flex-[1_0_0] h-[220px] min-w-px relative rounded-[8px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <p className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2c4a2e] text-[18px] w-full">Immune Boosting Rasayana</p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#6b5e54] text-[14px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
          Specialized protocols utilizing rare herbal formulations and targeted therapy techniques to address specific patient needs during recovery.
        </p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#faf6f0] flex-[1_0_0] h-[220px] min-w-px relative rounded-[8px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <p className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2c4a2e] text-[18px] w-full">{`Detox & Panchakarma`}</p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#6b5e54] text-[14px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
          Specialized protocols utilizing rare herbal formulations and targeted therapy techniques to address specific patient needs during recovery.
        </p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#faf6f0] flex-[1_0_0] h-[220px] min-w-px relative rounded-[8px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <p className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2c4a2e] text-[18px] w-full">{`Pain & Inflammation Management`}</p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#6b5e54] text-[14px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
          Specialized protocols utilizing rare herbal formulations and targeted therapy techniques to address specific patient needs during recovery.
        </p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#faf6f0] flex-[1_0_0] h-[220px] min-w-px relative rounded-[8px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <p className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2c4a2e] text-[18px] w-full">{`Stress & Mental Wellness`}</p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#6b5e54] text-[14px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
          Specialized protocols utilizing rare herbal formulations and targeted therapy techniques to address specific patient needs during recovery.
        </p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] h-[220px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#faf6f0] relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[64px] items-start p-[120px] relative size-full">
        <Frame16 />
        <Frame18 />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Frame">
      <div className="absolute inset-[-2.5%_0_0_-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 41">
          <g id="Frame">
            <path d={svgPaths.p2bfd5f80} id="Vector" opacity="0.3" stroke="var(--stroke-0, #D4A843)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-[900px]" data-name="Frame">
      <Frame25 />
      <p className="[word-break:break-word] font-['DM_Sans:Italic',sans-serif] font-normal italic leading-[1.5] min-w-full relative shrink-0 text-[#2d241e] text-[28px] text-center w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>{`"Ayurveda gave me the strength to endure my hospital treatments and helped me reclaim my life afterward. The compassion here is as healing as the herbs."`}</p>
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#c4622d] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        — Recovery Guest Story
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[120px] relative size-full">
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start px-[24px] py-[12px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#d4a843] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d4a843] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        VIEW CREDENTIALS
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d4a843] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        CHIEF PHYSICIAN
      </p>
      <p className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[48px] text-white whitespace-nowrap">Dr. Rajeev Menon</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.7] min-w-full opacity-80 relative shrink-0 text-[18px] text-white w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        With over 25 years of clinical experience in Ayurvedic oncology, Dr. Menon leads our medical team with a philosophy rooted in the balance of ancient text and modern patient safety.
      </p>
      <Frame28 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#2c4a2e] relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[80px] items-center p-[120px] relative size-full">
          <Frame27 />
          <div className="h-[600px] relative rounded-[8px] shrink-0 w-[500px]" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#c4622d] content-stretch flex items-start justify-center px-[24px] py-[12px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Schedule a Confidential Consultation
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[64px] whitespace-nowrap">Begin Your Healing Journey</p>
      <Frame31 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[120px] relative size-full">
          <Frame30 />
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

function Frame34() {
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
      <Frame34 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[405px]" data-name="Frame">
      <Logo1 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full opacity-60 relative shrink-0 text-[#eae7e2] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        A sacred legacy of healing through nature. We preserve the purity of Ayurvedic traditions for generations.
      </p>
    </div>
  );
}

function Frame36() {
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

function Frame37() {
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

function Frame35() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[80px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function Frame40() {
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

function Frame41() {
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

function Frame42() {
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

function Frame39() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Frame">
      <Frame40 />
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[296px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d4a843] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Follow Our Story
      </p>
      <Frame39 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame33 />
      <Frame35 />
      <Frame38 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-normal items-center justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:Regular',sans-serif] opacity-40 relative shrink-0 text-[#eae7e2] text-[14px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        © 2024 Vedic Hermitage Ayurmana. All Rights Reserved.
      </p>
      <p className="font-['Playfair_Display:Italic',sans-serif] italic opacity-80 relative shrink-0 text-[#d4a843] text-[20px]">Healing Through Nature. Rooted in Tradition.</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0823529" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame44 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#2c4a2e] relative shrink-0 w-full" data-name="footer">
      <div className="content-stretch flex flex-col gap-[64px] items-start p-[80px] relative size-full">
        <Frame32 />
        <Frame43 />
      </div>
    </div>
  );
}

export default function AyurvedicOncologySupport() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="AYURVEDIC ONCOLOGY SUPPORT">
      <Hero />
      <Navbar />
      <Frame3 />
      <Frame4 />
      <Frame15 />
      <Frame23 />
      <Frame26 />
      <Frame29 />
      <Footer />
    </div>
  );
}