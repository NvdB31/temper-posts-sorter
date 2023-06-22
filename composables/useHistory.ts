import { PostStateMutation } from "~/types/History";
import { updatePosition } from "./usePosts";

export default () => {
    const historyState = useState('postsHistory', () => [] as PostStateMutation[]);
    return historyState
}

export const updatePostHistory = (postId: number, oldIndex: number, newIndex: number): void => {
    const historyState = useState('postsHistory') as Ref<PostStateMutation[]>;
    const postStateMutation: PostStateMutation = {
        postId,
        oldIndex,
        newIndex
    }
    historyState.value.unshift(postStateMutation)
}

/**
 * Rolls back the post order to a specific index in the post history state,
 * undoing the mutations and updating the post positions accordingly.
 *
 * @param {number} index - The index to rollback to in the post history state.
 * @returns {void}
 */
export const rollbackToPostHistory = (index: number) => {
    const historyState = useState('postsHistory') as Ref<PostStateMutation[]>;
    const mutationsToUndo = historyState.value.slice(0, index + 1)

    mutationsToUndo.forEach((mutation) => {
        updatePosition(mutation.newIndex, mutation.oldIndex)
    })

    historyState.value.splice(0, index + 1)
}