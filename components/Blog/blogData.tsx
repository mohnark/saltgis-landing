import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Agriculture in Europe: Policy, Practice, and the Role of GIS",
    paragraph:
      "Explore how European agriculture differs from global models, why the Common Agricultural Policy (CAP) shapes every farm decision, and how GIS and remote sensing help farmers stay compliant, sustainable, and profitable.",
    image: "/images/blog/cap-euro.png",
    author: {
      name: "SaltGIS Team",
      image: "/images/LogoRectangleClipped.png",
      designation: "Geospatial Experts",
    },
    tags: ["CAP", "GIS", "Sustainability"],
    publishDate: "September 2025",
    slug: "/blog/agriculutre-in-europe",
  },
  {
    id: 2,
    title: "Seeing Green from Space: Vegetation Health with Satellite Indices",
    paragraph:
      "Explore how NDVI, EVI, and red-edge chlorophyll indices help monitor crop and forest health from orbit, turning satellite data into actionable agricultural insights.",
    image: "https://cdn.mos.cms.futurecdn.net/snpjZuM9rU3QQqoZR4vKmJ.jpg",
    author: {
      name: "SaltGIS Team",
      image: "/images/LogoRectangleClipped.png",
      designation: "Geospatial Experts",
    },
    tags: ["NDVI", "Remote Sensing", "Precision Agriculture"],
    publishDate: "September 2025",
    slug: "/blog/seeing-green-from-space",
  },

];
export default blogData;
