import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - SaltGIS | Advanced GIS Software & Location Intelligence",
  description: "Learn about SaltGIS - Software for Advanced Location Technologies in Geographic Information Systems. Discover our mission to transform spatial data into actionable intelligence.",
};

const AboutPage = () => {
  return (
    <>
      <div className="pt-24 md:pt-28 lg:pt-32">
        <Breadcrumb pageName="About Us" />
      </div>
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
