import { getServerSession } from 'next-auth';
import { prisma } from '@/utils/db';
import { NextResponse } from 'next/server';

interface Params {
    postId: string;
}

export async function GET(req: Request, { params }: { params: Params }) {
    try {
        const session = await getServerSession();
        if (!session) {
            return new Response('Unauthorized', { status: 403 });
        }

        const { postId } = params;
        console.log('POSTID', postId);
        if (postId) {
            const currentPost = await prisma.post.findUnique({
                where: {
                    id: Number(postId),
                },
            });
            console.log('GET CURRENT POST:', currentPost);
            return NextResponse.json(currentPost);
        } else {
            return new Response(null, { status: 404 });
        }
    } catch (error) {
        console.log(error);
        return new Response(null, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: Params }) {
    try {
        const session = await getServerSession();

        if (!session) {
            return new Response('Unauthorized', { status: 403 });
        }
        const { postId } = params;

        if (postId) {
            const deletedPost = await prisma.post.delete({
                where: {
                    id: Number(postId),
                },
            });
            console.log('DELETED POST:', deletedPost);
            return NextResponse.json(deletedPost);
        } else {
            return new Response(null, { status: 404 });
        }
    } catch (error) {
        console.log(error);
        return new Response(null, { status: 500 });
    }
}
