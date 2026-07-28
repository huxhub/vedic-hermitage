import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Package,
  MessageSquare,
  LogOut,
  Plus,
  Trash2,
  Star,
  CheckCircle2,
  User,
  MapPin,
  X,
  Upload,
  Layers,
  Pencil,
  Calendar,
  Menu,
  Phone,
  Mail,
  FileText,
  AlertCircle,
  Settings,
  Key,
  Smartphone,
  PhoneCall,
  ShieldCheck,
  Save,
  Lock,
} from "lucide-react";
import {
  fetchPackages,
  addNewPackage,
  updateSinglePackage,
  deletePackage,
  fetchFeedbacks,
  addFeedback,
  updateSingleFeedback,
  deleteFeedback,
  fetchBookings,
  deleteBookingRecord,
  fetchSiteSettings,
  updateSiteSettings,
  updateAdminCredentials,
  adminAuth,
  PackageItem,
  FeedbackItem,
  BookingItem,
  SiteSettings,
} from "@/data/adminApi";
import { playfair, dmSans } from "./shared";

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"packages" | "feedbacks" | "bookings" | "settings">("packages");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Package Management State
  const [pkgs, setPkgs] = useState<PackageItem[]>([]);
  const [isAddPkgOpen, setIsAddPkgOpen] = useState(false);
  const [editingPkgId, setEditingPkgId] = useState<string | null>(null);
  const [newPkg, setNewPkg] = useState({
    title: "",
    subtitle: "",
    price: "",
    duration: "7 Days",
    itemsStr: "",
  });
  const [addingPkg, setAddingPkg] = useState(false);

  // Feedback Management State
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);
  const [editingFbId, setEditingFbId] = useState<number | null>(null);
  const [newFb, setNewFb] = useState({ name: "", location: "", quote: "", rating: 5, avatar: "" });
  const [avatarPreview, setAvatarPreview] = useState<string>("");
  const [savingFb, setSavingFb] = useState(false);

  // Bookings Management State
  const [bookings, setBookings] = useState<BookingItem[]>([]);

  // Site Settings State
  const [siteSettings, setSiteSettings] = useState<SiteSettings>({
    whatsapp_number: "+91 90613 13555",
    contact_number: "+91 90613 13555",
  });
  const [savingSettings, setSavingSettings] = useState(false);
  const [settingsAlert, setSettingsAlert] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Admin Account Credentials Form State
  const [credForm, setCredForm] = useState({
    new_username: "admin",
    new_password: "",
    confirm_password: "",
  });
  const [savingCreds, setSavingCreds] = useState(false);
  const [credAlert, setCredAlert] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    loadData();
    window.addEventListener("vedic-packages-updated", loadData);
    window.addEventListener("vedic-feedbacks-updated", loadData);
    window.addEventListener("vedic-bookings-updated", loadData);
    window.addEventListener("vedic-settings-updated", loadData);
    return () => {
      window.removeEventListener("vedic-packages-updated", loadData);
      window.removeEventListener("vedic-feedbacks-updated", loadData);
      window.removeEventListener("vedic-bookings-updated", loadData);
      window.removeEventListener("vedic-settings-updated", loadData);
    };
  }, []);

  const loadData = async () => {
    const pData = await fetchPackages();
    if (pData.length > 0) setPkgs(pData);

    const fData = await fetchFeedbacks();
    setFeedbacks(fData);

    const bData = await fetchBookings();
    setBookings(bData);

    const settingsData = await fetchSiteSettings();
    setSiteSettings(settingsData);
  };

  const handleLogout = () => {
    adminAuth.removeToken();
    navigate("/admin/login");
  };

  // Package Handlers
  const handleOpenAddPkg = () => {
    setEditingPkgId(null);
    setNewPkg({ title: "", subtitle: "", price: "", duration: "7 Days", itemsStr: "" });
    setIsAddPkgOpen(true);
  };

  const handleOpenEditPkg = (pkg: PackageItem) => {
    setEditingPkgId(pkg.id);
    setNewPkg({
      title: pkg.title,
      subtitle: pkg.subtitle || pkg.label || "",
      price: pkg.price.replace("₹", ""),
      duration: pkg.duration || "7 Days",
      itemsStr: Array.isArray(pkg.items) ? pkg.items.join("\n") : "",
    });
    setIsAddPkgOpen(true);
  };

  const handleSavePackageForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPkg.title || !newPkg.price) return;

    setAddingPkg(true);
    try {
      const itemsList = newPkg.itemsStr
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean);

      if (editingPkgId) {
        const res = await updateSinglePackage(editingPkgId, {
          title: newPkg.title,
          price: newPkg.price,
          subtitle: newPkg.subtitle || "Custom Program",
          duration: newPkg.duration,
          items: itemsList.length > 0 ? itemsList : ["Full Panchakarma Protocol", "Physician Consultation", "Sattvic Meals"],
        });

        if (res.success && res.package) {
          setPkgs((prev) => prev.map((p) => (p.id === editingPkgId ? res.package! : p)));
          setIsAddPkgOpen(false);
        }
      } else {
        const res = await addNewPackage({
          title: newPkg.title,
          price: newPkg.price,
          subtitle: newPkg.subtitle || "Custom Program",
          duration: newPkg.duration,
          items: itemsList.length > 0 ? itemsList : ["Full Panchakarma Protocol", "Physician Consultation", "Sattvic Meals"],
        });

        if (res.success && res.package) {
          setPkgs((prev) => [...prev, res.package!]);
          setIsAddPkgOpen(false);
        }
      }
      setNewPkg({ title: "", subtitle: "", price: "", duration: "7 Days", itemsStr: "" });
      setEditingPkgId(null);
    } catch (err) {
      console.error(err);
    } finally {
      setAddingPkg(false);
    }
  };

  const handleDeletePkg = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this package?")) return;
    const ok = await deletePackage(id);
    if (ok) {
      setPkgs((prev) => prev.filter((p) => p.id !== id));
    }
  };

  // Feedback Handlers
  const handleOpenEditFeedback = (fb: FeedbackItem) => {
    setEditingFbId(fb.id);
    setNewFb({
      name: fb.name,
      location: fb.location || "",
      quote: fb.quote,
      rating: fb.rating || 5,
      avatar: fb.avatar || "",
    });
    setAvatarPreview(fb.avatar || "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setAvatarPreview(base64String);
        setNewFb((prev) => ({ ...prev, avatar: base64String }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveFeedbackForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFb.name || !newFb.quote) return;

    setSavingFb(true);
    try {
      if (editingFbId) {
        const res = await updateSingleFeedback(editingFbId, newFb);
        if (res.success && res.feedback) {
          setFeedbacks((prev) => prev.map((f) => (f.id === editingFbId ? res.feedback! : f)));
          setEditingFbId(null);
        }
      } else {
        const res = await addFeedback(newFb);
        if (res.success && res.feedback) {
          setFeedbacks((prev) => [res.feedback!, ...prev]);
        }
      }
      setNewFb({ name: "", location: "", quote: "", rating: 5, avatar: "" });
      setAvatarPreview("");
    } catch (err) {
      console.error(err);
    } finally {
      setSavingFb(false);
    }
  };

  const handleDeleteFeedback = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this customer feedback?")) return;
    const ok = await deleteFeedback(id);
    if (ok) {
      setFeedbacks((prev) => prev.filter((f) => f.id !== id));
      if (editingFbId === id) {
        setEditingFbId(null);
        setNewFb({ name: "", location: "", quote: "", rating: 5, avatar: "" });
        setAvatarPreview("");
      }
    }
  };

  // Booking Handlers
  const handleDeleteBooking = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this booking record?")) return;
    const ok = await deleteBookingRecord(id);
    if (ok) {
      setBookings((prev) => prev.filter((b) => b.id !== id));
    }
  };

  // Site Settings Handlers
  const handleSaveSiteSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingSettings(true);
    setSettingsAlert(null);
    const res = await updateSiteSettings(siteSettings);
    setSavingSettings(false);
    if (res.success) {
      setSettingsAlert({ type: "success", text: res.message || "Site settings updated successfully!" });
    } else {
      setSettingsAlert({ type: "error", text: res.message || "Failed to update site settings." });
    }
  };

  // Admin Credentials Handlers
  const handleSaveCredentials = async (e: React.FormEvent) => {
    e.preventDefault();
    setCredAlert(null);
    if (credForm.new_password !== credForm.confirm_password) {
      setCredAlert({ type: "error", text: "New password and Confirm password do not match!" });
      return;
    }
    if (!credForm.new_username || !credForm.new_password) {
      setCredAlert({ type: "error", text: "New Username and New Password are required." });
      return;
    }
    setSavingCreds(true);
    const res = await updateAdminCredentials({
      new_username: credForm.new_username,
      new_password: credForm.new_password,
    });
    setSavingCreds(false);
    if (res.success) {
      setCredAlert({ type: "success", text: res.message || "Admin username and password updated successfully!" });
      setCredForm((prev) => ({ ...prev, new_password: "", confirm_password: "" }));
    } else {
      setCredAlert({ type: "error", text: res.message || "Failed to update admin credentials." });
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f1ea] flex flex-col lg:flex-row relative">
      {/* ── Mobile Top Header ── */}
      <div className="lg:hidden bg-[#1b331c] text-white px-5 py-4 flex items-center justify-between sticky top-0 z-40 shadow-md">
        <span className="text-[18px] font-normal tracking-wide" style={{ fontFamily: playfair }}>
          VEDIC HERMITAGE
        </span>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ── Mobile Sidebar Backdrop Overlay ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* ── Sidebar ── */}
      <aside
        className={`w-64 lg:w-72 bg-[#1b331c] text-white flex flex-col justify-between shrink-0 shadow-2xl border-r border-[#264528] fixed lg:sticky top-0 h-screen z-50 transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col">
          {/* Brand Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <span
              className="text-[20px] lg:text-[22px] font-normal tracking-wide text-white leading-tight"
              style={{ fontFamily: playfair }}
            >
              VEDIC HERMITAGE
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden text-white/70 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="p-4 flex flex-col gap-1.5">
            <span
              className="px-3 text-[10px] font-bold uppercase tracking-widest text-[#93ab95] mb-2"
              style={{ fontFamily: dmSans }}
            >
              System Controls
            </span>

            {/* Nav Item: Packages */}
            <button
              onClick={() => {
                setActiveTab("packages");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-[14px] font-medium transition-all duration-200 cursor-pointer w-full text-left relative ${
                activeTab === "packages"
                  ? "bg-[#254527] text-white font-semibold shadow-inner border border-[#3b633e]"
                  : "text-[#c2d4c4] hover:bg-white/5 hover:text-white"
              }`}
              style={{ fontFamily: dmSans }}
            >
              {activeTab === "packages" && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute left-0 top-2 bottom-2 w-1.5 bg-[#c4622d] rounded-r-full"
                />
              )}
              <Package className={`w-4 h-4 shrink-0 ${activeTab === "packages" ? "text-[#c4622d]" : ""}`} />
              <span>Package Pricing</span>
            </button>

            {/* Nav Item: Customer Feedback */}
            <button
              onClick={() => {
                setActiveTab("feedbacks");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-[14px] font-medium transition-all duration-200 cursor-pointer w-full text-left relative ${
                activeTab === "feedbacks"
                  ? "bg-[#254527] text-white font-semibold shadow-inner border border-[#3b633e]"
                  : "text-[#c2d4c4] hover:bg-white/5 hover:text-white"
              }`}
              style={{ fontFamily: dmSans }}
            >
              {activeTab === "feedbacks" && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute left-0 top-2 bottom-2 w-1.5 bg-[#c4622d] rounded-r-full"
                />
              )}
              <MessageSquare className={`w-4 h-4 shrink-0 ${activeTab === "feedbacks" ? "text-[#c4622d]" : ""}`} />
              <span>Customer Feedback</span>
            </button>

            {/* Nav Item: Retreat Bookings */}
            <button
              onClick={() => {
                setActiveTab("bookings");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-[14px] font-medium transition-all duration-200 cursor-pointer w-full text-left relative ${
                activeTab === "bookings"
                  ? "bg-[#254527] text-white font-semibold shadow-inner border border-[#3b633e]"
                  : "text-[#c2d4c4] hover:bg-white/5 hover:text-white"
              }`}
              style={{ fontFamily: dmSans }}
            >
              {activeTab === "bookings" && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute left-0 top-2 bottom-2 w-1.5 bg-[#c4622d] rounded-r-full"
                />
              )}
              <Calendar className={`w-4 h-4 shrink-0 ${activeTab === "bookings" ? "text-[#c4622d]" : ""}`} />
              <div className="flex items-center justify-between flex-1">
                <span>Retreat Bookings</span>
                {bookings.length > 0 && (
                  <span className="bg-[#c4622d] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {bookings.length}
                  </span>
                )}
              </div>
            </button>

            {/* Nav Item: Settings */}
            <button
              onClick={() => {
                setActiveTab("settings");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-[14px] font-medium transition-all duration-200 cursor-pointer w-full text-left relative ${
                activeTab === "settings"
                  ? "bg-[#254527] text-white font-semibold shadow-inner border border-[#3b633e]"
                  : "text-[#c2d4c4] hover:bg-white/5 hover:text-white"
              }`}
              style={{ fontFamily: dmSans }}
            >
              {activeTab === "settings" && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute left-0 top-2 bottom-2 w-1.5 bg-[#c4622d] rounded-r-full"
                />
              )}
              <Settings className={`w-4 h-4 shrink-0 ${activeTab === "settings" ? "text-[#c4622d]" : ""}`} />
              <span>System Settings</span>
            </button>
          </nav>
        </div>

        {/* Footer Profile & Logout */}
        <div className="p-4 border-t border-white/10 flex flex-col gap-3 bg-[#162a17]">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-9 h-9 rounded-full bg-[#c4622d] text-white font-bold flex items-center justify-center text-sm shadow-md shrink-0">
              A
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[13px] font-semibold text-white truncate" style={{ fontFamily: dmSans }}>
                Administrator
              </span>
              <span className="text-[11px] text-[#93ab95] truncate" style={{ fontFamily: dmSans }}>
                admin@vedichermitage.com
              </span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-red-600 text-white text-[13px] font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 cursor-pointer w-full border border-white/10 hover:border-red-500"
            style={{ fontFamily: dmSans }}
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* ── Main Content Area ── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Sticky Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-[#e2ded8] px-4 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 z-20 shadow-xs">
          <div>
            <h1 className="text-[20px] sm:text-[24px] font-normal text-[#2d241e]" style={{ fontFamily: playfair }}>
              {activeTab === "packages" && (
                <>
                  Booking Packages <span className="italic font-serif opacity-80">&amp;</span> Pricing
                </>
              )}
              {activeTab === "feedbacks" && (
                <>
                  Customer Feedback <span className="italic font-serif opacity-80">&amp;</span> Reviews
                </>
              )}
              {activeTab === "bookings" && (
                <>
                  Retreat Bookings <span className="italic font-serif opacity-80">&amp;</span> Reservations
                </>
              )}
              {activeTab === "settings" && (
                <>
                  System <span className="italic font-serif opacity-80">&amp;</span> Contact Settings
                </>
              )}
            </h1>
            <p className="text-[12px] sm:text-[13px] text-[#786c62]" style={{ fontFamily: dmSans }}>
              {activeTab === "packages" && "Configure pricing, edit, and create new retreat packages."}
              {activeTab === "feedbacks" && "Manage and edit customer reviews displayed on the website testimonials marquee."}
              {activeTab === "bookings" && "View guest retreat reservations submitted on the website."}
              {activeTab === "settings" && "Update website WhatsApp number, contact numbers, and change admin login credentials."}
            </p>
          </div>

          {activeTab === "packages" && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleOpenAddPkg}
              className="flex items-center justify-center gap-2 bg-[#2c4a2e] hover:bg-[#203722] text-white px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-colors shadow-md cursor-pointer shrink-0"
              style={{ fontFamily: dmSans }}
            >
              <Plus className="w-4 h-4" />
              <span>Add New Package</span>
            </motion.button>
          )}
        </header>

        {/* Dashboard Body Content */}
        <main className="p-4 sm:p-8 flex-1 max-w-[1240px] w-full mx-auto flex flex-col gap-6 sm:gap-8">
          {/* Section Specific Metric Cards */}
          <div className="w-full">
            {activeTab === "packages" && (
              <div className="bg-white p-5 rounded-2xl border border-[#e2ded8] shadow-xs flex items-center justify-between max-w-sm">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold text-[#786c62] uppercase tracking-wider" style={{ fontFamily: dmSans }}>
                    Active Packages
                  </span>
                  <span className="text-[22px] font-bold text-[#2d241e]" style={{ fontFamily: dmSans }}>
                    {pkgs.length} Retreat Programmes
                  </span>
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#faf0ea] text-[#c4622d] flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
              </div>
            )}

            {activeTab === "feedbacks" && (
              <div className="bg-white p-5 rounded-2xl border border-[#e2ded8] shadow-xs flex items-center justify-between max-w-sm">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold text-[#786c62] uppercase tracking-wider" style={{ fontFamily: dmSans }}>
                    Customer Reviews
                  </span>
                  <span className="text-[22px] font-bold text-[#2d241e]" style={{ fontFamily: dmSans }}>
                    {feedbacks.length} Testimonials
                  </span>
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#f0f5f1] text-[#2c4a2e] flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>
            )}

            {activeTab === "bookings" && (
              <div className="bg-white p-5 rounded-2xl border border-[#e2ded8] shadow-xs flex items-center justify-between max-w-sm">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold text-[#786c62] uppercase tracking-wider" style={{ fontFamily: dmSans }}>
                    Total Bookings
                  </span>
                  <span className="text-[22px] font-bold text-[#2d241e]" style={{ fontFamily: dmSans }}>
                    {bookings.length} Guest Reservations
                  </span>
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#faf0ea] text-[#c4622d] flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white p-5 rounded-2xl border border-[#e2ded8] shadow-xs flex items-center justify-between max-w-sm">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold text-[#786c62] uppercase tracking-wider" style={{ fontFamily: dmSans }}>
                    System Status
                  </span>
                  <span className="text-[22px] font-bold text-[#2d241e]" style={{ fontFamily: dmSans }}>
                    System Active &amp; Live
                  </span>
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#f0f5f1] text-[#2c4a2e] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
            )}
          </div>

          {/* Main Tab Content */}
          <AnimatePresence mode="wait">
            {/* Tab 1: Package Price Manager */}
            {activeTab === "packages" && (
              <motion.div
                key="packages-tab"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pkgs.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="bg-white p-6 rounded-2xl border border-[#e2ded8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between gap-6 relative group overflow-hidden min-w-0 max-w-full"
                    >
                      <div className="flex flex-col gap-4 min-w-0">
                        <div className="flex items-center justify-between gap-2 min-w-0">
                          <span className="text-[11px] font-bold text-[#c4622d] uppercase tracking-wider bg-[#faf0ea] border border-[#f5dfd5] px-3 py-1 rounded-full truncate max-w-[160px]" title={pkg.subtitle || pkg.label}>
                            {pkg.subtitle || pkg.label}
                          </span>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              onClick={() => handleOpenEditPkg(pkg)}
                              className="text-[#786c62] hover:text-[#c4622d] bg-[#faf8f5] hover:bg-[#faf0ea] p-1.5 rounded-lg transition-colors cursor-pointer"
                              title="Edit Package"
                            >
                              <Pencil className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeletePkg(pkg.id)}
                              className="text-[#786c62] hover:text-red-600 bg-[#faf8f5] hover:bg-red-50 p-1.5 rounded-lg transition-colors cursor-pointer"
                              title="Delete Package"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <h3 className="text-[20px] font-medium text-[#2d241e] break-words max-w-full" style={{ fontFamily: playfair }}>
                          {pkg.title}
                        </h3>

                        <div className="flex flex-col gap-1 mt-1">
                          <span className="text-[11px] font-semibold text-[#786c62] uppercase tracking-wider" style={{ fontFamily: dmSans }}>
                            Package Price
                          </span>
                          <div className="bg-[#faf8f5] border border-[#e8e2d8] rounded-xl px-4 py-2.5 flex items-center justify-between">
                            <span className="text-[18px] font-bold text-[#2d241e]" style={{ fontFamily: dmSans }}>
                              {pkg.price.startsWith("₹") ? pkg.price : `₹ ${pkg.price}`}
                            </span>
                            <span className="text-[11px] text-[#786c62] font-medium" style={{ fontFamily: dmSans }}>
                              {pkg.duration || "7 Days"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {pkg.items && pkg.items.length > 0 && (
                        <div className="pt-4 border-t border-[#f2ede6] flex flex-col gap-2.5 min-w-0">
                          <span className="text-[12px] font-semibold text-[#786c62]">Included Services:</span>
                          <ul className="flex flex-col gap-2 min-w-0">
                            {pkg.items.slice(0, 5).map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2.5 text-[13px] text-[#4a3f36] min-w-0" style={{ fontFamily: dmSans }}>
                                <CheckCircle2 className="w-4 h-4 text-[#2c4a2e] shrink-0" />
                                <span className="break-words min-w-0 flex-1">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tab 2: Customer Feedback Manager */}
            {activeTab === "feedbacks" && (
              <motion.div
                key="feedbacks-tab"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-8"
              >
                <div className="bg-white p-5 sm:p-8 rounded-2xl border border-[#e2ded8] shadow-sm flex flex-col gap-6">
                  <div className="flex items-center justify-between border-b border-[#f0eae1] pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#2c4a2e]/10 flex items-center justify-center text-[#2c4a2e]">
                        {editingFbId ? <Pencil className="w-5 h-5 text-[#c4622d]" /> : <Plus className="w-5 h-5" />}
                      </div>
                      <h3 className="text-[18px] sm:text-[20px] font-normal text-[#2d241e]" style={{ fontFamily: playfair }}>
                        {editingFbId ? "Edit Customer Review" : "Add New Customer Review"}
                      </h3>
                    </div>
                    {editingFbId && (
                      <button
                        onClick={() => {
                          setEditingFbId(null);
                          setNewFb({ name: "", location: "", quote: "", rating: 5, avatar: "" });
                          setAvatarPreview("");
                        }}
                        className="text-[12px] font-semibold text-[#c4622d] hover:underline cursor-pointer"
                        style={{ fontFamily: dmSans }}
                      >
                        Cancel Editing
                      </button>
                    )}
                  </div>

                  <form onSubmit={handleSaveFeedbackForm} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                          Customer Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-[#998b7e] absolute left-3.5 top-3.5" />
                          <input
                            type="text"
                            placeholder="e.g. Sarah M."
                            value={newFb.name}
                            onChange={(e) => setNewFb({ ...newFb, name: e.target.value })}
                            required
                            className="bg-[#faf8f5] border border-[#d9d1c7] rounded-xl py-3 pl-10 pr-3.5 text-[14px] text-[#2d241e] outline-none focus:border-[#c4622d] focus:bg-white transition-all w-full"
                            style={{ fontFamily: dmSans }}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                          Location
                        </label>
                        <div className="relative">
                          <MapPin className="w-4 h-4 text-[#998b7e] absolute left-3.5 top-3.5" />
                          <input
                            type="text"
                            placeholder="e.g. United Kingdom"
                            value={newFb.location}
                            onChange={(e) => setNewFb({ ...newFb, location: e.target.value })}
                            className="bg-[#faf8f5] border border-[#d9d1c7] rounded-xl py-3 pl-10 pr-3.5 text-[14px] text-[#2d241e] outline-none focus:border-[#c4622d] focus:bg-white transition-all w-full"
                            style={{ fontFamily: dmSans }}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                          Star Rating
                        </label>
                        <select
                          value={newFb.rating}
                          onChange={(e) => setNewFb({ ...newFb, rating: Number(e.target.value) })}
                          className="bg-[#faf8f5] border border-[#d9d1c7] rounded-xl p-3 text-[14px] text-[#2d241e] outline-none focus:border-[#c4622d] focus:bg-white transition-all w-full"
                          style={{ fontFamily: dmSans }}
                        >
                          <option value={5}>5 Stars ★★★★★</option>
                          <option value={4}>4 Stars ★★★★☆</option>
                          <option value={3}>3 Stars ★★★☆☆</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                        Customer Photo / Avatar (Image Upload)
                      </label>
                      <div className="flex items-center gap-4 flex-wrap">
                        <label className="flex items-center gap-2 bg-[#faf8f5] border border-[#d9d1c7] hover:border-[#c4622d] text-[#2d241e] px-4 py-2.5 rounded-xl text-[13px] font-semibold cursor-pointer transition-colors">
                          <Upload className="w-4 h-4 text-[#c4622d]" />
                          <span>Choose Photo...</span>
                          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                        </label>

                        {avatarPreview && (
                          <div className="flex items-center gap-3 bg-[#faf0ea] p-1.5 pr-4 rounded-full border border-[#f5dfd5]">
                            <img src={avatarPreview} alt="Preview" className="w-8 h-8 rounded-full object-cover" />
                            <span className="text-[12px] font-semibold text-[#c4622d]">Photo Ready</span>
                            <button
                              type="button"
                              onClick={() => {
                                setAvatarPreview("");
                                setNewFb((prev) => ({ ...prev, avatar: "" }));
                              }}
                              className="text-[#998b7e] hover:text-red-600 cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                        Review Quote *
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Write customer feedback review message..."
                        value={newFb.quote}
                        onChange={(e) => setNewFb({ ...newFb, quote: e.target.value })}
                        required
                        className="bg-[#faf8f5] border border-[#d9d1c7] rounded-xl p-3.5 text-[14px] text-[#2d241e] outline-none focus:border-[#c4622d] focus:bg-white transition-all resize-none"
                        style={{ fontFamily: dmSans }}
                      />
                    </div>

                    <div className="flex items-center gap-3 self-start">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={savingFb}
                        className="flex items-center gap-2 bg-[#2c4a2e] hover:bg-[#203722] text-white px-6 py-2.5 rounded-xl text-[13px] font-semibold transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
                        style={{ fontFamily: dmSans }}
                      >
                        {editingFbId ? <Pencil className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        <span>{savingFb ? "Saving..." : editingFbId ? "Update Review" : "Add Review"}</span>
                      </motion.button>

                      {editingFbId && (
                        <button
                          type="button"
                          onClick={() => {
                            setEditingFbId(null);
                            setNewFb({ name: "", location: "", quote: "", rating: 5, avatar: "" });
                            setAvatarPreview("");
                          }}
                          className="px-4 py-2.5 rounded-xl text-[13px] font-semibold text-[#786c62] hover:bg-[#e2ded8] transition-colors cursor-pointer"
                          style={{ fontFamily: dmSans }}
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </form>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-[20px] font-normal text-[#2d241e]" style={{ fontFamily: playfair }}>
                    Active Website Reviews ({feedbacks.length})
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {feedbacks.map((fb) => (
                      <div
                        key={fb.id}
                        className="bg-white p-6 rounded-2xl border border-[#e2ded8] shadow-sm flex flex-col justify-between gap-5 hover:shadow-md transition-all duration-200 h-[220px] overflow-hidden min-w-0 max-w-full"
                      >
                        <div className="flex flex-col gap-3 min-w-0">
                          <div className="flex items-center justify-between gap-2 min-w-0">
                            <div className="flex items-center gap-3 min-w-0">
                              {fb.avatar ? (
                                <img src={fb.avatar} alt={fb.name} className="w-10 h-10 rounded-full object-cover shadow-xs shrink-0" />
                              ) : (
                                <div className="w-10 h-10 rounded-full bg-[#faf0ea] text-[#c4622d] font-bold flex items-center justify-center text-sm shadow-xs shrink-0">
                                  {fb.name.charAt(0)}
                                </div>
                              )}
                              <div className="min-w-0 flex-1">
                                <span className="font-semibold text-[#2d241e] text-[15px] block truncate" style={{ fontFamily: dmSans }}>
                                  {fb.name}
                                </span>
                                {fb.location && (
                                  <span className="text-[#87786c] text-[12px] block truncate" style={{ fontFamily: dmSans }}>
                                    {fb.location}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-1 text-[#d4a843] shrink-0">
                              {Array.from({ length: fb.rating || 5 }).map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-current" />
                              ))}
                            </div>
                          </div>

                          <p className="text-[#6b5e54] text-[14px] italic leading-relaxed line-clamp-3 overflow-hidden break-words [word-break:break-word] [overflow-wrap:anywhere] min-w-0 max-w-full" style={{ fontFamily: dmSans }}>
                            "{fb.quote}"
                          </p>
                        </div>

                        <div className="pt-3 border-t border-[#f2ede6] flex items-center justify-end gap-3">
                          <button
                            onClick={() => handleOpenEditFeedback(fb)}
                            className="flex items-center gap-1.5 text-[#786c62] hover:text-[#c4622d] text-[12px] font-semibold transition-colors cursor-pointer"
                            style={{ fontFamily: dmSans }}
                          >
                            <Pencil className="w-3.5 h-3.5" />
                            <span>Edit Review</span>
                          </button>
                          <button
                            onClick={() => handleDeleteFeedback(fb.id)}
                            className="flex items-center gap-1.5 text-red-600 hover:text-red-800 text-[12px] font-semibold transition-colors cursor-pointer"
                            style={{ fontFamily: dmSans }}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Delete Review</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 3: Retreat Bookings Section */}
            {activeTab === "bookings" && (
              <motion.div
                key="bookings-tab"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-6"
              >
                {/* Bookings Grid */}
                {bookings.length === 0 ? (
                  <div className="bg-white rounded-2xl p-12 text-center border border-[#e2ded8] flex flex-col items-center gap-3">
                    <AlertCircle className="w-10 h-10 text-[#d4a843] opacity-60" />
                    <h3 className="text-[18px] font-medium text-[#2d241e]" style={{ fontFamily: playfair }}>
                      No Bookings Found
                    </h3>
                    <p className="text-[13px] text-[#786c62]" style={{ fontFamily: dmSans }}>
                      No guest retreat reservations have been submitted yet.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {bookings.map((b) => (
                      <div
                        key={b.id}
                        className="bg-white p-6 rounded-2xl border border-[#e2ded8] shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-5 min-w-0 overflow-hidden"
                      >
                        <div className="flex flex-col gap-4 min-w-0">
                          {/* Header: Date Badge */}
                          <div className="flex items-center justify-between gap-3 flex-wrap min-w-0 pb-2 border-b border-[#f2ede6]">
                            <span className="text-[11px] font-semibold text-[#87786c]" style={{ fontFamily: dmSans }}>
                              Booked on: {new Date(b.created_at || Date.now()).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                            </span>
                            <span className="text-[11px] font-bold text-[#2c4a2e] bg-[#f0f5f1] px-3 py-1 rounded-full border border-[#d8e5d9]" style={{ fontFamily: dmSans }}>
                              New Reservation
                            </span>
                          </div>

                          {/* Customer Info */}
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-11 h-11 rounded-full bg-[#faf0ea] text-[#c4622d] font-bold flex items-center justify-center text-base shadow-xs shrink-0">
                              {b.name.charAt(0)}
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="text-[17px] font-semibold text-[#2d241e] truncate" style={{ fontFamily: dmSans }}>
                                {b.name}
                              </h4>
                              {(b.country || b.city) && (
                                <span className="text-[12px] text-[#786c62] flex items-center gap-1 truncate" style={{ fontFamily: dmSans }}>
                                  <MapPin className="w-3 h-3 text-[#c4622d] shrink-0" />
                                  {[b.city, b.country].filter(Boolean).join(", ")}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Package Details Banner */}
                          <div className="bg-[#faf8f5] p-3.5 rounded-xl border border-[#e8e2d8] flex flex-col gap-1 min-w-0">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#c4622d]" style={{ fontFamily: dmSans }}>
                              Selected Package
                            </span>
                            <div className="flex items-center justify-between gap-2 min-w-0">
                              <span className="text-[15px] font-semibold text-[#2d241e] break-words min-w-0 flex-1" style={{ fontFamily: playfair }}>
                                {b.package_name}
                              </span>
                              {b.package_price && (
                                <span className="text-[13px] font-bold text-[#2c4a2e] shrink-0" style={{ fontFamily: dmSans }}>
                                  {b.package_price}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Reservation Meta Info */}
                          <div className="grid grid-cols-2 gap-3 text-[13px] text-[#4a3f36]" style={{ fontFamily: dmSans }}>
                            <div className="flex items-center gap-2 min-w-0">
                              <User className="w-4 h-4 text-[#87786c] shrink-0" />
                              <span className="truncate">{b.guests || "01 Person"}</span>
                            </div>
                            {b.arrival_date && (
                              <div className="flex items-center gap-2 min-w-0">
                                <Calendar className="w-4 h-4 text-[#87786c] shrink-0" />
                                <span className="truncate">{b.arrival_date}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-2 min-w-0 col-span-2 sm:col-span-1">
                              <Mail className="w-4 h-4 text-[#87786c] shrink-0" />
                              <a href={`mailto:${b.email}`} className="hover:underline text-[#c4622d] truncate">
                                {b.email}
                              </a>
                            </div>
                            {b.phone && (
                              <div className="flex items-center gap-2 min-w-0 col-span-2 sm:col-span-1">
                                <Phone className="w-4 h-4 text-[#87786c] shrink-0" />
                                <a href={`tel:${b.phone}`} className="hover:underline text-[#2c4a2e] truncate">
                                  {b.phone}
                                </a>
                              </div>
                            )}
                          </div>

                          {/* Health Notes */}
                          {b.health_notes && (
                            <div className="bg-[#fefce8] p-3 rounded-xl border border-[#fef08a] flex flex-col gap-1 min-w-0 max-w-full overflow-hidden">
                              <span className="text-[11px] font-bold text-[#a16207] uppercase tracking-wider flex items-center gap-1" style={{ fontFamily: dmSans }}>
                                <FileText className="w-3 h-3" /> Health Notes / Special Needs
                              </span>
                              <p className="text-[12px] text-[#713f12] leading-relaxed break-all [word-break:break-word] [overflow-wrap:anywhere] min-w-0 max-w-full" style={{ fontFamily: dmSans }}>
                                {b.health_notes}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Card Footer Delete Button */}
                        <div className="pt-3 border-t border-[#f2ede6] flex justify-end">
                          <button
                            onClick={() => handleDeleteBooking(b.id)}
                            className="flex items-center gap-1.5 text-red-600 hover:text-red-800 text-[12px] font-semibold transition-colors cursor-pointer"
                            style={{ fontFamily: dmSans }}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Delete Record</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Tab 4: System Settings Section */}
            {activeTab === "settings" && (
              <motion.div
                key="settings-tab"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {/* ── Settings Card 1: Website Phone & WhatsApp Numbers ── */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2ded8] shadow-sm flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-[#f0eae1] pb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-[18px] sm:text-[20px] font-normal text-[#2d241e]" style={{ fontFamily: playfair }}>
                          Website Contact &amp; WhatsApp
                        </h3>
                        <p className="text-[12px] text-[#786c62]" style={{ fontFamily: dmSans }}>
                          Configure contact numbers displayed across the website &amp; WhatsApp chat widget.
                        </p>
                      </div>
                    </div>

                    {settingsAlert && (
                      <div
                        className={`p-4 rounded-xl text-[13px] font-semibold flex items-center gap-2 ${
                          settingsAlert.type === "success"
                            ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                            : "bg-red-50 text-red-800 border border-red-200"
                        }`}
                        style={{ fontFamily: dmSans }}
                      >
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{settingsAlert.text}</span>
                      </div>
                    )}

                    <form id="site-settings-form" onSubmit={handleSaveSiteSettings} className="flex flex-col gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-semibold text-[#6b5e54] flex items-center gap-1.5" style={{ fontFamily: dmSans }}>
                          <Smartphone className="w-3.5 h-3.5 text-[#25D366]" />
                          WhatsApp Widget Number *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. +91 90613 13555"
                          value={siteSettings.whatsapp_number}
                          onChange={(e) => setSiteSettings({ ...siteSettings, whatsapp_number: e.target.value })}
                          required
                          className="bg-[#faf8f5] border border-[#d9d1c7] rounded-xl p-3.5 text-[14px] text-[#2d241e] font-semibold outline-none focus:border-[#25D366] focus:bg-white transition-all"
                          style={{ fontFamily: dmSans }}
                        />
                        <span className="text-[11px] text-[#87786c]" style={{ fontFamily: dmSans }}>
                          This number is used by the floating green WhatsApp chat widget.
                        </span>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-semibold text-[#6b5e54] flex items-center gap-1.5" style={{ fontFamily: dmSans }}>
                          <PhoneCall className="w-3.5 h-3.5 text-[#c4622d]" />
                          Website Contact Number *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. +91 90613 13555 / +91 92073 13555"
                          value={siteSettings.contact_number}
                          onChange={(e) => setSiteSettings({ ...siteSettings, contact_number: e.target.value })}
                          required
                          className="bg-[#faf8f5] border border-[#d9d1c7] rounded-xl p-3.5 text-[14px] text-[#2d241e] font-semibold outline-none focus:border-[#c4622d] focus:bg-white transition-all"
                          style={{ fontFamily: dmSans }}
                        />
                        <span className="text-[11px] text-[#87786c]" style={{ fontFamily: dmSans }}>
                          Displayed in the Contact Us page, header, and website footer.
                        </span>
                      </div>
                    </form>
                  </div>

                  <div className="pt-4 border-t border-[#f0eae1] flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      form="site-settings-form"
                      disabled={savingSettings}
                      className="flex items-center gap-2 bg-[#2c4a2e] hover:bg-[#203722] text-white px-6 py-2.5 rounded-xl text-[13px] font-semibold transition-colors shadow-md disabled:opacity-50 cursor-pointer"
                      style={{ fontFamily: dmSans }}
                    >
                      <Save className="w-4 h-4" />
                      <span>{savingSettings ? "Saving Settings..." : "Save Contact Settings"}</span>
                    </motion.button>
                  </div>
                </div>

                {/* ── Settings Card 2: Admin Login ID & Password Change ── */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2ded8] shadow-sm flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-[#f0eae1] pb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#c4622d]/10 text-[#c4622d] flex items-center justify-center">
                        <Key className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-[18px] sm:text-[20px] font-normal text-[#2d241e]" style={{ fontFamily: playfair }}>
                          Admin Login Credentials
                        </h3>
                        <p className="text-[12px] text-[#786c62]" style={{ fontFamily: dmSans }}>
                          Change your administrator login username ID and password securely.
                        </p>
                      </div>
                    </div>

                    {credAlert && (
                      <div
                        className={`p-4 rounded-xl text-[13px] font-semibold flex items-center gap-2 ${
                          credAlert.type === "success"
                            ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                            : "bg-red-50 text-red-800 border border-red-200"
                        }`}
                        style={{ fontFamily: dmSans }}
                      >
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{credAlert.text}</span>
                      </div>
                    )}

                    <form id="admin-cred-form" onSubmit={handleSaveCredentials} className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                          New Admin Login Username / ID *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-[#998b7e] absolute left-3.5 top-3.5" />
                          <input
                            type="text"
                            placeholder="admin"
                            value={credForm.new_username}
                            onChange={(e) => setCredForm({ ...credForm, new_username: e.target.value })}
                            required
                            className="bg-[#faf8f5] border border-[#d9d1c7] rounded-xl py-3 pl-10 pr-3.5 text-[14px] text-[#2d241e] font-semibold outline-none focus:border-[#c4622d] focus:bg-white transition-all w-full"
                            style={{ fontFamily: dmSans }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[12px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                            New Password *
                          </label>
                          <div className="relative">
                            <Key className="w-4 h-4 text-[#998b7e] absolute left-3.5 top-3.5" />
                            <input
                              type="password"
                              placeholder="New password"
                              value={credForm.new_password}
                              onChange={(e) => setCredForm({ ...credForm, new_password: e.target.value })}
                              required
                              className="bg-[#faf8f5] border border-[#d9d1c7] rounded-xl py-3 pl-10 pr-3.5 text-[14px] text-[#2d241e] outline-none focus:border-[#c4622d] focus:bg-white transition-all w-full"
                              style={{ fontFamily: dmSans }}
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[12px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                            Confirm New Password *
                          </label>
                          <div className="relative">
                            <Key className="w-4 h-4 text-[#998b7e] absolute left-3.5 top-3.5" />
                            <input
                              type="password"
                              placeholder="Confirm password"
                              value={credForm.confirm_password}
                              onChange={(e) => setCredForm({ ...credForm, confirm_password: e.target.value })}
                              required
                              className="bg-[#faf8f5] border border-[#d9d1c7] rounded-xl py-3 pl-10 pr-3.5 text-[14px] text-[#2d241e] outline-none focus:border-[#c4622d] focus:bg-white transition-all w-full"
                              style={{ fontFamily: dmSans }}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="pt-4 border-t border-[#f0eae1] flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      form="admin-cred-form"
                      disabled={savingCreds}
                      className="flex items-center gap-2 bg-[#c4622d] hover:bg-[#b5562a] text-white px-6 py-2.5 rounded-xl text-[13px] font-semibold transition-colors shadow-md disabled:opacity-50 cursor-pointer"
                      style={{ fontFamily: dmSans }}
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>{savingCreds ? "Updating Credentials..." : "Update Credentials"}</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* ── Right-Side Drawer Form for Adding / Editing Package ── */}
      <AnimatePresence>
        {isAddPkgOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddPkgOpen(false)}
              className="fixed inset-0 bg-black z-50"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col justify-between border-l border-[#e2ded8]"
            >
              <div className="flex flex-col flex-1 overflow-y-auto p-6 gap-6">
                <div className="flex items-center justify-between border-b border-[#f0eae1] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#c4622d]/10 text-[#c4622d] flex items-center justify-center">
                      {editingPkgId ? <Pencil className="w-5 h-5" /> : <Package className="w-5 h-5" />}
                    </div>
                    <h3 className="text-[20px] font-normal text-[#2d241e]" style={{ fontFamily: playfair }}>
                      {editingPkgId ? "Edit Package Details" : "Add New Package"}
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsAddPkgOpen(false)}
                    className="w-8 h-8 rounded-full bg-[#faf8f5] hover:bg-[#f0eae1] flex items-center justify-center text-[#786c62] transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form id="add-pkg-form" onSubmit={handleSavePackageForm} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                      Package Title *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 10-Day Holistic Rejuvenation"
                      value={newPkg.title}
                      onChange={(e) => setNewPkg({ ...newPkg, title: e.target.value })}
                      required
                      className="bg-[#faf8f5] border border-[#d9d1c7] rounded-xl p-3 text-[14px] text-[#2d241e] outline-none focus:border-[#c4622d] focus:bg-white transition-all"
                      style={{ fontFamily: dmSans }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                      Subtitle / Label Tag
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Deep Detox & Healing"
                      value={newPkg.subtitle}
                      onChange={(e) => setNewPkg({ ...newPkg, subtitle: e.target.value })}
                      className="bg-[#faf8f5] border border-[#d9d1c7] rounded-xl p-3 text-[14px] text-[#2d241e] outline-none focus:border-[#c4622d] focus:bg-white transition-all"
                      style={{ fontFamily: dmSans }}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                        Package Price (Amount) *
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3 text-[#87786c] font-bold text-sm select-none">₹</span>
                        <input
                          type="text"
                          placeholder="65,000"
                          value={newPkg.price}
                          onChange={(e) => setNewPkg({ ...newPkg, price: e.target.value })}
                          required
                          className="bg-[#faf8f5] border border-[#d9d1c7] rounded-xl py-3 pl-7 pr-3 text-[14px] font-bold text-[#2d241e] outline-none focus:border-[#c4622d] focus:bg-white transition-all w-full"
                          style={{ fontFamily: dmSans }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                        Duration
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 10 Days"
                        value={newPkg.duration}
                        onChange={(e) => setNewPkg({ ...newPkg, duration: e.target.value })}
                        className="bg-[#faf8f5] border border-[#d9d1c7] rounded-xl p-3 text-[14px] text-[#2d241e] outline-none focus:border-[#c4622d] focus:bg-white transition-all"
                        style={{ fontFamily: dmSans }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                      Included Features (One per line)
                    </label>
                    <textarea
                      rows={5}
                      placeholder={"Full Panchakarma Protocol\nDaily Abhyanga Massage\nSatvik Meals & Accommodation\nPhysician Consultations"}
                      value={newPkg.itemsStr}
                      onChange={(e) => setNewPkg({ ...newPkg, itemsStr: e.target.value })}
                      className="bg-[#faf8f5] border border-[#d9d1c7] rounded-xl p-3.5 text-[13px] text-[#2d241e] outline-none focus:border-[#c4622d] focus:bg-white transition-all resize-none"
                      style={{ fontFamily: dmSans }}
                    />
                  </div>
                </form>
              </div>

              <div className="p-6 border-t border-[#f0eae1] bg-[#faf8f5] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddPkgOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-[13px] font-semibold text-[#786c62] hover:bg-[#e2ded8] transition-colors cursor-pointer"
                  style={{ fontFamily: dmSans }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="add-pkg-form"
                  disabled={addingPkg}
                  className="flex items-center gap-2 bg-[#c4622d] hover:bg-[#b5562a] text-white px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-colors shadow-md disabled:opacity-50 cursor-pointer"
                  style={{ fontFamily: dmSans }}
                >
                  {editingPkgId ? <Pencil className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  <span>{addingPkg ? "Saving..." : editingPkgId ? "Update Package" : "Add Package"}</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
