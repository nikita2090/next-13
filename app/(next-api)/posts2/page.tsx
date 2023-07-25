import { NewPost } from '@/components/NewPost';

import styles from './styles.module.scss';
// import PostsList2 from '@/components/PostsList2';

export default function Posts2() {
    return (
        <section>
            <div>POSTS-2</div>

            <h3 className={styles.title}>New post:</h3>
            <NewPost />

            <h3 className={styles.title}>Posts</h3>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/*@ts-ignore*/}
            {/* <PostsList2 /> */}
        </section>
    );
}
