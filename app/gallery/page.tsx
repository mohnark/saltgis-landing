import { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery - SaltGIS | Geospatial Software Case Studies",
  description:
    "Delivered web GIS platforms, multi-tenant spatial data models, operations software with automated research, and applied Earth Observation.",
};

export default function GalleryPage() {
  return <Gallery />;
}
