export async function getRandomUser(options?: RequestInit) {
    const res = await fetch('https://randomuser.me/api/?inc=name', options);

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    return res.json();
}
