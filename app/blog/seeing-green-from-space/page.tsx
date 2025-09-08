import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title:
    "Seeing Green from Space: Vegetation Health with Satellite Indices - SaltGIS Blog",
  description:
    "Operational guide to NDVI, EVI, and Sentinel-2 red-edge: physics, band mapping, QA masking, compositing, anomaly math, and when each index actually helps.",
  keywords: [
    "NDVI",
    "EVI",
    "Chlorophyll",
    "CIred-edge",
    "Sentinel-2",
    "Landsat 8",
    "VIIRS",
    "MODIS",
    "Vegetation Health",
    "Remote Sensing",
    "Precision Agriculture",
  ],
};

const BlogPost = () => {
  return (
    <>
      <div className="pt-24 md:pt-28 lg:pt-32">
        <Breadcrumb pageName="Seeing Green from Space: Vegetation Health with Satellite Indices" />
      </div>

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="mb-6 text-4xl font-bold !leading-tight text-black dark:text-white sm:text-5xl md:text-[60px]">
                Seeing Green from Space: Vegetation Health with Satellite Indices
              </h1>
              <div className="mb-6 flex items-center justify-center space-x-4 text-sm text-body-color dark:text-body-color-dark">
                <span>By SaltGIS Team</span>
                <span>•</span>
                <span>September 2025</span>
                <span>•</span>
                <span>9 min read</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">NDVI</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">EVI</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Sentinel-2 Red-Edge</span>
              </div>
            </div>

            {/* Featured — Global Vegetation (VIIRS NDVI) */}
            <figure className="mb-12">
              <img
                src="https://cdn.mos.cms.futurecdn.net/snpjZuM9rU3QQqoZR4vKmJ.jpg.webp"
                alt="Global vegetation composite (NDVI) from Suomi NPP VIIRS, April 2012–April 2013"
                className="w-full rounded-lg shadow-lg"
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Global vegetation composite (NDVI) from Suomi NPP VIIRS (Apr 2012–Apr 2013). High values = dense, healthy vegetation. Source: NASA/NOAA via NASA Earth Observatory (June 19, 2013). © NASA/NOAA.
              </figcaption>
            </figure>

            {/* Intro */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-xl text-body-color dark:text-body-color-dark mb-8">
                Vegetation indices compress spectral behavior into stable numbers you can trend, compare, and threshold. Healthy canopies absorb <em>red</em> light and reflect <em>near-infrared</em> (NIR); stressed plants weaken red absorption and often reduce NIR reflectance. NDVI, EVI, and Sentinel-2 red-edge indices quantify those shifts for monitoring vigor, detecting early stress, and prioritizing fieldwork.
              </p>

              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">Why light betrays plant health</h2>
              <p className="mb-6">
                Chlorophyll drives red absorption; leaf structure drives NIR scattering. Comparing them yields a proxy for greenness/LAI. If you want the physics primer with canonical ranges, NASA’s backgrounder is still the best starting point.
                {" "}
                <a href="https://earthobservatory.nasa.gov/features/MeasuringVegetation" target="_blank" rel="noopener noreferrer">Read it</a>.
              </p>

              {/* NDVI */}
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">NDVI — the baseline signal</h2>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm mb-4 overflow-x-auto">{`NDVI = (NIR - Red) / (NIR + Red)`}</pre>
              <ul className="mb-6 list-disc pl-6 space-y-2">
                <li><strong>Typical ranges:</strong> water/urban &lt; 0.1; sparse 0.2–0.4; dense broadleaf 0.6–0.8 (season & cultivar dependent).</li>
                <li><strong>Strengths:</strong> Simple; long records (AVHRR → MODIS → VIIRS) ideal for climatologies/anomalies.</li>
                <li><strong>Limits:</strong> Saturates in high-LAI canopies; more soil/atmosphere sensitivity than EVI.</li>
              </ul>

              {/* NDVI anomaly case — Iberia drought */}
              <figure className="my-8">
                <img
                  src="https://eoimages.gsfc.nasa.gov/images/imagerecords/151000/151366/iberianndvi_tmo_2023084_2023113_lrg.jpg"
                  alt="NDVI anomaly map over Iberia (spring 2023 drought)"
                  className="w-full rounded-lg shadow"
                  loading="lazy"
                />
                <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  NDVI anomaly, Iberian Peninsula (Mar 25–Apr 23, 2023) vs 2000–2010 baseline. MODIS Terra. Source: <a target="_blank" rel="noopener noreferrer" href="https://earthobservatory.nasa.gov/images/151366/spain-browned-by-drought">NASA Earth Observatory</a>. © NASA.
                </figcaption>
              </figure>

              {/* EVI */}
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">EVI — keep dynamic range in dense canopies</h2>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm mb-4 overflow-x-auto">{`EVI = G * (NIR - Red) / (NIR + C1*Red - C2*Blue + L)
(typical MODIS constants: G = 2.5, C1 = 6, C2 = 7.5, L = 1)`}</pre>
              <ul className="mb-6 list-disc pl-6 space-y-2">
                <li>Blue band + coefficients reduce atmospheric and soil effects; better sensitivity when NDVI saturates.</li>
                <li>Global 16-day composites at 250 m (MOD13Q1) are reliable for seasonal and interannual analysis.</li>
              </ul>
              <p className="mb-6">
                Product specs:
                {" "}
                <a target="_blank" rel="noopener noreferrer" href="https://lpdaac.usgs.gov/products/mod13q1v061/">LP DAAC MOD13Q1</a>
                {" "}·{" "}
                <a target="_blank" rel="noopener noreferrer" href="https://modis.gsfc.nasa.gov/data/dataprod/mod13.php">MODIS VI overview</a>.
              </p>

              {/* Sentinel-2 Red-Edge */}
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">Sentinel-2 red-edge & chlorophyll indices</h2>
              <p className="mb-6">
                Sentinel-2 B5 (705 nm), B6 (740 nm), and B7 (783 nm) sample the red-edge, which tracks chlorophyll concentration more linearly than NDVI. Red-edge ratios often flag stress **earlier** than broadband indices.
              </p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm mb-6 overflow-x-auto">{`CI_red-edge = (NIR / RedEdge) - 1
Example (S2): NIR = B8 (842 nm), RedEdge = B5 or B6 or B7`}</pre>
              <figure className="my-8">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/62/Czechered_landscape_ESA359991.jpg"
                  alt="ESA parcel-scale Sentinel example near Prague"
                  className="w-full rounded-lg shadow"
                  loading="lazy"
                />
                <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Parcel-scale classification using Sentinel imagery, near Prague. © European Space Agency, CC BY-SA 3.0 IGO.
                  {" "}
                  <a target="_blank" rel="noopener noreferrer" href="https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2/Plant_health">ESA: Plant health</a>.
                </figcaption>
              </figure>

              {/* Band mapping cheat sheet */}
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">Band mapping — what’s “Red” and “NIR” really?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="text-left">Mission</th>
                      <th className="text-left">Red</th>
                      <th className="text-left">NIR</th>
                      <th className="text-left">Red-Edge</th>
                      <th className="text-left">Blue (EVI)</th>
                      <th className="text-left">Resolution</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sentinel-2 L2A</td>
                      <td>B4 (665 nm)</td>
                      <td>B8 (842 nm)</td>
                      <td>B5/B6/B7 (705/740/783 nm)</td>
                      <td>B2 (490 nm)</td>
                      <td>10 m (B2/B4/B8), 20 m (B5/B6/B7)</td>
                    </tr>
                    <tr>
                      <td>Landsat 8/9</td>
                      <td>B4 (Red, 0.64–0.67 µm)</td>
                      <td>B5 (NIR, 0.85–0.88 µm)</td>
                      <td>—</td>
                      <td>B2 (Blue, 0.45–0.51 µm)</td>
                      <td>30 m</td>
                    </tr>
                    <tr>
                      <td>MODIS (Terra)</td>
                      <td>Band 1 (Red, 620–670 nm)</td>
                      <td>Band 2 (NIR, 841–876 nm)</td>
                      <td>—</td>
                      <td>Band 3 (459–479 nm)</td>
                      <td>250 m (NDVI/EVI products)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* QA & masking */}
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">Quality first: clouds, shadows, snow</h2>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>Sentinel-2:</strong> prefer L2A (surface reflectance). Mask with <em>s2cloudless</em> or cloud probability &lt; 30%, plus shadow geometry. Screen high view angles (&gt; 15–20° off-nadir) if possible.</li>
                <li><strong>Landsat 8/9:</strong> use <code>QA_PIXEL</code> (cloud, shadow, snow bits) and <code>QA_RADSAT</code>.</li>
                <li><strong>MODIS:</strong> use VI product quality layers; avoid low-quality observations.</li>
              </ul>

              {/* Compositing */}
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">Compositing strategies that don’t lie</h2>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>Temporal:</strong> 10–16 day rolling windows; <em>median</em> for stability, or <em>max-NDVI</em> to mitigate residual cloud haze.</li>
                <li><strong>Spatial:</strong> per-parcel <em>median</em> or <em>P75</em> (robust to outliers and edge pixels).</li>
                <li><strong>Phenology aware:</strong> compare like-for-like windows year-over-year (e.g., DOY ± 15).</li>
              </ul>

              {/* Index selection matrix */}
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">Choosing the index — quick matrix</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="text-left">Situation</th>
                      <th className="text-left">Pick</th>
                      <th className="text-left">Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dense canopy (LAI high)</td>
                      <td>EVI or CI<sub>red-edge</sub></td>
                      <td>NDVI saturates; EVI maintains dynamic range; red-edge tracks chlorophyll.</td>
                    </tr>
                    <tr>
                      <td>Early season / emergence</td>
                      <td>NDVI (with soil-aware thresholds)</td>
                      <td>Simple; frequent scenes; accept higher soil influence.</td>
                    </tr>
                    <tr>
                      <td>Early stress detection</td>
                      <td>CI<sub>red-edge</sub></td>
                      <td>Responds earlier to chlorophyll changes than NDVI/EVI.</td>
                    </tr>
                    <tr>
                      <td>Regional drought monitoring</td>
                      <td>NDVI anomaly (MODIS/VIIRS)</td>
                      <td>Long record for baselines and consistent anomalies.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Threshold heuristics */}
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">Thresholds that are useful (tune locally)</h2>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>NDVI anomaly &lt; −0.15</strong> for ≥ 2 consecutive scenes → investigate (water stress, disease, herbivory).</li>
                <li><strong>EVI drop ≥ 0.08</strong> vs 4-week median in dense canopies → canopy health change likely.</li>
                <li><strong>CI<sub>red-edge</sub> drop ≥ 0.10</strong> vs field baseline (same DOY window) → early stress flag.</li>
              </ul>

              {/* Anomaly math */}
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">Anomaly math (repeatable)</h2>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm mb-6 overflow-x-auto">{`1) Build baseline: For each parcel and day-of-year (DOY), compute multi-year median NDVI (use ±15 day window).
2) Smooth current season with a robust filter (e.g., Savitzky–Golay).
3) Anomaly_t = NDVI_t - Baseline_DOYwindow_median
   Optionally z = (NDVI_t - μ_baseline) / σ_baseline for standardized anomalies.`}</pre>

              {/* Europe context image (Copernicus) */}
              <figure className="my-8">
                <img
                  src="https://climate.copernicus.eu/sites/default/files/custom-uploads/ESOTC2022/europe/drought/ESOTC2022_in_focus_drought_fig4.png"
                  alt="Copernicus ESOTC 2022: European drought indicators (incl. NDVI/soil moisture anomalies)"
                  className="w-full rounded-lg shadow"
                  loading="lazy"
                />
                <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  European drought indicators (incl. vegetation anomalies), 2022. Source: <a target="_blank" rel="noopener noreferrer" href="https://climate.copernicus.eu/esotc/2022/drought">C3S ESOTC 2022</a>. © C3S.
                </figcaption>
              </figure>

              {/* Field checklist */}
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">When NDVI drops — quick field checklist</h2>
              <ol className="list-decimal pl-6 mb-8 space-y-2">
                <li>Confirm mask & view geometry (cloud/shadow haze; off-nadir; snow/dust).</li>
                <li>Check rainfall & soil moisture last 7–14 days; inspect irrigation anomalies.</li>
                <li>Scout edges and low spots first (compaction, waterlogging, pest ingress).</li>
                <li>Sample leaf tissue (N, Mg) if nutrient stress suspected; cross-check with CI<sub>red-edge</sub>.</li>
                <li>Log findings; recalibrate thresholds for that parcel/cultivar.</li>
              </ol>

              {/* Ops workflow */}
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">From pixels to actions — minimal ops pipeline</h2>
              <ol className="list-decimal pl-6 mb-8 space-y-2">
                <li>Ingest <strong>Sentinel-2 L2A</strong>; mask clouds/shadows; drop high view angles.</li>
                <li>Compute <strong>NDVI</strong>, <strong>EVI</strong>, and <strong>CI<sub>red-edge</sub></strong> (e.g., B8/B5).</li>
                <li>Temporal <em>median</em> composite (10–16 days); per-parcel <em>median/P75</em>.</li>
                <li>Build multi-year <strong>DOY baselines</strong>; compute <strong>anomalies</strong> and <strong>z-scores</strong>.</li>
                <li>Fire <strong>alerts</strong> only if consecutive scenes confirm the signal; route to mobile scouting.</li>
              </ol>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">FAQ</h2>
              <p className="mb-2"><strong>“What NDVI value is ‘good’?”</strong> It’s crop- and stage-specific; track **relative** change vs your own field baseline and neighbors, not a universal threshold.</p>
              <p className="mb-2"><strong>“Why is winter cereal NDVI low in March?”</strong> Low sun angle + sparse cover + soil background; expect rises as canopy closes. Compare to the same DOY window last years.</p>
              <p className="mb-8"><strong>“EVI vs red-edge — which should I invest in?”</strong> If your issue is saturation in dense crops, try **EVI**; for **early stress** before NDVI moves, try **CI<sub>red-edge</sub>**. Many operations run both.</p>

              {/* CTA */}
              <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Operationalize indices with SaltGIS</h3>
                <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                  We turn ingest, QA, indices, smoothing, and anomaly logic into parcel-level insights—dashboards, alerts, and exports—via API, WMTS/XYZ, or a custom web GIS.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-center"
                  >
                    Talk to Us
                  </a>
                  <a
                    href="/products"
                    className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors text-center"
                  >
                    Explore Products
                  </a>
                </div>
              </div>

              {/* References */}
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">References</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>NASA Earth Observatory — “Measuring Vegetation (NDVI & EVI)”. <a target="_blank" rel="noopener noreferrer" href="https://earthobservatory.nasa.gov/features/MeasuringVegetation">Link</a>.</li>
                <li>MODIS Vegetation Indices (MOD13) overview. <a target="_blank" rel="noopener noreferrer" href="https://modis.gsfc.nasa.gov/data/dataprod/mod13.php">Link</a> · Product page: <a target="_blank" rel="noopener noreferrer" href="https://lpdaac.usgs.gov/products/mod13q1v061/">MOD13Q1 (V6.1)</a>.</li>
                <li>NASA Earth Observatory — “Spain Browned by Drought”. <a target="_blank" rel="noopener noreferrer" href="https://earthobservatory.nasa.gov/images/151366/spain-browned-by-drought">Link</a>.</li>
                <li>ESA — Sentinel-2 mission & Plant Health. <a target="_blank" rel="noopener noreferrer" href="https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2/Plant_health">Link</a>.</li>
                <li>Copernicus Climate Change Service — ESOTC 2022 Drought. <a target="_blank" rel="noopener noreferrer" href="https://climate.copernicus.eu/esotc/2022/drought">Link</a>.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
