import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-4 md:py-5 lg:py-6">
        <div className="container">
          <SectionTitle
            title="Our Core Capabilities"
            paragraph="SaltGIS develops innovative geospatial solutions that turn complex location data into actionable intelligence. From precision mapping to automation and open-source innovation, our tools are designed to help organizations manage land, resources, and infrastructure with confidence."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-7 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
