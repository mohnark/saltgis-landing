import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title:
    "Seeing Green from Space: Vegetation Health with Satellite Indices - SaltGIS Blog",
  description:
    "Operational guide to NDVI, EVI/EVI2, and Sentinel-2 red-edge indices with band mapping, QA masking, compositing, anomalies, harmonization (HLS), and field-ready heuristics.",
  keywords: [
    "NDVI",
    "EVI",
    "EVI2",
    "SAVI",
    "MSAVI2",
    "CIred-edge",
    "Sentinel-2",
    "Landsat 8",
    "HLS",
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
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">EVI/EVI2</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Sentinel-2 Red-Edge</span>
              </div>
            </div>

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
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-xl text-body-color dark:text-body-color-dark mb-8">
                Vegetation indices compress canopy optics into stable, comparable numbers. Healthy leaves absorb <em>red</em> (chlorophyll) and strongly scatter <em>NIR</em> (leaf structure). Stress reduces red absorption and/or NIR scattering. The goal isn’t a prettier map; it’s a reliable, repeatable signal you can threshold, alert on, and verify in the field.
              </p>

              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
                Index formulas, variants, and when to use them
              </h2>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm mb-4 overflow-x-auto">{`NDVI  = (NIR - Red) / (NIR + Red)
EVI   = G * (NIR - Red) / (NIR + C1*Red - C2*Blue + L)   // common: G=2.5, C1=6, C2=7.5, L=1
EVI2  = 2.5 * (NIR - Red) / (NIR + 2.4*Red + 1)          // when Blue is noisy/unavailable
SAVI  = (1 + L) * (NIR - Red) / (NIR + Red + L)          // L≈0.5; soil-adjusted, early season
MSAVI2= (2*NIR + 1 - sqrt((2*NIR + 1)^2 - 8*(NIR - Red))) / 2
CI_re = (NIR / RedEdge) - 1                              // Sentinel-2: RedEdge ∈ {B5,B6,B7}`}</pre>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="text-left">Situation</th>
                      <th className="text-left">Prefer</th>
                      <th className="text-left">Rationale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dense canopies (LAI high)</td>
                      <td>EVI or CI<sub>re</sub></td>
                      <td>NDVI saturates; EVI extends dynamic range; red-edge is more linear w.r.t. chlorophyll.</td>
                    </tr>
                    <tr>
                      <td>Early season / sparse cover</td>
                      <td>SAVI/MSAVI2 or EVI2</td>
                      <td>Soil correction helps; EVI2 avoids blue-band noise.</td>
                    </tr>
                    <tr>
                      <td>Early stress detection</td>
                      <td>CI<sub>re</sub></td>
                      <td>Red-edge shifts earlier than broadband NDVI/EVI.</td>
                    </tr>
                    <tr>
                      <td>Regional monitoring / anomalies</td>
                      <td>NDVI (MODIS/VIIRS) anomalies</td>
                      <td>Long, consistent records → robust baselines.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
                Band mapping — explicit wavelengths
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="text-left">Mission</th>
                      <th className="text-left">Red</th>
                      <th className="text-left">NIR</th>
                      <th className="text-left">Red-Edge</th>
                      <th className="text-left">Blue</th>
                      <th className="text-left">GSD</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sentinel-2 L2A</td>
                      <td>B4 (665 nm)</td>
                      <td>B8 (842 nm) / B8A (865 nm)</td>
                      <td>B5/B6/B7 (705/740/783 nm)</td>
                      <td>B2 (490 nm)</td>
                      <td>10 m (B2/B4/B8), 20 m (B5/B6/B7/B8A)</td>
                    </tr>
                    <tr>
                      <td>Landsat 8/9 SR</td>
                      <td>B4 (0.64–0.67 µm)</td>
                      <td>B5 (0.85–0.88 µm)</td>
                      <td>—</td>
                      <td>B2 (0.45–0.51 µm)</td>
                      <td>30 m</td>
                    </tr>
                    <tr>
                      <td>HLS (S30/L30)</td>
                      <td>S2 B4 / L8 B4 (harmonized)</td>
                      <td>S2 B8A / L8 B5 (harmonized)</td>
                      <td>S2 B5–B7 only</td>
                      <td>S2 B2 / L8 B2</td>
                      <td>30 m (harmonized SR)</td>
                    </tr>
                    <tr>
                      <td>MODIS (Terra/Aqua)</td>
                      <td>Band 1 (620–670 nm)</td>
                      <td>Band 2 (841–876 nm)</td>
                      <td>—</td>
                      <td>Band 3 (459–479 nm)</td>
                      <td>250 m (VI), 500 m/1 km (others)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
                Quality control — what to mask, what to drop
              </h2>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>Use surface reflectance.</strong> S2 L2A, Landsat SR, HLS. Avoid TOA for indices if SR is available.</li>
                <li><strong>Clouds & shadows.</strong> S2 cloud probability &lt; 30% (s2cloudless) + shadow geometry; Landsat <code>QA_PIXEL</code> bits for cloud/shadow/snow; MODIS/VIIRS use VI quality layers.</li>
                <li><strong>View geometry.</strong> Exclude high view-zenith (&gt; 15–20°) and extreme solar angles; reduce BRDF artifacts.</li>
                <li><strong>Terrain.</strong> On slopes, apply topographic correction (e.g., C-correction with DEM-derived illumination).</li>
                <li><strong>Edges.</strong> Buffer parcel polygons inward 1–2 pixels to avoid mixed pixels and georegistration jitter.</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Minimal, robust compositing</h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>Temporal:</strong> 10–16-day rolling window; <em>median</em> for stability; <em>max-NDVI</em> to counter residual haze.</li>
                <li><strong>Spatial (per parcel):</strong> median or P75 across valid pixels for robustness; track pixel count (coverage).</li>
                <li><strong>Phenology-aware:</strong> compare DOY-aligned windows year-over-year (e.g., DOY ± 15).</li>
              </ul>

              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
                Anomaly math that scales
              </h2>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm mb-6 overflow-x-auto">{`1) Baseline: For each parcel and day-of-year (DOY), compute multi-year median NDVI (rolling window DOY±15). 
2) Smooth current season (e.g., 3x compositing windows or Savitzky–Golay).
3) Anomaly_t    = NDVI_t - Baseline_DOY_median
   Zscore_t     = (NDVI_t - μ_baseline) / σ_baseline
4) Alert rule: anomaly < -0.15 OR z < -1.0 for 2 consecutive windows → field check.
   Dense canopies: also watch EVI drop ≥ 0.08 vs 4-week median.
   Red-edge early warning: CI_re drop ≥ 0.10 vs parcel DOY baseline.`}</pre>

              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
                Cross-sensor harmonization (S2 ↔ Landsat)
              </h2>
              <p className="mb-6">
                If you need cadence over clouds, use HLS (Harmonized Landsat–Sentinel). It applies bandpass adjustments and BRDF normalization so indices are comparable at 30 m. Keep your thresholds sensor-agnostic by anchoring to each parcel’s historical baseline rather than absolute values.
              </p>

              <h3 className="text-xl font-semibold mb-3">
                Google Earth Engine — Sentinel-2 NDVI/EVI/EVI2/CIre + compositing + parcel stats
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm mb-6 overflow-x-auto">{`var s2sr = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterBounds(parcels.geometry())
  .filterDate('2025-03-01', '2025-10-31')
  .filter(ee.Filter.lte('CLOUDY_PIXEL_PERCENTAGE', 40))
  .map(function(img){
    var qa = img.select('QA60');
    var cloud = qa.bitwiseAnd(1<<10).neq(0);
    var cirrus = qa.bitwiseAnd(1<<11).neq(0);
    var mask = cloud.or(cirrus).not();

    var red = img.select('B4').multiply(1e-4);
    var nir = img.select('B8').multiply(1e-4);
    var blue= img.select('B2').multiply(1e-4);
    var re5 = img.select('B5').multiply(1e-4);
    var re6 = img.select('B6').multiply(1e-4);
    var re7 = img.select('B7').multiply(1e-4);

    var ndvi = nir.subtract(red).divide(nir.add(red)).rename('NDVI');
    var evi  = nir.subtract(red)
                 .multiply(2.5)
                 .divide(nir.add(red.multiply(6)).subtract(blue.multiply(7.5)).add(1))
                 .rename('EVI');
    var evi2 = nir.subtract(red)
                  .multiply(2.5)
                  .divide(nir.add(red.multiply(2.4)).add(1))
                  .rename('EVI2');
    var cire = nir.divide(re5).subtract(1).rename('CIre');

    return img.updateMask(mask).addBands([ndvi, evi, evi2, cire])
              .set('date', img.date().format('YYYY-MM-dd'));
  });

var step = 12;
var start = ee.Date('2025-03-01');
var end   = ee.Date('2025-10-31');

var windows = ee.List.sequence(0, end.difference(start,'day').subtract(step), step)
  .map(function(d){
    var winStart = start.advance(ee.Number(d), 'day');
    var winEnd   = winStart.advance(step, 'day');
    var comp = s2sr.filterDate(winStart, winEnd)
      .select(['NDVI','EVI','EVI2','CIre'])
      .median()
      .set('window_start', winStart.format('YYYY-MM-dd'))
      .set('window_end',   winEnd.format('YYYY-MM-dd'));
    return comp;
  });

var compCol = ee.ImageCollection.fromImages(windows);

var reducer = ee.Reducer.median().combine({
  reducer2: ee.Reducer.percentile([75]),
  sharedInputs: true
});

var zonal = compCol.map(function(img){
  var stats = img.reduceRegions({
    collection: parcels,
    reducer: reducer,
    scale: 10,
    tileScale: 4
  }).map(function(f){
    return f.set({
      window_start: img.get('window_start'),
      window_end:   img.get('window_end')
    });
  });
  return stats;
}).flatten();

Export.table.toDrive({
  collection: zonal,
  description: 'parcel_vi_summaries_2025',
  fileFormat: 'CSV'
});
`}</pre>

              <h3 className="text-xl font-semibold mb-3">
                Python — rioxarray + GeoPandas, parcel-level indices & 14-day medians
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm mb-6 overflow-x-auto">{`import xarray as xr, rioxarray as rxr, geopandas as gpd
import numpy as np, pandas as pd
from pathlib import Path

cogs_dir = Path("/data/S2_SR")
dates = sorted({p.name.split("_")[1] for p in cogs_dir.glob("S2_*_B4.tif")})
parcels = gpd.read_file("/data/parcels.gpkg").to_crs(32633)

def stats(a):
    d = a.data.compressed() if np.ma.isMaskedArray(a.data) else a.data
    d = d[np.isfinite(d)]
    if d.size == 0: return np.nan, np.nan, 0
    return np.median(d), np.percentile(d, 75), d.size

rows = []
for d in dates:
    red  = rxr.open_rasterio(cogs_dir/f"S2_{d}_B4.tif", masked=True).squeeze()
    nir  = rxr.open_rasterio(cogs_dir/f"S2_{d}_B8.tif", masked=True).squeeze()
    blue = rxr.open_rasterio(cogs_dir/f"S2_{d}_B2.tif", masked=True).squeeze()
    re5  = rxr.open_rasterio(cogs_dir/f"S2_{d}_B5.tif", masked=True).squeeze()

    ndvi = (nir - red) / (nir + red + 1e-6)
    evi  = 2.5 * (nir - red) / (nir + 6*red - 7.5*blue + 1)
    evi2 = 2.5 * (nir - red) / (nir + 2.4*red + 1)
    cire = (nir / (re5 + 1e-6)) - 1

    for _, poly in parcels.iterrows():
        geom = [poly.geometry]
        ndvi_med, ndvi_p75, n = stats(ndvi.rio.clip(geom, ndvi.rio.crs, drop=False))
        evi_med,  evi_p75,  _ = stats(evi.rio.clip(geom, evi.rio.crs, drop=False))
        evi2_med, evi2_p75, _ = stats(evi2.rio.clip(geom, evi2.rio.crs, drop=False))
        cire_med, cire_p75, _ = stats(cire.rio.clip(geom, cire.rio.crs, drop=False))

        rows.append({
          "date": pd.to_datetime(d),
          "parcel_id": poly["parcel_id"],
          "ndvi_med": ndvi_med, "ndvi_p75": ndvi_p75, "px_valid": int(n),
          "evi_med": evi_med, "evi_p75": evi_p75,
          "evi2_med": evi2_med, "evi2_p75": evi2_p75,
          "cire_med": cire_med, "cire_p75": cire_p75
        })

df = pd.DataFrame(rows).sort_values(["parcel_id","date"])

out = []
for pid, g in df.groupby("parcel_id"):
    g = g.set_index("date").sort_index()
    g_roll = g.rolling("14D").median()
    g_roll["parcel_id"] = pid
    out.append(g_roll.reset_index())

df_roll = pd.concat(out).sort_values(["parcel_id","date"])
df_roll.to_csv("/data/parcel_vi_14d.csv", index=False)
`}</pre>

              <h3 className="text-xl font-semibold mb-3">
                COGs fast path — GDAL to create web-ready tiles
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm mb-6 overflow-x-auto">{`gdal_translate input.tif output_cog.tif -of COG -co COMPRESS=DEFLATE -co NUM_THREADS=ALL_CPUS
gdalbuildvrt -separate stack.vrt NIR.tif RED.tif
gdal_calc.py -A NIR.tif -B RED.tif --calc="(A-B)/(A+B+1e-6)" --outfile NDVI_cog.tif --of COG --co COMPRESS=DEFLATE
`}</pre>

              <h3 className="text-xl font-semibold mb-3">
                PostgreSQL — parcel baselines, anomalies, and alert flags
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm mb-6 overflow-x-auto">{`WITH hist AS (
  SELECT parcel_id,
         EXTRACT(doy FROM date)::int AS doy,
         ndvi_med
  FROM parcel_vi_14d
  WHERE date < DATE '2025-01-01'
),
baseline AS (
  SELECT h1.parcel_id, h1.doy AS doy_ref,
         PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY h2.ndvi_med) AS ndvi_baseline
  FROM hist h1
  JOIN hist h2
    ON h1.parcel_id = h2.parcel_id
   AND h2.doy BETWEEN h1.doy - 15 AND h1.doy + 15
  GROUP BY h1.parcel_id, h1.doy
)
SELECT cur.parcel_id,
       cur.date,
       cur.ndvi_med,
       b.ndvi_baseline,
       (cur.ndvi_med - b.ndvi_baseline) AS ndvi_anom,
       (cur.ndvi_med - b.ndvi_baseline) < -0.15 AS ndvi_alert
FROM parcel_vi_14d cur
JOIN baseline b
  ON b.parcel_id = cur.parcel_id
 AND b.doy_ref   = EXTRACT(doy FROM cur.date)::int
WHERE cur.date BETWEEN DATE '2025-03-01' AND DATE '2025-10-31'
ORDER BY cur.parcel_id, cur.date;
`}</pre>

              <h3 className="text-xl font-semibold mb-3">
                Heuristics (production defaults; tune locally)
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>NDVI anomaly &lt; −0.15</strong> for two consecutive 10–16-day windows ⇒ task a field check.</li>
                <li><strong>EVI drop ≥ 0.08</strong> vs 4-week median in dense canopy ⇒ canopy health change likely.</li>
                <li><strong>CI<sub>re</sub> drop ≥ 0.10</strong> vs parcel DOY baseline ⇒ early stress flag (pre-NDVI move).</li>
                <li>Only alert when <em>coverage ≥ 60%</em> valid pixels inside parcel (avoid false alarms on partial scenes).</li>
                <li>Buffer polygons inward 1–2 pixels when summarizing to avoid mixed edges and registration jitter.</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Ops notes</h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>Harmonize across sensors:</strong> prefer HLS (S30/L30) for cadence. Keep thresholds relative to each parcel’s baseline.</li>
                <li><strong>Phenology:</strong> always compare DOY-aligned windows (±15) to avoid seasonal phase bias.</li>
                <li><strong>Terrain & BRDF:</strong> steep terrain → apply topographic correction; exclude high view-zenith angles.</li>
                <li><strong>APIs:</strong> serve COGs via TiTiler/WMTS/XYZ; parcel metrics via REST/GraphQL; push alerts via webhook.</li>
              </ul>

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

              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">References</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>NASA Earth Observatory — “Measuring Vegetation (NDVI &amp; EVI)”. <a target="_blank" rel="noopener noreferrer" href="https://earthobservatory.nasa.gov/features/MeasuringVegetation">Link</a>.</li>
                <li>MODIS Vegetation Indices (MOD13) overview. <a target="_blank" rel="noopener noreferrer" href="https://modis.gsfc.nasa.gov/data/dataprod/mod13.php">Link</a> · Product page: <a target="_blank" rel="noopener noreferrer" href="https://lpdaac.usgs.gov/products/mod13q1v061/">MOD13Q1 (V6.1)</a>.</li>
                <li>ESA — Sentinel-2 mission &amp; Plant Health. <a target="_blank" rel="noopener noreferrer" href="https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2/Plant_health">Link</a>.</li>
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
