import { Metadata } from "next";
import Products from "@/components/Products";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Products - SaltGIS | Geospatial Software Solutions",
  description: "Discover SaltGIS products -geospatial software that transforms complex spatial data into actionable intelligence.",
};

export default function ProductsPage() {
  return (
    <>
      <div className="pt-24 md:pt-28 lg:pt-32">
        <Breadcrumb pageName="Products" />
      </div>
      <Products />
    </>
  );
} 