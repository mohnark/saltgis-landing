import { Feature } from "@/types/feature";

const iconClass = "w-10 h-10 stroke-current"; // color via parent (e.g., text-[#1B3B6F])

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      // Precision Mapping — grid + map pin
      <svg width="40" height="40" viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 8h18M3 16h18M8 3v18M16 3v18" strokeOpacity=".35" />
        <path d="M12 11a3 3 0 0 1 3 3c0 2.4-3 6-3 6s-3-3.6-3-6a3 3 0 0 1 3-3z" />
        <circle cx="12" cy="14" r="1" />
      </svg>
    ),
    title: "Precision Mapping",
    paragraph:
      "We build advanced GIS tools for high-accuracy mapping and spatial analysis, empowering organizations to manage land, resources, and infrastructure with confidence.",
  },
  {
    id: 2,
    icon: (
      // Actionable Insights — bars + trend line
      <svg width="40" height="40" viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 20h18" />
        <path d="M6 16v-3M12 16v-6M18 16v-9" />
        <path d="M4 12l4-3 4 2 4-5 4 3" />
      </svg>
    ),
    title: "Actionable Insights",
    paragraph:
      "Our solutions transform raw geospatial data into clear, usable intelligence for agriculture, urban planning, environmental monitoring, and beyond.",
  },
  {
    id: 3,
    icon: (
      // Modern Technology Stack — layered tiles
      <svg width="40" height="40" viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l9 5-9 5-9-5 9-5z" />
        <path d="M3 13l9 5 9-5" />
        <path d="M3 18l9 5 9-5" />
      </svg>
    ),
    title: "Modern Technology Stack",
    paragraph:
      "Built with modern GIS technologies, cloud infrastructure, and scalable APIs, our applications deliver high-performance spatial analysis and mapping capabilities that grow with your business needs.",
  },
  {
    id: 4,
    icon: (
      // Customizable Solutions — sliders
      <svg width="40" height="40" viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 7h10M4 12h16M4 17h12" />
        <circle cx="16" cy="7" r="2" />
        <circle cx="8" cy="12" r="2" />
        <circle cx="18" cy="17" r="2" />
      </svg>
    ),
    title: "Customizable Solutions",
    paragraph:
      "Every organization is different. We tailor our GIS platforms to fit specific workflows, datasets, and decision-making processes.",
  },
  {
    id: 5,
    icon: (
      // Automation & Efficiency — circular arrows + clock
      <svg width="40" height="40" viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12a9 9 0 1 1-3.2-6.9" />
        <path d="M21 3v6h-6" />
        <circle cx="12" cy="12" r="4.5" strokeOpacity=".35" />
        <path d="M12 10v2.5L14 14" />
      </svg>
    ),
    title: "Automation & Efficiency",
    paragraph:
      "From field data collection to cloud-based analytics, we streamline geospatial workflows to save time and reduce costs.",
  },
  {
    id: 6,
    icon: (
      // Open & Innovative — lightbulb (ideas) with clean base
      <svg width="40" height="40" viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 18h6M10 21h4" />
        <path d="M12 5a5 5 0 0 0-5 5c0 1.6.7 2.9 2 3.9.6.5 1 1.3 1 2.1h6c0-.8.4-1.6 1-2.1 1.3-1 2-2.3 2-3.9a5 5 0 0 0-5-5z" />
      </svg>
    ),
    title: "Open & Innovative",
    paragraph:
      "We embrace open-source technologies and global standards, ensuring our tools are interoperable, transparent, and future-ready.",
  },
];

export default featuresData;
