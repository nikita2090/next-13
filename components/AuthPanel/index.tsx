'use client';

import { signIn, useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

import styles from './styles.module.scss';

export default function AuthPanel() {
    const { data: session } = useSession();
    const isAuthorized = Boolean(session?.user);
    const avatarPath = session?.user?.image as string;

    const pathname = usePathname();

    const Controls = () => {
        if (pathname === authOptions.pages?.signIn) {
            return null;
        }
        return isAuthorized ? (
            <div className={styles.signInControls}>
                <button
                    onClick={() => {
                        void signOut();
                    }}
                >
                    Sign out
                </button>
                <Image
                    src={avatarPath}
                    alt={'avatar'}
                    width={50}
                    height={50}
                    className={styles.avatar}
                />
            </div>
        ) : (
            <div className={styles.signInControls}>
                <button
                    onClick={() => {
                        void signIn();
                    }}
                >
                    Sign in
                </button>
            </div>
        );
    };

    return (
        <div className={styles.root}>
            <div className={styles.panel}>
                <Link className={styles.logo} href={'/'}>
                    NEXT13 TEST APP
                </Link>

                <Controls />
            </div>
        </div>
    );
}
