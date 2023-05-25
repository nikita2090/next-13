import { getServerSession } from 'next-auth';
import { postsStore } from '@/app/api/posts/fakePosts';

export async function POST(req: Request) {
    try {
        const session = await getServerSession();

        if (!session) {
            return new Response('Unauthorized', { status: 403 });
        }

        const body = await req.json();
        console.log(body);

        if (body) {
            const newId = postsStore.posts[postsStore.posts.length - 1].id + 1;
            const newPost = {
                id: newId,
                ...body,
            };
            const newPosts = [...postsStore.posts, { ...newPost }];
            postsStore.setPosts(newPosts);
        } else {
            return new Response(null, { status: 400 });
        }

        return new Response(JSON.stringify(postsStore.posts));
    } catch (error) {
        return new Response(null, { status: 500 });
    }
}
