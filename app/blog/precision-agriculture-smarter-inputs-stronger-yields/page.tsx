import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Precision Agriculture: Smarter Inputs, Stronger Yields - SaltGIS Blog",
  description: "Learn how GIS-driven precision farming helps European producers optimize resources and achieve up to 15% yield increases through smart technology.",
  keywords: ["Precision Agriculture", "Satellite Imagery", "Farming", "GIS", "Variable Rate Application"],
};

const BlogPost = () => {
  return (
    <>
      <div className="pt-24 md:pt-28 lg:pt-32">
        <Breadcrumb
          pageName="Precision Agriculture: Smarter Inputs, Stronger Yields"
        />
      </div>

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Article Header */}
            <div className="mb-12 text-center">
              <h1 className="mb-6 text-4xl font-bold !leading-tight text-black dark:text-white sm:text-5xl md:text-[60px]">
                Precision Agriculture: Smarter Inputs, Stronger Yields
              </h1>
              <div className="mb-6 flex items-center justify-center space-x-4 text-sm text-body-color dark:text-body-color-dark">
                <span>By SaltGIS Team</span>
                <span>•</span>
                <span>January 2025</span>
                <span>•</span>
                <span>4 min read</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Precision Agriculture</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Satellite Imagery</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Farming</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Precision agriculture technology - drone flying over farmland with GPS technology"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-xl text-body-color dark:text-body-color-dark mb-8">
                GIS-driven precision farming helps European producers optimize resources and output. Through integration with multispectral satellite imagery and soil moisture data, tools enable variable-rate nitrogen application, early disease detection, and precise irrigation control.
              </p>

              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
                The Science Behind Precision Agriculture
              </h2>
              
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                Modern precision agriculture relies on the integration of multiple data sources: satellite imagery, soil sensors, weather data, and historical yield maps. This comprehensive approach allows farmers to make informed decisions at the field level, optimizing inputs and maximizing outputs.
              </p>

              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
                Key Technologies Driving Success
              </h2>

              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Variable-Rate Application</h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    GPS-guided equipment applies fertilizers, seeds, and pesticides at optimal rates based on real-time field conditions and historical data.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Early Disease Detection</h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Multispectral imaging identifies crop stress and disease before visible symptoms appear, enabling proactive treatment.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Precise Irrigation Control</h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Soil moisture sensors and weather data optimize irrigation timing and volume, reducing water waste and improving crop health.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Yield Mapping</h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    GPS-enabled harvesters create detailed yield maps showing productivity variations across fields for future planning.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
                Proven Results: 15% Yield Increases
              </h2>
              
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                European farmers implementing precision agriculture technologies have reported significant improvements:
              </p>

              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li className="text-base text-body-color dark:text-body-color-dark">Up to 15% increase in crop yields</li>
                <li className="text-base text-body-color dark:text-body-color-dark">20-30% reduction in fertilizer usage</li>
                <li className="text-base text-body-color dark:text-body-color-dark">25% decrease in water consumption</li>
                <li className="text-base text-body-color dark:text-body-color-dark">40% reduction in pesticide applications</li>
                <li className="text-base text-body-color dark:text-body-color-dark">Improved soil health and sustainability</li>
              </ul>

              <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
                The Future of Smart Farming
              </h2>
              
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                As technology continues to advance, precision agriculture is becoming more accessible and effective. Machine learning algorithms can now predict crop performance, optimize planting schedules, and even suggest the best crop varieties for specific field conditions.
              </p>

              <p className="text-base text-body-color dark:text-body-color-dark mb-8">
                The integration of IoT sensors, drone technology, and AI-powered analytics is creating a new era of agriculture where every decision is data-driven and every input is precisely calculated for maximum efficiency and sustainability.
              </p>

              {/* Call to Action */}
              <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                  Ready to Implement Precision Agriculture?
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                  Discover how SaltGIS can help you implement precision agriculture solutions and achieve similar results on your farm.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-center"
                  >
                    Start Your Precision Journey
                  </a>
                  <a
                    href="/products"
                    className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors text-center"
                  >
                    Explore TerraFlow
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
