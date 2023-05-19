'use client';

import styles from './styles.module.scss';
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addPost } from '@/fetching/endpoints/posts';
import { Field } from '@/components/Field';
import { Button } from '@/components/Button';
import { FieldArea } from '@/components/FieldArea';

export const NewPost = () => {
    const queryClient = useQueryClient();

    const [title, setTitle] = useState('');
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const [text, setText] = useState('');
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const clearForm = () => {
        setTitle('');
        setText('');
    };

    const { mutate: add } = useMutation(addPost, {
        onSuccess: () => {
            void queryClient.invalidateQueries('posts');
        },
    });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text === '' || title === '') {
            return;
        }

        add({
            name: title,
            text,
        });
        clearForm();
    };

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
            <Button type={'submit'}>Send</Button>
        </form>
    );
};
