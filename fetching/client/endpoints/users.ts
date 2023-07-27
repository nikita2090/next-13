import { request } from '@/fetching/client/request';
import { cache } from 'react';

interface Result {
    results: User[];
}

interface User {
    name: {
        title: string;
        first: string;
        last: string;
    };
}

export const getUsers = cache(async (): Promise<Result> => {
    return await request({ url: 'https://randomuser.me/api/?inc=name' });
});
