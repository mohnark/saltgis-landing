import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ProductsShowcase from "@/components/Home/ProductsShowcase";
import ServicesHighlight from "@/components/Home/ServicesHighlight";
import CTABand from "@/components/Home/CTABand";

import Testimonials from "@/components/Testimonials";
// import Video from "@/components/Video";


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <ProductsShowcase />
      <ServicesHighlight />
      <Features />
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      <CTABand />
      <Contact />
    </>
  );
}
