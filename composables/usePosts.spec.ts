import { describe, it, expect, vi } from 'vitest'
import { updatePosition } from './usePosts';

const postsState = {
    value: [
        { userId: 1, id: 1, title: 'post 1', body: 'body 1' },
        { userId: 2, id: 2, title: 'post 2', body: 'body 2' },
        { userId: 3, id: 3, title: 'post 3', body: 'body 3' }
    ]
};
vi.stubGlobal('useState', () => postsState)

describe('usePosts', () => {
    it('Correctly swaps posts', () => {

        const currentIndex = 0;
        const newIndex = 2;
        const expectedPostsState = [
            { userId: 3, id: 3, title: 'post 3', body: 'body 3' },
            { userId: 2, id: 2, title: 'post 2', body: 'body 2' },
            { userId: 1, id: 1, title: 'post 1', body: 'body 1' }
        ];

        updatePosition(currentIndex, newIndex);
        expect(postsState.value).toEqual(expectedPostsState);
    });
})