import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Ask in plain language",
    description: "Type a question, get maps, metrics, and an explanation.",
  },
  {
    title: "Parcel-level analytics",
    description: "Health scores and reports attached to real land parcels.",
  },
  {
    title: "Indices and time-series",
    description: "NDVI, NDWI, red-edge. Compare dates, spot change.",
  },
  {
    title: "Notes and tasks on the map",
    description: "Pin findings, assign to crews, export CSV or GeoJSON.",
  },
];

export default function Products() {
  return (
    <section className="relative overflow-hidden bg-white py-16 dark:bg-gray-dark sm:py-20">
      {/* Subtle map graticule */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl md:text-5xl">
            TerraLens
          </h1>
          <p className="mt-3 text-lg font-semibold text-primary">
            AI field intelligence for agriculture
          </p>
          <p className="mt-4 text-base text-body-color dark:text-body-color-dark">
            Satellite pixels and parcel data, turned into answers. No GIS
            expertise needed.
          </p>
        </div>

        <div className="relative mx-auto mb-14 max-w-5xl overflow-hidden rounded-2xl border border-black/5 shadow-2xl dark:border-white/10">
          <video
            className="h-full w-full"
            src="/images/video/terralens-demo-1.mp4"
            playsInline
            muted
            loop
            autoPlay
            controls
            poster="/images/video/poster-terralens.jpg"
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/10 dark:ring-white/10" />
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-stroke bg-white p-6 shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-card-hover dark:border-stroke-dark dark:bg-white/[0.04]"
            >
              <h2 className="font-heading text-lg font-bold text-black dark:text-white">
                {feature.title}
              </h2>
              <p className="mt-2 text-sm text-body-color dark:text-body-color-dark">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-glow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-glow"
          >
            Request a Demo
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
