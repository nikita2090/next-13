import { UsersChild } from '@/components/UsersChild';
import { UserInfo } from '@/components/UsersInfo';

//import { getRandomUser } from '@/app/(server-client-components)/users/getRandomUser';
import axios from 'axios';

export const dynamic = 'force-dynamic';

export default async function Users() {
    //const data = await getRandomUser({ cache: 'no-store' });
    console.log('render Users');

    const res = await axios.get('https://randomuser.me/api/?inc=name');
    console.log(res.data);

    return (
        <div>
            <h2>Posts (Server Component)</h2>
            <p>
                Dynamic Route: Server Component - ClientComponent -
                ServerComponent
            </p>
            {res.data.results[0].name.first}
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
