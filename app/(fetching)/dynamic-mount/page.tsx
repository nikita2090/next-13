import DynamicMountChild from '@/components/DynamicMountChild';

export default async function DynamicMount() {
    return (
        <section>
            <h2>Fetch on child component mount</h2>
            <p>Fetches data on every mount from client component</p>
            <DynamicMountChild />
        </section>
    );
}
