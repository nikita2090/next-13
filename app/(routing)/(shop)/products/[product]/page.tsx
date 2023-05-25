import { getRandomUser } from '@/app/(server-client-components)/users/getRandomUser';
import { Suspense } from 'react';
import { headers } from 'next/headers';

interface ProductProps {
    params: {
        product: number;
    };
}

const UserName = async () => {
    const data = await getRandomUser({ cache: 'no-store' });
    const headersList = headers();
    const referer = headersList.get('referer');

    return (
        <>
            {referer}: {data.results[0].name.first}
        </>
    );
};

export default async function Product({ params }: ProductProps) {
    return (
        <div>
            <h2>Product #{params.product}</h2>
            <p>Page with dynamic segment</p>
            <Suspense fallback={<div>Loading name...</div>}>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <UserName />
            </Suspense>
        </div>
    );
}
