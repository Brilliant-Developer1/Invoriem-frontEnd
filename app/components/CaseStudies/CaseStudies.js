import getAllCases from "@/lib/getAllCases";

export default async function CaseStudies(){
    const cases = await getAllCases();
    
  return (
    <div>
      <h1>CaseStudies</h1>
      <ul>
        {cases.map(caseItem => (
          <li key={caseItem.id}>{caseItem.name}</li>
        ))}
      </ul>
    </div>
  );
};
