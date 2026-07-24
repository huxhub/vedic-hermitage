import svgPaths from "./svg-h53yke1rt2";
import imgAboutHero from "./23edc7170f4a5dd7662be736bc245a04c29ab5bc.png";
import imgVintagePhoto from "./e08f5d9583b3e4a2b8d3c53098f482deb0291836.png";
import imgEllipse from "./e9c592d47be53bf92c672175b3b6948e607d30bc.png";
import imgEllipse1 from "./d69e2c85b1eb607bfc2fddedaea3c9853b9ee5e4.png";
import imgEllipse2 from "./a7e6545048c953cb7b66191ff46e4c470d9c1a88.png";
import imgEllipse3 from "./9571f80e4968de26533a9ddf15412156afd2a661.png";
import imgPropertySection from "./964f1072e321806be765155e5001bcf74a9a9f6b.png";
import imgEllipse4 from "./7376849085702e417cdbbf3cef62324c794877c1.png";
import imgEllipse5 from "./f8a92807b482c716ef776fe2d7980bdca8e3374b.png";

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center w-[800px]" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Our Story
      </p>
      <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.1] min-w-full relative shrink-0 text-[72px] text-white w-[min-content]">Rooted in Tradition. Devoted to Healing.</p>
    </div>
  );
}

function AboutHero() {
  return (
    <div className="content-stretch flex h-[720px] items-center justify-center relative shrink-0 w-full" data-name="about-hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgAboutHero} />
        <div className="absolute bg-[rgba(44,74,46,0.3)] inset-0" />
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
          <path d={svgPaths.p2acdcb00} fill="var(--fill-0, #2C4A2E)" id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
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
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Facilities
      </p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Gallery
      </p>
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[15px] underline whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
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
    <div className="absolute bg-white content-stretch flex h-[80px] items-center justify-between left-0 px-[80px] right-0 top-0" data-name="navbar">
      <div aria-hidden className="absolute border border-[#e6e2dc] border-solid inset-0 pointer-events-none" />
      <Logo />
      <NavLinks />
    </div>
  );
}

function SectionLabel() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="section-label">
      <div className="h-0 relative shrink-0 w-[24px]" data-name="line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
            <line id="Line" stroke="var(--stroke-0, #C4622D)" x2="24" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[13px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        A Legacy of Two Centuries
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <SectionLabel />
      <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.1] min-w-full relative shrink-0 text-[#2d241e] text-[56px] w-[min-content]">Generations of Ayurvedic Mastery</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#6b5e54] text-[18px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Founded in the late 19th century by a family of distinguished Vaidyas (Ayurvedic physicians), Vedic Hermitage Ayurmana was established as a sanctuary for those seeking true restoration. What began as a humble ancestral home has evolved into a world-renowned retreat, yet our commitment to the original Vedic protocols remains unchanged.
      </p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#6b5e54] text-[18px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>{`Today, the fourth generation of the family continues to welcome seekers from around the globe, offering a profound connection to the timeless wisdom of Kerala's healing heritage.`}</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Frame">
      <Frame4 />
    </div>
  );
}

function FoundingStory() {
  return (
    <div className="bg-[#faf7f2] relative shrink-0 w-full" data-name="founding-story">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[80px] items-center px-[80px] py-[120px] relative size-full">
          <div className="relative rounded-[8px] shrink-0 size-[600px]" data-name="vintage-photo">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgVintagePhoto} />
          </div>
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function SectionLabel1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="section-label">
      <div className="h-0 relative shrink-0 w-[24px]" data-name="line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
            <line id="Line" stroke="var(--stroke-0, #C4622D)" x2="24" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[13px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Our Philosophy
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <SectionLabel1 />
      <p className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[56px] text-center whitespace-nowrap">The Ayurvedic Way of Life</p>
      <div className="h-0 relative shrink-0 w-[80px]" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 2">
            <line id="Line" stroke="var(--stroke-0, #C4622D)" strokeWidth="2" x2="80" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Leaf() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="leaf">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="leaf">
          <path d={svgPaths.p33805f00} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#faf7f2] content-stretch flex items-center justify-center relative rounded-[40px] shrink-0 size-[80px]" data-name="Frame">
      <Leaf />
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal relative shrink-0 text-[#2d241e] text-[32px]">Ahara</p>
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#c4622d] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Nourishing Food
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-w-px relative" data-name="Frame">
      <Frame8 />
      <Frame9 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#6b5e54] text-[16px] text-center w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Healing begins from within. Our Satvik meals are tailored to balance your unique Dosha.
      </p>
    </div>
  );
}

function CircleX() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="circle-x">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="circle-x">
          <path d={svgPaths.p10a30bb0} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#faf7f2] content-stretch flex items-center justify-center relative rounded-[40px] shrink-0 size-[80px]" data-name="Frame">
      <CircleX />
    </div>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal relative shrink-0 text-[#2d241e] text-[32px]">Vihara</p>
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#c4622d] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Mindful Living
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-w-px relative" data-name="Frame">
      <Frame11 />
      <Frame12 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#6b5e54] text-[16px] text-center w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Connecting with the rhythm of nature through meditation and yoga to settle the spirit.
      </p>
    </div>
  );
}

function Flower1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="flower-2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="flower-2">
          <path d={svgPaths.p15c0d200} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#faf7f2] content-stretch flex items-center justify-center relative rounded-[40px] shrink-0 size-[80px]" data-name="Frame">
      <Flower1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal relative shrink-0 text-[#2d241e] text-[32px]">Aushadhi</p>
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#c4622d] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Herbal Medicine
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-w-px relative" data-name="Frame">
      <Frame14 />
      <Frame15 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#6b5e54] text-[16px] text-center w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Rare herbs harvested from our private garden, prepared into potent therapeutic oils.
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame7 />
      <Frame10 />
      <Frame13 />
    </div>
  );
}

function Philosophy() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="philosophy">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-center px-[80px] py-[120px] relative size-full">
          <Frame5 />
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function SectionLabel2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="section-label">
      <div className="h-0 relative shrink-0 w-[24px]" data-name="line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
            <line id="Line" stroke="var(--stroke-0, #C4622D)" x2="24" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[13px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>{`Our Healers & Physicians`}</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <SectionLabel2 />
      <p className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[56px] text-white whitespace-nowrap">The Guardians of Tradition</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal relative shrink-0 text-[28px] text-white">Dr. Rajeev Menon</p>
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#c4622d] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Chief Ayurvedic Physician
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
        <div className="relative shrink-0 size-[120px]" data-name="Ellipse">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="120" src={imgEllipse} width="120" />
        </div>
        <Frame19 />
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full opacity-60 relative shrink-0 text-[14px] text-white w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
          With 30 years of clinical expertise in internal medicine and chronic disorder management.
        </p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal relative shrink-0 text-[28px] text-white">Dr. Lakshmi Nair</p>
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#c4622d] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Panchakarma Specialist
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
        <div className="relative shrink-0 size-[120px]" data-name="Ellipse">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="120" src={imgEllipse1} width="120" />
        </div>
        <Frame21 />
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full opacity-60 relative shrink-0 text-[14px] text-white w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>{`An expert in detox protocols and women's holistic wellness through Ayurvedic sciences.`}</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal relative shrink-0 text-[28px] text-white">Dr. Anand Krishnan</p>
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#c4622d] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>{`Yoga & Meditation Guide`}</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
        <div className="relative shrink-0 size-[120px]" data-name="Ellipse">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="120" src={imgEllipse2} width="120" />
        </div>
        <Frame23 />
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full opacity-60 relative shrink-0 text-[14px] text-white w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
          Leading our spiritual integration programs with a focus on Pranayama and mindfulness.
        </p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal relative shrink-0 text-[28px] text-white">Meera Varma</p>
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#c4622d] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Head Therapist
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
        <div className="relative shrink-0 size-[120px]" data-name="Ellipse">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="120" src={imgEllipse3} width="120" />
        </div>
        <Frame25 />
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full opacity-60 relative shrink-0 text-[14px] text-white w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
          Overseeing the technical precision of our Abhyanga and Shirodhara body therapies.
        </p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[32px] h-[354px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame18 />
      <Frame20 />
      <Frame22 />
      <Frame24 />
    </div>
  );
}

function Team() {
  return (
    <div className="bg-[#2c4a2e] relative shrink-0 w-full" data-name="team">
      <div className="content-stretch flex flex-col gap-[80px] items-start px-[80px] py-[120px] relative size-full">
        <Frame16 />
        <Frame17 />
      </div>
    </div>
  );
}

function PropertySection() {
  return (
    <div className="h-[640px] relative shrink-0 w-full" data-name="property-section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgPropertySection} />
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
      </div>
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end p-[80px] relative size-full">
          <p className="[word-break:break-word] font-['Playfair_Display:Italic',sans-serif] font-normal italic leading-[normal] relative shrink-0 text-[32px] text-white whitespace-nowrap">Set across 12 acres in the Western Ghats, Kerala</p>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[240px]" data-name="Frame">
      <div className="bg-white relative rounded-[50px] shrink-0 size-[100px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Ministry of AYUSH Certified
      </p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[240px]" data-name="Frame">
      <div className="bg-white relative rounded-[50px] shrink-0 size-[100px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Kerala Tourism Approved
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[240px]" data-name="Frame">
      <div className="bg-white relative rounded-[50px] shrink-0 size-[100px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        NABH Accredited
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[240px]" data-name="Frame">
      <div className="bg-white relative rounded-[50px] shrink-0 size-[100px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        ISO 9001:2015
      </p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame27 />
      <Frame28 />
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Certifications() {
  return (
    <div className="bg-[#faf7f2] relative shrink-0 w-full" data-name="certifications">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center px-[80px] py-[100px] relative size-full">
          <p className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[40px] whitespace-nowrap">{`Certified & Recognized`}</p>
          <Frame26 />
          <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-60 relative shrink-0 text-[13px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
            Committed to the highest standards of safety, hygiene, and authentic practice.
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[normal] min-w-px relative text-white" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold opacity-70 relative shrink-0 text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Our Vision
      </p>
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[36px] w-[min-content]">{`To be the world's most trusted authentic Ayurvedic healing retreat.`}</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[normal] min-w-px relative text-white" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold opacity-70 relative shrink-0 text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Our Mission
      </p>
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[36px] w-[min-content]">To restore health, harmony and happiness through the timeless science of Ayurveda.</p>
    </div>
  );
}

function VisionMission() {
  return (
    <div className="bg-[#c4622d] relative shrink-0 w-full" data-name="vision-mission">
      <div className="content-stretch flex gap-[80px] items-start p-[80px] relative size-full">
        <Frame31 />
        <div className="flex h-[160px] items-center justify-center relative shrink-0 w-0">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[160px]" data-name="Line">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 1">
                  <line id="Line" opacity="0.2" stroke="var(--stroke-0, white)" x2="160" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame32 />
      </div>
    </div>
  );
}

function SectionLabel3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="section-label">
      <div className="h-0 relative shrink-0 w-[24px]" data-name="line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
            <line id="Line" stroke="var(--stroke-0, #C4622D)" x2="24" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[13px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Lives Transformed
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <SectionLabel3 />
      <p className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[56px] whitespace-nowrap">Words from Our Heart</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame" opacity="0.2">
          <g id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#2d241e] text-[18px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Isabella R.
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#6b5e54] text-[14px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Spain • 21-Day Transformation
      </p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[56px]" data-name="Ellipse">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="56" src={imgEllipse4} width="56" />
      </div>
      <Frame38 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#faf7f2] drop-shadow-[0px_4px_12px_rgba(0,0,0,0.03)] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[48px] relative size-full">
        <Frame36 />
        <p className="[word-break:break-word] font-['DM_Sans:Italic',sans-serif] font-normal italic leading-[1.6] min-w-full relative shrink-0 text-[#2d241e] text-[20px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>{`"The personalized attention and the depth of knowledge shown by the physicians changed my perspective on health entirely. I arrived exhausted and left with a renewed sense of purpose."`}</p>
        <Frame37 />
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame" opacity="0.2">
          <g id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#2d241e] text-[18px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Marcus T.
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#6b5e54] text-[14px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        United States • 14-Day Panchakarma
      </p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[56px]" data-name="Ellipse">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="56" src={imgEllipse5} width="56" />
      </div>
      <Frame42 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[#faf7f2] drop-shadow-[0px_4px_12px_rgba(0,0,0,0.03)] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[48px] relative size-full">
        <Frame40 />
        <p className="[word-break:break-word] font-['DM_Sans:Italic',sans-serif] font-normal italic leading-[1.6] min-w-full relative shrink-0 text-[#2d241e] text-[20px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>{`"Authenticity is the word that defines Ayurmana. It is not a spa; it is a clinical center where traditional values are honored in every massage, meal, and meditation."`}</p>
        <Frame41 />
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[32px] h-[376px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame35 />
      <Frame39 />
    </div>
  );
}

function GuestStories() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="guest-stories">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center px-[80px] py-[120px] relative size-full">
          <Frame33 />
          <Frame34 />
        </div>
      </div>
    </div>
  );
}

function Flower2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="flower-2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="flower-2">
          <path d={svgPaths.p388e1c00} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-semibold items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Playfair_Display:SemiBold',sans-serif] mb-[-2px] relative shrink-0 text-[28px] text-white">VEDIC HERMITAGE</p>
      <p className="font-['DM_Sans:SemiBold',sans-serif] relative shrink-0 text-[#c4622d] text-[12px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Ayurmana
      </p>
    </div>
  );
}

function Logo1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="logo">
      <Flower2 />
      <Frame45 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[405px]" data-name="Frame">
      <Logo1 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full opacity-60 relative shrink-0 text-[#eae7e2] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        A sacred legacy of healing through nature. We preserve the purity of Ayurvedic traditions for generations.
      </p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#c4622d] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
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

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#c4622d] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
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

function Frame46() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[80px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <Frame47 />
      <Frame48 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="h-[24px] relative shrink-0 w-[156px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 156 24">
        <g id="Frame">
          <path d={svgPaths.p3ef4fc40} fill="var(--fill-0, white)" id="Vector" opacity="0.7" />
          <path d={svgPaths.padfe180} fill="var(--fill-0, white)" id="Vector_2" opacity="0.7" />
          <path d={svgPaths.p3f6bc580} fill="var(--fill-0, white)" id="Vector_3" opacity="0.7" />
          <path d={svgPaths.p3fd70c00} fill="var(--fill-0, white)" id="Vector_4" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[296px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Follow Our Story
      </p>
      <Frame50 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame44 />
      <Frame46 />
      <Frame49 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-normal items-center justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:Regular',sans-serif] opacity-40 relative shrink-0 text-[#eae7e2] text-[14px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        © 2024 Vedic Hermitage Ayurmana. All Rights Reserved.
      </p>
      <p className="font-['Playfair_Display:Italic',sans-serif] italic opacity-80 relative shrink-0 text-[#c4622d] text-[20px]">Healing Through Nature. Rooted in Tradition.</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0823529" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame52 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#2c4a2e] relative shrink-0 w-full" data-name="footer">
      <div className="content-stretch flex flex-col gap-[64px] items-start p-[80px] relative size-full">
        <Frame43 />
        <Frame51 />
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="about-page">
      <AboutHero />
      <Navbar />
      <FoundingStory />
      <Philosophy />
      <Team />
      <PropertySection />
      <Certifications />
      <VisionMission />
      <GuestStories />
      <Footer />
    </div>
  );
}