import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export function withServerAuth(
    Component: () => JSX.Element | Promise<JSX.Element>
) {
    return async function WithServerAuthWrap(props: any) {
        const session = await getServerSession();

        if (!session) {
            redirect(authOptions?.pages?.signIn || '/');
        }

        // eslint-disable-next-line
        // @ts-ignore
        return <Component {...props} />;
    };
}
