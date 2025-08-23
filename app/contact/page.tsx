import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - SaltGIS | Get In Touch for GIS Software Solutions",
  description: "Contact SaltGIS for custom GIS development, automation solutions, and location intelligence consulting. Get in touch to discuss your geospatial needs.",
};

const ContactPage = () => {
  return (
    <>
      <div className="pt-24 md:pt-28 lg:pt-32">
        <Breadcrumb
          pageName="Contact Us"
        />
      </div>

      <Contact />
    </>
  );
};

export default ContactPage;
