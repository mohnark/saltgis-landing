const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const Services = () => {
  const services = [
    {
      title: "Modern GIS Applications",
      description: "Custom-built geographic information systems tailored to your specific industry needs. From data collection to advanced analytics, we create solutions that integrate seamlessly with your existing workflows.",
      features: [
        "Custom GIS development",
        "Web and mobile applications", 
        "Data integration services",
        "Workflow automation"
      ],
      icon: "🗺️"
    },
    {
      title: "Automation Pipelines",
      description: "Streamline your geospatial operations with intelligent automation. Our pipelines reduce manual work, minimize errors, and accelerate data processing from field collection to final analysis.",
      features: [
        "Data processing automation",
        "Quality control workflows",
        "Report generation",
        "Integration APIs"
      ],
      icon: "⚡"
    },
    {
      title: "Location Intelligence Platforms",
      description: "Transform raw location data into actionable insights. Our platforms provide real-time visualization, predictive analytics, and decision support tools that help you make better location-based decisions.",
      features: [
        "Real-time dashboards",
        "Predictive analytics",
        "Spatial modeling",
        "Risk assessment"
      ],
      icon: "🧠"
    },
    {
      title: "Consulting & Training",
      description: "Expert guidance to maximize the value of your geospatial investments. From initial strategy to ongoing optimization, we ensure your team has the knowledge and tools to succeed.",
      features: [
        "Strategic planning",
        "Implementation support",
        "Team training",
        "Ongoing optimization"
      ],
      icon: "🎓"
    }
  ];

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="container">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            Our Services
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            Comprehensive geospatial solutions designed to meet the diverse needs of modern organizations
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full rounded-lg border border-stroke bg-white p-8 shadow-sign-up dark:border-stroke-dark dark:bg-dark"
            >
              <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-4xl">
                {service.icon}
              </div>
              <h4 className="mb-4 text-xl font-bold text-black dark:text-white">
                {service.title}
              </h4>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-base text-body-color dark:text-body-color-dark">
                    <CheckIcon className="mr-3 h-5 w-5 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
            Ready to Get Started?
          </h3>
          <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
            Let&apos;s discuss how our services can transform your geospatial operations and drive better outcomes.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-3 text-center text-base font-medium text-white hover:bg-opacity-90"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services; 