import svgPaths from "./svg-0h9ir3tshq";
import imgLine from "./fe691aac48ee24895be231389ce6159e1e96e1e6.png";

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        BOOK YOUR RETREAT
      </p>
      <p className="font-['Playfair_Display:Medium',sans-serif] font-medium relative shrink-0 text-[64px] text-white">Begin Your Healing Journey</p>
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-[#c4622d] h-[360px] items-center justify-center relative shrink-0 to-[#2c4a2e] w-full" data-name="hero">
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

function Frame6() {
  return (
    <div className="bg-[#d4a843] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        1
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame6 />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        1. Package
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#c4622d] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        2
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame8 />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d241e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        2. Personal Details
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#faf6f0] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#6b5e54] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        3
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame10 />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        3. Confirmation
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame5 />
      <Frame7 />
      <Frame9 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start p-[14px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b5e52] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Enter first name
        </p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[736px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        First Name
      </p>
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start p-[14px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b5e52] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Enter last name
        </p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[736px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Last Name
      </p>
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start p-[14px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b5e52] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Enter email address
        </p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[736px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Email Address
      </p>
      <Frame20 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start p-[14px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b5e52] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Enter phone number
        </p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[736px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Phone Number
      </p>
      <Frame22 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start p-[14px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b5e52] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Enter country
        </p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[736px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Country
      </p>
      <Frame24 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start p-[14px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b5e52] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Enter arrival date
        </p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[736px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Arrival Date
      </p>
      <Frame26 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame15 />
      <Frame17 />
      <Frame19 />
      <Frame21 />
      <Frame23 />
      <Frame25 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="h-[120px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start p-[14px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6b5e52] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Optional notes for our physicians...
        </p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Special Health Conditions
      </p>
      <Frame28 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[32px] whitespace-nowrap">Your Information</p>
      <Frame14 />
      <Frame27 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Frame">
      <Frame13 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[normal] relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#6b5e54]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Package
      </p>
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#2d241e]" style={{ fontVariationSettings: '"opsz" 14' }}>
        14-Day Detox
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[normal] relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#6b5e54]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Guests
      </p>
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#2d241e]" style={{ fontVariationSettings: '"opsz" 14' }}>
        01 Person
      </p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame32 />
      <Frame33 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" height="1" src={imgLine} width="209" />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#c4622d] content-stretch flex items-start justify-center px-[24px] py-[12px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Confirm Booking
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#faf6f0] content-stretch flex flex-col gap-[24px] items-start p-[32px] relative rounded-[12px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d4a843] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d241e] text-[24px] whitespace-nowrap">Selection Summary</p>
      <Frame31 />
      <Frame34 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4a843] text-[14px] uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
        Need Help?
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#2d241e] text-[12px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Call us at +91 99999 88888 or WhatsApp us for assistance.
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[400px]" data-name="Frame">
      <Frame30 />
      <Frame35 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame12 />
      <Frame29 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <div className="absolute inset-[-1.77%_0_0_-1.77%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3536 20.3535">
          <g id="Frame">
            <path d={svgPaths.p89c8580} id="Vector" stroke="var(--stroke-0, #D4A843)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame38 />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Secure Booking
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <div className="absolute inset-[-1.77%_0_0_-1.77%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3536 20.3535">
          <g id="Frame">
            <path d={svgPaths.p89c8580} id="Vector" stroke="var(--stroke-0, #D4A843)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame40 />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Flexible Cancellation
      </p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <div className="absolute inset-[-1.77%_0_0_-1.77%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3536 20.3535">
          <g id="Frame">
            <path d={svgPaths.p89c8580} id="Vector" stroke="var(--stroke-0, #D4A843)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame42 />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Expert Support
      </p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <div className="absolute inset-[-1.77%_0_0_-1.77%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3536 20.3535">
          <g id="Frame">
            <path d={svgPaths.p89c8580} id="Vector" stroke="var(--stroke-0, #D4A843)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame44 />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b5e54] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Certified Retreat
      </p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-start justify-between py-[40px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#d9d1c7] border-solid inset-0 pointer-events-none" />
      <Frame37 />
      <Frame39 />
      <Frame41 />
      <Frame43 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[64px] items-start p-[120px] relative size-full">
        <Frame4 />
        <Frame11 />
        <Frame36 />
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

function Frame47() {
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
      <Frame47 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[405px]" data-name="Frame">
      <Logo1 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full opacity-60 relative shrink-0 text-[#eae7e2] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        A sacred legacy of healing through nature. We preserve the purity of Ayurvedic traditions for generations.
      </p>
    </div>
  );
}

function Frame49() {
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

function Frame50() {
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

function Frame48() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[80px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <Frame49 />
      <Frame50 />
    </div>
  );
}

function Frame53() {
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

function Frame54() {
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

function Frame55() {
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

function Frame52() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Frame">
      <Frame53 />
      <Frame54 />
      <Frame55 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[296px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d4a843] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Follow Our Story
      </p>
      <Frame52 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame46 />
      <Frame48 />
      <Frame51 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-normal items-center justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:Regular',sans-serif] opacity-40 relative shrink-0 text-[#eae7e2] text-[14px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        © 2024 Vedic Hermitage Ayurmana. All Rights Reserved.
      </p>
      <p className="font-['Playfair_Display:Italic',sans-serif] italic opacity-80 relative shrink-0 text-[#d4a843] text-[20px]">Healing Through Nature. Rooted in Tradition.</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Line" stroke="var(--stroke-0, white)" strokeOpacity="0.0823529" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame57 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#2c4a2e] relative shrink-0 w-full" data-name="footer">
      <div className="content-stretch flex flex-col gap-[64px] items-start p-[80px] relative size-full">
        <Frame45 />
        <Frame56 />
      </div>
    </div>
  );
}

export default function BookARetreat() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Book a Retreat">
      <Hero />
      <Navbar />
      <Frame3 />
      <Footer />
    </div>
  );
}