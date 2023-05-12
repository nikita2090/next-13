import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
    return (
        <div className={styles.main}>
            <h1>Sections</h1>
            <br />
            <br />

            <h2>Routing</h2>
            <Link href={'/promo'}>Promo (Layout sharing)</Link>
            <Link href={'/products'}>
                Products (Layout sharing, dynamic segments, suspense)
            </Link>
            <Link href={'/discounts'}>
                Discounts (Statically generated dynamic segments)
            </Link>

            <Link href={'/login'}>
                Login Modal (Parallel routing with modal)
            </Link>

            <br />
            <Link href={'/clients'}>Clients (Local error boundary)</Link>
            <Link href={'/dashboard'}>Dashboard (Parallel routing)</Link>
            <br />
            <br />
            <h2>Server & Client components</h2>

            <Link href={'/contacts'}>
                Contacts (Static route with Server - Client - Server components
                structure)
            </Link>

            <Link href={'/users'}>
                Posts (Dynamic route with Server - Client - Server components
                structure)
            </Link>
        </div>
    );
}
