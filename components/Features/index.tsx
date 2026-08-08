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
          paragraph="AI, software, and GIS in one stack -built to turn location data into decisions for land, resources, and infrastructure."
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
