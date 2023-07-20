import NextAuth, { AuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                login: {
                    label: 'login',
                    type: 'text',
                },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credentials) {
                const user = {
                    email: 'some@email.com',
                    name: 'Nikita Test',
                    id: '1',
                };

                // If no error and we have user data, return it
                if (
                    credentials?.login === 'Nikita' &&
                    credentials?.password === 'test'
                ) {
                    return user;
                }
                // Return null if user data could not be retrieved
                return null;
            },
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || '',
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || '',
            clientSecret: process.env.GOOGLE_SECRET || '',
        }),
    ],
    callbacks: {
        async jwt({ token }) {
            // Persist the OAuth access_token to the token right after signin
            return token;
        },
        async session({ session }) {
            // console.log('SESSION', session);
            // Send properties to the client, like an access_token from a provider.
            return session;
        },
    },
    pages: {
        signIn: '/signin',
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
