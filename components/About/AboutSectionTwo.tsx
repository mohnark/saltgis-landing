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
                Precision software for a mapped world
              </h2>
              <p className="mb-10 text-base leading-relaxed text-body-color sm:text-lg">
                SaltGIS builds modern GIS applications that turn complex location data into
                decisions. From parcel mapping and field operations to analytics and
                automation, we help organizations manage land, infrastructure, and resources
                with accuracy and speed.
              </p>

              {/* Points */}
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                    Precision Mapping
                  </h3>
                  <p className="text-base text-body-color">
                    High‑accuracy tools for editing, measuring, and validating spatial data.
                    Clean cartography, topology‑safe edits, and configurable layers ensure
                    your maps are reliable and field‑ready.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                    Actionable Insights
                  </h3>
                  <p className="text-base text-body-color">
                    Convert raw geospatial inputs into clear intelligence for agriculture,
                    urban planning, and environmental monitoring. Dashboards, alerts, and
                    exports keep teams aligned and decisive.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  Open Standards & Interoperability
                  </h3>
                  <p className="text-base text-body-color">
                  SaltGIS speaks the language of geospatial: OGC APIs and services (WMS, WMTS, WFS‑T),
    GeoJSON and vector tiles, PostGIS and cloud data lakes. Import from common formats
    (CSV, SHP, GPKG, Parquet) and connect to Esri/Mapbox/QGIS workflows without friction.                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#1B3B6F] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Talk to an expert
                </a>
                <a
                  href="/case-studies"
                  className="inline-flex items-center justify-center rounded-lg border border-[#1B3B6F]/20 px-5 py-3 text-sm font-semibold text-[#1B3B6F] dark:text-white/90 transition hover:bg-[#1B3B6F]/5 dark:hover:bg-white/5"
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
