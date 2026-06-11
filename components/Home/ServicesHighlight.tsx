import Link from "next/link";
import { Map, LayoutDashboard, Cog, ArrowRight } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";
import Reveal from "../Common/Reveal";
import CountUp from "../Common/CountUp";

const services = [
  {
    title: "Web GIS Applications",
    description:
      "Custom map-based platforms for land management, monitoring, and infrastructure -built on PostGIS, MapLibre, and Deck.gl, ready for the field and the boardroom.",
    result: "Production-ready in 4–8 weeks",
    icon: Map,
  },
  {
    title: "Dashboards & Spatial BI",
    description:
      "Operational dashboards that put KPIs on the map. Automated reports, role-based access, and exports your decision makers will actually open.",
    result: "First dashboard in under 6 weeks",
    icon: LayoutDashboard,
  },
  {
    title: "Automation Pipelines",
    description:
      "Satellite and sensor data ingestion, validation, and delivery -integrated with your ERP, CRM, and cloud. Stop paying people to copy-paste shapefiles.",
    result: "30%+ less manual GIS work",
    icon: Cog,
  },
];

const stats = [
  { end: 6, prefix: "< ", suffix: "", unit: "weeks", label: "to first production dashboard" },
  { end: 30, prefix: "", suffix: "%+", unit: "", label: "reduction in manual GIS operations" },
  { end: 10, prefix: "", suffix: "x", unit: "", label: "faster spatial queries" },
  { end: 99.9, prefix: "", suffix: "%", unit: "", label: "uptime on managed deployments", decimals: 1 },
];

const ServicesHighlight = () => {
  return (
    <section className="relative overflow-hidden bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-24">
      {/* Faint topo accent */}
      <svg
        className="pointer-events-none absolute -right-24 top-12 opacity-[0.06] dark:opacity-[0.08]"
        width="480"
        height="480"
        viewBox="0 0 480 480"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="#118C4F" strokeWidth="1.5">
          <circle cx="240" cy="240" r="80" />
          <circle cx="240" cy="240" r="130" />
          <circle cx="240" cy="240" r="180" />
          <circle cx="240" cy="240" r="230" />
        </g>
      </svg>

      <div className="container">
        <SectionTitle
          eyebrow="Services"
          title="Services That Pay for Themselves"
          paragraph="We don't sell billable hours -we sell outcomes. Every engagement starts with the question: what decision will this system improve, and what is that worth to you?"
          center
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 120} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-stroke bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-card-hover dark:border-stroke-dark dark:bg-dark">
                <span className="pointer-events-none absolute -right-3 top-2 font-heading text-[88px] font-bold leading-none text-primary/[0.06] transition-colors duration-300 group-hover:text-primary/10 dark:text-white/[0.04]">
                  0{index + 1}
                </span>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow-sm">
                  <service.icon className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-black dark:text-white">
                  {service.title}
                </h3>
                <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                  {service.description}
                </p>
                <p className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  <ArrowRight className="h-4 w-4" />
                  {service.result}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats band */}
        <Reveal delay={150}>
          <div className="mt-14 overflow-hidden rounded-3xl border border-stroke bg-white shadow-card dark:border-stroke-dark dark:bg-dark">
            <div className="grid grid-cols-2 divide-stroke dark:divide-stroke-dark lg:grid-cols-4 lg:divide-x">
              {stats.map((stat) => (
                <div key={stat.label} className="p-7 text-center">
                  <div className="font-heading text-4xl font-bold text-primary">
                    <CountUp
                      end={stat.end}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={stat.decimals ?? 0}
                    />
                    {stat.unit && (
                      <span className="ml-1 text-2xl">{stat.unit}</span>
                    )}
                  </div>
                  <div className="mt-2 text-sm text-body-color dark:text-body-color-dark">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-glow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-glow"
          >
            Explore Service Packages
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;
