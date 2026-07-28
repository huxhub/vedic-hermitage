import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
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
  const [pkgMsg, setPkgMsg] = useState("");

  // Feedback Management State
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);
  const [newFb, setNewFb] = useState({ name: "", location: "", quote: "", rating: 5 });
  const [savingFb, setSavingFb] = useState(false);
  const [fbMsg, setFbMsg] = useState("");

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
    setPkgMsg("");
    try {
      const res = await updatePackages(pkgs);
      if (res.success) {
        setPkgMsg("Package prices updated successfully in MySQL DB!");
      } else {
        setPkgMsg("Failed to update package prices.");
      }
    } catch (err) {
      console.error(err);
      setPkgMsg("Error saving package prices.");
    } finally {
      setSavingPkgs(false);
    }
  };

  const handleAddFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFb.name || !newFb.quote) return;

    setSavingFb(true);
    setFbMsg("");
    try {
      const res = await addFeedback(newFb);
      if (res.success && res.feedback) {
        setFeedbacks((prev) => [res.feedback!, ...prev]);
        setNewFb({ name: "", location: "", quote: "", rating: 5 });
        setFbMsg("New feedback added successfully to MySQL DB!");
      } else {
        setFbMsg("Failed to add feedback.");
      }
    } catch (err) {
      console.error(err);
      setFbMsg("Error adding feedback.");
    } finally {
      setSavingFb(false);
    }
  };

  const handleDeleteFeedback = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this feedback?")) return;
    const ok = await deleteFeedback(id);
    if (ok) {
      setFeedbacks((prev) => prev.filter((f) => f.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-[#faf6f0] flex flex-col">
      {/* Top Admin Header */}
      <header className="bg-[#2c4a2e] text-white px-6 lg:px-20 py-4 flex items-center justify-between shadow-md border-b-4 border-[#c4622d]">
        <div className="flex items-center gap-3">
          <span className="text-[20px] font-normal tracking-wide" style={{ fontFamily: playfair }}>
            VEDIC HERMITAGE
          </span>
          <span className="bg-[#c4622d] text-white text-[11px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
            Admin Panel
          </span>
        </div>
        <button
          onClick={handleLogout}
          className="bg-white/10 hover:bg-white/20 text-white text-[13px] font-semibold px-4 py-2 rounded transition-colors cursor-pointer"
          style={{ fontFamily: dmSans }}
        >
          Sign Out
        </button>
      </header>

      {/* Main Container */}
      <main className="max-w-[1200px] w-full mx-auto px-6 py-10 flex-1 flex flex-col gap-8">
        {/* Navigation Tabs */}
        <div className="flex border-b border-[#d9d1c7] gap-8">
          <button
            onClick={() => setActiveTab("packages")}
            className={`pb-3 text-[15px] font-semibold transition-colors relative cursor-pointer ${
              activeTab === "packages"
                ? "text-[#c4622d] border-b-2 border-[#c4622d]"
                : "text-[#6b5e54] hover:text-[#2d241e]"
            }`}
            style={{ fontFamily: dmSans }}
          >
            Booking Packages & Pricing
          </button>
          <button
            onClick={() => setActiveTab("feedbacks")}
            className={`pb-3 text-[15px] font-semibold transition-colors relative cursor-pointer ${
              activeTab === "feedbacks"
                ? "text-[#c4622d] border-b-2 border-[#c4622d]"
                : "text-[#6b5e54] hover:text-[#2d241e]"
            }`}
            style={{ fontFamily: dmSans }}
          >
            Customer Feedback & Reviews
          </button>
        </div>

        {/* Tab 1: Package Price Manager */}
        {activeTab === "packages" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-[24px] font-normal text-[#2d241e]" style={{ fontFamily: playfair }}>
                  Manage Retreat Package Prices
                </h2>
                <p className="text-[14px] text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                  Update amounts for retreat packages. Changes update live across the website.
                </p>
              </div>
              <button
                onClick={handleSavePrices}
                disabled={savingPkgs}
                className="bg-[#c4622d] hover:bg-[#b5562a] text-white px-6 py-2.5 rounded-lg text-[14px] font-semibold transition-colors disabled:opacity-50 cursor-pointer"
                style={{ fontFamily: dmSans }}
              >
                {savingPkgs ? "Saving..." : "Save All Package Prices"}
              </button>
            </div>

            {pkgMsg && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-lg text-sm">
                {pkgMsg}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pkgs.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white p-6 rounded-xl border border-[#d9d1c7] shadow-sm flex flex-col gap-4"
                >
                  <span className="text-[12px] font-bold text-[#c4622d] uppercase tracking-wider">
                    {pkg.subtitle || pkg.label}
                  </span>
                  <h3 className="text-[18px] font-semibold text-[#2d241e]" style={{ fontFamily: playfair }}>
                    {pkg.title}
                  </h3>

                  <div className="flex flex-col gap-1.5 mt-2">
                    <label className="text-[13px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                      Package Amount (Price)
                    </label>
                    <input
                      type="text"
                      value={pkg.price}
                      onChange={(e) => handlePriceChange(pkg.id, e.target.value)}
                      className="bg-[#faf6f0] border border-[#d9d1c7] rounded-lg p-3 text-[16px] font-semibold text-[#2d241e] outline-none focus:border-[#c4622d]"
                      style={{ fontFamily: dmSans }}
                    />
                  </div>

                  {pkg.items && pkg.items.length > 0 && (
                    <div className="mt-2 pt-3 border-t border-[#f0eae1]">
                      <span className="text-[12px] font-semibold text-[#6b5e54] block mb-2">Included Features:</span>
                      <ul className="text-[13px] text-[#6b5e54] space-y-1 list-disc list-inside">
                        {pkg.items.slice(0, 4).map((item, idx) => (
                          <li key={idx}>{item}</li>
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-8"
          >
            {/* Add Feedback Form */}
            <div className="bg-white p-6 rounded-xl border border-[#d9d1c7] shadow-sm flex flex-col gap-5">
              <h3 className="text-[20px] font-normal text-[#2d241e]" style={{ fontFamily: playfair }}>
                Add New Customer Feedback / Review
              </h3>

              {fbMsg && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-lg text-sm">
                  {fbMsg}
                </div>
              )}

              <form onSubmit={handleAddFeedback} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                      Customer Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah M."
                      value={newFb.name}
                      onChange={(e) => setNewFb({ ...newFb, name: e.target.value })}
                      required
                      className="bg-[#faf6f0] border border-[#d9d1c7] rounded-lg p-3 text-[14px] outline-none focus:border-[#c4622d]"
                      style={{ fontFamily: dmSans }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. United Kingdom"
                      value={newFb.location}
                      onChange={(e) => setNewFb({ ...newFb, location: e.target.value })}
                      className="bg-[#faf6f0] border border-[#d9d1c7] rounded-lg p-3 text-[14px] outline-none focus:border-[#c4622d]"
                      style={{ fontFamily: dmSans }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                      Rating (1 to 5 Stars)
                    </label>
                    <select
                      value={newFb.rating}
                      onChange={(e) => setNewFb({ ...newFb, rating: Number(e.target.value) })}
                      className="bg-[#faf6f0] border border-[#d9d1c7] rounded-lg p-3 text-[14px] outline-none focus:border-[#c4622d]"
                      style={{ fontFamily: dmSans }}
                    >
                      <option value={5}>5 Stars ★★★★★</option>
                      <option value={4}>4 Stars ★★★★☆</option>
                      <option value={3}>3 Stars ★★★☆☆</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-[#6b5e54]" style={{ fontFamily: dmSans }}>
                    Feedback Quote / Review Message *
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter customer feedback quote..."
                    value={newFb.quote}
                    onChange={(e) => setNewFb({ ...newFb, quote: e.target.value })}
                    required
                    className="bg-[#faf6f0] border border-[#d9d1c7] rounded-lg p-3 text-[14px] outline-none focus:border-[#c4622d] resize-none"
                    style={{ fontFamily: dmSans }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={savingFb}
                  className="self-start bg-[#2c4a2e] hover:bg-[#203722] text-white px-6 py-2.5 rounded-lg text-[14px] font-semibold transition-colors disabled:opacity-50 cursor-pointer"
                  style={{ fontFamily: dmSans }}
                >
                  {savingFb ? "Adding..." : "Add Feedback to Database"}
                </button>
              </form>
            </div>

            {/* List of Feedbacks */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[20px] font-normal text-[#2d241e]" style={{ fontFamily: playfair }}>
                Existing Customer Reviews ({feedbacks.length})
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {feedbacks.map((fb) => (
                  <div
                    key={fb.id}
                    className="bg-white p-5 rounded-xl border border-[#d9d1c7] shadow-sm flex flex-col justify-between gap-4"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-[#2d241e] text-[15px]" style={{ fontFamily: dmSans }}>
                            {fb.name}
                          </span>
                          {fb.location && (
                            <span className="text-[#6b5e54] text-[13px] ml-2">({fb.location})</span>
                          )}
                        </div>
                        <span className="text-[#d4a843] text-[14px]">
                          {"★".repeat(fb.rating || 5)}
                        </span>
                      </div>
                      <p className="text-[#6b5e54] text-[14px] italic leading-relaxed" style={{ fontFamily: dmSans }}>
                        "{fb.quote}"
                      </p>
                    </div>

                    <button
                      onClick={() => handleDeleteFeedback(fb.id)}
                      className="self-end text-red-600 hover:text-red-800 text-[13px] font-semibold cursor-pointer"
                      style={{ fontFamily: dmSans }}
                    >
                      Delete Review
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
