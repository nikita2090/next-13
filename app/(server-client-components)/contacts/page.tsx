import { ContactsChild } from '@/components/ContactsChild';
import { ContactsInfo } from '@/components/ContactsInfo';
import { getRandomUser } from '@/app/(server-client-components)/users/getRandomUser';
import { withServerAuth } from '@/utils/withServerAuth';

async function Contacts() {
    const data = await getRandomUser({ next: { revalidate: 5 } });

    return (
        <div>
            <h2>Contacts (Server Component)</h2>
            <p>
                Static Route: Server Component - ClientComponent -
                ServerComponent
            </p>
            <p>{new Date().toLocaleString('ru')}</p>
            <br />
            <br />
            <ContactsChild>
                <ContactsInfo />
            </ContactsChild>
            <br />
            {data.results[0].name.first}
        </div>
    );
}

export default withServerAuth(Contacts);
