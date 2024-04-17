import { Aboutus } from "./Aboutus";
import OurTeam from "./OurTeam";

export const metadata = {
  title: 'About us',
  description: 'Crafting Dreams, Building Futures',
};

export default function aboutus() {
  return <main className="container ">
    <Aboutus/>
    <OurTeam/>
  
  </main>;
}
