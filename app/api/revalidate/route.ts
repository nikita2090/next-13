import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

const API_KEY = 'super-secure-api-key';
const availableForRevalidation = ['/(fetching)/revalidate-on-demand'];

export async function GET(request: NextRequest) {
    const key = request.nextUrl.searchParams.get('key') || '';
    console.log(key);
    if (key !== API_KEY) {
        console.log('invalid key');
        return new NextResponse(null, {
            status: 400,
            statusText: 'Bad request',
        });
    }

    const path = request.nextUrl.searchParams.get('path') || '/';
    if (availableForRevalidation.includes(path)) {
        revalidatePath(path);
        return NextResponse.json({ revalidated: true, now: Date.now() });
    } else {
        console.log('invalid path');
        return new NextResponse(null, {
            status: 400,
            statusText: 'Bad request',
        });
    }
}
