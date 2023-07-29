'use client';

import { getRandomUser } from '@/fetching/server/getRandomUser';
import { useEffect, useState } from 'react';

export default function DynamicMountChild() {
    const [user, setUser] = useState('');

    useEffect(() => {
        async function fetchUser() {
            const data = await getRandomUser();
            setUser(data.results[0].name.first);
        }

        fetchUser().catch((err) => console.log(err));
    }, []);

    return <b>{user}</b>;
}
