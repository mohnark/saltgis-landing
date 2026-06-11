import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "../Common/Reveal";

const CTABand = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <Reveal from="scale">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B2E1D] via-[#0F3D26] to-primary-dark px-8 py-16 text-center shadow-card-hover md:px-16 md:py-20">
            {/* Graticule overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            {/* Topo contours */}
            <svg
              className="pointer-events-none absolute -left-20 -top-20 opacity-20"
              width="380"
              height="380"
              viewBox="0 0 380 380"
              fill="none"
              aria-hidden="true"
            >
              <g stroke="#fff" strokeWidth="1">
                <circle cx="190" cy="190" r="60" />
                <circle cx="190" cy="190" r="105" />
                <circle cx="190" cy="190" r="150" />
                <circle cx="190" cy="190" r="195" />
              </g>
            </svg>
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-saltgis-green-light/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <h2 className="relative mb-4 font-heading text-3xl font-bold text-white md:text-4xl lg:text-[44px] lg:leading-tight">
              Your spatial data is already worth money.
              <br className="hidden md:block" /> Let&apos;s prove it in two
              weeks.
            </h2>
            <p className="relative mx-auto mb-10 max-w-2xl text-base text-white/75 md:text-lg">
              Book a free consultation and walk away with a concrete assessment
              of what your data can do — quick wins, a roadmap, and budget
              ranges. No commitment, no jargon, reply within 24 hours.
            </p>
            <div className="relative flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-glow"
              >
                Book a Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                See Service Packages
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTABand;
