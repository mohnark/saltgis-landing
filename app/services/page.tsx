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
        <div className="container">
          <div className="mb-16 flex flex-col items-center">
            <h1 className="mb-4 text-4xl font-bold !leading-tight text-black dark:text-white sm:text-5xl md:text-[60px]">
              Our Services
            </h1>
            <p className="text-base !leading-relaxed text-body-color md:text-lg text-center max-w-3xl">
              Comprehensive geospatial solutions designed to meet the diverse needs of modern organizations. 
              From custom GIS applications to intelligent automation, we transform your spatial data into actionable insights.
            </p>
          </div>
        </div>
      </div>
      <Services />
    </>
  );
} 