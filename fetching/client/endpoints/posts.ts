import { request } from '@/fetching/client/request';
import { Post } from '@prisma/client';

export const getPosts = async (): Promise<Post[]> => {
    return await request({ url: '/api/posts' });
};

export const getCurrentPost = async (id: number): Promise<Post> => {
    return await request({ url: `/api/posts/${id}` });
};

type PostData = Pick<Post, 'text' | 'name'>;

export const addPost = async (data: PostData): Promise<Post> => {
    return await request({ url: '/api/posts/add', method: 'post', data: data });
};

export const deletePost = async (id: number): Promise<Post> => {
    return await request({
        url: `/api/posts/${id}`,
        method: 'delete',
    });
};

export const updatePost = async (data: Post): Promise<Post> => {
    return await request({
        url: `/api/posts/${data.id}`,
        method: 'put',
        data: {
            name: data.name,
            text: data.text,
        },
    });
};
