import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

const API_KEY = 'super-secure-api-key';
const availableForRevalidation = ['/(fetching)/revalidate-on-demand'];

export async function GET(request: NextRequest) {
    const key = request.nextUrl.searchParams.get('key') || '';

    if (key !== API_KEY) {
        console.log('invalid key');
        return new NextResponse(null, {
            status: 400,
            statusText: 'Bad request',
        });
    }

    const path = request.nextUrl.searchParams.get('path') || '/';

    if (path && availableForRevalidation.includes(path)) {
        revalidatePath(path);
        return NextResponse.json({ revalidated: true, now: Date.now() });
    }

    const tag = request.nextUrl.searchParams.get('tag') || '/';
    if (tag) {
        revalidateTag(tag);
        return NextResponse.json({ revalidated: tag, now: Date.now() });
    }

    return new NextResponse(null, {
        status: 400,
        statusText: 'Bad request',
    });
}

// BY TAG
// export async function GET(request: NextRequest) {
//     const key = request.nextUrl.searchParams.get('key') || '';

//     if (key !== API_KEY) {
//         console.log('invalid key');
//         return new NextResponse(null, {
//             status: 400,
//             statusText: 'Bad request',
//         });
//     }

//     const tag = request.nextUrl.searchParams.get('tag') || '';
//     revalidateTag(tag);

//     return NextResponse.json({ revalidated: tag, now: Date.now() });
// }
