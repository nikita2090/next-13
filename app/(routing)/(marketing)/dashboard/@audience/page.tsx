import Link from 'next/link';

export default function Audience() {
    return (
        <ul>
            <li>
                <Link href={'/dashboard/subscribers'}>Subscribers</Link>
            </li>
            <li>
                <Link href={'/dashboard/demographics'}>Demographics</Link>
            </li>
        </ul>
    );
}
