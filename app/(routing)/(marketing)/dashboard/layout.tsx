import React from 'react';
import styles from './layout.module.css';

export default function Layout({
    children,
    audience,
    views,
}: {
    children: React.ReactNode;
    audience: React.ReactNode;
    views: React.ReactNode;
}) {
    return (
        <>
            <div className={styles.dashboardLayout}>
                <h1>Dashboard Layout</h1>
                {children}
                <br />
                <br />

                <h2>Audience</h2>
                <div style={{ border: '1px solid white', padding: '50px' }}>
                    {audience}
                </div>
                <br />
                <br />

                <h2>Views</h2>
                <div style={{ border: '1px solid white', padding: '50px' }}>
                    {views}
                </div>
            </div>
        </>
    );
}
