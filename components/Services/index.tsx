"use client";

import { Check, LineChart, Route, Layers3, Workflow, ShieldCheck, Briefcase, Cpu, Database, Cloud, Rocket, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { openEmail } from "@/lib/contact";

const brand = {
  deepBlue: "#1B3B6F",
  earthGreen: "#4CAF50",
  brightOrange: "#FF9800",
};

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-3 text-sm md:text-base text-muted-foreground">
    <Check className="h-5 w-5 shrink-0" style={{ color: brand.earthGreen }} />
    <span>{children}</span>
  </li>
);

const Stat = ({ kpi, label }: { kpi: string; label: string }) => (
  <div className="rounded-2xl border bg-white/60 p-6 shadow-sm dark:border-stroke-dark dark:bg-dark">
    <div className="text-3xl font-extrabold" style={{ color: brand.deepBlue }}>{kpi}</div>
    <div className="mt-1 text-sm text-muted-foreground">{label}</div>
  </div>
);

const Card = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md dark:border-stroke-dark dark:bg-dark/60">
    <div className="mb-4 flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-opacity-10" style={{ backgroundColor: brand.earthGreen }}>
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
    </div>
    <div className="space-y-3 text-sm text-muted-foreground">{children}</div>
  </div>
);

export default function Services() {
  return (
    <section className="relative z-10 overflow-hidden">
      {/* Hero */}
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold !leading-tight text-foreground sm:text-4xl md:text-5xl">
            Geospatial services that deliver measurable impact
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base md:text-lg text-muted-foreground">
            SaltGIS builds advanced GIS applications, dashboards, and automation pipelines. We help organizations across agriculture, infrastructure, and urban planning turn spatial data into clarity, efficiency, and actionable insights.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => openEmail("SaltGIS Services Discussion", "Hello,\n\nI'd like to discuss SaltGIS services with an engineer.\n\nBest regards,")}
              className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white"
              style={{ backgroundColor: brand.deepBlue }}
            >
              Talk to an engineer <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              onClick={() => openEmail("SaltGIS Service Packages", "Hello,\n\nI'm interested in learning more about SaltGIS service packages.\n\nBest regards,")}
              className="inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-medium"
            >
              View service packages
            </button>
          </div>
        </div>

        {/* Proof / quick stats */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat kpi="< 6 weeks" label="to first production dashboard" />
          <Stat kpi="> 30%" label="less manual GIS ops via automation" />
          <Stat kpi="> 10x" label="faster spatial queries with parquet/Arrow" />
          <Stat kpi="99.9%" label="uptime targets on managed deployments" />
        </div>

        {/* What we do */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <Card icon={<LineChart className="h-5 w-5" />} title="Data Dashboards & BI for GIS">
            <p>Operational dashboards with spatial analytics and reporting for decision makers.</p>
            <ul className="mt-3 space-y-2">
              <Bullet>Interactive KPIs and map layers</Bullet>
              <Bullet>Automated exports and scheduled reports</Bullet>
              <Bullet>Role-based access and audit trails</Bullet>
            </ul>
          </Card>
          <Card icon={<Route className="h-5 w-5" />} title="Web GIS Applications">
            <p>Responsive, modern web applications for land management, monitoring, and infrastructure.</p>
            <ul className="mt-3 space-y-2">
              <Bullet>Fast search and query with PostGIS</Bullet>
              <Bullet>Layer management with MapLibre/Deck.gl</Bullet>
              <Bullet>Mobile-ready with offline-first modules</Bullet>
            </ul>
          </Card>
          <Card icon={<Workflow className="h-5 w-5" />} title="Automation Pipelines">
            <p>Data pipelines and QA workflows that reduce manual processing and accelerate delivery.</p>
            <ul className="mt-3 space-y-2">
              <Bullet>Satellite & sensor data ingestion</Bullet>
              <Bullet>Validation and normalization rules</Bullet>
              <Bullet>Integration with ERP, CRM, and cloud</Bullet>
            </ul>
          </Card>
        </div>

        {/* Industry sectors */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          <Card icon={<Layers3 className="h-5 w-5" />} title="Agriculture">
            <p>Precision farming dashboards integrating NDVI, soil data, and weather for improved yield and reduced input costs.</p>
          </Card>
          <Card icon={<ShieldCheck className="h-5 w-5" />} title="Infrastructure & Utilities">
            <p>Asset monitoring, predictive maintenance, and compliance reporting to extend asset life and reduce downtime.</p>
          </Card>
          <Card icon={<Briefcase className="h-5 w-5" />} title="Urban Planning">
            <p>Land-use mapping, environmental monitoring, and scenario modeling to support sustainable development.</p>
          </Card>
        </div>

        {/* Packages */}
        <div id="packages" className="mt-20">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Service packages</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Whether you need a quick win or end-to-end deployment, our service packages scale with your goals.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border p-6 dark:border-stroke-dark">
              <h3 className="text-lg font-semibold">Assessment Sprint</h3>
              <p className="mt-2 text-sm text-muted-foreground">2 weeks to baseline your data, identify quick wins, and create a roadmap with ROI.</p>
              <ul className="mt-4 space-y-2">
                <Bullet>Data audit & gap analysis</Bullet>
                <Bullet>Prototype dashboard with your data</Bullet>
                <Bullet>Prioritized backlog & budget ranges</Bullet>
              </ul>
              <button 
                onClick={() => openEmail("Assessment Sprint Booking", "Hello,\n\nI'd like to book an Assessment Sprint with SaltGIS.\n\nBest regards,")}
                className="mt-5 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white" 
                style={{ backgroundColor: brand.brightOrange }}
              >
                Book sprint <Rocket className="ml-2 h-4 w-4" />
              </button>
            </div>

            <div className="rounded-2xl border p-6 ring-1 ring-offset-2 dark:border-stroke-dark" style={{ borderColor: brand.deepBlue }}>
              <h3 className="text-lg font-semibold">MVP to Production</h3>
              <p className="mt-2 text-sm text-muted-foreground">4–8 weeks to a production-ready Web GIS with your top 2–3 workflows implemented.</p>
              <ul className="mt-4 space-y-2">
                <Bullet>Secure auth & roles</Bullet>
                <Bullet>Spatial search, layers, exports</Bullet>
                <Bullet>Automated alerts and weekly reports</Bullet>
              </ul>
              <button 
                onClick={() => openEmail("MVP Scoping Request", "Hello,\n\nI'd like to scope an MVP with SaltGIS.\n\nBest regards,")}
                className="mt-5 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white" 
                style={{ backgroundColor: brand.deepBlue }}
              >
                Scope my MVP <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            <div className="rounded-2xl border p-6 dark:border-stroke-dark">
              <h3 className="text-lg font-semibold">Managed GIS Ops</h3>
              <p className="mt-2 text-sm text-muted-foreground">We operate your GIS stack, pipelines, and deployments with guaranteed SLAs.</p>
              <ul className="mt-4 space-y-2">
                <Bullet>Monitored pipelines & backups</Bullet>
                <Bullet>Change requests & feature updates</Bullet>
                <Bullet>Quarterly roadmap & training</Bullet>
              </ul>
              <button 
                onClick={() => openEmail("Managed GIS Operations Discussion", "Hello,\n\nI'd like to discuss managed GIS operations with SaltGIS.\n\nBest regards,")}
                className="mt-5 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white" 
                style={{ backgroundColor: brand.earthGreen }}
              >
                Discuss retainers <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">How we work</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              { n: "01", t: "Discovery", d: "Stakeholders, constraints, and success metrics." },
              { n: "02", t: "Design", d: "Data model, APIs, UX flows, and delivery plan." },
              { n: "03", t: "Build", d: "Iterative sprints with demos and hardening." },
              { n: "04", t: "Deploy", d: "CI/CD, observability, and documentation." },
              { n: "05", t: "Operate", d: "SLOs, updates, and continuous improvement." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border p-5 text-sm dark:border-stroke-dark">
                <div className="text-xs font-semibold" style={{ color: brand.earthGreen }}>{s.n}</div>
                <div className="mt-1 text-base font-semibold">{s.t}</div>
                <div className="mt-1 text-muted-foreground">{s.d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 rounded-3xl p-10 text-center" style={{ backgroundColor: brand.deepBlue }}>
          <h3 className="text-2xl font-semibold text-white">Ready to turn spatial data into decisions?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/80">
            We deliver clear ROI: better decisions, less manual work, and systems that scale. Let's make your spatial data work harder.
          </p>
          <div className="mt-6 flex justify-center">
            <button 
              onClick={() => openEmail("SaltGIS Plan & Quote Request", "Hello,\n\nI'd like to get a plan and quote from SaltGIS.\n\nBest regards,")}
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-black" 
              style={{ backgroundColor: brand.brightOrange }}
            >
              Get a plan & quote <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
