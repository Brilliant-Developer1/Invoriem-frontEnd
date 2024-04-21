export default async function getSingleCase(id) {
    const result = await fetch('https://api.jsonsilo.com/public/a5ed8d53-179c-4aa4-bda5-2438045b8720');
    const data = await result.json();
    let matchingItem = null;
   
    data.forEach(item => {
        if (item.id === parseInt(id)) {
            matchingItem = item;
            return;
        }
    });
    return matchingItem; 
}
