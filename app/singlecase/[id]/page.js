
import getSingleCase from "@/lib/getSingleCase";
import Header from "./Header";
import TheChallenge from "./TheChallenge";
import Slides from "./Slides";


const ImageDetailPage = async ({ params }) => {
    const {id} = params;
    const singleCase = await getSingleCase(id);
    
  return (
    // Dynamic route from Home page Case Studies
    <main className="container">
      <Header singleCase={singleCase}></Header>
      <TheChallenge singleCase={singleCase}></TheChallenge>
      <Slides singleCase={singleCase}></Slides>
     
     
    </main>
  );
};

export default ImageDetailPage;

