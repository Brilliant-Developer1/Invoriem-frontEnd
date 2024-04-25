
import getSingleCase from "@/lib/getSingleCase";
import Header from "./Header";
import TheChallenge from "./TheChallenge";
import Slides from "./Slides";
import Solution from "./Solution";
import Outcome from "./Outcome";
import MoreCaseStudies from "./MoreCaseStudies";
import SayHi from "@/app/components/SayHi";



const ImageDetailPage = async ({ params }) => {
    const {id} = params;
    const singleCase = await getSingleCase(id);
    
  return (
    // Dynamic route from Home page Case Studies
    <main className="container">
     <Header singleCase={singleCase}></Header>
     <TheChallenge singleCase={singleCase}></TheChallenge>
     <Slides singleCase={singleCase}></Slides>
     <Solution singleCase={singleCase}></Solution>
     <Outcome singleCase={singleCase}></Outcome>
     <MoreCaseStudies singleCase={singleCase}></MoreCaseStudies>
     <SayHi></SayHi>
    </main>
  );
};

export default ImageDetailPage;

