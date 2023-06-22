<template>
  <div class="bg-white rounded-md shadow-md overflow-hidden">
    <header class="p-4 border-b font-medium text-lg text-neutral-600">
      List of actions committed
    </header>
    <div class="p-4 text-center bg-neutral-100">
      <span v-if="!history.length" class="text-neutral-600"
        >No actions committed yet</span
      >
      <template v-else>
        <div class="border rounded-md overflow-hidden divide-y shadow">
          <PostHistoryListItem
            v-for="(item, index) in history"
            :item="item"
            @time-travel="rollbackToPostHistory(index)"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PostStateMutation } from "@/types/History";
import { rollbackToPostHistory } from "@/composables/useHistory";
const props = withDefaults(
  defineProps<{
    history: PostStateMutation[];
  }>(),
  {
    history: () => [],
  }
);
</script>
