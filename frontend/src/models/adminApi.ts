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

export interface BookingItem {
  id: number;
  package_name: string;
  package_price?: string;
  guests?: string;
  name: string;
  email: string;
  phone?: string;
  country?: string;
  arrival_date?: string;
  health_notes?: string;
  status: "Pending" | "Confirmed" | "Completed" | "Cancelled";
  created_at?: string;
}

const TOKEN_KEY = "vedic_admin_token";
const PKGS_KEY = "vedic_packages";
const FBS_KEY = "vedic_feedbacks";
const BOOKINGS_KEY = "vedic_bookings";

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

export async function addNewPackage(pkgData: {
  title: string;
  price: string;
  subtitle?: string;
  duration?: string;
  items?: string[];
}): Promise<{ success: boolean; package?: PackageItem; message?: string }> {
  const newPkg: PackageItem = {
    id: "pkg_" + Date.now(),
    title: pkgData.title,
    price: pkgData.price.startsWith("₹") ? pkgData.price : `₹${pkgData.price}`,
    subtitle: pkgData.subtitle || "Custom Program",
    label: pkgData.subtitle || "Custom Program",
    duration: pkgData.duration || "7 Days",
    items: pkgData.items || [],
  };

  const cached = localStorage.getItem(PKGS_KEY);
  let localPkgs: PackageItem[] = cached ? JSON.parse(cached) : [];
  localPkgs = [...localPkgs, newPkg];
  localStorage.setItem(PKGS_KEY, JSON.stringify(localPkgs));

  window.dispatchEvent(new CustomEvent("vedic-packages-updated", { detail: localPkgs }));

  try {
    const res = await fetch("/api/packages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pkgData),
    });
    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.warn("Server responded with non-JSON response:", text);
    }
    if (res.ok && data?.package) {
      return { success: true, package: data.package };
    }
  } catch (err) {
    console.error("Error creating package on server:", err);
  }
  return { success: true, package: newPkg };
}

export async function updateSinglePackage(
  id: string,
  pkgData: {
    title: string;
    price: string;
    subtitle?: string;
    duration?: string;
    items?: string[];
  }
): Promise<{ success: boolean; package?: PackageItem }> {
  const formattedPrice = pkgData.price.startsWith("₹") ? pkgData.price : `₹${pkgData.price}`;

  const cached = localStorage.getItem(PKGS_KEY);
  let localPkgs: PackageItem[] = cached ? JSON.parse(cached) : [];
  localPkgs = localPkgs.map((p) =>
    p.id === id
      ? {
          ...p,
          title: pkgData.title,
          price: formattedPrice,
          subtitle: pkgData.subtitle || p.subtitle,
          label: pkgData.subtitle || p.label,
          duration: pkgData.duration || p.duration,
          items: pkgData.items || p.items,
        }
      : p
  );
  localStorage.setItem(PKGS_KEY, JSON.stringify(localPkgs));

  window.dispatchEvent(new CustomEvent("vedic-packages-updated", { detail: localPkgs }));

  try {
    const res = await fetch(`/api/packages/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pkgData),
    });
    const data = await res.json();
    if (res.ok && data.package) {
      return { success: true, package: data.package };
    }
  } catch (err) {
    console.error("Error updating single package on server:", err);
  }
  return { success: true };
}

export async function updatePackages(packages: Partial<PackageItem>[]): Promise<{ success: boolean; message: string }> {
  const cached = localStorage.getItem(PKGS_KEY);
  let localPkgs: PackageItem[] = cached ? JSON.parse(cached) : [];

  const updatedPkgs = localPkgs.map((p) => {
    const match = packages.find((pkg) => pkg.id === p.id);
    return match ? { ...p, ...match } : p;
  });

  const finalPkgs = updatedPkgs.length > 0 ? updatedPkgs : (packages as PackageItem[]);
  localStorage.setItem(PKGS_KEY, JSON.stringify(finalPkgs));

  window.dispatchEvent(new CustomEvent("vedic-packages-updated", { detail: finalPkgs }));

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

export async function deletePackage(id: string): Promise<boolean> {
  const cached = localStorage.getItem(PKGS_KEY);
  let localPkgs: PackageItem[] = cached ? JSON.parse(cached) : [];
  localPkgs = localPkgs.filter((p) => p.id !== id);
  localStorage.setItem(PKGS_KEY, JSON.stringify(localPkgs));

  window.dispatchEvent(new CustomEvent("vedic-packages-updated", { detail: localPkgs }));

  try {
    await fetch(`/api/packages/${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    console.error("Error deleting package on server:", err);
  }
  return true;
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

export async function addFeedback(feedback: {
  name: string;
  location?: string;
  quote: string;
  rating?: number;
  avatar?: string;
}): Promise<{ success: boolean; feedback?: FeedbackItem; message?: string }> {
  const newFb: FeedbackItem = {
    id: Date.now(),
    name: feedback.name,
    location: feedback.location || "",
    quote: feedback.quote,
    rating: feedback.rating || 5,
    avatar: feedback.avatar || "",
  };

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

export async function updateSingleFeedback(
  id: number,
  feedback: {
    name: string;
    location?: string;
    quote: string;
    rating?: number;
    avatar?: string;
  }
): Promise<{ success: boolean; feedback?: FeedbackItem }> {
  const cached = localStorage.getItem(FBS_KEY);
  let localFbs: FeedbackItem[] = cached ? JSON.parse(cached) : [];
  localFbs = localFbs.map((f) => (f.id === id ? { ...f, ...feedback } : f));
  localStorage.setItem(FBS_KEY, JSON.stringify(localFbs));

  window.dispatchEvent(new CustomEvent("vedic-feedbacks-updated", { detail: localFbs }));

  try {
    const res = await fetch(`/api/feedbacks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(feedback),
    });
    const data = await res.json();
    if (res.ok && data.feedback) {
      return { success: true, feedback: data.feedback };
    }
  } catch (err) {
    console.error("Error updating feedback on server:", err);
  }
  return { success: true };
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

// ── Bookings API ─────────────────────────────────────────────────────────────
export async function createBooking(booking: {
  package_name: string;
  package_price?: string;
  guests?: string;
  name: string;
  email: string;
  phone?: string;
  country?: string;
  arrival_date?: string;
  health_notes?: string;
}): Promise<{ success: boolean; booking?: BookingItem }> {
  const newBooking: BookingItem = {
    id: Date.now(),
    ...booking,
    status: "Pending",
    created_at: new Date().toISOString(),
  };

  const cached = localStorage.getItem(BOOKINGS_KEY);
  let localBookings: BookingItem[] = cached ? JSON.parse(cached) : [];
  localBookings = [newBooking, ...localBookings];
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(localBookings));

  window.dispatchEvent(new CustomEvent("vedic-bookings-updated", { detail: localBookings }));

  try {
    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    });
    const data = await res.json();
    if (res.ok && data.booking) {
      return { success: true, booking: data.booking };
    }
  } catch (err) {
    console.error("Error saving booking on server:", err);
  }
  return { success: true, booking: newBooking };
}

export async function fetchBookings(): Promise<BookingItem[]> {
  const cached = localStorage.getItem(BOOKINGS_KEY);
  let localBookings: BookingItem[] = cached ? JSON.parse(cached) : [];

  try {
    const res = await fetch("/api/bookings");
    const data = await res.json();
    if (res.ok && data.bookings) {
      localStorage.setItem(BOOKINGS_KEY, JSON.stringify(data.bookings));
      return data.bookings;
    }
  } catch (err) {
    console.warn("Could not fetch bookings from server API, using local cache:", err);
  }
  return localBookings;
}

export async function updateBookingStatus(
  id: number,
  status: "Pending" | "Confirmed" | "Completed" | "Cancelled"
): Promise<boolean> {
  const cached = localStorage.getItem(BOOKINGS_KEY);
  let localBookings: BookingItem[] = cached ? JSON.parse(cached) : [];
  localBookings = localBookings.map((b) => (b.id === id ? { ...b, status } : b));
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(localBookings));

  window.dispatchEvent(new CustomEvent("vedic-bookings-updated", { detail: localBookings }));

  try {
    await fetch(`/api/bookings/${id}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
  } catch (err) {
    console.error("Error updating booking status on server:", err);
  }
  return true;
}

export async function deleteBookingRecord(id: number): Promise<boolean> {
  const cached = localStorage.getItem(BOOKINGS_KEY);
  let localBookings: BookingItem[] = cached ? JSON.parse(cached) : [];
  localBookings = localBookings.filter((b) => b.id !== id);
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(localBookings));

  window.dispatchEvent(new CustomEvent("vedic-bookings-updated", { detail: localBookings }));

  try {
    await fetch(`/api/bookings/${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    console.error("Error deleting booking on server:", err);
  }
  return true;
}
