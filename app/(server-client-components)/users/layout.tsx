import React from 'react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function UsersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            Users Layout
            {children}
        </section>
    );
}
