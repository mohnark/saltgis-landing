import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";
import Reveal from "../Common/Reveal";

/** Homepage proof strip. Deliberately thin - the detail lives on /gallery. */
const highlights = [
  {
    name: "Forest Asset Intelligence",
    sector: "Forestry and carbon",
    blurb:
      "Multi-tenant platform tracking individually surveyed trees, with 16 derived metrics per record rolling up to estate-level carbon and timber figures.",
    image: "/images/work/forestry/global-analytics.png",
    stack: ["GeoDjango", "PostGIS", "Mapbox GL"],
  },
  {
    name: "TerraLens",
    sector: "Agriculture and insurance",
    blurb:
      "Our analysis platform, deployed against a client's own parcels and imagery. Ask a question in plain language, get maps, metrics and an explanation.",
    image: "/images/video/poster-terralens.jpg",
    stack: ["Sentinel-2", "PyTorch", "LLM orchestration"],
  },
  {
    name: "Network Coverage Explorer",
    sector: "Telecommunications",
    blurb:
      "Cell tower coverage and modelled signal strength rendered client-side with WebGL, so planners explore a live map instead of ordering new exports.",
    image: "/images/work/tartu/coverage.png",
    stack: ["Deck.gl", "WebGL", "Mapbox"],
  },
];

const WorkHighlight = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <SectionTitle
          eyebrow="Selected work"
          title="Built, Delivered, In Use"
          paragraph="Platforms running in production for clients across forestry, agriculture and infrastructure."
          center
        />

        <div className="grid gap-7 md:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal key={item.name} delay={index * 120} className="h-full">
              <Link
                href="/gallery"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stroke bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-card-hover dark:border-stroke-dark dark:bg-dark"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-light dark:bg-bg-color-dark">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                    {item.sector}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-lg font-bold text-black dark:text-white">
                      {item.name}
                    </h3>
                    <ArrowUpRight
                      className="mt-0.5 h-5 w-5 shrink-0 text-body-color transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary dark:text-body-color-dark"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                    {item.blurb}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5 pt-1">
                    {item.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/5 px-2.5 py-1 text-[11px] font-medium text-primary dark:bg-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 rounded-xl border border-stroke px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary dark:border-stroke-dark dark:text-white dark:hover:border-primary dark:hover:text-primary"
          >
            See the full gallery
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkHighlight;
