import getAllCases from '@/lib/getAllCases';
export default async function getSingleCase(id) {
    const cases = await getAllCases();
    let matchingItem = null;
   
    cases.forEach(item => {
        if (item.id === parseInt(id)) {
            matchingItem = item;
            return;
        }
    });
    return matchingItem; 
}
