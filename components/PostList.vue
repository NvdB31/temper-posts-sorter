<template>
  <draggable
    :model-value="postList"
    animation="150"
    group="posts"
    item-key="id"
    class="flex gap-4 flex-col"
    tag="ul"
    @update="($event) => emit('update', $event.oldIndex, $event.newIndex)"
  >
    <template #item="{ element, index }">
      <PostListItem
        :index="index"
        :title="`Post ${element.id}`"
        @move-up="($event) => emit('update', index, index - 1)"
        @move-down="($event) => emit('update', index, index + 1)"
      />
    </template>
  </draggable>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import { Post } from "@/types/Post";

const props = withDefaults(
  defineProps<{
    posts: Post[];
  }>(),
  {
    posts: () => [],
  }
);
const postList = computed(() => props.posts.slice(0, 5));

const emit = defineEmits(["update"]);
</script>
