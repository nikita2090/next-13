import Link from 'next/link';

const PRODUCTS = [
    {
        id: 1,
        name: 'Mug',
    },
    {
        id: 2,
        name: 'T-shirt',
    },
];

export default function Products() {
    return (
        <div>
            <h2>Products</h2>
            <p>Products & Promo have same layout</p>
            <br />
            {PRODUCTS.map((item) => (
                <li key={item.id}>
                    <Link href={`/products/${item.id}`} prefetch={false}>
                        {item.name}
                    </Link>
                </li>
            ))}
            <br />
            <div>
                <Link href={`/products/special-offer`}>Special offer!</Link>
            </div>
        </div>
    );
}
