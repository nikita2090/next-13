export async function getFirstComment(options?: RequestInit) {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/comments/1',
        options
    );

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch comment');
    }
    return res.json();
}
