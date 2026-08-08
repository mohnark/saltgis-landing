import { BrainCircuit, LayoutDashboard, Workflow } from "lucide-react";

/** Single source of truth for what SaltGIS sells. Used by the hero rotator,
 *  the home services section, and the services page. */
export const services = [
  {
    icon: LayoutDashboard,
    title: "GIS Software",
    short: "Web maps and dashboards your team runs on.",
  },
  {
    icon: BrainCircuit,
    title: "Geospatial AI",
    short: "Models on satellite imagery. Crop health, land cover, change.",
  },
  {
    icon: Workflow,
    title: "Automation",
    short: "Pipelines that kill the manual GIS work.",
  },
];
