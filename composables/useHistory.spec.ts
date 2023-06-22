import { describe, it, expect, vi } from 'vitest'
import { updatePosition } from './usePosts';
import { rollbackToPostHistory } from './useHistory';

const historyState = {
    value: [
        { postId: 1, oldIndex: 0, newIndex: 2 },
        { postId: 2, oldIndex: 1, newIndex: 0 }
    ]
}
vi.stubGlobal('useState', () => historyState)
vi.mock('./usePosts', () => ({
    updatePosition: vi.fn()
}))

describe('useHistory', () => {
    it('Correctly calls updatePosition to undo past mutations', () => {
        const mutations = [
            { postId: 1, oldIndex: 0, newIndex: 1 },
            { postId: 2, oldIndex: 1, newIndex: 0 }
        ];
        rollbackToPostHistory(1);
        expect(updatePosition).toHaveBeenCalledWith(mutations[1].newIndex, mutations[1].oldIndex);
        expect(updatePosition).toHaveBeenCalledTimes(2)
        expect(historyState.value).toEqual([]);
    });
})