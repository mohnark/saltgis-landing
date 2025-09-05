import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "From Satellite to Farm Gate: Mapping Large-Scale Trends - SaltGIS Blog",
  description: "Explore how EU-wide initiatives harness GIS and remote sensing to elevate agricultural oversight with high-resolution crop mapping and policy support.",
  keywords: ["Remote Sensing", "EU Policy", "Crop Mapping", "Sentinel", "Satellite Imagery", "GIS"],
};

const BlogPost = () => {
  return (
    <>
      <div className="pt-24 md:pt-28 lg:pt-32">
        <Breadcrumb
          pageName="From Satellite to Farm Gate: Mapping Large-Scale Trends"
        />
      </div>

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Article Header */}
            <div className="mb-12 text-center">
              <h1 className="mb-6 text-4xl font-bold !leading-tight text-black dark:text-white sm:text-5xl md:text-[60px]">
                From Satellite to Farm Gate: Mapping Large-Scale Trends
              </h1>
              <div className="mb-6 flex items-center justify-center space-x-4 text-sm text-body-color dark:text-body-color-dark">
                <span>By SaltGIS Team</span>
                <span>•</span>
                <span>January 2025</span>
                <span>•</span>
                <span>6 min read</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Remote Sensing</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">EU Policy</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Crop Mapping</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <img
                src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Satellite imagery mapping agricultural trends - Earth from space showing agricultural patterns"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-xl text-body-color dark:text-body-color-dark mb-8">
                EU-wide initiatives are harnessing GIS and remote sensing to elevate agricultural oversight and responsiveness. Sentinel-1 radar imaging paired with in-situ LUCAS observations has enabled generating high-resolution crop type maps with ~80% accuracy.
              </p>

              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
                The Sentinel Revolution
              </h2>
              
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                The European Space Agency's Sentinel constellation has revolutionized agricultural monitoring across Europe. With free, open-access satellite data updated every 5-6 days, farmers and policymakers now have unprecedented access to real-time agricultural information.
              </p>

              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
                High-Resolution Crop Type Mapping
              </h2>
              
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                The combination of Sentinel-1 radar imaging with ground-based LUCAS (Land Use/Cover Area frame Survey) observations has created a breakthrough in crop monitoring:
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Key Achievements</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="text-base text-body-color dark:text-body-color-dark">10-meter resolution mapping across Europe</li>
                  <li className="text-base text-body-color dark:text-body-color-dark">Classification of 19 different crop types</li>
                  <li className="text-base text-body-color dark:text-body-color-dark">~80% accuracy in crop identification</li>
                  <li className="text-base text-body-color dark:text-body-color-dark">Near real-time monitoring capabilities</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
                EuroCrops: Open Data for Agriculture
              </h2>
              
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                The EuroCrops dataset represents a major step forward in agricultural transparency and data sharing across Europe:
              </p>

              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Coverage</h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    16 EU countries with harmonized geo-referenced crop polygons sourced from subsidy databases.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Benefits</h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Transparent, accessible agricultural insights for researchers, policymakers, and farmers.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
                ELC10: Next-Generation Land Cover Mapping
              </h2>
              
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                The European Land Cover 10m (ELC10) dataset represents a quantum leap in land cover mapping:
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Technical Specifications</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="text-base text-body-color dark:text-body-color-dark">10-meter resolution (vs. 100m in CORINE)</li>
                  <li className="text-base text-body-color dark:text-body-color-dark">Machine learning-powered classification</li>
                  <li className="text-base text-body-color dark:text-body-color-dark">Sentinel-2 imagery integration</li>
                  <li className="text-base text-body-color dark:text-body-color-dark">High accuracy land cover classification</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
                Policy Impact and Future Applications
              </h2>
              
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                These large-scale mapping initiatives are transforming how Europe approaches agricultural policy and monitoring:
              </p>

              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-base text-body-color dark:text-body-color-dark">Enhanced Common Agricultural Policy (CAP) monitoring</li>
                <li className="text-base text-body-color dark:text-body-color-dark">Improved food security planning</li>
                <li className="text-base text-body-color dark:text-body-color-dark">Better climate change adaptation strategies</li>
                <li className="text-base text-body-color dark:text-body-color-dark">More accurate subsidy distribution</li>
                <li className="text-base text-body-color dark:text-body-color-dark">Enhanced environmental impact assessment</li>
              </ul>

              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
                The Road Ahead
              </h2>
              
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                As satellite technology continues to advance and data processing capabilities improve, we can expect even more sophisticated agricultural monitoring systems. The integration of artificial intelligence and machine learning will enable predictive analytics and early warning systems for crop diseases, weather events, and market fluctuations.
              </p>

              <p className="text-base text-body-color dark:text-body-color-dark mb-8">
                The future of European agriculture lies in the seamless integration of satellite data, ground observations, and advanced analytics—creating a comprehensive understanding of agricultural systems that benefits farmers, policymakers, and consumers alike.
              </p>

              {/* Call to Action */}
              <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                  Harness the Power of Satellite Data
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                  Learn how SaltGIS can help you leverage satellite imagery and remote sensing data for your agricultural operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-center"
                  >
                    Explore Our Solutions
                  </a>
                  <a
                    href="/products"
                    className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors text-center"
                  >
                    See TerraFlow in Action
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
