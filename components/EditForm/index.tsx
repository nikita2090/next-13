'use client';

import { useEffect, useState } from 'react';
import { Field } from '../Field';
import { FieldArea } from '../FieldArea';
import { Button } from '../Button';

import styles from './styles.module.scss';
import { Post } from '@prisma/client';
import { useMutation, useQueryClient } from 'react-query';
import { updatePost } from '@/fetching/client/endpoints/posts';
import { useRouter } from 'next/navigation';

interface Props {
    post: Post;
    postId: number;
}

export const EditForm = ({ post, postId }: Props) => {
    const [title, setTitle] = useState(post?.name);
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const [text, setText] = useState(post?.text);
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const router = useRouter();

    const queryClient = useQueryClient();
    const { mutate: editPost } = useMutation(updatePost, {
        onSuccess: () => {
            void queryClient
                .invalidateQueries('posts')
                .then(() => router.push('/posts'));
        },
    });

    console.log('POSTID', postId);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('fire');
        editPost({
            name: title,
            text: text,
            id: postId,
        });
    };

    useEffect(() => {
        setTitle(post?.name);
        setText(post?.text);
    }, [post]);
    return (
        <form className={styles.root} onSubmit={handleSubmit}>
            <Field
                placeholder={'Title'}
                value={title}
                onChange={handleTitleChange}
            />
            <FieldArea
                className={styles.textarea}
                placeholder={'Test'}
                value={text}
                onChange={handleTextChange}
            />
            <Button type={'submit'}>OK</Button>
        </form>
    );
};
