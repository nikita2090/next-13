import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { prisma } from '@/utils/db';

export async function GET() {
    try {
        const session = await getServerSession();
        if (!session) {
            return new NextResponse('Unauthorized', { status: 403 });
        }

        const posts = await prisma.post.findMany();
        console.log('POSTS:', posts);

        return NextResponse.json(posts);
    } catch (error) {
        return new NextResponse(null, { status: 500 });
    }
}
