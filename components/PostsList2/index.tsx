import styles from './styles.module.scss';
import { Posts2DeleteButton } from '@/components/Posts2DeleteButton';
import { Post } from '@/app/api/posts/fakePosts';

export async function getPosts(): Promise<Post[]> {
    const res = await fetch('http://localhost:3000/api/posts2', {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        cache: 'no-store',
        next: {
            tags: ['posts'],
        },
    });

    console.log('THIS', res);

    return res.json();
}

async function PostsList2() {
    const posts = await getPosts();

    return (
        <div className={styles.root}>
            {posts?.map((post) => (
                <article key={post.id} className={styles.article}>
                    <div>
                        <header className={styles.header}>{post.name} </header>
                        <p>{post.text}</p>
                    </div>
                    <Posts2DeleteButton
                        postId={post.id}
                        className={styles.deleteButton}
                    />
                </article>
            ))}
        </div>
    );
}

export default PostsList2;
