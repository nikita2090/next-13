import { AuthForm } from '@/components/AuthForm';
import styles from './styles.module.scss';
import { getProviders } from 'next-auth/react';

export default async function SignIn() {
    const providers = await getProviders();
    // @ts-ignore
    const OAuthProviders = Object.values(providers).filter(
        (provider) => provider.id !== 'credentials'
    );
    console.log('providers', OAuthProviders);
    return (
        <div className={styles.root}>
            <h2 className={styles.title}>Sign In</h2>
            <AuthForm authProviders={OAuthProviders} />
        </div>
    );
}
