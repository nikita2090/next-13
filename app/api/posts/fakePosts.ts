export interface Post {
    id: number;
    name: string;
    text: string;
}

export let initialPosts: Post[] = [
    {
        id: 1,
        name: 'React',
        text: 'React is a powerful library that helps make UI very fast',
    },
    {
        id: 2,
        name: 'Angular',
        text: 'Angular is a powerful framework that helps make UI very fast',
    },
    {
        id: 3,
        name: 'Vue',
        text: 'Vue is a powerful framework that helps make UI very fast',
    },
];

export const postsStore = {
    posts: initialPosts,
    setPosts(newPosts: Post[]) {
        this.posts = newPosts;
    },
};
