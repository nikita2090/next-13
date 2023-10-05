'use client';

import { useRouter } from 'next/navigation';

import styles from './page.module.css';

interface DemographicsProps {
    params: {
        id: string;
    };
}

export default function Demographics({ params }: DemographicsProps) {
    const router = useRouter();
    return (
        <div className={styles.root}>
            <div className={styles.modal}>
                <h4>Demographics</h4>
                <p>Demographics content</p>

                <h5>Product #{params.id}</h5>

                <button
                    className={styles.closeBtn}
                    onClick={() => router.back()}
                >
                    X
                </button>
            </div>
        </div>
    );
}
