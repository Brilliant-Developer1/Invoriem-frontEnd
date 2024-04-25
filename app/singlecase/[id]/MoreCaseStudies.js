
import { Slides } from '@/app/home/CaseStudies/Slides';
import getAllCases from '@/lib/getAllCases';


const MoreCaseStudies = async ({singleCase}) => {
    const {id} = singleCase;
    const cases = await getAllCases();

    const filteredCases = cases.filter(element => element.id !== id);

  return (
    <section className="container mt-20 ">
      <div className='p-5 sm:p-2'>
      <h2 className="text-teal mb-3 text-3xl sm:text-4xl font-bold ">More Case Studies</h2>
      </div>
      <div className="mt-0 sm:mt-20 ">
      <Slides cases={filteredCases}></Slides>
        
      </div>
    </section>
  )
}

export default MoreCaseStudies