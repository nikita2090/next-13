import React from 'react';
//import { getRandomUser } from '@/app/(server-client-components)/users/getRandomUser';

export async function UserInfo() {
    const date = new Date().toLocaleString('ru');
    // const data = await getRandomUser();
    // console.log('render UserInfo');
    return (
        <>
            <h4>User Info (Server Component)</h4>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>{date}</p>

            {/*data.results[0].name.first*/}
        </>
    );
}
