import { DISCOUNTS } from '@/app/(routing)/(shop)/discounts/page';

interface DiscountProps {
    params: {
        discount: string;
    };
}

export function generateStaticParams() {
    return DISCOUNTS.map((discount) => ({
        discountId: discount.id,
    }));
}

export default async function Discount({ params }: DiscountProps) {
    const currentDiscount = DISCOUNTS.find(
        (item) => String(item.id) === params.discount
    );
    return (
        <div>
            <h2>Product #{params.discount}</h2>
            <p>Page with statically generated dynamic segment</p>
            <p>Page with statically generated dynamic segment</p>
            <p>Page with statically generated dynamic segment</p>
            <p>Page with statically generated dynamic segment</p>
            <p>Page with statically generated dynamic segment</p>
            <p>Page with statically generated dynamic segment</p>
            <p>Page with statically generated dynamic segment</p>
            <p>Page with statically generated dynamic segment</p>
            <p>Page with statically generated dynamic segment</p>
            <p>Page with statically generated dynamic segment</p>
            <p>Page with statically generated dynamic segment</p>
            <p>Page with statically generated dynamic segment</p>

            {currentDiscount?.name}
        </div>
    );
}
