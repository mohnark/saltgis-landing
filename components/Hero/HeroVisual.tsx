/**
 * Animated "TerraLens" dashboard mock - pure CSS/SVG, no client JS.
 * Sells the product visually: NDVI parcels, live scan beam, alert pin.
 */
const HeroVisual = () => {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      {/* Glow behind the card */}
      <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-tr from-primary/25 via-saltgis-green-light/10 to-transparent blur-3xl" />

      {/* Floating chip -alert */}
      <div className="absolute -left-4 top-10 z-20 hidden animate-float rounded-xl border border-stroke bg-white/90 px-4 py-3 shadow-card backdrop-blur-md dark:border-stroke-dark dark:bg-dark/90 sm:block">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-yellow" />
          </span>
          <div>
            <p className="text-xs font-semibold text-black dark:text-white">
              Stressed Regions
            </p>
            {/* <p className="text-[11px] text-body-color dark:text-body-color-dark">
              Parcel 14 · 3 weeks early
            </p> */}
          </div>
        </div>
      </div>

      {/* Floating chip -outcome */}
      <div className="absolute -right-2 bottom-12 z-20 hidden animate-float-slow rounded-xl border border-stroke bg-white/90 px-4 py-3 shadow-card backdrop-blur-md dark:border-stroke-dark dark:bg-dark/90 sm:block">
        <p className="font-heading text-lg font-bold leading-none text-primary">
          −30%
        </p>
        <p className="mt-1 text-[11px] text-body-color dark:text-body-color-dark">
          manual GIS work
        </p>
      </div>

      {/* Dashboard card */}
      <div className="relative z-10 overflow-hidden rounded-2xl border border-stroke bg-white shadow-card-hover dark:border-stroke-dark dark:bg-dark">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-stroke px-5 py-3 dark:border-stroke-dark">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            </div>
            <span className="text-xs font-medium text-body-color dark:text-body-color-dark">
              TerraLens · Field Overview
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Data · Sentinel-2
          </span>
        </div>

        {/* Map canvas */}
        <div className="relative h-[300px] overflow-hidden bg-[#F4F7F5] dark:bg-[#141A22] sm:h-[330px]">
          <img
            src="/images/landscape.png"
            alt="Field overview map"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Scan beam */}
          <div className="animate-scan absolute inset-x-0 top-0 h-1/4">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-saltgis-green-light/20 to-saltgis-green-light/50" />
            <div className="h-[2px] w-full bg-saltgis-green-light shadow-glow" />
          </div>

          {/* Alert pin on stressed (amber) parcel */}
          <div className="absolute left-[43%] top-[47%]">
            <span className="absolute -inset-3 animate-pulse-dot rounded-full border-2 border-yellow" />
            <span className="relative block h-3 w-3 rounded-full border-2 border-white bg-yellow shadow" />
          </div>

          {/* Vegetation Health legend */}
          <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-lg border border-stroke bg-white/60 px-3 py-1.5 backdrop-blur-md dark:border-stroke-dark dark:bg-dark/60">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-body-color dark:text-body-color-dark">
              Vegetation Health
            </span>
            <span className="h-1.5 w-20 rounded-full bg-gradient-to-r from-yellow via-[#A4D9A0] to-primary-dark" />
          </div>
        </div>

        {/* Stat strip */}
        <div className="grid grid-cols-3 divide-x divide-stroke border-t border-stroke dark:divide-stroke-dark dark:border-stroke-dark">
          {[
            { label: "Routine Monitoring", value: "", trend: "▲" },
            { label: "Large Scale", value: "", trend: "" },
            { label: "Real Time Alerts", value: "", trend: "" },
          ].map((stat) => (
            <div key={stat.label} className="px-4 py-3.5 text-center">
              <p className="font-heading text-lg font-bold leading-none text-black dark:text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-wide text-body-color dark:text-body-color-dark">
                {stat.label}{" "}
                <span className="normal-case text-primary">{stat.trend}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
