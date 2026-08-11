/**
 * Single source of truth for the SaltGIS studio portfolio.
 *
 * `caseStudies` - delivered client engagements and the platforms behind them.
 *
 * Client identities are anonymised. Do not add a client name here without
 * written permission to reference the engagement publicly.
 */

export type CaseStudy = {
  slug: string;
  name: string;
  client: string;
  sector: string;
  period: string;
  tagline: string;
  summary: string;
  problem: string;
  approach: string[];
  outcome: string[];
  stack: string[];
  media: { src: string; caption: string }[];
  /** Optional public link. Omitted for confidential engagements. */
  href?: string;
  /** Optional inline video shown ahead of the still images. */
  video?: { src: string; poster?: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "terralens",
    name: "TerraLens",
    client: "SaltGIS platform, adapted per client",
    sector: "Agriculture and insurance",
    period: "Ongoing",
    tagline: "Natural-language field intelligence over satellite imagery",
    summary:
      "Our in-house analysis platform. We deploy it against a client's own parcels, imagery and agronomic rules rather than starting every engagement from an empty repository.",
    problem:
      "Agronomists and loss adjusters sit on years of satellite coverage they cannot query. Answering a question as simple as which parcels lost vigour since the last visit means a GIS specialist, a desktop session and a day of work. The specialist becomes the bottleneck for every decision.",
    approach: [
      "Natural-language layer that translates a plain question into a spatial query, runs it against the parcel index, and returns maps and numbers alongside a written explanation.",
      "Index engine computing NDVI, NDWI and red-edge series per parcel, with date-over-date comparison so change is detected rather than eyeballed.",
      "Parcel health scoring that attaches results to real cadastral boundaries, not raster tiles, so findings map onto the units a business actually operates on.",
      "Map-native annotation: pin a finding, assign it to a field crew, export the result set as CSV or GeoJSON for the systems already in use.",
    ],
    outcome: [
      "Field staff answer their own spatial questions without routing through a GIS specialist",
      "Crop stress surfaces weeks before it is visible on a ground inspection",
      "Reports read by people who have never opened a GIS package",
    ],
    stack: [
      "Python",
      "PostGIS",
      "Sentinel-2",
      "PyTorch",
      "LLM orchestration",
      "Next.js",
      "MapLibre",
    ],
    href: "/products",
    video: {
      src: "/images/video/terralens-demo-1.mp4",
      poster: "/images/video/poster-terralens.jpg",
    },
    media: [],
  },
  {
    slug: "constructionflow",
    name: "ConstructionFlow",
    client: "Land surveying firm, Texas, United States",
    sector: "Land surveying and construction",
    period: "2026",
    tagline:
      "Project, client and document management with automated title research",
    summary:
      "An operations platform for a land surveying firm. Projects, clients, employees and inquiries live in one system on a parcel-aware map, and the research that used to precede every survey is now a workflow the software runs itself.",
    problem:
      "Every survey starts with the same unpaid week: pull the county appraisal record, find the deed, chase the deeds of every adjoining tract, retrieve the FEMA flood map, screenshot the GIS and CAD extents, then file all of it under a naming convention that only holds if everyone remembers it. The firm tracked projects in spreadsheets, kept documents in ad hoc folders, and had no way to see where a job stood without asking the person running it.",
    approach: [
      "Parcel-aware project map over Mapbox GL: every project is a point on the county parcel layer, searchable by address or parcel ID, with Harris, Fort Bend and Montgomery county appraisal data imported into PostgreSQL and filtered county-first.",
      "Research automation pipeline that provisions the project number and folder structure, gathers county records and deeds, retrieves the most recent deed for every immediate adjoining tract via spatial neighbour queries, pulls the FEMA National Flood Hazard Layer for flood zone, BFE and FIRM panel, captures GIS and CAD map screenshots, files everything and advances the project to Fieldwork Pending.",
      "Paywall and access-restriction handling: where a county record cannot be retrieved, the run captures a document preview, writes a labelled restricted-access record and generates step-by-step manual research instructions instead of failing silently.",
      "Standardised document labelling across every artefact - file number, timestamp, document type, county and parcel ID - so a folder is legible without opening a single file.",
      "Automation hub for the workflows after research: field work preparation, CAD file processing, quality control checks, survey report and invoice generation, each with live step-by-step progress in the browser.",
      "Embedded AI assistant with read-only database access that answers questions about projects and clients in plain language, flies the map to any location and navigates the app on the user's behalf.",
      "Role-scoped field portal where crew check in and out against assigned projects, with attendance and logged hours rolling into the office dashboard.",
      "Express and TypeScript API over PostgreSQL with JWT auth, React and Vite front end, and shell-scriptable pipelines so the same automation runs headless in batch.",
    ],
    outcome: [
      "Pre-survey research runs as a single 15-20 minute workflow instead of a manual day",
      "Adjoining tract deeds and FEMA flood determinations gathered without a human visiting three county portals",
      "Every project document lands correctly named and filed, so nothing is searched for twice",
      "Office sees project status, hours and payments live rather than by asking",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "React",
      "Vite",
      "Mapbox GL",
      "Zustand",
      "JWT",
      "LLM assistant",
      "Headless browser automation",
      "FEMA NFHL",
    ],
    media: [
      {
        src: "/images/work/constructionflow/project-map.jpg",
        caption:
          "County-first project map. Projects sit on the parcel layer and are searchable by address or parcel ID, with the assistant answering questions against the same data.",
      },
      {
        src: "/images/work/constructionflow/automation-hub.png",
        caption:
          "Automation hub: end-to-end research, field work preparation and document generation, each with its own step chain and runtime.",
      },
      {
        src: "/images/work/constructionflow/research-automation.png",
        caption:
          "A research run in progress - project number, folder structure, data gathering, document upload and status change, tracked step by step.",
      },
      {
        src: "/images/work/constructionflow/project-detail.jpg",
        caption:
          "Project record: client, legal description, status, parcel data and the field, research and CAD documents attached to the job.",
      },
      {
        src: "/images/work/constructionflow/dashboard.png",
        caption:
          "Office overview - projects by status, headcount, clients, payments and hours logged across field and office staff.",
      },
      {
        src: "/images/work/constructionflow/field-portal.png",
        caption:
          "Field portal. Crew check in against assigned projects and their hours roll straight into the office view.",
      },
    ],
  },
  {
    slug: "forest-asset-platform",
    name: "Forest Asset Intelligence Platform",
    client: "Forestry asset-management group, United Kingdom",
    sector: "Forestry and carbon",
    period: "2025",
    tagline:
      "Multi-tenant inventory and analytics for individually surveyed trees",
    summary:
      "A full platform build for a UK forestry group managing estates on behalf of multiple landowners. Every tree is a record, every survey is versioned, and the whole estate rolls up into carbon and timber figures the business can act on.",
    problem:
      "The client held drone and field survey data for hundreds of thousands of individual trees across estates belonging to different landowners. It lived in shapefiles and spreadsheets. Nothing enforced the boundary between one landowner's data and another's, nobody could see an estate-level carbon figure without a manual rebuild, and each new survey meant redoing the analysis by hand.",
    approach: [
      "Hierarchical spatial data model in GeoDjango and PostGIS: organisation to forest to compartment to subcompartment to tree, with each level carrying its own geometry so aggregation happens in the database rather than the browser.",
      "Multi-tenant isolation enforced at the queryset layer and bound to Django's auth and permission system, so a landowner's data cannot leak across an organisation boundary regardless of the endpoint hit.",
      "Survey pipeline computing 16 derived metrics per record - DBH, height, trunk, branch and total volume, convex and shape-based crown area and volume, carbon mass, health score and the EVI, NDVI, NDRE and water index values from the imagery.",
      "Shapefile ingestion path that validates, reprojects and bulk-loads survey deliveries, turning a data drop into queryable records without manual GIS work.",
      "React and Mapbox GL front end rendering canopy polygons at estate scale, with server-side hexbin aggregation so a map of hundreds of thousands of trees stays interactive.",
      "Self-service analytics board: users compose scatter, histogram and donut charts against any metric pair, colour by any level of the hierarchy, and attach notes - no engineering ticket needed for a new chart.",
      "PDF report generation and Brotli/zstd response compression to keep large geometry payloads fast over ordinary connections.",
      "Containerised with Docker and deployed on DigitalOcean, with JWT authentication across the API surface.",
    ],
    outcome: [
      "Carbon sequestration, biomass and timber volume roll up from single trees to the whole estate on demand",
      "Landowner data isolation enforced in code rather than by convention",
      "New surveys land as a file upload instead of a GIS project",
      "Analysts build their own charts, removing the standing queue of reporting requests",
    ],
    stack: [
      "Django 5",
      "GeoDjango",
      "PostGIS",
      "Django REST Framework",
      "DRF-GIS",
      "GDAL",
      "JWT",
      "React",
      "TypeScript",
      "Mapbox GL",
      "ECharts",
      "Zustand",
      "Docker",
      "DigitalOcean",
    ],
    media: [
      {
        src: "/images/work/forestry/global-analytics.png",
        caption:
          "Estate-level roll-up: canopy area, tree count, survey count and mean health, with species distribution and biomass against timber volume.",
      },
      {
        src: "/images/work/forestry/tree-health-hexbin.png",
        caption:
          "Health distribution over 10m hexbins. Aggregation runs server-side so the map stays responsive at estate scale.",
      },
      {
        src: "/images/work/forestry/canopy-map.png",
        caption:
          "Individual canopy polygons with the full survey record for a selected tree - species, height, DBH, carbon mass, volume and health.",
      },
      {
        src: "/images/work/forestry/analytics-board.png",
        caption:
          "Self-service analytics board. Users compose and annotate charts against any metric pair without an engineering request.",
      },
      {
        src: "/images/work/forestry/chart-builder-type.png",
        caption:
          "Chart builder, step one: pick the visualisation that fits the question.",
      },
      {
        src: "/images/work/forestry/chart-builder-visual.png",
        caption:
          "Chart builder, step two: colour by any level of the spatial hierarchy and choose a perceptually uniform colour map.",
      },
    ],
  },
  {
    slug: "network-coverage",
    name: "Network Coverage Explorer",
    client: "Telecommunications infrastructure analysis",
    sector: "Telecommunications",
    period: "2024",
    tagline: "WebGL rendering of cell tower coverage and signal strength",
    summary:
      "An interactive coverage map for a city-scale cell tower network, built to make signal strength and coverage gaps legible to planners without a GIS background.",
    problem:
      "Coverage analysis lived in static exports. Comparing operators, spotting dead zones or explaining a coverage decision to a non-technical stakeholder meant regenerating images every time the question changed.",
    approach: [
      "Deck.gl and WebGL rendering layer so the full tower and signal dataset draws client-side at interactive frame rates.",
      "Layered visualisation of tower positions against modelled signal strength, letting coverage gaps read directly off the map.",
      "GeoJSON data pipeline over a Mapbox base, keeping the deployment a static bundle with no server dependency.",
    ],
    outcome: [
      "Coverage questions answered by panning a live map rather than commissioning a new export",
      "Dead zones visible to planners with no GIS training",
      "Static deployment, no backend to run or pay for",
    ],
    stack: ["React", "Deck.gl", "WebGL", "Mapbox", "GeoJSON", "TypeScript"],
    href: "https://mohnark.github.io/tartu-cell-towers-viz/#/basic",
    media: [
      {
        src: "/images/work/tartu/coverage.png",
        caption:
          "Tower positions and modelled signal strength rendered client-side with Deck.gl.",
      },
    ],
  },
];
