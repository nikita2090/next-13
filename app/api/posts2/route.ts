//import { getServerSession } from 'next-auth';
import { postsStore } from '@/app/api/posts/fakePosts';
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

//export const dynamic = 'force-dynamic';

export const revalidate = 0;

export async function GET(Request: NextRequest) {
    try {
        //const session = await getServerSession();
        //console.log('session', session);

        // if (!session) {
        //     return new Response('Unauthorized', { status: 403 });
        // }

        //const tag = Request.nextUrl.searchParams.get('tag');
        // console.log('TAG', tag);

        const obj = { posts: postsStore.posts };

        //return new Response(JSON.stringify(postsStore.posts));
        return NextResponse.json(obj);
    } catch (error) {
        return new Response(null, { status: 500 });
        //return new NextResponse(null, { status: 500 });
    }
}
