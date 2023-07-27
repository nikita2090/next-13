import { getRandomUser } from '@/fetching/server/getRandomUser';
import PathRevalidator from '@/components/PathRevalidator';

export default async function RevalidateOnDemand() {
    const data = await getRandomUser();
    return (
        <section>
            <h2>Static with revalidation on demand (with path)</h2>
            <br />
            <p>
                Fetches and caches data. We can revalidate whole route by creating the
                request on the &quot;/api/revalidate?path=xxx&quot;(special)
                Click button and refresh the page to see new data.
                <br />
                <b>
                    Make sure that everytning right in app/api/revalidate file
                </b>
            </p>
            <br />

            <br />
            <b>{data.results[0].name.first}</b>
            <br />
            <PathRevalidator queryPath="/(fetching)/revalidate-on-demand" />
        </section>
    );
}
