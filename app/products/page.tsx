import { Metadata } from "next";
import Products from "@/components/Products";

export const metadata: Metadata = {
  title: "TerraLens - SaltGIS | AI Field Intelligence",
  description:
    "TerraLens turns satellite imagery and parcel data into answers. No GIS expertise needed.",
};

export default function ProductsPage() {
  return (
    <div className="pt-24 md:pt-28">
      <Products />
    </div>
  );
}
