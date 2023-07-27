import { getRandomUser } from '@/fetching/server/getRandomUser';
import TagRevalidator from '@/components/TagRevalidator';
import { getFirstComment } from '@/fetching/server/getFIrstComment';

export default async function RevalidateOnDemand() {
    const TAG = 'user';
    const first = await getRandomUser({
        next: {
            tags: [TAG],
        },
    });
    const second = await getFirstComment();

    return (
        <section>
            <h2>Static with revalidation on demand (by tag)</h2>
            <br />
            <p>
                Fetches and caches data. We can revalidate request cache by
                creating the request on &quot;/api/revalidate&quot;(special).
                Click buton to see new data for the first request.
                <br />
                You don&apos;t need to refresh page becouse of{' '}
                <i>router.refresh()</i> inside <i>TagRevalidator</i> component
            </p>
            <br />
            <br />
            <b>First:</b> {first.results[0].name.first}
            <br />
            <TagRevalidator queryTag={TAG} />
            <br />
            <b>Second:</b> {second.email}
            <br />
        </section>
    );
}
