import { getRandomUser } from '@/app/(server-client-components)/users/getRandomUser';
import { Suspense } from 'react';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface ProductProps {
    params: {
        product: number;
    };
}

const UserName = async () => {
    const data = await getRandomUser({ cache: 'no-store', revalidate: 0 });
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
                {/* @ts-ignore */}
                <UserName />
            </Suspense>
        </div>
    );
}
