<template>
  <div class="p-4 flex items-center justify-between bg-white">
    Moved post {{ item.postId }} from index {{ item.oldIndex }} to index
    {{ item.newIndex }}
    <button
      @click="$emit('time-travel')"
      class="bg-secondary hover:bg-secondary/70 transition-shadow text-green-900 px-3 py-2 font-medium rounded"
    >
      Time Travel
    </button>
  </div>
</template>

<script setup lang="ts">
import { PostStateMutation } from "@/types/History";
defineProps<{
  item: PostStateMutation;
}>();

defineEmits(["time-travel"]);
</script>
