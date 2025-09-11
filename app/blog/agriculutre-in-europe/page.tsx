import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "European Agriculture, CAP, and GIS — SaltGIS Blog",
  description:
    "A deep, reference-backed explainer on how European agriculture differs globally, how CAP drives decisions, and where GIS/EO — and SaltGIS — make policy measurable and practical.",
  keywords: [
    "European Agriculture",
    "CAP",
    "GIS",
    "Remote Sensing",
    "Biodiversity",
    "LPIS",
    "IACS",
  ],
};

// --- Small UI atoms ---
const Stat = ({ k, v }: { k: string; v: string }) => (
  <div className="rounded-2xl border border-gray-200 bg-white/60 p-4 text-center shadow-sm dark:border-gray-800 dark:bg-black/30">
    <div className="text-2xl font-semibold tracking-tight">{v}</div>
    <div className="text-xs text-gray-500">{k}</div>
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="whitespace-nowrap rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
    {children}
  </span>
);

const Callout = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rounded-xl border-l-4 border-emerald-500/80 bg-emerald-50/60 p-4 dark:border-emerald-400/50 dark:bg-emerald-950/30">
    <div className="mb-1 text-sm font-semibold">{title}</div>
    <div className="text-sm text-gray-700 dark:text-gray-300">{children}</div>
  </div>
);

const Method = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-4 text-sm dark:border-gray-800 dark:from-gray-900 dark:to-gray-950">
    <div className="mb-1 font-semibold">{title}</div>
    <div className="text-gray-700 dark:text-gray-300">{children}</div>
  </div>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
    {children}
  </span>
);

const Anchor = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <a id={id} href={`#${id}`} className="group inline-flex scroll-mt-28 items-baseline gap-2">
    <span className="text-2xl font-bold text-black dark:text-white group-hover:underline">
      {children}
    </span>
    <span className="opacity-0 transition group-hover:opacity-100">
      <svg width="16" height="16" viewBox="0 0 24 24" className="text-primary"><path fill="currentColor" d="M3.9 12a5 5 0 0 1 5-5h3v2h-3a3 3 0 0 0 0 6h3v2h-3a5 5 0 0 1-5-5Zm7-3h3a5 5 0 0 1 0 10h-3v-2h3a3 3 0 1 0 0-6h-3V9Zm-5 2h6v2H5v-2Z"/></svg>
    </span>
  </a>
);

// --- Page ---
const BlogPost = () => {
  return (
    <>
      <div className="pt-24 md:pt-28 lg:pt-32">
        <Breadcrumb pageName="European Agriculture, CAP, and GIS" />
      </div>

      <section className="pb-[120px] pt-[72px]">
        <div className="container">
          {/* Hero */}
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
            <header className="rounded-3xl border border-gray-200 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-black/30">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Pill>Policy</Pill>
                <Pill>GIS</Pill>
                <Pill>Remote Sensing</Pill>
                <Pill>EU</Pill>
                <Pill>16 min read</Pill>
              </div>
              <h1 className="mb-2 text-4xl font-bold leading-tight text-black dark:text-white md:text-5xl">
                Agriculture in Europe: Why CAP Sets the Rules, and How GIS Makes Them Work
              </h1>
              <p className="max-w-3xl text-[15px] text-gray-600 dark:text-gray-300">
                A practical walkthrough of how European farming differs from other regions, what the Common Agricultural Policy (CAP) actually enforces.
              </p>

              <figure className="mt-6">
                <img
                  src="/images/blog/cap-euro.png"
                  alt="European agriculture and CAP overview"
                  className="aspect-[3/2] w-full rounded-2xl border border-gray-200 object-cover dark:border-gray-800"
                  loading="lazy"
                />
                <figcaption className="mt-2 text-center text-xs text-gray-500">European agriculture and CAP — context for policy‑driven GIS</figcaption>
              </figure>
            </header>

            {/* Sidebar / TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-2xl border border-gray-200 bg-white/60 p-4 text-sm shadow-sm dark:border-gray-800 dark:bg-black/30">
                <div className="mb-3 text-xs uppercase tracking-wide text-gray-500">On this page</div>
                <nav className="space-y-2">
                  <a href="#eu-vs-world" className="block hover:underline">1) Europe vs. the world</a>
                  <a href="#cap" className="block hover:underline">2) CAP — what it enforces</a>
                  <a href="#gis" className="block hover:underline">3) Where GIS/EO deliver</a>
                  <a href="#time" className="block hover:underline">4) Time sinks & tech</a>
                  <a href="#refs" className="block hover:underline">References</a>
                </nav>
              </div>
            </aside>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
            <main className="space-y-12">
              {/* 1) Europe vs world */}
              <section>
                <Anchor id="eu-vs-world">1) How European agriculture differs</Anchor>
                <div className="mt-4 grid gap-6 md:grid-cols-2">
                  <div className="space-y-4 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
                    <p>
                      Europe’s farmland is a mosaic: smaller parcels, frequent hedgerows, villages and roads woven between fields, and a long history of mixed farming. Compare that to very large plots and extensive monocultures typical of the U.S. Midwest or parts of Brazil and Australia. This spatial pattern makes ecology and production tightly coupled.
                    </p>
                    <p>
                      Decision-making is also different. In many regions, market prices and yield dominate. In Europe, policy alignment is foundational: environmental standards and subsidy conditions shape cropping plans, field operations, and record‑keeping.
                    </p>
                  </div>
                  <div className="grid content-start gap-3">
                    <div className="grid grid-cols-3 gap-3">
                      <Stat k="Median parcel size" v="Smaller" />
                      <Stat k="Landscape" v="Hedgerows, villages" />
                      <Stat k="Policy weight" v="High" />
                    </div>
                    <Method title="What this means operationally">
                      <ul className="list-disc pl-5">
                        <li>More boundaries → more buffers, setbacks, and habitat features to map.</li>
                        <li>Frequent cloud cover → need compositing and QA for satellite time‑series.</li>
                        <li>Policy checks are per‑parcel → geometry accuracy and versioning matter.</li>
                      </ul>
                    </Method>
                  </div>
                </div>
              </section>

              {/* 2) CAP */}
              <section>
              <Anchor id="cap">2) CAP : The Rules</Anchor>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
                <p>
                  The Common Agricultural Policy (CAP), active since 1962, remains roughly one-third of the EU budget. It is the EU’s main financial instrument for agriculture, designed to keep farming competitive while also protecting the environment. Access to this funding depends on meeting environmental standards and management rules. The current framework emphasizes a “green architecture” and includes Good Agricultural and Environmental Conditions (GAEC) standards.
                </p>

                <Callout title="Why CAP matters">
                  <p>
                    CAP is more than a subsidy system, it is the backbone of European agriculture. For farmers, it provides direct income support that can mean the difference between profit and loss in volatile markets. For citizens, it ensures stable and affordable food supplies. For rural communities, it funds modernization, infrastructure, and diversification projects. And for the environment, CAP enforces climate- and nature-friendly practices by linking payments to compliance with ecological rules.
                  </p>
                  <p>
                    In short, CAP balances <b>economic viability</b> with <b>environmental stewardship</b>. It aims to make sure European farms remain productive while protecting soil, water, biodiversity, and climate.
                  </p>
                </Callout>

                <div className="grid gap-3 md:grid-cols-2">
                  <Method title="Examples of GAEC checks (illustrative)">
                    <ul className="list-disc pl-5">
                      <li><Badge>GAEC 1</Badge> Maintain permanent grassland share → monitor conversions & mowing windows.</li>
                      <li><Badge>GAEC 4</Badge> Buffers along watercourses → verify width and continuity of vegetated strips.</li>
                      <li><Badge>GAEC 6</Badge> Minimum soil cover → detect winter bare soil vs cover crops.</li>
                      <li><Badge>GAEC 8</Badge> Non-productive features → hedgerows, tree lines, fallows, margins.</li>
                    </ul>
                  </Method>
                  <Callout title="Why evidence matters">
                    Subsidy eligibility and penalties depend on proof. Evidence must be spatial, time-stamped, and parcel-linked. Auditors expect traceability: sensor, dates, methods, and quality flags. This is where GIS, remote sensing, and farm record systems become indispensable.
                  </Callout>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">What it means for different groups:</h4>
                  <ul className="list-disc pl-5">
                    <li>
                      <b>Farmers:</b> CAP ensures steady income support (basic payments), covers part of the cost of sustainable practices (eco-schemes), and funds rural investments (farm upgrades, diversification). But compliance is non-negotiable: missing GAEC checks can reduce payments.
                    </li>
                    <li>
                      <b>Citizens & consumers:</b> CAP underpins food security in Europe, stabilizes prices, and promotes healthier, more sustainable food systems aligned with the EU’s Green Deal.
                    </li>
                    <li>
                      <b>Policy & auditors:</b> CAP is the mechanism for enforcing EU environmental rules at farm level. Evidence-based monitoring ensures public money is tied to measurable outcomes.
                    </li>
                    <li>
                      <b>GIS & remote sensing professionals:</b> CAP creates a direct demand for geospatial monitoring, satellite indices for soil cover, AI for hedgerow detection, parcel mapping, and digital audit trails. It is one of the largest drivers of Earth observation use in Europe.
                    </li>
                  </ul>
                </div>
              </div>
            </section>


              <section>
                <Anchor id="gis">3) Where GIS and Earth Observation deliver</Anchor>
                <div className="mt-4 grid gap-6 md:grid-cols-2">
                  <div className="space-y-4 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
                    <p>
                      Inspecting every field on the ground is impractical. Satellite EO (e.g., Sentinel‑2, Landsat) and GIS workflows make it possible to monitor conditions consistently across seasons and countries. What matters is not a single image, but a quality‑controlled time series and transparent methods.
                    </p>
                    <p>
                      These workflows translate policy into measurable conditions at parcel scale. We package them into practical tools — from per‑parcel metrics to ready‑to‑serve map tiles — so teams can operationalize CAP checks without wading through raw EO.
                    </p>
                    <Method title="Typical workflow">
                      <ol className="list-decimal pl-5">
                        <li>Mask clouds/shadows (QA60/SCL; fMask optional); compute % valid pixels.</li>
                        <li>Build 14–30‑day rolling median composites per parcel; keep acquisition counts.</li>
                        <li>Detect conditions: cover vs bare (NDVI/EVI2 + hysteresis), red‑edge chlorophyll in early growth, hedgerow continuity, buffer vegetation.</li>
                        <li>Export per‑parcel metrics + map tiles + method card (sensor, dates, thresholds).</li>
                      </ol>
                    </Method>
                  </div>
                  <div className="grid content-start gap-3">
                    <Method title="Data you can plug today">
                      <ul className="list-disc pl-5">
                        <li>LPIS parcel geometries (Member State reference).</li>
                        <li>Copernicus Sentinel‑2 MSI; HLS (harmonized Landsat‑Sentinel) for consistency.</li>
                        <li>Copernicus HRLs (Tree Cover, Grassland), Corine Land Cover for context.</li>
                        <li>EU‑Hydro / national hydrography for buffer checks.</li>
                        <li>LUCAS in‑situ points/photos; EuroCrops for crop‑type context.</li>
                      </ul>
                    </Method>
                    <Callout title="Known limitations">
                      Northern winters are data‑sparse; geometry updates can lag; thresholds need crop/region tuning. QA and documentation reduce audit risk.
                    </Callout>
                  </div>
                </div>
              </section>

              <section>
                <Anchor id="time">4) Where farmers spend time — and how GIS can help</Anchor>

  {/* Pain: measured, not vague */}
  <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
    <Callout title="The admin reality, in numbers">
      <p>
        Independent EU analysis in 2025 found that CAP admin averages ~<b>7 working days per farm per year</b>, costing about <b>€1,230</b> on average. The heaviest steps are the annual aid application and compiling/organizing evidence for conditionality checks. These findings fed directly into the Commission’s 2024–2025 simplification package.
      </p>
    </Callout>

    {/* Time sinks */}
    <div className="grid gap-6 md:grid-cols-2">
      <Method title="Typical time sinks (self-reported)">
        <ul className="list-disc pl-5">
          <li>Annual aid application + parcel updates (LPIS edits, split/merge, boundary tweaks).</li>
          <li>Collecting proof for conditionality (soil cover windows, buffers, mowing/harvest dates).</li>
          <li>Answering control queries; handling exception cases and on-the-spot checks.</li>
          <li>Keeping audit-ready logs (maps, dates, photos, method notes) per parcel.</li>
        </ul>
      </Method>

      {/* Tech mapping: what actually removes hours */}
      <Method title="Where GIS can save hours">
        <ul className="list-disc pl-5">
          <li><b>Checks-by-Monitoring (AMS):</b> Sentinel time-series flag parcels that are OK vs. “needs attention”, so inspections focus on exceptions instead of everyone.</li>
          <li><b>LPIS sync in farm systems:</b> GIS platforms can auto-pull parcel geometry/IDs; pre-fill declarations and avoid repeated boundary edits.</li>
          <li><b>Evidence-as-a-file:</b> GIS workflows can auto-generate parcel-linked reports with sensor/date/method cards and thumbnails — ready for upload or audit.</li>
          <li><b>Early-warning tasks:</b> Remote-sensing triggers (e.g., bare soil or missing buffer) can prompt corrective actions before inspectors intervene.</li>
        </ul>
      </Method>
    </div>

    {/* What changes with AMS + digital-by-default */}
    <Callout title="Operational change">
      With AMS live, controls shift to exceptions. Digital-by-default and pre-filled data remove repeated typing, and the error window narrows because anomalies are flagged early, not after submission.
    </Callout>

    <div className="grid gap-6 md:grid-cols-2">
      <Method title="GIS Driven Decision Making">
        <ul className="list-disc pl-5">
          <li><b>Parcel sync + change assist:</b> Detect splits/merges automatically and suggest geometry edits before application deadlines.</li>
          <li><b>Satellite proof packs:</b> Auto-generate PDFs with Sentinel-2 thumbnails, dates, and GAEC tags (e.g., GAEC 6 soil cover).</li>
          <li><b>Exception dashboards:</b> Traffic-light flags (OK/Warning/Action) per parcel from NDVI, soil cover, or buffer indicators.</li>
          <li><b>Submission-ready exports:</b> Bundle parcel reports and metadata into standardized exports for audits.</li>
          <li><b>Advisor dashboards:</b> Multi-farm views that let consultants triage where intervention saves the most time.</li>
        </ul>
      </Method>

      <Method title="What this could mean in a season">
        <ul className="list-disc pl-5">
          <li><b>Fewer on-site checks:</b> Exception-only targeting reduces field visits for compliant parcels.</li>
          <li><b>Cleaner submissions:</b> Pre-filled forms from synced parcels cut re-entry and mismatches.</li>
          <li><b>Audit-ready by default:</b> Every map tile and date is traceable with sensor, processing, and cloud metadata.</li>
          <li><b>Predictable deadlines:</b> Early warnings turn “surprises” into planned field tasks.</li>
        </ul>
      </Method>
    </div>

    {/* Optional ROI illustration */}
    <div className="rounded-xl border border-gray-200/40 p-4 dark:border-gray-700/40">
      <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-100">Illustrative ROI (per farm)</h4>
      <p className="text-sm opacity-90">
        If a farmer spends ~7 days/yr on CAP admin, and GIS-driven monitoring can cut even 30% of that via AMS flags, parcel sync, and auto-proof packs, that’s ~2 days saved. At €25–€40/hour effective cost, this equals roughly €400–€640/year saved — before counting avoided penalties or reduced site visits. <i>Scenario is illustrative; actuals vary by member state and crop system.</i>
      </p>
    </div>
  </div>
</section>
              {/* References */}
              <section>
                <Anchor id="refs">References</Anchor>
                <ul className="mt-4 list-disc space-y-1 pl-6 text-sm text-gray-600 dark:text-gray-300">
                  <li>European Court of Auditors — CAP share of EU budget (~31%).</li>
                  <li>EEA — Common bird index; farmland bird declines since 1990.</li>
                  <li>PECBMS — Pan‑European farmland bird indicator (since 1980).</li>
                  <li>European Commission — IACS/LPIS overview and audit chain.</li>
                  <li>JRC — <em>Conceptual basis of Checks by Monitoring</em> (CAP AMS, Sentinel-based monitoring).</li>
                  <li>EU CAP Network study (2025) — Administrative burden/time and average cost per farm; underpinning Commission simplification package.</li>
                  <li>European Parliament EPRS brief (2025) — Summary of administrative burden study (avg ~7 working days; ~€1,230 cost).</li>
                  <li>Copernicus Data Space — Sentinel-2 MSI specifications.</li>
                  <li>Harmonized Landsat–Sentinel (HLS) — consistency across sensors.</li>
                  <li>Copernicus HRLs & Corine Land Cover; EU‑Hydro.</li>
                  <li>LUCAS in‑situ points/photos; EuroCrops crop polygons.</li>
                </ul>
              </section>
              <p className="mt-8 text-xs italic text-gray-500 dark:text-gray-400">
                Disclaimer: This article is for informational purposes only. CAP compliance requirements vary by Member State and farm context. Scenarios described are illustrative and not a guarantee of eligibility or savings.
              </p>
            </main>

            {/* Right rail: quick facts or quote */}
            <aside className="space-y-4">
              <div className="rounded-2xl border border-gray-200 bg-white/60 p-5 shadow-sm dark:border-gray-800 dark:bg-black/30">
                <div className="text-sm font-semibold">Quick facts</div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <Stat k="EU budget → CAP" v="~31%" />
                  <Stat k="S2 revisit" v="~5 days" />
                  <Stat k="Birds (1990→)" v="−14–15%" />
                  <Stat k="Farmland birds" v="≈ −40%" />
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-amber-50 to-rose-50 p-5 shadow-sm dark:border-gray-800 dark:from-amber-950/20 dark:to-rose-950/10">
                <div className="text-[13px] italic text-gray-700 dark:text-gray-300">
                  “In Europe, policy is not an afterthought — it is the operating environment. GIS translates policy into measurable, map‑ready conditions.”
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
