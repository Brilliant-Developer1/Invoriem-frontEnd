import getAllCases from '@/lib/getAllCases';
import Image from 'next/image';
import { Slide } from './Slide';



export default async function CaseStudies() {
  const cases = await getAllCases();

  

  return (
    <div className="container mt-20">
      <h2 className="text-teal text-4xl font-semibold ">Case Studies</h2>
      <div className="mt-20 ">
      <Slide cases={cases}></Slide>
        
      </div>
    </div>
  );
}
