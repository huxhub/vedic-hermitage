import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Package,
  MessageSquare,
  LogOut,
  Save,
  Plus,
  Trash2,
  Star,
  CheckCircle2,
  Sparkles,
  User,
  MapPin,
  Database,
  Activity,
  IndianRupee,
  Layers,
} from "lucide-react";
import {
  fetchPackages,
  updatePackages,
  fetchFeedbacks,
  addFeedback,
  deleteFeedback,
  adminAuth,
  PackageItem,
  FeedbackItem,
} from "@/data/adminApi";
import { playfair, dmSans } from "./shared";

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"packages" | "feedbacks">("packages");

  // Package Management State
  const [pkgs, setPkgs] = useState<PackageItem[]>([]);
  const [savingPkgs, setSavingPkgs] = useState(false);

  // Feedback Management State
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);
  const [newFb, setNewFb] = useState({ name: "", location: "", quote: "", rating: 5 });
  const [savingFb, setSavingFb] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const pData = await fetchPackages();
    if (pData.length > 0) setPkgs(pData);

    const fData = await fetchFeedbacks();
    setFeedbacks(fData);
  };

  const handleLogout = () => {
    adminAuth.removeToken();
    navigate("/admin/login");
  };

  const handlePriceChange = (id: string, newPrice: string) => {
    setPkgs((prev) =>
      prev.map((p) => (p.id === id ? { ...p, price: newPrice } : p))
    );
  };

  const handleSavePrices = async () => {
    setSavingPkgs(true);
    try {
      await updatePackages(pkgs);
    } catch (err) {
      console.error(err);
    } finally {
      setSavingPkgs(false);
    }
  };

  const handleAddFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFb.name || !newFb.quote) return;

    setSavingFb(true);
    try {
      const res = await addFeedback(newFb);
      if (res.success && res.feedback) {
        setFeedbacks((prev) => [res.feedback!, ...prev]);
        setNewFb({ name: "", location: "", quote: "", rating: 5 });
      }
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
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f1ea] flex">
      {/* ── Sidebar ── */}
      <aside className="w-64 lg:w-72 bg-[#1b331c] text-white flex flex-col justify-between shrink-0 shadow-2xl border-r border-[#264528] fixed lg:sticky top-0 h-screen z-30">
        <div className="flex flex-col">
          {/* Brand Header */}
          <div className="p-6 border-b border-white/10 flex flex-col gap-2">
            <span
              className="text-[22px] font-normal tracking-wide text-white leading-tight"
              style={{ fontFamily: playfair }}
            >
              VEDIC HERMITAGE
            </span>
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
              onClick={() => setActiveTab("packages")}
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
              onClick={() => setActiveTab("feedbacks")}
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
        <header className="bg-white/80 backdrop-blur-md border-b border-[#e2ded8] px-8 py-5 flex items-center justify-between sticky top-0 z-20 shadow-xs">
          <div>
            <h1 className="text-[24px] font-normal text-[#2d241e]" style={{ fontFamily: playfair }}>
              {activeTab === "packages" ? (
                <>
                  Booking Packages <span className="italic font-serif opacity-80">&amp;</span> Pricing
                </>
              ) : (
                <>
                  Customer Feedback <span className="italic font-serif opacity-80">&amp;</span> Reviews
                </>
              )}
            </h1>
            <p className="text-[13px] text-[#786c62]" style={{ fontFamily: dmSans }}>
              {activeTab === "packages"
                ? "Configure pricing for 7-Day, 14-Day, and 21-Day retreat packages."
                : "Manage customer reviews displayed on the website testimonials marquee."}
            </p>
          </div>

          {activeTab === "packages" && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSavePrices}
              disabled={savingPkgs}
              className="flex items-center gap-2 bg-[#c4622d] hover:bg-[#b5562a] text-white px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-colors shadow-md disabled:opacity-50 cursor-pointer"
              style={{ fontFamily: dmSans }}
            >
              <Save className="w-4 h-4" />
              <span>{savingPkgs ? "Saving..." : "Save Package Prices"}</span>
            </motion.button>
          )}
        </header>

        {/* Dashboard Body Content */}
        <main className="p-8 flex-1 max-w-[1240px] w-full mx-auto flex flex-col gap-8">
          {/* Top Quick Metrics Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-5 rounded-2xl border border-[#e2ded8] shadow-xs flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-[#786c62] uppercase tracking-wider" style={{ fontFamily: dmSans }}>
                  Active Packages
                </span>
                <span className="text-[22px] font-bold text-[#2d241e]" style={{ fontFamily: dmSans }}>
                  {pkgs.length || 3} Retreats
                </span>
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#faf0ea] text-[#c4622d] flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#e2ded8] shadow-xs flex items-center justify-between">
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

            <div className="bg-white p-5 rounded-2xl border border-[#e2ded8] shadow-xs flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-[#786c62] uppercase tracking-wider" style={{ fontFamily: dmSans }}>
                  Database Status
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                  <span className="text-[14px] font-semibold text-[#10b981]" style={{ fontFamily: dmSans }}>
                    MySQL Connected
                  </span>
                </div>
              </div>
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#e2ded8] shadow-xs flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-[#786c62] uppercase tracking-wider" style={{ fontFamily: dmSans }}>
                  Frontend Sync
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  <Activity className="w-4 h-4 text-[#c4622d]" />
                  <span className="text-[14px] font-semibold text-[#2d241e]" style={{ fontFamily: dmSans }}>
                    Live Auto Sync
                  </span>
                </div>
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#faf0ea] text-[#c4622d] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {pkgs.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="bg-white p-6 rounded-2xl border border-[#e2ded8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between gap-6"
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-[#c4622d] uppercase tracking-wider bg-[#faf0ea] border border-[#f5dfd5] px-3 py-1 rounded-full">
                            {pkg.subtitle || pkg.label}
                          </span>
                          <span className="text-[12px] font-semibold text-[#87786c]" style={{ fontFamily: dmSans }}>
                            {pkg.duration || "7 Days"}
                          </span>
                        </div>

                        <h3 className="text-[20px] font-medium text-[#2d241e]" style={{ fontFamily: playfair }}>
                          {pkg.title}
                        </h3>

                        <div className="flex flex-col gap-1.5 mt-1">
                          <label className="text-[12px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                            Package Price (Amount)
                          </label>
                          <div className="relative flex items-center">
                            <span className="absolute left-3.5 text-[#87786c] font-bold text-sm select-none">
                              ₹
                            </span>
                            <input
                              type="text"
                              value={pkg.price.replace("₹", "")}
                              onChange={(e) => handlePriceChange(pkg.id, `₹${e.target.value}`)}
                              className="bg-[#faf8f5] border border-[#d9d1c7] rounded-xl py-3 pl-8 pr-3 text-[16px] font-bold text-[#2d241e] outline-none focus:border-[#c4622d] focus:bg-white focus:ring-2 focus:ring-[#c4622d]/10 transition-all w-full"
                              style={{ fontFamily: dmSans }}
                            />
                          </div>
                        </div>
                      </div>

                      {pkg.items && pkg.items.length > 0 && (
                        <div className="pt-4 border-t border-[#f2ede6] flex flex-col gap-2.5">
                          <span className="text-[12px] font-semibold text-[#786c62]">Included Services:</span>
                          <ul className="flex flex-col gap-2">
                            {pkg.items.slice(0, 5).map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2.5 text-[13px] text-[#4a3f36]" style={{ fontFamily: dmSans }}>
                                <CheckCircle2 className="w-4 h-4 text-[#2c4a2e] shrink-0" />
                                <span>{item}</span>
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
                {/* Add Feedback Form Card */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2ded8] shadow-sm flex flex-col gap-6">
                  <div className="flex items-center justify-between border-b border-[#f0eae1] pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#2c4a2e]/10 flex items-center justify-center text-[#2c4a2e]">
                        <Plus className="w-5 h-5" />
                      </div>
                      <h3 className="text-[20px] font-normal text-[#2d241e]" style={{ fontFamily: playfair }}>
                        Add New Customer Review
                      </h3>
                    </div>
                    <span className="text-[12px] text-[#786c62]" style={{ fontFamily: dmSans }}>
                      Will render live on home page marquee
                    </span>
                  </div>

                  <form onSubmit={handleAddFeedback} className="flex flex-col gap-5">
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

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={savingFb}
                      className="self-start flex items-center gap-2 bg-[#2c4a2e] hover:bg-[#203722] text-white px-6 py-2.5 rounded-xl text-[13px] font-semibold transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
                      style={{ fontFamily: dmSans }}
                    >
                      <Plus className="w-4 h-4" />
                      <span>{savingFb ? "Adding..." : "Add Review"}</span>
                    </motion.button>
                  </form>
                </div>

                {/* Feedback List */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-[20px] font-normal text-[#2d241e]" style={{ fontFamily: playfair }}>
                    Active Website Reviews ({feedbacks.length})
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {feedbacks.map((fb) => (
                      <div
                        key={fb.id}
                        className="bg-white p-6 rounded-2xl border border-[#e2ded8] shadow-sm flex flex-col justify-between gap-5 hover:shadow-md transition-all duration-200"
                      >
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-[#faf0ea] text-[#c4622d] font-bold flex items-center justify-center text-sm shadow-xs">
                                {fb.name.charAt(0)}
                              </div>
                              <div>
                                <span className="font-semibold text-[#2d241e] text-[15px] block" style={{ fontFamily: dmSans }}>
                                  {fb.name}
                                </span>
                                {fb.location && (
                                  <span className="text-[#87786c] text-[12px]" style={{ fontFamily: dmSans }}>
                                    {fb.location}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-1 text-[#d4a843]">
                              {Array.from({ length: fb.rating || 5 }).map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-current" />
                              ))}
                            </div>
                          </div>

                          <p className="text-[#6b5e54] text-[14px] italic leading-relaxed" style={{ fontFamily: dmSans }}>
                            "{fb.quote}"
                          </p>
                        </div>

                        <div className="pt-3 border-t border-[#f2ede6] flex justify-end">
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
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
