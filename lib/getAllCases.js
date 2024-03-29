export default async function getAllCases () {
    const result = await fetch('https://api.jsonsilo.com/public/a5ed8d53-179c-4aa4-bda5-2438045b8720');
    
    return result.json();
}