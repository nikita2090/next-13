import { UsersChild } from '@/components/UsersChild';
import { UserInfo } from '@/components/UsersInfo';

import { getRandomUser } from '@/app/(server-client-components)/users/getRandomUser';

//export const dynamic = 'force-dynamic';
export const revalidate = 0;

// interface PostsInfoProps {
//     searchParams: string;
// }
//
// interface Post {
//     id: 1;
//     title: string;
//     body: string;
//     userId: number;
//     tags: string[];
// }
//
// interface Posts {
//     posts: Post[];
// }

// async function getPosts(): Promise<Posts> {
//     const res = await fetch('https://dummyjson.com/posts', {
//         cache: 'no-store',
//     });
//
//     if (!res.ok) {
//         // This will activate the closest `error.js` Error Boundary
//         throw new Error('Failed to fetch data');
//     }
//     return res.json();
// }

export default async function Users() {
    const data = await getRandomUser({ cache: 'no-store' });
    console.log('render Users');

    return (
        <div>
            <h2>Posts (Server Component)</h2>
            <p>
                Dynamic Route: Server Component - ClientComponent -
                ServerComponent
            </p>
            {data.results[0].name.first}
            <br />
            <p>{new Date().toLocaleString('ru')}</p>
            <br />
            <UsersChild>
                {/* @ts-ignore */}
                <UserInfo />
            </UsersChild>

            <br />
        </div>
    );
}
