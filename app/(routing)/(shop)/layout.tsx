import styles from './layout.module.css';
import React from "react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className={styles.shopLayout}>
            ShopLayout
            {children}
        </section>
    );
}
