//import { getServerSession } from 'next-auth';
import { postsStore } from '@/app/api/posts/fakePosts';
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(Request: NextRequest) {
    try {
        //const session = await getServerSession();
        //console.log('session', session);

        // if (!session) {
        //     return new Response('Unauthorized', { status: 403 });
        // }

        const tag = Request.nextUrl.searchParams.get('tag');
        console.log('TAG', tag);

        return new NextResponse(JSON.stringify(postsStore.posts));
    } catch (error) {
        return new NextResponse(null, { status: 500 });
    }
}
