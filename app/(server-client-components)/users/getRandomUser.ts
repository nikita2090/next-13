interface Args {
    cache?: RequestCache | undefined;
    revalidate?: number | false | undefined;
}

export async function getRandomUser(args: Args) {
    const res = await fetch('https://randomuser.me/api/?inc=name', {
        cache: args?.cache,
        next: {
            revalidate: args?.revalidate,
        },
    });

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    return res.json();
}
