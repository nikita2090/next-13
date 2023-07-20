import { UsersChild } from '@/components/UsersChild';
import { UserInfo } from '@/components/UsersInfo';

import { getRandomUser } from '@/app/(server-client-components)/users/getRandomUser';
import { withServerAuth } from '@/utils/withServerAuth';

// #route segment config
// import axios from 'axios';

// #route segment config
// export const dynamic = 'force-dynamic';

async function Users() {
    // #ssr
    const data = await getRandomUser({ cache: 'no-store' });

    // #isr
    // const data = await getRandomUser({
    //     next: {
    //         revalidate: 3,
    //     },
    // });

    // #route segment config
    //const res = await axios.get('https://randomuser.me/api/?inc=name');

    return (
        <div>
            <h2>Posts (Server Component)</h2>
            <p>
                Dynamic Route: Server Component - ClientComponent -
                ServerComponent
            </p>
            {data.results[0].name.first}

            {/* #route segment config */}
            {/*{res.data.results[0].name.first}*/}
            <br />
            <p>{new Date().toLocaleString('ru')}</p>
            <br />
            <UsersChild>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <UserInfo />
            </UsersChild>

            <br />
        </div>
    );
}

export default withServerAuth(Users);
