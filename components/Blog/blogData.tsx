import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "How GIS Is Transforming Agriculture in Europe",
    paragraph:
      "In Europe, agriculture is being reshaped by Geographic Information Systems (GIS)—a sophisticated blend of spatial data, satellite imaging, and analytics that's turning farms into high-efficiency, climate-smart systems.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: {
      name: "SaltGIS Team",
      image: "/images/LogoRectangleClipped.png",
      designation: "Geospatial Experts",
    },
    tags: ["GIS", "Agriculture", "Europe"],
    publishDate: "January 2025",
    slug: "/blog/how-gis-transforming-agriculture-europe",
  },
  {
    id: 2,
    title: "Precision Agriculture: Smarter Inputs, Stronger Yields",
    paragraph:
      "GIS-driven precision farming helps European producers optimize resources and output. Through integration with multispectral satellite imagery and soil moisture data, tools enable variable-rate nitrogen application, early disease detection, and precise irrigation control.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: {
      name: "SaltGIS Team",
      image: "/images/LogoRectangleClipped.png",
      designation: "Geospatial Experts",
    },
    tags: ["Precision Agriculture", "Satellite Imagery", "Farming"],
    publishDate: "January 2025",
    slug: "/blog/precision-agriculture-smarter-inputs-stronger-yields",
  },
  {
    id: 3,
    title: "From Satellite to Farm Gate: Mapping Large-Scale Trends",
    paragraph:
      "EU-wide initiatives are harnessing GIS and remote sensing to elevate agricultural oversight and responsiveness. Sentinel-1 radar imaging paired with in-situ LUCAS observations has enabled generating high-resolution crop type maps with ~80% accuracy.",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: {
      name: "SaltGIS Team",
      image: "/images/LogoRectangleClipped.png",
      designation: "Geospatial Experts",
    },
    tags: ["Remote Sensing", "EU Policy", "Crop Mapping"],
    publishDate: "January 2025",
    slug: "/blog/from-satellite-to-farm-gate-mapping-trends",
  },
];
export default blogData;
