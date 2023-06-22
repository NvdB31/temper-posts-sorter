import { Post } from '~/types/Posts';

export default async () => {
    const postsState = useState('posts', () => [] as Post[]);
    const { data: posts } = await useAsyncData<Post[]>("posts", () => {
        return $fetch('https://jsonplaceholder.typicode.com/posts');
    });
    postsState.value = posts.value as Post[]

    return posts
};

/**
 * Updates the position of posts in the global state by swapping their indices.
 *
 * @param {number} currentIndex - The current index of the post to be moved.
 * @param {number} newIndex - The new index where the post should be moved to.
 * @returns {Post} - The post that was moved.
 */
export const updatePosition = (currentIndex: number, newIndex: number): Post => {
    const postsState: Ref<Post[]> = useState('posts');
    const postAtCurrentIndex = { ...postsState.value[currentIndex] };
    const postAtNewIndex = { ...postsState.value[newIndex] };

    postsState.value[newIndex] = postAtCurrentIndex
    postsState.value[currentIndex] = postAtNewIndex

    return postAtCurrentIndex
}