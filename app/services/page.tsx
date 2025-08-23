import { Metadata } from "next";
import Services from "@/components/Services";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Services - SaltGIS | Modern GIS Applications & Location Intelligence",
  description: "Comprehensive geospatial solutions including custom GIS development, automation pipelines, location intelligence platforms, and consulting services.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="pt-24 md:pt-28 lg:pt-32">
        <Breadcrumb pageName="Services" />
      </div>
      <Services />
    </>
  );
} 