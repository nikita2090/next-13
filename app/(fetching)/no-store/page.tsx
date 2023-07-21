import { getRandomUser } from '@/app/(server-client-components)/users/getRandomUser';

export default async function NoStore() {
    const data = await getRandomUser({ cache: 'no-store' });
    return (
        <section>
            <h2>Server Side Render (SSR)</h2>
            <br />
            <p>
                Fetches data and re-creates page every time when we refresh it
            </p>
            <br />
            <b>{data.results[0].name.first}</b>
        </section>
    );
}
