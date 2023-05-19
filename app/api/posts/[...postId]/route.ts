import { getServerSession } from 'next-auth';
import { postsStore } from '@/app/api/posts/fakePosts';

interface Params {
    postId: string;
}

export async function DELETE(req: Request, { params }: { params: Params }) {
    try {
        const session = await getServerSession();

        if (!session) {
            return new Response('Unauthorized', { status: 403 });
        }
        const { postId } = params;

        if (postId) {
            const newPosts = postsStore.posts.filter(
                (post) => post.id !== Number(postId)
            );
            postsStore.setPosts(newPosts);
        } else {
            return new Response(null, { status: 404 });
        }

        return new Response(JSON.stringify(postsStore.posts));
    } catch (error) {
        return new Response(null, { status: 500 });
    }
}
