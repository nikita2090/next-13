import { getRandomUser } from '@/app/(server-client-components)/users/getRandomUser';
import Revalidator from '@/components/Revalidator';

export default async function RevalidateOnDemand() {
    const data = await getRandomUser();
    return (
        <section>
            <h2>Static with revalidation on demand (with path)</h2>
            <br />
            <p>
                Fetches and caches data. We can revalidate page by creating the
                request on the special path (click buton and refresh the page to
                see new data)
            </p>
            <br />

            <br />
            <b>{data.results[0].name.first}</b>
            <br />
            <Revalidator path="/(fetching)/revalidate-on-demand" />
        </section>
    );
}
