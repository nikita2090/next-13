'use client';

import React from 'react';

interface Props {
    path: string;
}

export default function Revalidator({ path }: Props) {
    const API_KEY = 'super-secure-api-key';
    console.log(API_KEY);

    const handleClick = () => {
        fetch(
            `http://localhost:3000/api/revalidate?key=${API_KEY}&path=${path}`
        );
    };
    return <button onClick={handleClick}>Revalidate</button>;
}
