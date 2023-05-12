import Link from 'next/link';

export const DISCOUNTS = [
    {
        name: 'First Purchase',
        id: 1,
    },
    {
        name: 'Birthday',
        id: 2,
    },
    {
        name: '50% FOR 2',
        id: 3,
    },
];

export default function Discounts() {
    return (
        <div>
            <h2>Discounts</h2>
            <p>Statically generated dynamic routes</p>
            <br />
            {DISCOUNTS.map((item) => (
                <li key={item.id}>
                    <Link href={`/discounts/${item.id}`}>{item.name}</Link>
                </li>
            ))}
            <br />
        </div>
    );
}
