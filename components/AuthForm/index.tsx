'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

import githubImg from '../../public/github.svg';
import googleImg from '../../public/google.svg';

import styles from './styles.module.scss';
import Image from 'next/image';
import { Field } from '@/components/Field';
import { Button } from '@/components/Button';

interface AuthFormProps {
    authProviders: {
        id: string;
        name: string;
        type: string;
        signinUrl: string;
        callbackUrl: string;
    }[];
}

const buttonImgs: {
    [key: string]: string;
} = {
    github: githubImg,
    google: googleImg,
};

export const AuthForm: React.FC<AuthFormProps> = ({ authProviders }) => {
    const [login, setLogin] = useState('');
    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    };

    const [password, setPassword] = useState('');
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await signIn('credentials', {
            login,
            password,
            redirect: true,
            callbackUrl: '/',
        });
    };

    return (
        <div className={styles.root}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Field
                    name={'login'}
                    value={login}
                    onChange={handleLoginChange}
                    placeholder={'Login'}
                    className={styles.field}
                />

                <Field
                    name={'password'}
                    type={'password'}
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder={'Password'}
                    className={styles.field}
                />

                <Button className={styles.sendBtn}>Send</Button>
            </form>

            <div className={styles.oauth}>
                {authProviders.map((provider) => (
                    <button
                        key={provider.id}
                        onClick={() => {
                            void signIn(provider.id, { callbackUrl: '/' });
                        }}
                        className={styles.oauthButton}
                    >
                        {buttonImgs[provider.id] && (
                            <Image
                                src={buttonImgs[provider?.id]}
                                alt={provider.name}
                                width={15}
                                height={15}
                            />
                        )}
                        {provider.name}
                    </button>
                ))}
            </div>
        </div>
    );
};
