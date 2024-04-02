
import CaseStudies from "./components/CaseStudies/CaseStudies";
import Hero from "./components/Hero/Hero";
import { WeAreInvoriem } from "./components/WeAreInvoriem/WeAreInvoriem";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <CaseStudies></CaseStudies>
      <WeAreInvoriem></WeAreInvoriem>

    </main>
  );
}
// style={{ marginTop: '64px' }}