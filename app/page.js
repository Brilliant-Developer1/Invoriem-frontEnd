import { Brands } from "./components/Brands/Brands";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import { ClientsCount } from "./components/ClientsCount/ClientsCount";
import Hero from "./components/Hero/Hero";
import { Testimonial } from "./components/Testimonial/Testimonial";
import { WeAreInvoriem } from "./components/WeAreInvoriem/WeAreInvoriem";

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
