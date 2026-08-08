import { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services - SaltGIS | AI-Powered Geospatial Software",
  description:
    "Web GIS applications, AI satellite analytics, and GIS automation. Tell us the problem, get a scope and a quote.",
};

export default function ServicesPage() {
  return <Services />;
}
