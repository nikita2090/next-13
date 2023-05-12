import Link from 'next/link';

export default function Views() {
    return (
        <ul>
            <li>
                <Link href={'/dashboard/impressions'}>Impressions</Link>
            </li>
            <li>
                <Link href={'/dashboard/duration'}>Duration</Link>
            </li>
        </ul>
    );
}
