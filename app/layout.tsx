import './globals.css';
import styles from './layout.module.css';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'NEXT13 app',
    description: 'Experimental NEXT13 app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
    authModal: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={styles.layout}>
                Root Layout
                <main>{children}</main>
            </body>
        </html>
    );
}
