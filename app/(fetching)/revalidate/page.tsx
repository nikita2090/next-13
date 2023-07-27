import { getRandomUser } from '@/fetching/server/getRandomUser';

export default async function Revalidate() {
    const data = await getRandomUser({
        next: {
            revalidate: 5,
        },
    });
    return (
        <section>
            <h2>Incremental Static Regeneration(ISG)</h2>
            <br />
            <p>
                Fetches and caches data for some time. After this time and
                refreshing page next initializes revalidation. And only after
                second refresh you can see a new data.
            </p>
            <br />
            <a
                href="https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating#how-it-works"
                style={{ textDecoration: 'underline' }}
                target="_blank"
            >
                How it works in documentation
            </a>
            <br />
            <b>{data.results[0].name.first}</b>
        </section>
    );
}
