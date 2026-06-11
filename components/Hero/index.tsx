import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        {/* Map graticule background */}
        <div
          className="pointer-events-none absolute inset-0 z-[-1] opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* Radial fade so grid recedes at edges */}
        <div className="pointer-events-none absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_at_center,transparent_0%,white_75%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,#1E232E_75%)]" />

        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[820px] text-center"
                data-wow-delay=".2s"
              >
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-stroke bg-white px-4 py-1.5 text-sm font-medium text-body-color shadow-sm dark:border-stroke-dark dark:bg-dark dark:text-body-color-dark">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  GIS software &amp; services for teams that work with land
                </span>
                <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-black dark:text-white sm:text-5xl md:text-6xl">
                  Turn maps and satellite data into{" "}
                  <span className="text-primary">decisions that pay off</span>
                </h1>
                <p className="dark:text-body-color-dark mx-auto mb-12 max-w-[640px] text-base !leading-relaxed text-body-color sm:text-lg">
                  SaltGIS builds the dashboards, web GIS platforms, and
                  automation pipelines that turn raw spatial data into answers —
                  for agriculture, infrastructure, and urban planning. First
                  production dashboard in under 6 weeks. Manual GIS work cut by
                  30% or more.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/contact"
                    className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-btn transition duration-300 ease-in-out hover:bg-primary-dark"
                  >
                    Book a Free Consultation
                  </Link>
                  <Link
                    href="/products"
                    className="inline-block rounded-lg border border-stroke bg-white px-8 py-4 text-base font-semibold text-black transition duration-300 ease-in-out hover:border-primary hover:text-primary dark:border-stroke-dark dark:bg-white/5 dark:text-white dark:hover:border-primary dark:hover:text-primary"
                  >
                    See Our Products
                  </Link>
                </div>
                <p className="mt-6 text-sm text-body-color dark:text-body-color-dark">
                  Free consultation · No commitment · Reply within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Topographic contour accent, brand green */}
        <div className="absolute right-0 top-0 z-[-1] opacity-20 lg:opacity-40">
          <svg
            width="520"
            height="560"
            viewBox="0 0 520 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g stroke="#118C4F" strokeWidth="1.25">
              <path d="M520 40C440 60 380 120 370 200c-10 80 30 140 110 160" opacity=".5" />
              <path d="M520 0C410 25 330 105 318 205c-12 100 40 175 202 200" opacity=".35" />
              <path d="M520 90c-55 18-95 65-102 130-7 65 25 112 102 128" opacity=".65" />
              <path d="M520 140c-30 12-52 40-56 80-4 40 16 68 56 78" opacity=".8" />
              <circle cx="520" cy="220" r="26" opacity=".9" />
            </g>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-20 lg:opacity-40">
          <svg
            width="420"
            height="260"
            viewBox="0 0 420 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g stroke="#118C4F" strokeWidth="1.25">
              <path d="M0 260C60 200 140 180 200 195s130 50 220 35" opacity=".35" />
              <path d="M0 230c55-45 125-60 180-48s120 45 240 32" opacity=".5" />
              <path d="M0 200c50-32 110-42 160-32s110 38 260 28" opacity=".65" />
              <circle cx="120" cy="120" r="40" opacity=".5" />
              <circle cx="120" cy="120" r="24" opacity=".7" />
              <circle cx="120" cy="120" r="8" opacity=".9" fill="#118C4F" fillOpacity=".15" />
            </g>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
