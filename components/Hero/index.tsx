import Link from "next/link";
import Reveal from "../Common/Reveal";
import BuildRotator from "./BuildRotator";

const techStack = [
  "PostGIS",
  "PyTorch",
  "MapLibre",
  "Deck.gl",
  "Sentinel-2",
  "GDAL",
  "QGIS",
  "OpenLayers",
  "Python",
  "Next.js",
  "AWS",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-12 pt-[120px] dark:bg-gray-dark md:pt-[140px] xl:pt-[160px]"
    >
      {/* Map graticule background */}
      <div
        className="pointer-events-none absolute inset-0 z-[-1] opacity-[0.05] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Radial fade so grid recedes at edges */}
      <div className="pointer-events-none absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_at_center,transparent_0%,white_78%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,#1E232E_78%)]" />
      {/* Brand aurora */}
      <div className="pointer-events-none absolute -top-40 left-1/2 z-[-1] h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/15 via-saltgis-green-light/10 to-transparent blur-3xl" />

      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* Copy */}
          <div className="mx-auto max-w-[640px] text-center lg:mx-0 lg:text-left">
            {/* <Reveal>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary shadow-sm dark:border-primary/30 dark:bg-primary/10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                GIS software &amp; services for teams that work with land
              </span>
            </Reveal> */}

            <Reveal delay={100}>
              <h1 className="mb-6 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-black dark:text-white sm:text-5xl xl:text-[58px]">
                <span className="text-gradient animate-shimmer">
                  GIS software and AI
                </span>{" "}
                for satellite data
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mx-auto mb-6 max-w-[560px] text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg lg:mx-0">
                Tell us the problem. We send back a scope and a price.
              </p>
            </Reveal>

            <Reveal delay={250}>
              <p className="mx-auto mb-8 max-w-[560px] text-base font-semibold text-black dark:text-white lg:mx-0">
                A small team of young graduates from Europe&apos;s top
                institutes.
              </p>
              <div className="mb-10 flex flex-wrap justify-center gap-2.5 lg:justify-start">
                {["Earth Observation", "Geoscience AI", "Software"].map(
                  (label) => (
                    <span
                      key={label}
                      className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-sm font-semibold text-primary dark:border-primary/30 dark:bg-primary/10"
                    >
                      {label}
                    </span>
                  ),
                )}
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-glow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-glow"
                >
                  Get a Quote
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Rotating "what we build" panel */}
          <Reveal delay={200} from="scale">
            <BuildRotator />
          </Reveal>
        </div>
      </div>

      {/* Open geo-stack marquee */}
      <div className="container mt-16 md:mt-20">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-body-color/70 dark:text-body-color-dark/70">
          Our stack
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap py-2">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="flex items-center gap-12 font-heading text-lg font-semibold text-body-color/60 dark:text-body-color-dark/60"
              >
                {tech}
                <span className="text-primary/40" aria-hidden="true">
                  ✦
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Topographic contour accent */}
      <div className="absolute right-0 top-0 z-[-1] opacity-20 lg:opacity-30">
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
      <div className="absolute bottom-0 left-0 z-[-1] opacity-20 lg:opacity-30">
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
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
