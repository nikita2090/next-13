import { PostsList } from '@/components/PostsList';
import { NewPost } from '@/components/NewPost';

import styles from './styles.module.scss';
import { withServerAuth } from '@/utils/withServerAuth';

function Posts() {
    return (
        <section>
            <h3 className={styles.title}>New post:</h3>
            <NewPost />

            <h3 className={styles.title}>Posts</h3>
            <PostsList />
        </section>
    );
}

export default withServerAuth(Posts);
