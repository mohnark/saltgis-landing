import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section aria-labelledby="about-saltgis" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Image */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp mx-auto mb-12 text-center lg:m-0"
              data-wow-delay=".15s"
            >
              {/* Earth's High-Tech Visualization GIF */}
              <Image
                src="/images/20250823_1304_Earth's High-Tech Visualization_simple_compose_01k3az9gbcfwt92nw17fzdzvpd.gif"
                alt="Earth's High-Tech Visualization - SaltGIS geospatial technology representation"
                width={520}
                height={500}
                priority
                className="mx-auto max-w-full h-auto drop-shadow-three object-contain"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[520px]" data-wow-delay=".2s">
              <h2
                id="about-saltgis"
                className="mb-6 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl"
              >
                GeoAI, one company
              </h2>
              <p className="mb-10 text-base leading-relaxed text-body-color sm:text-lg">
                We turn location data into decisions -mapping, machine
                learning, automation, one stack for land, infrastructure,
                and resources.
              </p>

              {/* Points */}
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                    Precision Mapping
                  </h3>
                  <p className="text-base text-body-color">
                    High-accuracy editing, measuring, and validation. Clean
                    cartography, topology-safe edits, field-ready maps.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                    AI-Driven Insights
                  </h3>
                  <p className="text-base text-body-color">
                    Machine learning models turn raw geospatial inputs into
                    intelligence for agriculture, urban planning, and
                    environmental monitoring -alerts, dashboards, exports.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                    Open Standards & Interoperability
                  </h3>
                  <p className="text-base text-body-color">
                    OGC APIs (WMS, WMTS, WFS-T), GeoJSON, vector tiles,
                    PostGIS, cloud data lakes. CSV, SHP, GPKG, Parquet in.
                    Esri, Mapbox, QGIS -no friction.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Talk to an expert
                </a>
                <a
                  href="/case-studies"
                  className="inline-flex items-center justify-center rounded-lg border border-primary/30 px-5 py-3 text-sm font-semibold text-primary dark:text-white/90 transition hover:bg-primary/5 dark:hover:bg-white/5"
                >
                  See case studies
                </a>
              </div>

              {/* Micro footnote */}
              <p className="mt-4 text-xs text-body-color/70">
                SaltGIS is a brand of <span className="font-medium">SaltSpatial OÜ</span>,
                registered in Estonia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
