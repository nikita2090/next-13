'use client';

import { useEffect, useState } from 'react';
import { Field } from '../Field';
import { FieldArea } from '../FieldArea';
import { Button } from '../Button';

import styles from './styles.module.scss';
import { Post } from '@prisma/client';

interface Props {
    post: Post;
}

export const EditForm = ({ post }: Props) => {
    const [title, setTitle] = useState(post?.name);
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const [text, setText] = useState(post?.text);
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // if (text === '' || title === '') {
        //     return;
        // }
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
