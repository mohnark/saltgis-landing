import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import ServicesHighlight from "@/components/Home/ServicesHighlight";
import WorkHighlight from "@/components/Home/WorkHighlight";
import CTABand from "@/components/Home/CTABand";

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <ServicesHighlight />
      <WorkHighlight />
      <CTABand />
    </>
  );
}
