import svgPaths from "./svg-a0ttegdfdb";
import imgHero from "./f64907bc5d5efd0f951b9466796a724d3e252b6b.png";
import imgImage from "./fd954b93dd8eb4110d08ff50c37294ab4731c9e0.png";
import imgImage1 from "./69db35beb147eb4285c5cb99fb1e3df1d8c3bbc8.png";
import imgImage2 from "./cc602af4bfb5b7b2a35d3806ad34905dd2881b77.png";
import imgImage3 from "./bf26e31e76c1a38c5e329fa92642bcca6a492462.png";
import imgImage4 from "./c1f18c2dc180af1b3496d4e3db6b3b36b1ce07c5.png";
import imgImage5 from "./4cf88660277dfe1f62c5d0d2af60a5e67172bb7c.png";
import imgImage6 from "./6aa3d8e4095b268af9fceb8be632454ef2266110.png";
import imgImage7 from "./67417c631e8f2871a5c3f8da68876fd8eb823b7e.png";
import imgImage8 from "./7178948e66e4a78127162b3d5db2b78d726bf493.png";
import imgImage9 from "./c781a9c23d725f8b5739de4e0926c8e91e6bcf7e.png";
import imgImage10 from "./6ddbaabb394e10f89de84fa976ec2b2c739f9c04.png";
import imgImage11 from "./7eb09d607eddcd1e495a6aedc89aa33ea4085949.png";

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d4a843] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        GALLERY
      </p>
      <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[72px] text-white whitespace-nowrap">A Glimpse Into Our World</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] opacity-90 relative shrink-0 text-[18px] text-center text-white w-[640px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Explore the beauty of our retreat, treatments, and natural surroundings.
      </p>
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col h-[500px] items-center justify-center relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(44,74,46,0.6)] inset-0" />
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
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[15px] underline whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
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

function TabAll() {
  return (
    <div className="bg-[#2c4a2e] content-stretch flex items-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="tab-all">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        All
      </p>
    </div>
  );
}

function TabTreatments() {
  return (
    <div className="content-stretch flex items-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="tab-treatments">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Treatments
      </p>
    </div>
  );
}

function TabProperty() {
  return (
    <div className="content-stretch flex items-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="tab-property">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Property
      </p>
    </div>
  );
}

function TabNature() {
  return (
    <div className="content-stretch flex items-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="tab-nature">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Nature
      </p>
    </div>
  );
}

function TabFood() {
  return (
    <div className="content-stretch flex items-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="tab-food">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Food
      </p>
    </div>
  );
}

function TabCeremonies() {
  return (
    <div className="content-stretch flex items-center px-[20px] py-[12px] relative rounded-[999px] shrink-0" data-name="tab-ceremonies">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Ceremonies
      </p>
    </div>
  );
}

function FilterTabs() {
  return (
    <div className="bg-[#faf7f2] relative shrink-0 w-full" data-name="filter-tabs">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[80px] py-[24px] relative size-full">
          <TabAll />
          <TabTreatments />
          <TabProperty />
          <TabNature />
          <TabFood />
          <TabCeremonies />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[300px] left-0 top-0 w-[413px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Scrim() {
  return (
    <div className="[word-break:break-word] absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[4px] h-[90px] items-start leading-[normal] left-0 px-[16px] py-[14px] right-0 to-[rgba(0,0,0,0.8)]" data-name="scrim">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Treatments
      </p>
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] text-white w-[min-content]">Treatment room interior</p>
    </div>
  );
}

function Card() {
  return (
    <div className="h-[300px] overflow-clip relative rounded-[10px] shrink-0 w-[413px]" data-name="card">
      <Image />
      <Scrim />
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute h-[300px] left-0 top-0 w-[413px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Scrim1() {
  return (
    <div className="[word-break:break-word] absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[4px] h-[90px] items-start leading-[normal] left-0 px-[16px] py-[14px] right-0 to-[rgba(0,0,0,0.8)]" data-name="scrim">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Treatments
      </p>
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] text-white w-[min-content]">Oil therapy session</p>
    </div>
  );
}

function Card1() {
  return (
    <div className="h-[300px] overflow-clip relative rounded-[10px] shrink-0 w-[413px]" data-name="card">
      <Image1 />
      <Scrim1 />
    </div>
  );
}

function Image2() {
  return (
    <div className="absolute h-[300px] left-0 top-0 w-[413px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Scrim2() {
  return (
    <div className="[word-break:break-word] absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[4px] h-[90px] items-start leading-[normal] left-0 px-[16px] py-[14px] right-0 to-[rgba(0,0,0,0.8)]" data-name="scrim">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Property
      </p>
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] text-white w-[min-content]">Kerala aerial view</p>
    </div>
  );
}

function Card2() {
  return (
    <div className="h-[300px] overflow-clip relative rounded-[10px] shrink-0 w-[413px]" data-name="card">
      <Image2 />
      <Scrim2 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[20px] h-[300px] items-start relative shrink-0 w-full" data-name="row-1">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Image3() {
  return (
    <div className="absolute h-[300px] left-0 top-0 w-[413px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

function Scrim3() {
  return (
    <div className="[word-break:break-word] absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[4px] h-[90px] items-start leading-[normal] left-0 px-[16px] py-[14px] right-0 to-[rgba(0,0,0,0.8)]" data-name="scrim">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Nature
      </p>
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] text-white w-[min-content]">Herb garden</p>
    </div>
  );
}

function Card3() {
  return (
    <div className="h-[300px] overflow-clip relative rounded-[10px] shrink-0 w-[413px]" data-name="card">
      <Image3 />
      <Scrim3 />
    </div>
  );
}

function Image4() {
  return (
    <div className="absolute h-[300px] left-0 top-0 w-[413px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
    </div>
  );
}

function Scrim4() {
  return (
    <div className="[word-break:break-word] absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[4px] h-[90px] items-start leading-[normal] left-0 px-[16px] py-[14px] right-0 to-[rgba(0,0,0,0.8)]" data-name="scrim">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Property
      </p>
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] text-white w-[min-content]">Meditation hut exterior</p>
    </div>
  );
}

function Card4() {
  return (
    <div className="h-[300px] overflow-clip relative rounded-[10px] shrink-0 w-[413px]" data-name="card">
      <Image4 />
      <Scrim4 />
    </div>
  );
}

function Image5() {
  return (
    <div className="absolute h-[300px] left-0 top-0 w-[413px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
    </div>
  );
}

function Scrim5() {
  return (
    <div className="[word-break:break-word] absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[4px] h-[90px] items-start leading-[normal] left-0 px-[16px] py-[14px] right-0 to-[rgba(0,0,0,0.8)]" data-name="scrim">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Treatments
      </p>
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] text-white w-[min-content]">Panchakarma room</p>
    </div>
  );
}

function Card5() {
  return (
    <div className="h-[300px] overflow-clip relative rounded-[10px] shrink-0 w-[413px]" data-name="card">
      <Image5 />
      <Scrim5 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[20px] h-[300px] items-start relative shrink-0 w-full" data-name="row-2">
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  );
}

function Image6() {
  return (
    <div className="absolute h-[300px] left-0 top-0 w-[413px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
    </div>
  );
}

function Scrim6() {
  return (
    <div className="[word-break:break-word] absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[4px] h-[90px] items-start leading-[normal] left-0 px-[16px] py-[14px] right-0 to-[rgba(0,0,0,0.8)]" data-name="scrim">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Food
      </p>
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] text-white w-[min-content]">Organic food spread</p>
    </div>
  );
}

function Card6() {
  return (
    <div className="h-[300px] overflow-clip relative rounded-[10px] shrink-0 w-[413px]" data-name="card">
      <Image6 />
      <Scrim6 />
    </div>
  );
}

function Image7() {
  return (
    <div className="absolute h-[300px] left-0 top-0 w-[413px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
    </div>
  );
}

function Scrim7() {
  return (
    <div className="[word-break:break-word] absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[4px] h-[90px] items-start leading-[normal] left-0 px-[16px] py-[14px] right-0 to-[rgba(0,0,0,0.8)]" data-name="scrim">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Property
      </p>
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] text-white w-[min-content]">Property entrance gate</p>
    </div>
  );
}

function Card7() {
  return (
    <div className="h-[300px] overflow-clip relative rounded-[10px] shrink-0 w-[413px]" data-name="card">
      <Image7 />
      <Scrim7 />
    </div>
  );
}

function Image8() {
  return (
    <div className="absolute h-[300px] left-0 top-0 w-[413px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
    </div>
  );
}

function Scrim8() {
  return (
    <div className="[word-break:break-word] absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[4px] h-[90px] items-start leading-[normal] left-0 px-[16px] py-[14px] right-0 to-[rgba(0,0,0,0.8)]" data-name="scrim">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Nature
      </p>
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] text-white w-[min-content]">Yoga session at sunrise</p>
    </div>
  );
}

function Card8() {
  return (
    <div className="h-[300px] overflow-clip relative rounded-[10px] shrink-0 w-[413px]" data-name="card">
      <Image8 />
      <Scrim8 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[20px] h-[300px] items-start relative shrink-0 w-full" data-name="row-3">
      <Card6 />
      <Card7 />
      <Card8 />
    </div>
  );
}

function Image9() {
  return (
    <div className="absolute h-[300px] left-0 top-0 w-[413px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
    </div>
  );
}

function Scrim9() {
  return (
    <div className="[word-break:break-word] absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[4px] h-[90px] items-start leading-[normal] left-0 px-[16px] py-[14px] right-0 to-[rgba(0,0,0,0.8)]" data-name="scrim">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Treatments
      </p>
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] text-white w-[min-content]">Shirodhara therapy</p>
    </div>
  );
}

function Card9() {
  return (
    <div className="h-[300px] overflow-clip relative rounded-[10px] shrink-0 w-[413px]" data-name="card">
      <Image9 />
      <Scrim9 />
    </div>
  );
}

function Image10() {
  return (
    <div className="absolute h-[300px] left-0 top-0 w-[413px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
    </div>
  );
}

function Scrim10() {
  return (
    <div className="[word-break:break-word] absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[4px] h-[90px] items-start leading-[normal] left-0 px-[16px] py-[14px] right-0 to-[rgba(0,0,0,0.8)]" data-name="scrim">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Ceremonies
      </p>
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] text-white w-[min-content]">Traditional lamps ceremony</p>
    </div>
  );
}

function Card10() {
  return (
    <div className="h-[300px] overflow-clip relative rounded-[10px] shrink-0 w-[413px]" data-name="card">
      <Image10 />
      <Scrim10 />
    </div>
  );
}

function Image11() {
  return (
    <div className="absolute h-[300px] left-0 top-0 w-[413px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
    </div>
  );
}

function Scrim11() {
  return (
    <div className="[word-break:break-word] absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[4px] h-[90px] items-start leading-[normal] left-0 px-[16px] py-[14px] right-0 to-[rgba(0,0,0,0.8)]" data-name="scrim">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Nature
      </p>
      <p className="font-['Playfair_Display:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] text-white w-[min-content]">Guest relaxing by pond</p>
    </div>
  );
}

function Card11() {
  return (
    <div className="h-[300px] overflow-clip relative rounded-[10px] shrink-0 w-[413px]" data-name="card">
      <Image11 />
      <Scrim11 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[20px] h-[300px] items-start relative shrink-0 w-full" data-name="row-4">
      <Card9 />
      <Card10 />
      <Card11 />
    </div>
  );
}

function GalleryGrid() {
  return (
    <div className="bg-[#faf6f0] relative shrink-0 w-full" data-name="gallery-grid">
      <div className="content-stretch flex flex-col gap-[20px] items-start px-[80px] py-[60px] relative size-full">
        <Row />
        <Row1 />
        <Row2 />
        <Row3 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#c4622d] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c4622d] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Load More Photos
      </p>
    </div>
  );
}

function LoadMore() {
  return (
    <div className="relative shrink-0 w-full" data-name="load-more">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[80px] px-[80px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Instagram() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="instagram">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="instagram">
          <path d={svgPaths.p3094c00} id="Vector" stroke="var(--stroke-0, #2C4A2E)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function InstagramIcon() {
  return (
    <div className="bg-[#d4a843] content-stretch flex flex-col items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="instagram-icon">
      <Instagram />
    </div>
  );
}

function InstagramText() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-center relative shrink-0 text-center w-full" data-name="instagram-text">
      <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[40px] text-white whitespace-nowrap">Follow Our Journey</p>
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d4a843] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        @vedichermitage
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] opacity-80 relative shrink-0 text-[#eae7e2] text-[16px] w-[640px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Tag us in your photos for a chance to be featured.
      </p>
    </div>
  );
}

function InstagramButton() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[6px] shrink-0" data-name="instagram-button">
      <div aria-hidden className="absolute border-[#d4a843] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d4a843] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Follow on Instagram
      </p>
    </div>
  );
}

function InstagramCta() {
  return (
    <div className="bg-[#2c4a2e] relative shrink-0 w-full" data-name="instagram-cta">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center px-[80px] py-[64px] relative size-full">
          <InstagramIcon />
          <InstagramText />
          <InstagramButton />
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

function Frame6() {
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
      <Frame6 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[405px]" data-name="Frame">
      <Logo1 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full opacity-60 relative shrink-0 text-[#eae7e2] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        A sacred legacy of healing through nature. We preserve the purity of Ayurvedic traditions for generations.
      </p>
    </div>
  );
}

function Frame8() {
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

function Frame9() {
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

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[80px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame12() {
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

function Frame13() {
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

function Frame14() {
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

function Frame11() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Frame">
      <Frame12 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[296px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d4a843] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Follow Our Story
      </p>
      <Frame11 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame5 />
      <Frame7 />
      <Frame10 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-normal items-center justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:Regular',sans-serif] opacity-40 relative shrink-0 text-[#eae7e2] text-[14px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        © 2024 Vedic Hermitage Ayurmana. All Rights Reserved.
      </p>
      <p className="font-['Playfair_Display:Italic',sans-serif] italic opacity-80 relative shrink-0 text-[#d4a843] text-[20px]">Healing Through Nature. Rooted in Tradition.</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0823529" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame16 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#2c4a2e] relative shrink-0 w-full" data-name="footer">
      <div className="content-stretch flex flex-col gap-[64px] items-start p-[80px] relative size-full">
        <Frame4 />
        <Frame15 />
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="GALLERY">
      <Hero />
      <Navbar />
      <FilterTabs />
      <GalleryGrid />
      <LoadMore />
      <InstagramCta />
      <Footer />
    </div>
  );
}