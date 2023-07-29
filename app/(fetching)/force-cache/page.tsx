import { getRandomUser } from '@/fetching/server/getRandomUser';

export default async function ForceCache() {
    const data = await getRandomUser();

    return (
        <section>
            <h2>Static fetch during the build</h2>
            <p>Fetches and caches data (no fetches after refresh)</p>
            <b>{data.results[0].name.first}</b>
        </section>
    );
}
