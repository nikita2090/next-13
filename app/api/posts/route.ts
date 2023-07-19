import { getServerSession } from 'next-auth';
import { postsStore } from '@/app/api/posts/fakePosts';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const session = await getServerSession();

        if (!session) {
            return new NextResponse('Unauthorized', { status: 403 });
        }

        return NextResponse.json(postsStore.posts);
    } catch (error) {
        return new NextResponse(null, { status: 500 });
    }
}
