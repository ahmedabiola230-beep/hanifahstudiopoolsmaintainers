import Hero from "@/components/site/home/hero";
import ServicesShowcase from "@/components/site/home/services-showcase";
import Testimonials from "@/components/site/home/testimonials";
import WhyChooseUs from "@/components/site/home/why-choose-us";
import Banner from "@/components/site/home/banner";
import Process from "@/components/site/home/process";
import ProjectsCarousel from "@/components/site/home/projects-carousel";
import PricingPlans from "@/components/site/home/pricing-plans";
import { FaqSection } from "@/components/site/home/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesShowcase />
      <Testimonials />
      <WhyChooseUs />
      <Banner />
      <Process />
      <ProjectsCarousel />
      <PricingPlans />
      <FaqSection />
    </>
  );
}
