import React from 'react';
import styles from './layout.module.css';

export default function Layout({
    children,
    modal,
}: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <>
            <div className={styles.dashboardLayout}>
                <h1>Layout</h1>
                {children}
                {modal}
            </div>
        </>
    );
}
