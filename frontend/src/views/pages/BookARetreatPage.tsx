import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { playfair, dmSans, fadeUp, dur } from "./shared";
import svgPaths from "@/imports/BookARetreat/svg-0h9ir3tshq";
import { fetchPackages, createBooking } from "@/data/adminApi";

// ── Trust badge check icon ─────────────────────────────────────────────────────
function TrustCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 20.354 20.354" fill="none" className="shrink-0">
      <path d={svgPaths.p89c8580} stroke="#D4A843" />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────────
const initialPackages = [
  { id: "7day", name: "7-Day Rejuvenation Retreat", duration: "7 Days", price: "₹45,000 / person", subtitle: "Restorative Healing" },
  { id: "14day", name: "14-Day Panchakarma Detox", duration: "14 Days", price: "₹85,000 / person", subtitle: "Deep Purification" },
  { id: "21day", name: "21-Day Total Transformation", duration: "21 Days", price: "₹1,40,000 / person", subtitle: "Life Reset Program" },
];

const guestOptions = ["01 Person", "02 Persons", "03 Persons", "04 Persons", "05+ Persons"];

const trustBadges = ["Secure Booking", "Flexible Cancellation", "Expert Support", "Certified Retreat"];

const formFields = [
  { key: "firstName", label: "First Name", placeholder: "Enter first name", type: "text" },
  { key: "lastName", label: "Last Name", placeholder: "Enter last name", type: "text" },
  { key: "email", label: "Email Address", placeholder: "Enter email address", type: "email" },
  { key: "phone", label: "Phone Number", placeholder: "Enter phone number", type: "tel" },
  { key: "country", label: "Country", placeholder: "e.g. United States, UK, Germany, India", type: "text" },
  { key: "city", label: "City / Place", placeholder: "e.g. London, New York, Kochi", type: "text" },
  { key: "arrivalDate", label: "Arrival Date", placeholder: "Enter arrival date", type: "date" },
];

// ── Step indicator ─────────────────────────────────────────────────────────────
function StepIndicator({ step }: { step: number }) {
  const steps = [
    { n: 1, label: "1. Package" },
    { n: 2, label: "2. Details" },
    { n: 3, label: "3. Confirm" },
  ];
  return (
    <div className="flex items-center justify-between w-full gap-2 sm:gap-4">
      {steps.map(({ n, label }) => {
        const done = step > n;
        const active = step === n;
        const bg = done ? "#d4a843" : active ? "#c4622d" : "#faf6f0";
        const textColor = done || active ? "white" : "#6b5e54";
        const labelColor = active ? "#2d241e" : "#6b5e54";
        return (
          <div key={n} className="flex flex-col items-center gap-2 sm:gap-3 flex-1 text-center">
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[11px] sm:text-[12px] font-bold border border-[#d9d1c7] transition-colors duration-300 shrink-0"
              style={{ background: bg, color: textColor, fontFamily: dmSans }}
            >
              {done ? "✓" : n}
            </div>
            <span className="text-[10px] sm:text-[14px] font-semibold whitespace-normal leading-tight max-w-[80px] sm:max-w-none" style={{ fontFamily: dmSans, color: labelColor }}>
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ── Field component ────────────────────────────────────────────────────────────
function Field({
  label, name, type = "text", placeholder, value, onChange, required = true,
}: {
  label: string; name: string; type?: string; placeholder: string;
  value: string; onChange: (v: string) => void; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-[13px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
        {label}{required && <span className="text-[#c4622d] ml-0.5">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="border border-[#d9d1c7] rounded p-[14px] text-[14px] text-[#2d241e] outline-none focus:border-[#c4622d] transition-colors bg-white"
        style={{ fontFamily: dmSans }}
      />
    </div>
  );
}

// ── Selection summary sidebar ──────────────────────────────────────────────────
function SelectionSummary({
  selectedPkg, guests,
}: {
  selectedPkg: (typeof packages)[0] | undefined;
  guests: string;
}) {
  const [contactNumber, setContactNumber] = useState("+91 90613 13555");
  const [whatsappNumber, setWhatsappNumber] = useState("+91 90613 13555");

  useEffect(() => {
    const loadSettings = () => {
      fetch("/api/settings")
        .then((res) => res.json())
        .then((data) => {
          if (data && data.settings) {
            if (data.settings.contact_number) setContactNumber(data.settings.contact_number);
            if (data.settings.whatsapp_number) setWhatsappNumber(data.settings.whatsapp_number);
          }
        })
        .catch((err) => console.warn("Could not load settings:", err));
    };
    loadSettings();
    window.addEventListener("vedic-settings-updated", loadSettings);
    return () => window.removeEventListener("vedic-settings-updated", loadSettings);
  }, []);

  const numToUse = whatsappNumber.replace(/[^\d]/g, "") || "919061313555";
  const defaultMessage = encodeURIComponent("Hello! I would like to inquire about booking a retreat at Vedic Hermitage.");
  const whatsappUrl = `https://wa.me/${numToUse}?text=${defaultMessage}`;

  return (
    <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-[400px] shrink-0">
      {/* Summary card */}
      <div
        className="bg-[#faf6f0] rounded-[12px] p-6 sm:p-8 flex flex-col gap-6 overflow-hidden min-w-0 max-w-full"
        style={{ border: "1px solid #d4a843" }}
      >
        <h3 className="text-[22px] sm:text-[24px] font-normal text-[#2d241e]" style={{ fontFamily: playfair }}>
          Selection Summary
        </h3>
        <div className="flex flex-col gap-3 min-w-0">
          <div className="flex items-start justify-between gap-3 text-[12px] min-w-0">
            <span className="text-[#6b5e54] shrink-0" style={{ fontFamily: dmSans }}>Package</span>
            <span className="font-semibold text-[#2d241e] text-right break-words min-w-0 max-w-[200px]" style={{ fontFamily: dmSans }}>
              {selectedPkg ? selectedPkg.name : "—"}
            </span>
          </div>
          <div className="flex items-start justify-between text-[12px]">
            <span className="text-[#6b5e54]" style={{ fontFamily: dmSans }}>Guests</span>
            <span className="font-semibold text-[#2d241e]" style={{ fontFamily: dmSans }}>{guests}</span>
          </div>
          {selectedPkg && (
            <div className="flex items-start justify-between text-[12px]">
              <span className="text-[#6b5e54]" style={{ fontFamily: dmSans }}>Price</span>
              <span className="font-semibold text-[#c4622d] text-right break-words min-w-0" style={{ fontFamily: dmSans }}>{selectedPkg.price}</span>
            </div>
          )}
        </div>
      </div>

      {/* Need Help */}
      <div className="flex flex-col gap-3">
        <span className="text-[14px] font-semibold uppercase text-[#d4a843]" style={{ fontFamily: dmSans }}>
          Need Help?
        </span>
        <p className="text-[12px] text-[#2d241e] leading-relaxed" style={{ fontFamily: dmSans }}>
          Call us at <a href={`tel:${contactNumber}`} className="font-semibold text-[#c4622d] hover:underline">{contactNumber}</a> or <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2c4a2e] hover:underline">WhatsApp us</a> for assistance.
        </p>
      </div>
    </div>
  );
}

// ── Step 1: Package selection ──────────────────────────────────────────────────
function Step1({
  selectedId, onSelect, guests, onGuestsChange, onNext, pkgList,
}: {
  selectedId: string; onSelect: (id: string) => void;
  guests: string; onGuestsChange: (g: string) => void;
  onNext: () => void;
  pkgList: typeof initialPackages;
}) {
  return (
    <motion.div
      key="step1"
      className="flex flex-col gap-10"
      initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35 }}
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-[32px] font-normal text-[#2d241e]" style={{ fontFamily: playfair }}>
          Choose Your Package
        </h2>
        <p className="text-[15px] text-[#6b5e54]" style={{ fontFamily: dmSans }}>
          Select the retreat programme that best suits your wellness goals.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {pkgList.map((pkg) => {
          const active = selectedId === pkg.id;
          return (
            <div
              key={pkg.id}
              onClick={() => onSelect(pkg.id)}
              className="rounded-[10px] p-5 sm:p-6 cursor-pointer transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-hidden min-w-0 max-w-full"
              style={{
                border: active ? "1.5px solid #c4622d" : "1.5px solid #d9d1c7",
                background: active ? "#fdf8f5" : "white",
              }}
            >
              <div className="flex items-start sm:items-center gap-4 min-w-0 flex-1">
                <div
                  className="w-5 h-5 rounded-full border-[1.5px] flex items-center justify-center transition-colors shrink-0 mt-1 sm:mt-0"
                  style={{ borderColor: active ? "#c4622d" : "#d9d1c7" }}
                >
                  {active && <div className="w-2.5 h-2.5 rounded-full bg-[#c4622d]" />}
                </div>
                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                  <span className="text-[11px] font-semibold uppercase text-[#d4a843] break-words min-w-0 max-w-full" style={{ fontFamily: dmSans }}>
                    {pkg.subtitle}
                  </span>
                  <span className="text-[18px] sm:text-[20px] font-medium text-[#2d241e] break-words min-w-0 max-w-full" style={{ fontFamily: playfair }}>
                    {pkg.name}
                  </span>
                </div>
              </div>
              <div className="text-left sm:text-right pl-9 sm:pl-0 shrink-0">
                <div className="text-[15px] sm:text-[16px] font-semibold text-[#2d241e] break-words" style={{ fontFamily: playfair }}>
                  {pkg.price}
                </div>
                <div className="text-[12px] text-[#6b5e54]" style={{ fontFamily: dmSans }}>{pkg.duration}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-[13px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
          Number of Guests<span className="text-[#c4622d] ml-0.5">*</span>
        </label>
        <select
          value={guests}
          onChange={(e) => onGuestsChange(e.target.value)}
          className="border border-[#d9d1c7] rounded p-[14px] text-[14px] text-[#2d241e] outline-none focus:border-[#c4622d] transition-colors bg-white appearance-none"
          style={{ fontFamily: dmSans }}
        >
          {guestOptions.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </div>

      <button
        onClick={onNext}
        disabled={!selectedId}
        className="self-start bg-[#c4622d] text-white px-8 py-3 rounded-md text-[14px] font-semibold uppercase hover:bg-[#b5562a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ fontFamily: dmSans }}
      >
        Continue to Personal Details →
      </button>
    </motion.div>
  );
}

// ── Step 2: Personal details ───────────────────────────────────────────────────
function Step2({
  form, onChange, onNext, onBack,
}: {
  form: Record<string, string>;
  onChange: (key: string, val: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <motion.form
      key="step2"
      onSubmit={handleSubmit}
      className="flex flex-col gap-8"
      initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35 }}
    >
      <h2 className="text-[32px] font-normal text-[#2d241e]" style={{ fontFamily: playfair }}>
        Your Information
      </h2>

      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          {formFields.map((f) => (
            <Field
              key={f.key}
              label={f.label}
              name={f.key}
              type={f.type}
              placeholder={f.placeholder}
              value={form[f.key] || ""}
              onChange={(v) => onChange(f.key, v)}
            />
          ))}
        </div>

        {/* Special Health Conditions */}
        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
            Special Health Conditions
          </label>
          <textarea
            rows={4}
            placeholder="Optional notes for our physicians..."
            value={form.healthNotes || ""}
            onChange={(e) => onChange("healthNotes", e.target.value)}
            className="border border-[#d9d1c7] rounded p-[14px] text-[14px] text-[#2d241e] outline-none focus:border-[#c4622d] transition-colors resize-none bg-white"
            style={{ fontFamily: dmSans }}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onBack}
          className="border border-[#d9d1c7] text-[#6b5e54] px-6 py-3 rounded-md text-[14px] font-semibold uppercase hover:border-[#2d241e] transition-colors"
          style={{ fontFamily: dmSans }}
        >
          ← Back
        </button>
        <button
          type="submit"
          className="bg-[#c4622d] text-white px-8 py-3 rounded-md text-[14px] font-semibold uppercase hover:bg-[#b5562a] transition-colors"
          style={{ fontFamily: dmSans }}
        >
          Review Booking →
        </button>
      </div>
    </motion.form>
  );
}

// ── Step 3: Confirmation ───────────────────────────────────────────────────────
function Step3({
  selectedPkg, guests, form, onBack, onConfirm, confirmed,
}: {
  selectedPkg: (typeof packages)[0] | undefined;
  guests: string;
  form: Record<string, string>;
  onBack: () => void;
  onConfirm: () => void;
  confirmed: boolean;
}) {
  if (confirmed) {
    return (
      <motion.div
        key="confirmed"
        className="flex flex-col items-center gap-8 py-16 text-center"
        initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-20 h-20 rounded-full bg-[#2c4a2e] flex items-center justify-center text-white text-3xl">
          ✓
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-[32px] sm:text-[48px] font-medium text-[#2d241e]" style={{ fontFamily: playfair }}>
            Booking Confirmed!
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#6b5e54] max-w-[560px]" style={{ fontFamily: dmSans }}>
            Thank you, {form.firstName}. Our team will contact you at {form.email} within 24 hours to complete your reservation.
          </p>
        </div>
        <Link
          to="/"
          className="bg-[#c4622d] text-white px-8 py-4 rounded-md text-[14px] font-semibold uppercase hover:bg-[#b5562a] transition-colors"
          style={{ fontFamily: dmSans }}
        >
          Back to Home
        </Link>
      </motion.div>
    );
  }

  const rows = [
    { label: "Package", value: selectedPkg?.name ?? "—" },
    { label: "Duration", value: selectedPkg?.duration ?? "—" },
    { label: "Price", value: selectedPkg?.price ?? "—" },
    { label: "Guests", value: guests },
    { label: "Name", value: `${form.firstName || ""} ${form.lastName || ""}`.trim() || "—" },
    { label: "Email", value: form.email || "—" },
    { label: "Phone", value: form.phone || "—" },
    { label: "Country", value: form.country || "—" },
    { label: "City / Place", value: form.city || form.location || "—" },
    { label: "Arrival Date", value: form.arrivalDate || "—" },
  ];

  return (
    <motion.div
      key="step3"
      className="flex flex-col gap-8"
      initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35 }}
    >
      <h2 className="text-[32px] font-normal text-[#2d241e]" style={{ fontFamily: playfair }}>
        Review Your Booking
      </h2>

      <div className="bg-[#faf6f0] rounded-[12px] divide-y divide-[#e6e2dc] overflow-hidden min-w-0 max-w-full" style={{ border: "1px solid #d9d1c7" }}>
        {rows.map(({ label, value }) => (
          <div key={label} className="flex items-start justify-between gap-4 px-6 py-4 min-w-0">
            <span className="text-[13px] text-[#6b5e54] shrink-0" style={{ fontFamily: dmSans }}>{label}</span>
            <span className="text-[14px] font-semibold text-[#2d241e] text-right break-words min-w-0 flex-1" style={{ fontFamily: dmSans }}>{value}</span>
          </div>
        ))}
      </div>

      {form.healthNotes && (
        <div className="bg-[#fdf4e3] rounded p-4 border border-[#fef08a] overflow-hidden min-w-0 max-w-full">
          <p className="text-[13px] font-semibold text-[#6b5e54] mb-1" style={{ fontFamily: dmSans }}>Health Notes / Special Demands</p>
          <p className="text-[14px] text-[#2d241e] break-all [word-break:break-word] [overflow-wrap:anywhere] min-w-0 max-w-full" style={{ fontFamily: dmSans }}>{form.healthNotes}</p>
        </div>
      )}

      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="border border-[#d9d1c7] text-[#6b5e54] px-6 py-3 rounded-md text-[14px] font-semibold uppercase hover:border-[#2d241e] transition-colors"
          style={{ fontFamily: dmSans }}
        >
          ← Back
        </button>
        <button
          onClick={onConfirm}
          className="bg-[#c4622d] text-white px-8 py-3 rounded-md text-[14px] font-semibold uppercase hover:bg-[#b5562a] transition-colors cursor-pointer"
          style={{ fontFamily: dmSans }}
        >
          Confirm Booking
        </button>
      </div>
    </motion.div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────────
export default function BookARetreatPage() {
  const [step, setStep] = useState(1);
  const [selectedPkgId, setSelectedPkgId] = useState("14day");
  const [guests, setGuests] = useState("01 Person");
  const [form, setForm] = useState<Record<string, string>>({});
  const [confirmed, setConfirmed] = useState(false);
  const [pkgList, setPkgList] = useState(initialPackages);

  useEffect(() => {
    const updatePkgs = () => {
      fetchPackages().then((data) => {
        if (data && data.length > 0) {
          const formatted = data.map((d) => ({
            id: d.id,
            name: d.title,
            duration: d.duration || "7 Days",
            price: d.price.includes("/ person") ? d.price : `${d.price} / person`,
            subtitle: d.subtitle || d.label || "Custom Program",
          }));
          setPkgList(formatted);
        }
      });
    };

    updatePkgs();
    window.addEventListener("vedic-packages-updated", updatePkgs);
    return () => window.removeEventListener("vedic-packages-updated", updatePkgs);
  }, []);

  const selectedPkg = pkgList.find((p) => p.id === selectedPkgId);
  const updateForm = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  const handleConfirmBooking = async () => {
    setConfirmed(true);
    if (selectedPkg) {
      await createBooking({
        package_name: selectedPkg.name,
        package_price: selectedPkg.price,
        guests,
        name: `${form.firstName || ""} ${form.lastName || ""}`.trim() || "Guest",
        email: form.email || "",
        phone: form.phone || "",
        country: form.country || "",
        city: form.city || form.location || "",
        arrival_date: form.arrivalDate || "",
        health_notes: form.healthNotes || "",
      });
    }
  };

  return (
    <div>
      {/* ── Hero ── */}
      <div
        className="h-[280px] sm:h-[360px] flex flex-col items-center justify-center px-4"
        style={{ background: "linear-gradient(to right, #c4622d, #2c4a2e)" }}
      >
        <motion.div
          className="flex flex-col items-center gap-4 text-center max-w-[90vw]"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[13px] sm:text-[14px] font-semibold uppercase text-[#d4a843] tracking-wide" style={{ fontFamily: dmSans }}>
            Book Your Retreat
          </span>
          <h1 className="text-[32px] sm:text-[48px] md:text-[64px] font-medium text-white whitespace-normal leading-[1.15]" style={{ fontFamily: playfair }}>
            Begin Your Healing Journey
          </h1>
        </motion.div>
      </div>

      {/* ── Main content ── */}
      <div className="px-6 md:px-20 py-12 md:py-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-16">

          {/* Step indicator */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}
          >
            <StepIndicator step={step} />
          </motion.div>

          {/* Form + sidebar */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start w-full">
            {/* Left: steps */}
            <div className="flex-1 min-w-0 w-full">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <Step1
                    selectedId={selectedPkgId}
                    onSelect={setSelectedPkgId}
                    guests={guests}
                    onGuestsChange={setGuests}
                    onNext={() => setStep(2)}
                    pkgList={pkgList}
                  />
                )}
                {step === 2 && (
                  <Step2
                    form={form}
                    onChange={updateForm}
                    onNext={() => setStep(3)}
                    onBack={() => setStep(1)}
                  />
                )}
                {step === 3 && (
                  <Step3
                    selectedPkg={selectedPkg}
                    guests={guests}
                    form={form}
                    onBack={() => setStep(2)}
                    onConfirm={handleConfirmBooking}
                    confirmed={confirmed}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Right: summary (hide on confirmed) */}
            {!confirmed && (
              <SelectionSummary
                selectedPkg={selectedPkg}
                guests={guests}
              />
            )}
          </div>

          {/* Trust badges */}
          {!confirmed && (
            <motion.div
              className="grid grid-cols-2 md:flex md:items-center md:justify-between py-8 md:py-10 border-y border-[#d9d1c7] gap-y-6 gap-x-4 w-full"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={dur}
            >
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-3">
                  <TrustCheck />
                  <span className="text-[13px] sm:text-[14px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>{badge}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
