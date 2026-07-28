import { JSX } from "react";
import { Navigate } from "react-router";
import { adminAuth } from "@/data/adminApi";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  if (!adminAuth.isAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}
