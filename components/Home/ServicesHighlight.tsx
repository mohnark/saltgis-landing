import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";
import Reveal from "../Common/Reveal";
import { services } from "@/lib/services";

const ServicesHighlight = () => {
  return (
    <section className="relative overflow-hidden bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-24">
      {/* Faint topo accent */}
      <svg
        className="pointer-events-none absolute -right-24 top-12 opacity-[0.06] dark:opacity-[0.08]"
        width="480"
        height="480"
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
        <SectionTitle
          eyebrow="Services"
          title="What We Build"
          center
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 120} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-stroke bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-card-hover dark:border-stroke-dark dark:bg-dark">
                <span className="pointer-events-none absolute -right-3 top-2 font-heading text-[88px] font-bold leading-none text-primary/[0.06] transition-colors duration-300 group-hover:text-primary/10 dark:text-white/[0.04]">
                  0{index + 1}
                </span>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow-sm">
                  <service.icon className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-black dark:text-white">
                  {service.title}
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  {service.short}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-glow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-glow"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;
