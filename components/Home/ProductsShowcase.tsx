import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

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
  },
];

const ProductsShowcase = () => {
  return (
    <section id="products" className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <SectionTitle
          title="Products Built to Sell Decisions, Not Just Maps"
          paragraph="Two platforms, one goal: get your team from raw spatial data to confident action faster than any spreadsheet or legacy GIS ever could."
          center
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-stroke bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-stroke-dark dark:bg-dark md:p-10"
            >
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-primary/5 blur-2xl transition-colors group-hover:bg-primary/10" />
              <span className="mb-4 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                {product.badge}
              </span>
              <h3 className="mb-1 text-2xl font-bold text-black dark:text-white md:text-3xl">
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
                    <svg
                      className="mr-3 mt-1 h-5 w-5 shrink-0 text-primary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {outcome}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-primary/80"
                >
                  {product.cta}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-base font-semibold text-primary transition hover:bg-primary hover:text-white"
                >
                  Request a Demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
