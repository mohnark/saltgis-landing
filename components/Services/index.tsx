"use client";

import { BrainCircuit, ArrowRight, Mail, MessageCircle } from "lucide-react";
import { contactConfig, openEmail, openWhatsApp } from "@/lib/contact";
import { services } from "@/lib/services";

const QUOTE_SUBJECT = "Quote request - SaltGIS";
const QUOTE_BODY =
  "Hello,\n\nI'd like a quote for:\n\n- What we need:\n- Data we have:\n- Timeline:\n\nBest regards,";

export default function Services() {
  return (
    <section className="relative z-10 flex min-h-[calc(100dvh-7rem)] items-center overflow-hidden pb-16 pt-28 lg:pb-8">
      {/* Faint topo accent */}
      <svg
        className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 opacity-[0.06] dark:opacity-[0.08]"
        width="560"
        height="560"
        viewBox="0 0 480 480"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="#118C4F" strokeWidth="1.5">
          <circle cx="240" cy="240" r="80" />
          <circle cx="240" cy="240" r="130" />
          <circle cx="240" cy="240" r="180" />
          <circle cx="240" cy="240" r="230" />
        </g>
      </svg>

      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <BrainCircuit className="h-4 w-4" strokeWidth={2} />
            AI powered
          </span>
          <h1 className="mt-5 font-heading text-3xl font-bold !leading-tight tracking-tight text-black dark:text-white sm:text-4xl md:text-5xl">
            GIS software and AI,{" "}
            <span className="text-primary">built by engineers</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-body-color dark:text-body-color-dark md:text-lg">
            Tell us the problem. We send back a scope and a price.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-body-color dark:text-body-color-dark">
            A small team of young graduates from Europe&apos;s top institutes.
            Earth Observation, geoscience AI, software.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-stroke bg-white p-6 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover dark:border-stroke-dark dark:bg-dark"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <service.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h2 className="font-heading text-lg font-bold text-black dark:text-white">
                {service.title}
              </h2>
              <p className="mt-2 text-sm text-body-color dark:text-body-color-dark">
                {service.short}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => openEmail(QUOTE_SUBJECT, QUOTE_BODY)}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-glow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-glow"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() =>
                openWhatsApp(
                  "Hello! I'd like a quote for a geospatial project.",
                )
              }
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-stroke px-8 py-4 text-base font-semibold text-black transition-colors hover:border-primary hover:text-primary dark:border-stroke-dark dark:text-white dark:hover:border-primary dark:hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </button>
          </div>

          <a
            href={`mailto:${contactConfig.email}`}
            className="inline-flex items-center gap-2 text-sm text-body-color transition-colors hover:text-primary dark:text-body-color-dark"
          >
            <Mail className="h-4 w-4" />
            {contactConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
