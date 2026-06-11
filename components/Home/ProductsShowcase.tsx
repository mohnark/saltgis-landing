import Link from "next/link";
import { Satellite, Workflow, Check, ArrowRight } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";
import Reveal from "../Common/Reveal";

const products = [
  {
    name: "TerraLens",
    tagline: "AI Field Intelligence for Agriculture",
    pitch:
      "Ask your fields a question in plain language and get maps, metrics, and clear answers in seconds. NDVI, time-series, parcel health scores, and geo-pinned tasks — without a GIS specialist on staff.",
    outcomes: [
      "Spot crop stress weeks before it costs you yield",
      "From satellite pixels to a decision in minutes, not days",
      "Reports your stakeholders actually understand",
    ],
    cta: "See TerraLens in Action",
    badge: "For agriculture",
    icon: Satellite,
    accent: "from-primary to-saltgis-green-light",
  },
  {
    name: "GeoFlow",
    tagline: "The Smart Way to Manage Geospatial Projects",
    pitch:
      "Projects, crews, clients, and hours — all pinned to real land parcels on one map. Replace the spreadsheet sprawl with a single dashboard that shows you exactly where every job stands.",
    outcomes: [
      "Every project's status visible on the map at a glance",
      "Crew hours and attendance tracked automatically",
      "Client inquiries to active jobs in one workflow",
    ],
    cta: "Try GeoFlow",
    badge: "For field operations",
    icon: Workflow,
    accent: "from-saltgis-green-dark to-primary",
  },
];

const ProductsShowcase = () => {
  return (
    <section id="products" className="relative py-16 md:py-20 lg:py-24">
      <div className="container">
        <SectionTitle
          eyebrow="Products"
          title="Built to Sell Decisions, Not Just Maps"
          paragraph="Two platforms, one goal: get your team from raw spatial data to confident action faster than any spreadsheet or legacy GIS ever could."
          center
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={index * 120} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-stroke bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-card-hover dark:border-stroke-dark dark:bg-dark md:p-10">
                {/* Top accent line */}
                <span
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${product.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-primary/5 blur-2xl transition-colors duration-300 group-hover:bg-primary/15" />

                <div className="mb-6 flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${product.accent} text-white shadow-glow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                  >
                    <product.icon className="h-7 w-7" strokeWidth={1.75} />
                  </div>
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    {product.badge}
                  </span>
                </div>

                <h3 className="mb-1 font-heading text-2xl font-bold text-black dark:text-white md:text-3xl">
                  {product.name}
                </h3>
                <p className="mb-4 text-base font-semibold text-primary">
                  {product.tagline}
                </p>
                <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                  {product.pitch}
                </p>

                <ul className="mb-8 space-y-3">
                  {product.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start text-base text-body-color dark:text-body-color-dark"
                    >
                      <span className="mr-3 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {outcome}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/products"
                    className="group/cta inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-primary-dark hover:shadow-glow-sm"
                  >
                    {product.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl border border-primary/40 px-6 py-3 text-base font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                  >
                    Request a Demo
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
