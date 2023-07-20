import React from 'react';
import Link from 'next/link';
import { getServerSession } from 'next-auth';

import styles from './page.module.css';

export default async function Home() {
    const session = await getServerSession();
    const isAuthorized = Boolean(session?.user);

    return (
        <div className={styles.main}>
            <h1>NEXT-13 TEST APP</h1>
            <br />

            <h1>Sections</h1>

            <h2>Routing</h2>
            <Link href={'/promo'}>Promo (Layout sharing)</Link>
            <Link href={'/products'}>
                Products (Layout sharing, dynamic segments, suspense)
            </Link>
            <Link href={'/discounts'}>
                Discounts (Statically generated dynamic segments)
            </Link>

            <br />
            <Link href={'/clients'}>Clients (Local error boundary)</Link>
            <Link href={'/dashboard'}>Dashboard (Parallel routing)</Link>
            <br />
            <br />

            {isAuthorized ? (
                <>
                    <h2>Server & Client components</h2>

                    <Link href={'/contacts'}>
                        Contacts (Static route with Server - Client - Server
                        components structure)
                    </Link>

                    <Link href={'/users'}>
                        Users (Dynamic route with Server - Client - Server
                        components structure)
                    </Link>
                    <br />
                    <br />

                    <h2>Next API</h2>
                    <Link href={'/posts'}>
                        Posts (Client side fetches to Next API)
                    </Link>
                    <br />
                    <Link href={'/posts2'}>
                        Posts-2 (Revalidation with Next api)
                    </Link>
                </>
            ) : (
                <>
                    <p>
                        This is a test app. Part of routes are available only
                        after logging in
                    </p>
                </>
            )}
        </div>
    );
}
