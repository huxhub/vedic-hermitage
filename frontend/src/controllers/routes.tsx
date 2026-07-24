import { createBrowserRouter } from "react-router";
import Root from "./Root";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import TreatmentsPage from "@/pages/TreatmentsPage";
import PackagesPage from "@/pages/PackagesPage";
import FacilitiesPage from "@/pages/FacilitiesPage";
import GalleryPage from "@/pages/GalleryPage";
import OncologyPage from "@/pages/OncologyPage";
import CancerCarePage from "@/pages/CancerCarePage";
import BookARetreatPage from "@/pages/BookARetreatPage";
import ContactPage from "@/pages/ContactPage";
import YogaPage from "@/pages/YogaPage";
import TreatmentDetailPage from "@/pages/TreatmentDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "treatments", Component: TreatmentsPage },
      { path: "packages", Component: PackagesPage },
      { path: "facilities", Component: FacilitiesPage },
      { path: "gallery", Component: GalleryPage },
      { path: "oncology", Component: OncologyPage },
      { path: "cancer-care", Component: CancerCarePage },
      { path: "book-retreat", Component: BookARetreatPage },
      { path: "contact", Component: ContactPage },
      { path: "yoga", Component: YogaPage },
      { path: "treatments/:id", Component: TreatmentDetailPage },
      { path: "yoga/:id", Component: TreatmentDetailPage },
    ],
  },
]);
