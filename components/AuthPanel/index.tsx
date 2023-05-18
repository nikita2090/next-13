'use client';

import { signIn, useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

import styles from './styles.module.scss';

export default function AuthPanel() {
    const { data: session } = useSession();
    const isAuthorized = Boolean(session?.user);
    const avatarPath = session?.user?.image as string;

    return (
        <div className={styles.root}>
            <div className={styles.panel}>
                <div className={styles.logo}>NEXT13 TEST APP</div>
                {isAuthorized ? (
                    <div className={styles.signInControls}>
                        <button
                            onClick={() => {
                                void signOut();
                            }}
                        >
                            Sign out
                        </button>
                        <img
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
                )}
            </div>
        </div>
    );
}
