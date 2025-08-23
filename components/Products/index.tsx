import Link from "next/link";

const Products = () => {
  const products = [
    {
      title: "GeoFlow",
      subtitle: "The Smart Way to Manage Geospatial Projects",
      description: "From the field to the dashboard – streamline everything in one intelligent platform.",
      features: [
        {
          title: "Map-Based Project Management",
          description: "Visualize and manage projects linked to real land parcels. Track project status, location, and progress directly from the map interface.",
          details: [
            "Search addresses",
            "Drop project pins",
            "Change project statuses on the fly",
            "Filter by location, job number, or status"
          ]
        },
        {
          title: "Employee & Contractor Management",
          description: "Add, track, and update employee or contractor records with full control and visibility.",
          details: [
            "Define custom roles: Admin, Technician, Field Crew",
            "Log attendance with check-in/out tracking",
            "View total hours worked",
            "Maintain SSNs, contact info, addresses, and contractor types"
          ]
        },
        {
          title: "Client & Inquiry Tracking",
          description: "Easily onboard clients and log their project inquiries from a simple, intuitive interface.",
          details: [
            "Streamlined client onboarding",
            "Project inquiry management",
            "Client communication tracking",
            "Automated follow-up reminders"
          ]
        },
        {
          title: "Smart Admin Dashboard",
          description: "One glance gives you everything you need to know about your operations.",
          details: [
            "Real-time project status distribution",
            "Daily hours logged by team",
            "Quick insights into resource load and team activity",
            "Performance metrics and analytics"
          ]
        }
      ],
      comingSoon: {
        title: "AI-Powered Search & Automation (Coming Soon)",
        description: "Accelerate operations with built-in AI assistance.",
        features: [
          "Natural language search: \"Show me all pending fieldwork in Austin\"",
          "Auto-suggest project locations from map context",
          "Intelligent matching of clients, parcels, and projects",
          "Predictive status updates and risk alerts"
        ]
      }
    }
  ];

  return (
    <section className="bg-gray-light dark:bg-dark">
      <div className="container">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            Our Products
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg text-center">
            Innovative software solutions that transform complex spatial data into actionable intelligence
          </p>
        </div>

        {products.map((product, index) => (
          <div key={index} className="mb-20">
            {/* Product Header */}
            <div className="mb-12 text-center">
              <h3 className="mb-4 text-4xl font-bold text-primary">
                {product.title}
              </h3>
              <p className="mb-6 text-2xl font-semibold text-black dark:text-white">
                {product.subtitle}
              </p>
              <p className="text-lg text-body-color dark:text-body-color-dark max-w-3xl mx-auto">
                {product.description}
              </p>
            </div>

            {/* Product Features Grid */}
            <div className="grid gap-8 lg:grid-cols-2 mb-12">
              {product.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="w-full rounded-lg border border-stroke bg-white p-8 shadow-sign-up dark:border-stroke-dark dark:bg-dark"
                >
                  <h4 className="mb-4 text-xl font-bold text-black dark:text-white">
                    {feature.title}
                  </h4>
                  <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-base text-body-color dark:text-body-color-dark">
                        <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Coming Soon Section */}
            <div className="mb-12 rounded-lg border border-stroke bg-white p-8 shadow-sign-up dark:border-stroke-dark dark:bg-dark">
              <h4 className="mb-4 text-2xl font-bold text-black dark:text-white text-center">
                {product.comingSoon.title}
              </h4>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark text-center">
                {product.comingSoon.description}
              </p>
              <ul className="space-y-2 max-w-3xl mx-auto">
                {product.comingSoon.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-base text-body-color dark:text-body-color-dark">
                    <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h4 className="mb-4 text-3xl font-bold text-black dark:text-white">
                Power your geospatial workflows with GeoFlow.
              </h4>
              <p className="mb-8 text-lg text-body-color dark:text-body-color-dark">
                Try the future of project management, today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  Request Demo
                </Link>
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Get Started Free
                </Link>
              </div>
            </div>
          </div>
        ))}

        <div className="text-center">
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
            More Products Coming Soon
          </h3>
          <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
            We&apos;re constantly developing new solutions to meet evolving geospatial needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Stay Updated
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products; 