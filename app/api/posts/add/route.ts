import { getServerSession } from 'next-auth';
import { prisma } from '@/utils/db';

export async function POST(req: Request) {
    try {
        const session = await getServerSession();

        if (!session) {
            return new Response('Unauthorized', { status: 403 });
        }

        const body = await req.json();

        if (body) {
            const post = await prisma.post.create({
                data: {
                    name: body.name,
                    text: body.text,
                },
            });
            console.log('NEW POST:', post);
        } else {
            return new Response(null, { status: 400 });
        }
    } catch (error) {
        console.log(error);
        return new Response(null, { status: 500 });
    }
}
