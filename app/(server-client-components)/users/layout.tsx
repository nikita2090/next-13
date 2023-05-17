import React from 'react';

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
