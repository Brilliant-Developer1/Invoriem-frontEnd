import { Brands } from "./home/Brands/Brands";
import CaseStudies from "./home/CaseStudies/CaseStudies";
import { ClientsCount } from "./home/ClientsCount/ClientsCount";
import Hero from "./home/Hero/Hero";
import { Testimonial } from "./home/Testimonial/Testimonial";
import { WeAreInvoriem } from "./home/WeAreInvoriem/WeAreInvoriem";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <CaseStudies></CaseStudies>
      <ClientsCount></ClientsCount>
      <WeAreInvoriem></WeAreInvoriem>
      <Testimonial></Testimonial>
      <Brands></Brands>

    </main>
  );
}
