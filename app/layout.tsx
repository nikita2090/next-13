import './globals.css';
import styles from './layout.module.css';
import { Metadata } from 'next';
import React from 'react';
import AuthProvider from '../components/AuthProvider';
import AuthPanel from '@/components/AuthPanel';
import { QueryProvider } from '@/components/QueryProvider';

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
                <main>
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
