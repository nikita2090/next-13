import { NextRequest, NextResponse } from 'next/server';

const allowedOrigins = ['http://localhost:3000'];

const findOriginFromReferer = (referer: string) => {
    const arr = referer?.split('/');
    return `${arr[0]}//${arr[2]}`;
};

function addCORSHeaders(response: NextResponse, origin: string) {
    response.headers.append('Access-Control-Allow-Origin', origin || '*');
    response.headers.append(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
    );
    response.headers.append(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS'
    );
}

async function middleware(request: NextRequest) {
    const response = NextResponse.next();

    if (request.nextUrl.pathname.startsWith('/api')) {
        const origin = findOriginFromReferer(
            request.headers.get('referer') || ''
        );
        console.log('origin', origin);

        addCORSHeaders(response, origin);

        if (origin && !allowedOrigins.includes(origin)) {
            return new NextResponse(null, {
                status: 400,
                statusText: 'Bad request',
                headers: {
                    'Access-Control-Allow-Origin': origin || '*',
                    'Content-Type': 'text/plain',
                },
            });
        }
    }

    return response;
}

export const config = {
    matcher: ['/api/:path*'],
};

export default middleware;
