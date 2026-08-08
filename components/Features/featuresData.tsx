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
      "High-accuracy mapping and spatial analysis for land, resources, and infrastructure.",
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
      "Raw geospatial data, turned into clear intelligence -for agriculture, urban planning, environmental monitoring, and beyond.",
  },
  {
    id: 3,
    icon: (
      // AI & Machine Learning — network nodes
      <svg width="40" height="40" viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="5" cy="6" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="12" cy="12" r="2.5" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M6.7 7.3L10 10.5M6.7 16.7L10 13.5M14 10.5l3.3-3.2M14 13.5l3.3 3.2" strokeOpacity=".55" />
      </svg>
    ),
    title: "AI & Machine Learning",
    paragraph:
      "Custom models on satellite and sensor data -detection, prediction, and forecasting trained on your land, not a generic dataset.",
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
      "Every organization's different. We tailor platforms to your workflows, data, and decisions.",
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
      "Field data to cloud analytics -streamlined, to save time and cut cost.",
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
      "Open-source technologies and global standards. Interoperable, transparent, future-ready.",
  },
];

export default featuresData;
