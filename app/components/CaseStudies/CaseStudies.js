import getAllCases from '@/lib/getAllCases';
import { Slides } from './Slides';



export default async function CaseStudies() {
  const cases = await getAllCases();

  

  return (
    <section className="container mt-20 ">
      <div className='p-5 sm:p-2'>
      <h2 className="text-teal mb-3 text-4xl sm:text-5xl font-bold ">Case Studies</h2>
      <p className="mb-5 text-gray-600">We deliver a unique and truly bespoke approach to delivering international developments to market, with over 10 years success around the world.</p>
      </div>
      <div className="mt-0 sm:mt-20 ">
      <Slides cases={cases}></Slides>
        
      </div>
    </section>
  );
}
