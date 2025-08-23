import { Metadata } from "next";
import Products from "@/components/Products";

export const metadata: Metadata = {
  title: "Products - SaltGIS | GeoFlow & Geospatial Software Solutions",
  description: "Discover SaltGIS products including GeoFlow - the smart way to manage geospatial projects. Transform complex spatial data into actionable intelligence.",
};

export default function ProductsPage() {
  return (
    <>
      <div className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="mb-16 flex flex-col items-center">
            <h1 className="mb-4 text-4xl font-bold !leading-tight text-black dark:text-white sm:text-5xl md:text-[60px]">
              Our Products
            </h1>
            <p className="text-base !leading-relaxed text-body-color md:text-lg text-center max-w-3xl">
              Innovative software solutions that transform complex spatial data into actionable intelligence. 
              Built with precision, usability, and innovation to meet your geospatial needs.
            </p>
          </div>
        </div>
      </div>
      <Products />
    </>
  );
} 