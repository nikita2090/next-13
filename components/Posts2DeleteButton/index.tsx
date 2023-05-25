'use client';

import { Button } from '@/components/Button';

import { useMutation, useQueryClient } from 'react-query';
import { deletePost } from '@/fetching/endpoints/posts';
import React from 'react';

interface Posts2DeleteButtonProps {
    className?: string;
    postId: number;
}

export const Posts2DeleteButton: React.FC<Posts2DeleteButtonProps> = ({
    className,
    postId,
}) => {
    const queryClient = useQueryClient();
    const { mutate: removePost } = useMutation(deletePost, {
        onSuccess: () => {
            void queryClient.invalidateQueries('posts');
        },
    });

    const handleDeletePost = (id: number) => {
        removePost(id);
    };
    return (
        <Button className={className} onClick={() => handleDeletePost(postId)}>
            X
        </Button>
    );
};
