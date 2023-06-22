<template>
  <li
    class="bg-white rounded-md shadow-md p-4 flex justify-between gap-8 cursor-grab active:cursor-grabbing h-20 items-center"
  >
    <h3 class="text-neutral-600">
      {{ title }}
    </h3>
    <div class="flex flex-col justify-center text-primary h-full">
      <button
        aria-label="Move up"
        class="hover:text-primary/50 p-1"
        @click="emit('move-up')"
        v-if="index > 0"
      >
        <i class="fa-solid fa-angle-up"></i>
      </button>
      <button
        aria-label="Move down"
        class="hover:text-primary/50 p-1"
        @click="emit('move-down')"
        v-if="index < 4"
      >
        <i class="fa-solid fa-angle-down"></i>
      </button>
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  index: number;
}>();

const emit = defineEmits<{
  (e: "move-up"): void;
  (e: "move-down"): void;
}>();
</script>
