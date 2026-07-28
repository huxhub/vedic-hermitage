import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { loginAdmin } from "@/data/adminApi";
import { playfair, dmSans } from "./shared";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await loginAdmin(username, password);
      if (res.success) {
        navigate("/admin/dashboard");
      } else {
        setError(res.message || "Invalid credentials.");
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf6f0] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-[#d9d1c7] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-[#2c4a2e] px-8 py-10 text-center border-b-4 border-[#c4622d]">
          <h1
            className="text-white text-[26px] font-normal tracking-wide"
            style={{ fontFamily: playfair }}
          >
            VEDIC HERMITAGE
          </h1>
          <p
            className="text-[#d4a843] text-[13px] uppercase tracking-widest mt-1 font-semibold"
            style={{ fontFamily: dmSans }}
          >
            Admin Portal Access
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="p-8 flex flex-col gap-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label
              className="text-[13px] font-semibold text-[#6b5e54]"
              style={{ fontFamily: dmSans }}
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Enter admin username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="bg-[#faf6f0] border border-[#d9d1c7] rounded-lg p-3.5 text-[14px] text-[#2d241e] outline-none focus:border-[#c4622d] transition-colors"
              style={{ fontFamily: dmSans }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-[13px] font-semibold text-[#6b5e54]"
              style={{ fontFamily: dmSans }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-[#faf6f0] border border-[#d9d1c7] rounded-lg p-3.5 text-[14px] text-[#2d241e] outline-none focus:border-[#c4622d] transition-colors"
              style={{ fontFamily: dmSans }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#c4622d] hover:bg-[#b5562a] text-white font-semibold py-3.5 rounded-lg text-[14px] uppercase tracking-wider transition-colors disabled:opacity-50 mt-2 cursor-pointer"
            style={{ fontFamily: dmSans }}
          >
            {loading ? "Authenticating..." : "Sign In to Dashboard"}
          </button>
        </form>

        <div className="bg-[#faf6f0] px-8 py-4 text-center border-t border-[#e8e2d9]">
          <span className="text-[12px] text-[#786c62]" style={{ fontFamily: dmSans }}>
            Authorized Personnel Only • Vedic Hermitage Admin
          </span>
        </div>
      </motion.div>
    </div>
  );
}
