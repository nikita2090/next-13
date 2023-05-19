import { request } from '@/fetching/request';
import { Post } from '@/app/api/posts/fakePosts';

export const getPosts = async (): Promise<Post[]> => {
    return await request({ url: '/api/posts' });
};

type AddPostData = Pick<Post, 'text' | 'name'>;

export const addPost = async (data: AddPostData): Promise<Post[]> => {
    return await request({ url: '/api/posts/add', method: 'post', data: data });
};

export const deletePost = async (id: number): Promise<Post[]> => {
    return await request({
        url: `/api/posts/${id}`,
        method: 'delete',
    });
};
