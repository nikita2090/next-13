'use client';

import { deletePost, getPosts } from '@/fetching/client/endpoints/posts';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import styles from './styles.module.scss';
import { Button } from '@/components/Button';

export const PostsList = () => {
    const queryClient = useQueryClient();
    const { data: posts, isLoading } = useQuery('posts', getPosts);

    const { mutate: removePost } = useMutation(deletePost, {
        onSuccess: () => {
            void queryClient.invalidateQueries('posts');
        },
    });

    const handleDeletePost = (id: number) => {
        removePost(id);
    };

    return (
        <div className={styles.root}>
            {!isLoading ? (
                posts?.map((post) => (
                    <article key={post.id} className={styles.article}>
                        <div>
                            <header className={styles.header}>
                                {post.name}{' '}
                            </header>
                            <p>{post.text}</p>
                        </div>
                        <Button
                            className={styles.deleteButton}
                            onClick={() => handleDeletePost(post.id)}
                        >
                            X
                        </Button>
                    </article>
                ))
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};
