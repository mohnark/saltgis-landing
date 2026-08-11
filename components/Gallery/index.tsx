import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Reveal from "../Common/Reveal";
import CaseStudyMedia from "./CaseStudyMedia";
import { caseStudies } from "@/lib/work";

export default function Gallery() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pt-[140px]">
        <div
          className="pointer-events-none absolute inset-0 z-[-1] opacity-[0.05] dark:opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_at_center,transparent_0%,white_78%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,#1E232E_78%)]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 z-[-1] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/15 via-saltgis-green-light/10 to-transparent blur-3xl" />

        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary dark:border-primary/30 dark:bg-primary/10">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Selected work
            </span>

            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-black dark:text-white sm:text-5xl md:text-[56px]">
              Geospatial software,{" "}
              <span className="text-primary">shipped and running</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
              We are a small engineering studio building web GIS platforms and
              applied Earth Observation systems. Below is what we have
              delivered. Some engagements are covered by confidentiality, so
              client names are withheld.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-glow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-glow"
              >
                Discuss your project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-stroke px-8 py-4 text-base font-semibold text-black transition-colors hover:border-primary hover:text-primary dark:border-stroke-dark dark:text-white dark:hover:border-primary dark:hover:text-primary"
              >
                What we do
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Case studies */}
      <section className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-24">
        <div className="container">
          <div className="space-y-16 md:space-y-24">
            {caseStudies.map((study, index) => (
              <Reveal key={study.slug}>
                <article className="grid gap-10 lg:grid-cols-2 lg:gap-14">
                  {/* Media — alternates side on desktop, and sticks while the
                      longer copy column scrolls past it. */}
                  <div
                    className={`lg:sticky lg:top-28 lg:self-start ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <CaseStudyMedia
                      name={study.name}
                      media={study.media}
                      video={study.video}
                    />
                  </div>

                  {/* Copy */}
                  <div className={index % 2 === 1 ? "lg:order-1" : undefined}>
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                        {study.sector}
                      </span>
                      <span className="text-xs font-medium text-body-color dark:text-body-color-dark">
                        {study.period}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-black dark:text-white md:text-3xl">
                      {study.name}
                    </h3>
                    <p className="mt-1.5 text-base font-semibold text-primary">
                      {study.tagline}
                    </p>
                    <p className="mt-1 text-sm text-body-color dark:text-body-color-dark">
                      {study.client}
                    </p>

                    <p className="mt-5 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                      {study.summary}
                    </p>

                    <div className="mt-7">
                      <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-black dark:text-white">
                        The problem
                      </h4>
                      <p className="mt-2 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                        {study.problem}
                      </p>
                    </div>

                    <div className="mt-7">
                      <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-black dark:text-white">
                        What we built
                      </h4>
                      <ul className="mt-3 space-y-2.5">
                        {study.approach.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-base leading-relaxed text-body-color dark:text-body-color-dark"
                          >
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-7">
                      <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-black dark:text-white">
                        Outcome
                      </h4>
                      <ul className="mt-3 space-y-2.5">
                        {study.outcome.map((item) => (
                          <li
                            key={item}
                            className="flex items-start text-base leading-relaxed text-body-color dark:text-body-color-dark"
                          >
                            <span className="mr-3 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <Check className="h-3 w-3" strokeWidth={3} />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {study.stack.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-stroke bg-white px-3 py-1 text-xs font-medium text-body-color dark:border-stroke-dark dark:bg-dark dark:text-body-color-dark"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {study.href && (
                      <Link
                        href={study.href}
                        target={study.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          study.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
                      >
                        {study.href.startsWith("http")
                          ? "View the live application"
                          : "See the platform"}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- CTA */}
      <section className="relative overflow-hidden bg-gray-light py-16 dark:bg-bg-color-dark md:py-20">
        <div className="container">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-stroke bg-white p-10 text-center shadow-card dark:border-stroke-dark dark:bg-dark md:p-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
            <h2 className="font-heading text-2xl font-bold text-black dark:text-white md:text-4xl">
              Have a spatial problem worth solving?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-body-color dark:text-body-color-dark md:text-lg">
              Tell us the problem and what data you hold. We come back with a
              scope, a timeline and a price. No discovery retainer to get there.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-glow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-glow"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
