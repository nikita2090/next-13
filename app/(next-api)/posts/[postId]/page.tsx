'use client';
import { useQuery } from 'react-query';

import { getCurrentPost } from '@/fetching/client/endpoints/posts';

import { EditForm } from '@/components/EditForm';

interface Props {
    params: {
        postId: string;
    };
}

export default function EditPost({ params: { postId } }: Props) {
    const { data, isLoading } = useQuery('post', () =>
        getCurrentPost(Number(postId))
    );
    console.log('DATA', data);

    return (
        <>
            <h2>Edit post</h2>
            {isLoading && data ? <div>Loading</div> : <EditForm post={data!} />}
        </>
    );
}
