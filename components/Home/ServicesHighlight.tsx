import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const services = [
  {
    title: "Web GIS Applications",
    description:
      "Custom map-based platforms for land management, monitoring, and infrastructure — built on PostGIS, MapLibre, and Deck.gl, ready for the field and the boardroom.",
    result: "Production-ready in 4–8 weeks",
  },
  {
    title: "Dashboards & Spatial BI",
    description:
      "Operational dashboards that put KPIs on the map. Automated reports, role-based access, and exports your decision makers will actually open.",
    result: "First dashboard in under 6 weeks",
  },
  {
    title: "Automation Pipelines",
    description:
      "Satellite and sensor data ingestion, validation, and delivery — integrated with your ERP, CRM, and cloud. Stop paying people to copy-paste shapefiles.",
    result: "30%+ less manual GIS work",
  },
];

const stats = [
  { kpi: "< 6 weeks", label: "to first production dashboard" },
  { kpi: "30%+", label: "reduction in manual GIS operations" },
  { kpi: "10x", label: "faster spatial queries" },
  { kpi: "99.9%", label: "uptime on managed deployments" },
];

const ServicesHighlight = () => {
  return (
    <section className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-24">
      <div className="container">
        <SectionTitle
          title="Services That Pay for Themselves"
          paragraph="We don't sell billable hours — we sell outcomes. Every engagement starts with the question: what decision will this system improve, and what is that worth to you?"
          center
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-2xl border border-stroke bg-white p-8 shadow-sm transition hover:shadow-lg dark:border-stroke-dark dark:bg-dark"
            >
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                {service.title}
              </h3>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                {service.description}
              </p>
              <p className="mt-auto text-sm font-semibold text-primary">
                → {service.result}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-stroke bg-white p-6 text-center shadow-sm dark:border-stroke-dark dark:bg-dark"
            >
              <div className="text-3xl font-extrabold text-primary">
                {stat.kpi}
              </div>
              <div className="mt-1 text-sm text-body-color dark:text-body-color-dark">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-primary/80"
          >
            Explore Service Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;
