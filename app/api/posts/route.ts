import { getServerSession } from 'next-auth';
import { postsStore } from '@/app/api/posts/fakePosts';

export async function GET() {
    try {
        const session = await getServerSession();

        if (!session) {
            return new Response('Unauthorized', { status: 403 });
        }

        return new Response(JSON.stringify(postsStore.posts));
    } catch (error) {
        return new Response(null, { status: 500 });
    }
}
