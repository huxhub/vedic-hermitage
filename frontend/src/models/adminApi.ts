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
  try {
    const res = await fetch("/api/packages");
    const data = await res.json();
    if (res.ok && data.packages) {
      return data.packages;
    }
  } catch (err) {
    console.error("Error fetching packages:", err);
  }
  return [];
}

export async function updatePackages(packages: Partial<PackageItem>[]): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch("/api/packages", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ packages }),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error updating package prices:", err);
    return { success: false, message: "Failed to update package prices." };
  }
}

export async function fetchFeedbacks(): Promise<FeedbackItem[]> {
  try {
    const res = await fetch("/api/feedbacks");
    const data = await res.json();
    if (res.ok && data.feedbacks) {
      return data.feedbacks;
    }
  } catch (err) {
    console.error("Error fetching feedbacks:", err);
  }
  return [];
}

export async function addFeedback(feedback: { name: string; location?: string; quote: string; rating?: number }): Promise<{ success: boolean; feedback?: FeedbackItem; message?: string }> {
  try {
    const res = await fetch("/api/feedbacks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(feedback),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error adding feedback:", err);
    return { success: false, message: "Failed to add feedback." };
  }
}

export async function deleteFeedback(id: number): Promise<boolean> {
  try {
    const res = await fetch(`/api/feedbacks/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data.success;
  } catch (err) {
    console.error("Error deleting feedback:", err);
    return false;
  }
}
