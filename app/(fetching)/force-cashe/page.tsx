import { getRandomUser } from '@/app/(server-client-components)/users/getRandomUser';

export default async function ForceCash() {
    const data = await getRandomUser();

    return (
        <section>
            <h2>Static fetch during the build</h2>
            <p>Fetches and cashes data (no fetches after refresh)</p>
            <b>{data.results[0].name.first}</b>
        </section>
    );
}
