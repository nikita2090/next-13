import styles from './layout.module.css';
import React from 'react';

export default function ClientsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className={styles.layout}>
            Clients Layout
            {children}
        </section>
    );
}
