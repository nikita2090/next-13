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
                    <h2>Data Fetching</h2>
                    <br />
                    <h3>With fetch</h3>
                    <p>
                        Fetch options like &quot;cashe&quot; and
                        &quot;revalidate&quot; give you ability to manage only{' '}
                        <b>server</b> cashe.
                    </p>
                    <br />
                    <Link href={'/force-cashe'}>Force cash (Static)</Link>
                    <Link href={'/revalidate'} prefetch={false}>
                        Revalidation (ISG)
                    </Link>
                    <Link href={'/no-store'} prefetch={false}>
                        No store, Dynamic (SSR)
                    </Link>
                    <Link href={'/dynamic-mount'}>
                        Client side fetch on mount (CSR)
                    </Link>
                    <br />
                    <br />
                    <p style={{ width: '50%' }}>
                        Link prop &quot;prefetch&quot; gives you ability to
                        manage a client cashe. Prefetch=false wipes client cashe
                        after about 30 sec.{' '}
                        <a
                            href={
                                'https://github.com/vercel/next.js/issues/42991#issuecomment-1566339183'
                            }
                            style={{ textDecoration: 'underline' }}
                        >
                            Why?
                        </a>
                        Every time you click on a link during those 30 seconds,
                        the countdown resets back to 30
                    </p>
                    <br />

                    <h3>With React Query and axios (using dynamic segments)</h3>

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
                    <i>Part of routes are available only after logging in</i>
                </>
            )}
        </div>
    );
}
