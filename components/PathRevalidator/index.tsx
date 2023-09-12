'use client';

import React from 'react';

interface Props {
    queryPath: string;
}

export default function PathRevalidator({ queryPath }: Props) {
    const API_KEY = 'super-secure-api-key';

    const handleClick = () => {
        fetch(
            `http://localhost:3000/api/revalidate?key=${API_KEY}&path=${queryPath}`
        );
    };
    return <button onClick={handleClick}>Revalidate</button>;
}
