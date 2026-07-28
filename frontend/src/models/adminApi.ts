export interface PackageItem {
  id: string;
  label?: string;
  title: string;
  price: string;
  price_numeric?: number;
  duration?: string;
  subtitle?: string;
  items?: string[];
}

export interface FeedbackItem {
  id: number;
  name: string;
  location?: string;
  quote: string;
  rating: number;
  avatar?: string;
  created_at?: string;
}

const TOKEN_KEY = "vedic_admin_token";
const PKGS_KEY = "vedic_packages";
const FBS_KEY = "vedic_feedbacks";

export const adminAuth = {
  getToken: () => localStorage.getItem(TOKEN_KEY),
  setToken: (token: string) => localStorage.setItem(TOKEN_KEY, token),
  removeToken: () => localStorage.removeItem(TOKEN_KEY),
  isAuthenticated: () => !!localStorage.getItem(TOKEN_KEY),
};

export async function loginAdmin(username: string, password: string) {
  try {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (res.ok && data.success) {
      adminAuth.setToken(data.token);
      return { success: true, username: data.username };
    } else {
      return { success: false, message: data.message || "Invalid username or password." };
    }
  } catch (err) {
    console.error("Login API error:", err);
    return { success: false, message: "Server error during login." };
  }
}

export async function fetchPackages(): Promise<PackageItem[]> {
  const cached = localStorage.getItem(PKGS_KEY);
  let localPkgs: PackageItem[] = cached ? JSON.parse(cached) : [];

  try {
    const res = await fetch("/api/packages");
    const data = await res.json();
    if (res.ok && data.packages && data.packages.length > 0) {
      localStorage.setItem(PKGS_KEY, JSON.stringify(data.packages));
      return data.packages;
    }
  } catch (err) {
    console.warn("Could not fetch packages from server API, using local cache:", err);
  }
  return localPkgs;
}

export async function updatePackages(packages: Partial<PackageItem>[]): Promise<{ success: boolean; message: string }> {
  // 1. Instantly update local cache
  const cached = localStorage.getItem(PKGS_KEY);
  let localPkgs: PackageItem[] = cached ? JSON.parse(cached) : [];

  const updatedPkgs = localPkgs.map((p) => {
    const match = packages.find((pkg) => pkg.id === p.id);
    return match ? { ...p, ...match } : p;
  });

  // If localPkgs was empty, fill with packages
  const finalPkgs = updatedPkgs.length > 0 ? updatedPkgs : (packages as PackageItem[]);
  localStorage.setItem(PKGS_KEY, JSON.stringify(finalPkgs));

  // 2. Dispatch custom event so open tabs/components update instantly
  window.dispatchEvent(new CustomEvent("vedic-packages-updated", { detail: finalPkgs }));

  // 3. Send to backend MySQL API
  try {
    const res = await fetch("/api/packages", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ packages }),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error updating packages on server:", err);
    return { success: true, message: "Updated locally." };
  }
}

export async function fetchFeedbacks(): Promise<FeedbackItem[]> {
  const cached = localStorage.getItem(FBS_KEY);
  let localFbs: FeedbackItem[] = cached ? JSON.parse(cached) : [];

  try {
    const res = await fetch("/api/feedbacks");
    const data = await res.json();
    if (res.ok && data.feedbacks) {
      localStorage.setItem(FBS_KEY, JSON.stringify(data.feedbacks));
      return data.feedbacks;
    }
  } catch (err) {
    console.warn("Could not fetch feedbacks from server API, using local cache:", err);
  }
  return localFbs;
}

export async function addFeedback(feedback: { name: string; location?: string; quote: string; rating?: number }): Promise<{ success: boolean; feedback?: FeedbackItem; message?: string }> {
  const newFb: FeedbackItem = {
    id: Date.now(),
    name: feedback.name,
    location: feedback.location || "",
    quote: feedback.quote,
    rating: feedback.rating || 5,
  };

  // Instantly update local cache
  const cached = localStorage.getItem(FBS_KEY);
  let localFbs: FeedbackItem[] = cached ? JSON.parse(cached) : [];
  localFbs = [newFb, ...localFbs];
  localStorage.setItem(FBS_KEY, JSON.stringify(localFbs));

  window.dispatchEvent(new CustomEvent("vedic-feedbacks-updated", { detail: localFbs }));

  try {
    const res = await fetch("/api/feedbacks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(feedback),
    });
    const data = await res.json();
    if (res.ok && data.feedback) {
      return { success: true, feedback: data.feedback };
    }
  } catch (err) {
    console.error("Error adding feedback to server:", err);
  }
  return { success: true, feedback: newFb };
}

export async function deleteFeedback(id: number): Promise<boolean> {
  const cached = localStorage.getItem(FBS_KEY);
  let localFbs: FeedbackItem[] = cached ? JSON.parse(cached) : [];
  localFbs = localFbs.filter((f) => f.id !== id);
  localStorage.setItem(FBS_KEY, JSON.stringify(localFbs));

  window.dispatchEvent(new CustomEvent("vedic-feedbacks-updated", { detail: localFbs }));

  try {
    await fetch(`/api/feedbacks/${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    console.error("Error deleting feedback on server:", err);
  }
  return true;
}
