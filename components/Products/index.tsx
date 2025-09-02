"use client";

import Link from "next/link";
import { useState } from "react";

export default function Products() {
  const [active, setActive] = useState<"TerraFlow" | "GeoFlow">("TerraFlow");

  const products = [
    {
      key: "TerraFlow" as const,
      title: "TerraFlow",
      subtitle: "AI Field Intelligence for Agriculture",
      description:
        "Ask, analyze, and act. TerraFlow turns satellite pixels and parcel data into actionable decisions with an AI-first UX.",
      videoSrc: "/images/video/terraflow-demo-1.mp4",
      features: [
        {
          title: "AI-Powered Field Analysis",
          description:
            "Chat with your fields. Type natural questions and get maps, metrics, and clear explanations instantly.",
          details: [
            "Ask in plain language",
            "On-map answers and callouts",
            "Explain-it-like-I'm-5 mode",
            "Auto-generated shareable insights",
          ],
        },
        {
          title: "Parcel‑Centric Workflows",
          description:
            "Attach analytics to real land parcels for clean, manager‑friendly reporting.",
          details: [
            "Select parcels by click or search",
            "Batch run indices",
            "Per‑parcel health scores",
            "PDF/PNG exports for stakeholders",
          ],
        },
        {
          title: "Indices & Time‑Series",
          description:
            "From NDVI to Red‑Edge Chlorophyll — compare dates, spot anomalies, and track trends.",
          details: [
            "Rapid index library (NDVI, CIred‑edge, NDWI, more)",
            "Date‑to‑date change maps",
            "Cloud‑aware previews",
            "Side‑by‑side compare",
          ],
        },
        {
          title: "Smart Tasking & Notes",
          description:
            "Turn insights into action—create geo‑pinned tasks and field notes right on the map.",
          details: [
            "One‑click notes on any pixel",
            "Assign to field crews",
            "Due dates & priority tags",
            "CSV/GeoJSON export",
          ],
        },
      ],
      comingSoon: {
        title: "AI Automations (Coming Soon)",
        description: "Your agronomy co‑pilot for the busy season.",
        features: [
          "Yield‑risk early warnings",
          "Water stress and nitrogen hints",
          "Auto‑summaries per parcel per week",
          "WhatsApp/Email digests for teams",
        ],
      },
      cta: {
        headline: "See TerraFlow in action.",
        sub: "The fastest way to go from pixels to decisions.",
      },
    },
    {
      key: "GeoFlow" as const,
      title: "GeoFlow",
      subtitle: "The Smart Way to Manage Geospatial Projects",
      description:
        "From the field to the dashboard – streamline everything in one intelligent platform.",
      features: [
        {
          title: "Map-Based Project Management",
          description:
            "Visualize and manage projects linked to real land parcels. Track project status, location, and progress directly from the map interface.",
          details: [
            "Search addresses",
            "Drop project pins",
            "Change project statuses on the fly",
            "Filter by location, job number, or status",
          ],
        },
        {
          title: "Employee & Contractor Management",
          description:
            "Add, track, and update employee or contractor records with full control and visibility.",
          details: [
            "Define custom roles: Admin, Technician, Field Crew",
            "Log attendance with check-in/out tracking",
            "View total hours worked",
            "Maintain SSNs, contact info, addresses, and contractor types",
          ],
        },
        {
          title: "Client & Inquiry Tracking",
          description:
            "Easily onboard clients and log their project inquiries from a simple, intuitive interface.",
          details: [
            "Streamlined client onboarding",
            "Project inquiry management",
            "Client communication tracking",
            "Automated follow-up reminders",
          ],
        },
        {
          title: "Smart Admin Dashboard",
          description:
            "One glance gives you everything you need to know about your operations.",
          details: [
            "Real-time project status distribution",
            "Daily hours logged by team",
            "Quick insights into resource load and team activity",
            "Performance metrics and analytics",
          ],
        },
      ],
      comingSoon: {
        title: "AI-Powered Search & Automation (Coming Soon)",
        description: "Accelerate operations with built-in AI assistance.",
        features: [
          'Natural language search: "Show me all pending fieldwork in Austin"',
          "Auto-suggest project locations from map context",
          "Intelligent matching of clients, parcels, and projects",
          "Predictive status updates and risk alerts",
        ],
      },
      cta: {
        headline: "Power your geospatial workflows with GeoFlow.",
        sub: "Try the future of project management, today.",
      },
    },
  ];

  const product = products.find((p) => p.key === active)!;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f8fafc] to-white dark:from-[#0A0B0F] dark:via-[#0A0B0F] dark:to-[#0A0B0F] py-16 sm:py-24">
      {/* Soft background orbs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="container">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-black dark:text-white sm:text-4xl md:text-5xl">
            Our Products
          </h2>
          <p className="max-w-3xl text-base md:text-lg text-body-color dark:text-body-color-dark">
            Innovative software that turns complex spatial data into clear, actionable intelligence.
          </p>
        </div>

        {/* Pills */}
        <div className="mx-auto mb-10 flex w-full max-w-xl items-center justify-center rounded-full border border-stroke dark:border-stroke-dark bg-white/70 dark:bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/50 p-1 shadow-sm">
          {products.map(({ key }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`flex-1 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60
                ${
                  active === key
                    ? "bg-primary text-white shadow"
                    : "text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10"
                }
              `}
            >
              {key}
            </button>
          ))}
        </div>

        {/* TerraFlow Hero Video */}
        {product.key === "TerraFlow" && (
          <div className="mb-12">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 shadow-2xl">
              <video
                className="h-full w-full"
                src={product.videoSrc}
                playsInline
                muted
                loop
                autoPlay
                controls
                poster="/images/video/poster-terraflow.jpg"
              />
              {/* Glow edge */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/10 dark:ring-white/10" />
            </div>
          </div>
        )}

        {/* Product Body */}
        <div className="mb-16 text-center">
          <h3 className="mb-2 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-fuchsia-500">
            {product.title}
          </h3>
          <p className="mb-4 text-2xl font-semibold text-black dark:text-white">
            {product.subtitle}
          </p>
          <p className="mx-auto max-w-3xl text-lg text-body-color dark:text-body-color-dark">
            {product.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-12 grid gap-6 md:gap-8 md:grid-cols-2">
          {product.features.map((feature, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-stroke dark:border-stroke-dark bg-white/80 dark:bg-white/[0.04] backdrop-blur supports-[backdrop-filter]:bg-white/60 p-7 md:p-8 shadow-xl transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10" />
              <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                {feature.title}
              </h4>
              <p className="mb-5 text-base text-body-color dark:text-body-color-dark">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.details.map((d: string, j: number) => (
                  <li
                    key={j}
                    className="flex items-start text-base text-body-color dark:text-body-color-dark"
                  >
                    <span className="mr-3 mt-2 inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary to-fuchsia-500" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        {product.comingSoon && (
          <div className="mb-14 rounded-2xl border border-stroke dark:border-stroke-dark bg-white/80 dark:bg-white/[0.04] backdrop-blur supports-[backdrop-filter]:bg-white/60 p-8 shadow-xl">
            <h4 className="mb-3 text-2xl font-bold text-center text-black dark:text-white">
              {product.comingSoon.title}
            </h4>
            <p className="mx-auto mb-6 max-w-3xl text-center text-base text-body-color dark:text-body-color-dark">
              {product.comingSoon.description}
            </p>
            <ul className="mx-auto max-w-3xl space-y-2">
              {product.comingSoon.features.map((f: string, k: number) => (
                <li key={k} className="flex items-start text-base text-body-color dark:text-body-color-dark">
                  <span className="mr-3 mt-2 inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary to-fuchsia-500" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <h4 className="mb-2 text-3xl font-extrabold text-black dark:text-white">
            {product.cta?.headline}
          </h4>
          <p className="mb-8 text-lg text-body-color dark:text-body-color-dark">
            {product.cta?.sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Request Demo
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-primary to-fuchsia-500 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Get Started Free
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
            More Products Coming Soon
          </h3>
          <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
            We’re constantly developing new solutions to meet evolving geospatial needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
          >
            Stay Updated
          </Link>
        </div>
      </div>
    </section>
  );
}