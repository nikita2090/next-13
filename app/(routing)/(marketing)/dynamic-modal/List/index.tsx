import Link from 'next/link';

export default function List() {
    return (
        <ul>
            <li>
                <Link href={'/dynamic-modal/1'}>one</Link>
            </li>
            <li>
                <Link href={'/dynamic-modal/2'}>two</Link>
            </li>
            <li>
                <Link href={'/dynamic-modal/3'}>three</Link>
            </li>
        </ul>
    );
}
