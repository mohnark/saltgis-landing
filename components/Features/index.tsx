import SectionTitle from "../Common/SectionTitle";
import Reveal from "../Common/Reveal";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <SectionTitle
          eyebrow="Why SaltGIS"
          title="Our Core Capabilities"
          paragraph="SaltGIS develops innovative geospatial solutions that turn complex location data into actionable intelligence. From precision mapping to automation and open-source innovation, our tools are designed to help organizations manage land, resources, and infrastructure with confidence."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <Reveal
              key={feature.id}
              delay={(index % 3) * 100}
              className="h-full"
            >
              <SingleFeature feature={feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
