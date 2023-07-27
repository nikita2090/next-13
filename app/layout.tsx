import './globals.css';
import styles from './layout.module.css';
import { Metadata } from 'next';
import React from 'react';
import AuthProvider from '../components/AuthProvider';
import AuthPanel from '@/components/AuthPanel';
import { QueryProvider } from '@/components/QueryProvider';

import localFont from 'next/font/local';

const euclid = localFont({
    src: [
        {
            path: '../public/fonts/EuclidCircularA-Regular.otf',
            weight: '400',
            style: 'normal',
        },

        {
            path: '../public/fonts/EuclidCircularA-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/EuclidCircularA-Bold.otf',
            weight: '600',
            style: 'normal',
        },
    ],
});

export const metadata: Metadata = {
    title: 'NEXT13 app',
    description: 'Experimental NEXT13 app',
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
    authModal: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={styles.layout}>
                <main className={euclid.className}>
                    <QueryProvider>
                        <AuthProvider>
                            <AuthPanel />
                            <div className={styles.content}>{children}</div>
                        </AuthProvider>
                    </QueryProvider>
                </main>
            </body>
        </html>
    );
}
