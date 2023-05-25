import { AuthForm } from '@/components/AuthForm';
import styles from './styles.module.scss';
import { getProviders } from 'next-auth/react';

export default async function SignIn() {
    const providers = await getProviders();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const OAuthProviders = Object.values(providers).filter(
        (provider) => provider.id !== 'credentials'
    );

    return (
        <div className={styles.root}>
            <h2 className={styles.title}>Sign In</h2>
            <AuthForm authProviders={OAuthProviders} />
        </div>
    );
}
