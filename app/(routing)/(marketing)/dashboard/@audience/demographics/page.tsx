'use client';

import { useRouter } from 'next/navigation';

export default function Demographics() {
    const router = useRouter();
    return (
        <div>
            <h4>Demographics</h4>
            <p>Demographics content</p>

            <button onClick={() => router.back()}>back</button>
        </div>
    );
}
