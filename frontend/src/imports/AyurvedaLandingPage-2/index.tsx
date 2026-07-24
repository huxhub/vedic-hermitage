import svgPaths from "./svg-se7b6a4pns";
import imgHero from "./b541fd91c507a1093a8f548773aad89c39634714.png";
import imgRectangle from "./3d25701f3df9be1a18f70dd17d93144a3b31b15d.png";
import imgRectangle1 from "./eec12e62778dadd1fb3a6530bdada5cccae38092.png";
import imgRectangle2 from "./ed4942762bfea5258f3063eb9cc6384dcb7cd6b1.png";
import imgRectangle3 from "./d76a0594717cb4ac1670a8785de616377ca9ba99.png";
import imgRectangle4 from "./e5dd23e4661ae55488279208ba92feaca24f3fab.png";
import imgRectangle5 from "./91877287006c415a6f60189fcb2e22c87e9a4a33.png";
import imgRectangle6 from "./823e3472863bd026aed51cb8e046b8244254dd2c.png";
import imgImage from "./de4b2ea82a4873f099ee76357c0ba835582303a8.png";
import imgImage1 from "./e49042bbf297762d8fbceca50836c3c942181d52.png";
import imgImage2 from "./6ba3a9a527648c4224da30297d3301e54368b2d6.png";
import imgImage3 from "./b4cbf7df350ed808af46fee9a6dc02777e0c6a71.png";
import imgImage4 from "./d14ddf2a08d80bf98e11e2a10e5a301ef61db5d8.png";
import imgImage5 from "./4d168fe5d289cf379da85b25848d0b2a3addd74a.png";
import imgEllipse from "./bc78108376a5add8241382b474cbd568bbdeb482.png";
import imgEllipse1 from "./db463b3c67175d2422c88c61903215bf37f98b43.png";
import imgEllipse2 from "./4296f37a5975c7092834c632b3869b8b6a70deac.png";
import imgRectangle7 from "./ec690af8e05302e3cf8e32c023bb610388137663.png";
import imgRectangle8 from "./05643dd0d54b005d86bc0e19265ca37a215f137e.png";
import imgRectangle9 from "./56acaf9ec6f41df6f5f9fb2c64171b6983b54234.png";
import imgRectangle10 from "./f502bc4fa4678b15faaa4feff7ebe946bff708f9.png";
import imgRectangle11 from "./a64bc54b800b3ca53aca955630409ae9f1f676de.png";
import imgFrame from "./c28e40e9312d4cabe682b83616b6ec85830e0db3.png";

function Frame2() {
  return (
    <div className="bg-[#c4622d] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Explore Treatments
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#c4622d] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Watch Our Story
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pt-[16px] relative shrink-0" data-name="Frame">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[900px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.05] min-w-full relative shrink-0 text-[88px] text-center text-white w-[min-content]">Rediscover Balance Through Ancient Ayurvedic Wisdom</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] opacity-90 relative shrink-0 text-[20px] text-center text-white w-[640px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Nestled in the foothills of the Western Ghats, we offer authentic Panchakarma therapies and personalized Ayurvedic healing programs.
      </p>
      <Frame1 />
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col h-[900px] items-center justify-center relative shrink-0 w-full" data-name="hero">
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
          <g id="Vector">
            <path d={svgPaths.p90dda20} fill="var(--fill-0, #2C4A2E)" />
            <path d={svgPaths.p27c29d00} stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Frame">
      <Flower />
    </div>
  );
}

function Frame5() {
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
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#c4622d] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[15px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Book a Retreat
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Home
      </p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Treatments
      </p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Packages
      </p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Facilities
      </p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Gallery
      </p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        About
      </p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Contact
      </p>
      <Frame7 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-white content-stretch flex h-[80px] items-center justify-between left-0 px-[80px] right-0 top-0" data-name="navbar">
      <div aria-hidden className="absolute border border-[#e6e2dc] border-solid inset-0 pointer-events-none" />
      <Logo />
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#c4622d] content-stretch flex items-start justify-center py-[24px] relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-center text-white uppercase whitespace-pre" style={{ fontVariationSettings: '"opsz" 14' }}>{`Over 200 Years of Authentic Ayurvedic Tradition  |  Certified Physicians  |  Kerala Heritage Retreat`}</p>
    </div>
  );
}

function Frame11() {
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
        Our Heritage
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame11 />
      <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.1] min-w-full relative shrink-0 text-[#2d241e] text-[56px] w-[min-content]">A Sanctuary for Healing</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#6b5e54] text-[18px] w-[624px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Rooted in the ancient Vedic sciences, Vedic Hermitage Ayurmana is a gateway to holistic restoration. We believe health is a dynamic balance between mind, body, and spirit.
      </p>
    </div>
  );
}

function CircleCheck() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="circle-check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_517)" id="circle-check">
          <path d={svgPaths.p1e29ca40} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_517">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <CircleCheck />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame14 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Personalized Dosha assessment
      </p>
    </div>
  );
}

function CircleCheck1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="circle-check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_517)" id="circle-check">
          <path d={svgPaths.p1e29ca40} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_517">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <CircleCheck1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame16 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Traditional Panchakarma
      </p>
    </div>
  );
}

function CircleCheck2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="circle-check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_517)" id="circle-check">
          <path d={svgPaths.p1e29ca40} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_517">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <CircleCheck2 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame18 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Organic Herbal Remedies
      </p>
    </div>
  );
}

function CircleCheck3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="circle-check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_517)" id="circle-check">
          <path d={svgPaths.p1e29ca40} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_517">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[18px]" data-name="Frame">
      <CircleCheck3 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame20 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Expert Ayurvedic Physicians
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame13 />
      <Frame15 />
      <Frame17 />
      <Frame19 />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p3bfa7a00} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Frame">
      <ArrowRight />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[15px] underline whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Our Story
      </p>
      <Frame22 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative self-stretch shrink-0 w-[624px]" data-name="Frame">
      <Frame10 />
      <Frame12 />
      <Frame21 />
    </div>
  );
}

function About() {
  return (
    <div className="bg-[#faf7f2] relative shrink-0 w-full" data-name="about">
      <div className="content-stretch flex gap-[32px] items-start px-[80px] py-[120px] relative size-full">
        <div className="h-[640px] relative rounded-[8px] shrink-0 w-[624px]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle} />
        </div>
        <Frame9 />
      </div>
    </div>
  );
}

function Frame25() {
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
        Ancient Arts
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame25 />
      <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.1] min-w-full relative shrink-0 text-[#2d241e] text-[56px] text-center w-[min-content]">Our Signature Treatments</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2d241e] text-[28px] w-full">Panchakarma Detox</p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6b5e54] text-[14px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
          A comprehensive five-step purification process to remove toxins.
        </p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div className="h-[280px] relative shrink-0 w-full" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
      <Frame30 />
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="clock">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_488)" id="clock">
          <path d={svgPaths.p3da783c0} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_488">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="Frame">
      <Clock />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <Frame33 />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        90 min
      </p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#d9d1c7] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <Frame32 />
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
            Learn More
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#faf7f2] content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px overflow-clip relative rounded-[8px] self-stretch" data-name="Frame">
      <Frame29 />
      <Frame31 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2d241e] text-[28px] w-full">Abhyanga Massage</p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6b5e54] text-[14px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
          A rhythmic body massage using medicated oils tailored to your Dosha.
        </p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div className="h-[280px] relative shrink-0 w-full" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle2} />
      </div>
      <Frame36 />
    </div>
  );
}

function Clock1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="clock">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_488)" id="clock">
          <path d={svgPaths.p3da783c0} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_488">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="Frame">
      <Clock1 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <Frame39 />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        60 min
      </p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#d9d1c7] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <Frame38 />
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
            Learn More
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#faf7f2] content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px overflow-clip relative rounded-[8px] self-stretch" data-name="Frame">
      <Frame35 />
      <Frame37 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2d241e] text-[28px] w-full">Shirodhara Oil Therapy</p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6b5e54] text-[14px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
          A continuous flow of warm oil over the forehead to calm the nervous system.
        </p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div className="h-[280px] relative shrink-0 w-full" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
      </div>
      <Frame42 />
    </div>
  );
}

function Clock2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="clock">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_488)" id="clock">
          <path d={svgPaths.p3da783c0} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_488">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="Frame">
      <Clock2 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <Frame45 />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        45 min
      </p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#d9d1c7] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <Frame44 />
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
            Learn More
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-[#faf7f2] content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px overflow-clip relative rounded-[8px] self-stretch" data-name="Frame">
      <Frame41 />
      <Frame43 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[32px] h-[484px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame28 />
      <Frame34 />
      <Frame40 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2d241e] text-[28px] w-full">Pizhichil Oil Bath</p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6b5e54] text-[14px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
          A unique combination of oil massage and heat therapy for rejuvenation.
        </p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div className="h-[280px] relative shrink-0 w-full" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle4} />
      </div>
      <Frame49 />
    </div>
  );
}

function Clock3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="clock">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_488)" id="clock">
          <path d={svgPaths.p3da783c0} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_488">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="Frame">
      <Clock3 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <Frame52 />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        90 min
      </p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#d9d1c7] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <Frame51 />
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
            Learn More
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[#faf7f2] content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px overflow-clip relative rounded-[8px] self-stretch" data-name="Frame">
      <Frame48 />
      <Frame50 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2d241e] text-[28px] w-full">Nasyam Cleansing</p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6b5e54] text-[14px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
          Therapeutic cleansing of the sinus and head region with herbal extracts.
        </p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div className="h-[280px] relative shrink-0 w-full" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle5} />
      </div>
      <Frame55 />
    </div>
  );
}

function Clock4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="clock">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_488)" id="clock">
          <path d={svgPaths.p3da783c0} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_488">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="Frame">
      <Clock4 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <Frame58 />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        30 min
      </p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#d9d1c7] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <Frame57 />
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
            Learn More
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-[#faf7f2] content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px overflow-clip relative rounded-[8px] self-stretch" data-name="Frame">
      <Frame54 />
      <Frame56 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2d241e] text-[28px] w-full">Kizhi Pouch Massage</p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6b5e54] text-[14px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
          Massage with warm herbal pouches to relieve pain and inflammation.
        </p>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div className="h-[280px] relative shrink-0 w-full" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle6} />
      </div>
      <Frame61 />
    </div>
  );
}

function Clock5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="clock">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_488)" id="clock">
          <path d={svgPaths.p3da783c0} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_488">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="Frame">
      <Clock5 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <Frame64 />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        60 min
      </p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#d9d1c7] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <Frame63 />
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
            Learn More
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[#faf7f2] content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px overflow-clip relative rounded-[8px] self-stretch" data-name="Frame">
      <Frame60 />
      <Frame62 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[32px] h-[484px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame47 />
      <Frame53 />
      <Frame59 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame27 />
      <Frame46 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[64px] items-start px-[80px] py-[120px] relative size-full">
        <Frame24 />
        <Frame26 />
      </div>
    </div>
  );
}

function Frame67() {
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
        Curated Journeys
      </p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame67 />
      <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.1] min-w-full relative shrink-0 text-[#eae7e2] text-[56px] text-center w-[min-content]">Healing Retreat Packages</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[36px] text-white w-[min-content]">7-Day Rejuvenation</p>
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#c4622d] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Restorative Healing
      </p>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Frame">
      <Check />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame74 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#eae7e2] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Daily Abhyanga
      </p>
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Frame">
      <Check1 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame76 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#eae7e2] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>{`Yoga & Meditation`}</p>
    </div>
  );
}

function Check2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Frame">
      <Check2 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame78 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#eae7e2] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Satvik Diet Plan
      </p>
    </div>
  );
}

function Check3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Frame">
      <Check3 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame80 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#eae7e2] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Dosha Consultation
      </p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame73 />
      <Frame75 />
      <Frame77 />
      <Frame79 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame71 />
      <Frame72 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="bg-[#c4622d] relative rounded-[6px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
            Enquire Now
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[48px] relative shrink-0 w-full" data-name="Frame">
      <Frame82 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.13)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[48px] relative size-full">
        <Frame70 />
        <Frame81 />
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[36px] text-white w-[min-content]">14-Day Panchakarma</p>
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#c4622d] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Deep Detoxification
      </p>
    </div>
  );
}

function Check4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Frame">
      <Check4 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame88 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#eae7e2] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Full Detox Cycle
      </p>
    </div>
  );
}

function Check5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Frame">
      <Check5 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame90 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#eae7e2] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Internal Oleation
      </p>
    </div>
  );
}

function Check6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Frame">
      <Check6 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame92 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#eae7e2] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Panchakarma Therapies
      </p>
    </div>
  );
}

function Check7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Frame">
      <Check7 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame94 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#eae7e2] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Physician Oversight
      </p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame87 />
      <Frame89 />
      <Frame91 />
      <Frame93 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame85 />
      <Frame86 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="bg-[#c4622d] relative rounded-[6px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
            Enquire Now
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[48px] relative shrink-0 w-full" data-name="Frame">
      <Frame96 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.13)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[48px] relative size-full">
        <Frame84 />
        <Frame95 />
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[36px] text-white w-[min-content]">21-Day Transformation</p>
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#c4622d] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Life Reset Program
      </p>
    </div>
  );
}

function Check8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Frame">
      <Check8 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame102 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#eae7e2] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Intensive Healing
      </p>
    </div>
  );
}

function Check9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Frame">
      <Check9 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame104 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#eae7e2] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Stress Management
      </p>
    </div>
  );
}

function Check10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Frame">
      <Check10 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame106 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#eae7e2] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Immunity Boosting
      </p>
    </div>
  );
}

function Check11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Frame">
      <Check11 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame108 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#eae7e2] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Long-term Wellness Plan
      </p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame101 />
      <Frame103 />
      <Frame105 />
      <Frame107 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame99 />
      <Frame100 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="bg-[#c4622d] relative rounded-[6px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
            Enquire Now
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[48px] relative shrink-0 w-full" data-name="Frame">
      <Frame110 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.13)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[48px] relative size-full">
        <Frame98 />
        <Frame109 />
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[32px] h-[472px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame69 />
      <Frame83 />
      <Frame97 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-[#2c4a2e] relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[80px] items-start px-[80px] py-[120px] relative size-full">
        <Frame66 />
        <Frame68 />
      </div>
    </div>
  );
}

function Building() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="building">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="building">
          <path d={svgPaths.p1ebf1e80} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Frame">
      <Building />
    </div>
  );
}

function Frame113() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[64px]" data-name="Frame">
      <Frame114 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#2d241e] text-[32px]">200+ Years</p>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#6b5e54] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Heritage
      </p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[241px]" data-name="Frame">
      <Frame113 />
      <Frame115 />
    </div>
  );
}

function Ambulance() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="ambulance">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ambulance">
          <path d={svgPaths.p1b7f30c0} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Frame">
      <Ambulance />
    </div>
  );
}

function Frame117() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[64px]" data-name="Frame">
      <Frame118 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#2d241e] text-[32px]">Physicians</p>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#6b5e54] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Expert Physicians
      </p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[241px]" data-name="Frame">
      <Frame117 />
      <Frame119 />
    </div>
  );
}

function UserCheck() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="user-check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="user-check">
          <path d={svgPaths.pa360100} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Frame">
      <UserCheck />
    </div>
  );
}

function Frame121() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[64px]" data-name="Frame">
      <Frame122 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#2d241e] text-[32px]">5000+</p>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#6b5e54] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Guests Healed
      </p>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[241px]" data-name="Frame">
      <Frame121 />
      <Frame123 />
    </div>
  );
}

function Leaf() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="leaf">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="leaf">
          <path d={svgPaths.p261ac300} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Frame">
      <Leaf />
    </div>
  );
}

function Frame125() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[64px]" data-name="Frame">
      <Frame126 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#2d241e] text-[32px]">Certified</p>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#6b5e54] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Organic Herbs
      </p>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[241px]" data-name="Frame">
      <Frame125 />
      <Frame127 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="bg-[#faf7f2] relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex items-start justify-between p-[80px] relative size-full">
        <Frame112 />
        <Frame116 />
        <Frame120 />
        <Frame124 />
      </div>
    </div>
  );
}

function Frame129() {
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
        Our Facilities
      </p>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame129 />
      <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.1] min-w-full relative shrink-0 text-[#2d241e] text-[56px] text-center w-[min-content]">World-Class Ayurvedic Facilities</p>
    </div>
  );
}

function Image() {
  return (
    <div className="h-[220px] relative shrink-0 w-full" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
        <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#c4622d] text-[24px] w-full">Natural Pond</p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6b5e54] text-[14px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
          Serene natural water body for relaxation
        </p>
      </div>
    </div>
  );
}

function FacilityCard() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[12px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.03)]" data-name="facility-card">
      <Image />
      <Content />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[220px] relative shrink-0 w-full" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
        <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#c4622d] text-[24px] w-full">Organic Food</p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6b5e54] text-[14px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
          Farm-fresh Sattvic meals and herbal cuisine
        </p>
      </div>
    </div>
  );
}

function FacilityCard1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[12px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.03)]" data-name="facility-card">
      <Image1 />
      <Content1 />
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[220px] relative shrink-0 w-full" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
        <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#c4622d] text-[24px] w-full">Meditation Huts</p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6b5e54] text-[14px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
          Private huts nestled in nature for deep meditation
        </p>
      </div>
    </div>
  );
}

function FacilityCard2() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[12px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.03)]" data-name="facility-card">
      <Image2 />
      <Content2 />
    </div>
  );
}

function Image3() {
  return (
    <div className="h-[220px] relative shrink-0 w-full" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
        <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#c4622d] text-[24px] w-full">Neat Environment</p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6b5e54] text-[14px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
          Pristine, peaceful and immaculately maintained grounds
        </p>
      </div>
    </div>
  );
}

function FacilityCard3() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[12px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.03)]" data-name="facility-card">
      <Image3 />
      <Content3 />
    </div>
  );
}

function Image4() {
  return (
    <div className="h-[220px] relative shrink-0 w-full" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
    </div>
  );
}

function Content4() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
        <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#c4622d] text-[24px] w-full">Treatment Rooms</p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6b5e54] text-[14px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
          Traditionally designed, fully equipped therapy rooms
        </p>
      </div>
    </div>
  );
}

function FacilityCard4() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[12px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.03)]" data-name="facility-card">
      <Image4 />
      <Content4 />
    </div>
  );
}

function FacilityGrid() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="facility-grid">
      <FacilityCard />
      <FacilityCard1 />
      <FacilityCard2 />
      <FacilityCard3 />
      <FacilityCard4 />
    </div>
  );
}

function Facilities() {
  return (
    <div className="bg-[#faf7f2] relative shrink-0 w-full" data-name="facilities">
      <div className="content-stretch flex flex-col gap-[64px] items-start px-[80px] py-[120px] relative size-full">
        <Frame128 />
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#6b5e54] text-[18px] text-center w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
          Vedic Hermitage offers authentic Ayurveda treatments that have been inherited from Poorvaaacharyas (Classical Ayurveda Experts) which ensures you to lead a felicitous life enriched with health, wealth and reputation through the consummated healing process.
        </p>
        <FacilityGrid />
      </div>
    </div>
  );
}

function Image5() {
  return (
    <div className="h-full relative shrink-0 w-[600px]" data-name="image">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage5} />
        <div className="absolute bg-[rgba(44,74,46,0.15)] inset-0" />
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="divider">
      <div className="h-0 relative shrink-0 w-[40px]" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 2">
            <line id="Line" stroke="var(--stroke-0, #C4622D)" strokeWidth="2" x2="40" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal gap-[16px] h-[257px] items-start leading-[1.7] relative shrink-0 text-[#2d241e] text-[16px] w-full" data-name="body">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        Cancer in our ancient Ayurvedic literature is referred to as Karkidagaroga. Cancer was not considered as Maharoga probably because it was not very prevalent at that time or perhaps the treatment was considered relatively easy.
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        These five elements go through the process of Panchikarana which is the method and process of subtle matter transforming into gross matter. This is done through Quintuplication whereby the Panchabhootas first divide into two parts one part of which was further divided into four parts.
      </p>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p3bfa7a00} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ReadMore() {
  return (
    <div className="bg-[#c4622d] content-stretch flex gap-[8px] items-center px-[24px] py-[12px] relative rounded-[6px] shrink-0" data-name="read-more">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Read More
      </p>
      <ArrowRight1 />
    </div>
  );
}

function Content5() {
  return (
    <div className="h-full relative shrink-0 w-[640px]" data-name="content">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[80px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d4a843] text-[13px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Ancient Wisdom
        </p>
        <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.1] min-w-full relative shrink-0 text-[#2c4a2e] text-[42px] w-[min-content]">Cancer in Ayurveda</p>
        <Divider />
        <Body />
        <ReadMore />
      </div>
    </div>
  );
}

function CancerInAyurveda() {
  return (
    <div className="bg-[#faf6f0] content-stretch flex h-[600px] items-start relative shrink-0 w-[1440px]" data-name="cancer-in-ayurveda">
      <Image5 />
      <Content5 />
    </div>
  );
}

function Frame132() {
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
        Kind Words
      </p>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame132 />
      <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.1] min-w-full relative shrink-0 text-[#2d241e] text-[56px] text-center w-[min-content]">Words from Our Guests</p>
    </div>
  );
}

function TextQuote() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="text-quote">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="text-quote" opacity="0.3">
          <path d={svgPaths.p1817a900} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Frame">
      <TextQuote />
    </div>
  );
}

function Frame137() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#2d241e] text-[16px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Sarah M.
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#6b5e54] text-[13px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        United Kingdom
      </p>
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[48px]" data-name="Ellipse">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="48" src={imgEllipse} width="48" />
      </div>
      <Frame137 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_12px_rgba(0,0,0,0.03)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[40px] relative size-full">
        <Frame135 />
        <p className="[word-break:break-word] font-['DM_Sans:Italic',sans-serif] font-normal italic leading-[1.6] min-w-full relative shrink-0 text-[#2d241e] text-[18px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>{`"An absolute sanctuary. The Shirodhara therapy completely reset my nervous system after years of burnout. Life-changing."`}</p>
        <Frame136 />
      </div>
    </div>
  );
}

function TextQuote1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="text-quote">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="text-quote" opacity="0.3">
          <path d={svgPaths.p1817a900} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Frame">
      <TextQuote1 />
    </div>
  );
}

function Frame141() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#2d241e] text-[16px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        David L.
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#6b5e54] text-[13px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Australia
      </p>
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[48px]" data-name="Ellipse">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="48" src={imgEllipse1} width="48" />
      </div>
      <Frame141 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_12px_rgba(0,0,0,0.03)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[40px] relative size-full">
        <Frame139 />
        <p className="[word-break:break-word] font-['DM_Sans:Italic',sans-serif] font-normal italic leading-[1.6] min-w-full relative shrink-0 text-[#2d241e] text-[18px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>{`"The most authentic Ayurvedic experience I've had. The physicians are incredibly knowledgeable and the nature surroundings are breathtaking."`}</p>
        <Frame140 />
      </div>
    </div>
  );
}

function TextQuote2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="text-quote">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="text-quote" opacity="0.3">
          <path d={svgPaths.p1817a900} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Frame">
      <TextQuote2 />
    </div>
  );
}

function Frame145() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#2d241e] text-[16px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Meera K.
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#6b5e54] text-[13px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        India
      </p>
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[48px]" data-name="Ellipse">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="48" src={imgEllipse2} width="48" />
      </div>
      <Frame145 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_12px_rgba(0,0,0,0.03)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[40px] relative size-full">
        <Frame143 />
        <p className="[word-break:break-word] font-['DM_Sans:Italic',sans-serif] font-normal italic leading-[1.6] min-w-full relative shrink-0 text-[#2d241e] text-[18px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>{`"Ayurmana is where tradition lives. The Panchakarma detox was intense but I feel 10 years younger. Deeply grateful."`}</p>
        <Frame144 />
      </div>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame134 />
      <Frame138 />
      <Frame142 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="bg-[#faf8f5] relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[64px] items-start px-[80px] py-[120px] relative size-full">
        <Frame131 />
        <Frame133 />
      </div>
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex h-[400px] items-start overflow-clip relative shrink-0 w-full" data-name="Frame">
      <div className="h-full relative shrink-0 w-[288px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle7} />
      </div>
      <div className="h-full relative shrink-0 w-[288px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle8} />
      </div>
      <div className="h-full relative shrink-0 w-[288px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle9} />
      </div>
      <div className="h-full relative shrink-0 w-[288px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle10} />
      </div>
      <div className="h-full relative shrink-0 w-[288px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle11} />
      </div>
    </div>
  );
}

function Frame149() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[16px] items-center leading-[normal] relative shrink-0 text-center text-white w-full" data-name="Frame">
      <p className="font-['Playfair_Display:Regular',sans-serif] relative shrink-0 text-[64px] w-full">Begin Your Healing Journey Today</p>
      <p className="font-['DM_Sans:Regular',sans-serif] opacity-90 relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        Schedule a personalized consultation with our expert physicians.
      </p>
    </div>
  );
}

function Frame151() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Frame">
      <div className="content-stretch flex items-start px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b5e54] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Enter your email address...
        </p>
      </div>
    </div>
  );
}

function Frame152() {
  return (
    <div className="bg-[#c4622d] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Schedule Consultation
      </p>
    </div>
  );
}

function Frame150() {
  return (
    <div className="bg-white content-stretch flex h-[64px] items-center p-[8px] relative rounded-[4px] shrink-0 w-[600px]" data-name="Frame">
      <Frame151 />
      <Frame152 />
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-[720px]" data-name="Frame">
      <Frame149 />
      <Frame150 />
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[140px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame} />
        <div className="absolute bg-[rgba(196,98,45,0.9)] inset-0" />
      </div>
      <Frame148 />
    </div>
  );
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="map-pin">
          <path d={svgPaths.p3d476500} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame157() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <MapPin />
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame157 />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Address
      </p>
    </div>
  );
}

function Frame158() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] relative shrink-0 text-[#6b5e54] text-[16px] w-full" data-name="Frame">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        Vedic Hermitage,
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        Ayurmana Hills, Kerala,
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        India - 695011
      </p>
    </div>
  );
}

function Frame155() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
        <Frame156 />
        <Frame158 />
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="phone">
          <path d={svgPaths.p28682900} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame161() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <Phone />
    </div>
  );
}

function Frame160() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame161 />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Get in Touch
      </p>
    </div>
  );
}

function Frame162() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] relative shrink-0 text-[#6b5e54] text-[16px] w-full" data-name="Frame">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        +91 471 2345 678
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        reservations@ayurmana.com
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        Open 24/7 for Enquiries
      </p>
    </div>
  );
}

function Frame159() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
        <Frame160 />
        <Frame162 />
      </div>
    </div>
  );
}

function Globe() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="globe">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="globe">
          <path d={svgPaths.p163a41e0} id="Vector" stroke="var(--stroke-0, #C4622D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame165() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <Globe />
    </div>
  );
}

function Frame164() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame165 />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d241e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Location
      </p>
    </div>
  );
}

function Frame166() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] relative shrink-0 text-[#6b5e54] text-[16px] w-full" data-name="Frame">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        View on Map
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        12km from Airport
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        Transfer services available
      </p>
    </div>
  );
}

function Frame163() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
        <Frame164 />
        <Frame166 />
      </div>
    </div>
  );
}

function Frame154() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame155 />
      <Frame159 />
      <Frame163 />
    </div>
  );
}

function Frame153() {
  return (
    <div className="bg-[#faf7f2] relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start p-[80px] relative size-full">
        <Frame154 />
      </div>
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

function Frame170() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Frame">
      <Flower1 />
    </div>
  );
}

function Frame171() {
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
      <Frame170 />
      <Frame171 />
    </div>
  );
}

function Frame169() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[405px]" data-name="Frame">
      <Logo1 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full opacity-60 relative shrink-0 text-[#eae7e2] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        A sacred legacy of healing through nature. We preserve the purity of Ayurvedic traditions for generations.
      </p>
    </div>
  );
}

function Frame173() {
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
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal opacity-80 relative shrink-0 text-[#eae7e2] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Boutique
      </p>
    </div>
  );
}

function Frame174() {
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
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal opacity-80 relative shrink-0 text-[#eae7e2] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Research
      </p>
    </div>
  );
}

function Frame172() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[80px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <Frame173 />
      <Frame174 />
    </div>
  );
}

function Instagram() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="instagram">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="instagram" opacity="0.7">
          <path d={svgPaths.p3094c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame177() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <Instagram />
    </div>
  );
}

function Facebook() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="facebook">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="facebook" opacity="0.7">
          <path d={svgPaths.p14ef82c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame178() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <Facebook />
    </div>
  );
}

function Youtube() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="youtube">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="youtube" opacity="0.7">
          <path d={svgPaths.p1f9670b0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame179() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <Youtube />
    </div>
  );
}

function Twitter() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="twitter">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_460)" id="twitter" opacity="0.7">
          <path d={svgPaths.p2274eb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_460">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame180() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Frame">
      <Twitter />
    </div>
  );
}

function Frame176() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Frame">
      <Frame177 />
      <Frame178 />
      <Frame179 />
      <Frame180 />
    </div>
  );
}

function Frame175() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[296px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Follow Our Story
      </p>
      <Frame176 />
    </div>
  );
}

function Frame168() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame169 />
      <Frame172 />
      <Frame175 />
    </div>
  );
}

function Frame182() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-normal items-center justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:Regular',sans-serif] opacity-40 relative shrink-0 text-[#eae7e2] text-[14px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        © 2024 Vedic Hermitage Ayurmana. All Rights Reserved.
      </p>
      <p className="font-['Playfair_Display:Italic',sans-serif] italic opacity-80 relative shrink-0 text-[#c4622d] text-[20px]">Healing Through Nature. Rooted in Tradition.</p>
    </div>
  );
}

function Frame181() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0823529" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame182 />
    </div>
  );
}

function Frame167() {
  return (
    <div className="bg-[#2c4a2e] relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[64px] items-start p-[80px] relative size-full">
        <Frame168 />
        <Frame181 />
      </div>
    </div>
  );
}

export default function AyurvedaLandingPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="ayurveda-landing-page">
      <Hero />
      <Navbar />
      <Frame8 />
      <About />
      <Frame23 />
      <Frame65 />
      <Frame111 />
      <Facilities />
      <CancerInAyurveda />
      <Frame130 />
      <Frame146 />
      <Frame147 />
      <Frame153 />
      <Frame167 />
    </div>
  );
}