import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { FC } from "react";

const CheckIcon: FC = () => (
  <svg
    width="16"
    height="13"
    viewBox="0 0 16 13"
    className="fill-current"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

type ListProps = { text: string };

const List: FC<ListProps> = ({ text }) => (
  <p className="mb-5 flex items-center text-base md:text-lg font-medium text-body-color">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-[#4CAF50]/10 text-[#4CAF50]">
      <CheckIcon />
    </span>
    {text}
  </p>
);

const AboutSectionOne = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="border-b border-body-color/15 pb-16 dark:border-white/15 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Copy */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="About SaltGIS"
                paragraph="SaltGIS (Software for Advanced Location Technologies in Geographic Information Systems) develops innovative GIS software that transforms complex spatial data into clear, actionable intelligence. Founded in 2025, our mission is to equip organizations with smarter, faster, and more precise tools for land, infrastructure, and resource management. From precision mapping and spatial analysis to automation and decision dashboards, we build solutions that bridge geospatial data with real-world outcomes."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[620px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Precision mapping & spatial analysis" />
                    <List text="Remote sensing (Sentinel/UAV) & NDVI insights" />
                    <List text="Land parcel & asset management workflows" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Automated ETL, QA, and spatial data pipelines" />
                    <List text="OGC standards (WMS, WFS, WFS-T) & interoperability" />
                    <List text="Dashboards & decision-support systems" />
                  </div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp mx-auto text-center lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/about-image.png"
                  alt="SaltGIS—map interfaces, analytics, and remote-sensing layers"
                  width={520}
                  height={500}
                  priority
                  className="mx-auto max-w-full h-auto drop-shadow-three dark:hidden"
                />
                <Image
                  src="/images/about/about-image-dark.png"
                  alt="SaltGIS—map interfaces, analytics, and remote-sensing layers (dark mode)"
                  width={520}
                  height={500}
                  priority
                  className="mx-auto max-w-full h-auto hidden drop-shadow-three dark:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
