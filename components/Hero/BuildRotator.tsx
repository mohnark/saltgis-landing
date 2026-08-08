"use client";

import { useEffect, useState } from "react";
import { services } from "@/lib/services";

const ROTATE_MS = 4500;

const BuildRotator = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % services.length),
      ROTATE_MS,
    );
    return () => clearInterval(id);
  }, [paused, active]);

  const current = services[active];
  const Icon = current.icon;

  return (
    <div
      className="relative mx-auto w-full max-w-[520px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Glow behind the card */}
      <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-gradient-to-tr from-primary/25 via-saltgis-green-light/10 to-transparent blur-3xl" />

      <div className="relative z-10 overflow-hidden rounded-3xl border border-stroke bg-white shadow-card-hover dark:border-stroke-dark dark:bg-dark">
        {/* Graticule wash */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            color: "#118C4F",
          }}
        />

        <div className="relative px-8 pb-7 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            What we build
          </p>

          <div key={active} className="animate-fade-up motion-reduce:animate-none">
            <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <h2 className="mt-5 font-heading text-2xl font-bold leading-tight text-black dark:text-white">
              {current.title}
            </h2>
            <p className="mt-2.5 min-h-[3rem] text-base text-body-color dark:text-body-color-dark">
              {current.short}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="relative grid grid-cols-3 divide-x divide-stroke border-t border-stroke dark:divide-stroke-dark dark:border-stroke-dark">
          {services.map((service, i) => (
            <button
              key={service.title}
              onClick={() => setActive(i)}
              aria-label={`Show ${service.title}`}
              aria-current={i === active}
              className="group relative px-3 py-4 text-center"
            >
              <span
                className={`text-[11px] font-semibold uppercase tracking-wide transition-colors ${
                  i === active
                    ? "text-primary"
                    : "text-body-color group-hover:text-black dark:text-body-color-dark dark:group-hover:text-white"
                }`}
              >
                {service.title}
              </span>
              {/* Progress rail */}
              <span className="absolute inset-x-0 bottom-0 h-0.5 overflow-hidden bg-transparent">
                {i === active && (
                  <span
                    key={`${active}-${paused}`}
                    className="block h-full w-full origin-left bg-primary motion-reduce:animate-none"
                    style={{
                      animation: `progress-rail ${ROTATE_MS}ms linear forwards`,
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildRotator;
