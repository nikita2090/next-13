'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
    queryTag: string;
}

export default function TagRevalidator({ queryTag }: Props) {
    const API_KEY = 'super-secure-api-key';

    const router = useRouter();

    const handleClick = () => {
        fetch(
            `http://localhost:3000/api/revalidate?key=${API_KEY}&tag=${queryTag}`
        ).then(() => router.refresh());
    };
    return <button onClick={handleClick}>Revalidate</button>;
}
