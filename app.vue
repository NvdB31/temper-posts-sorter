<template>
  <main>
    <AppSection class="bg-section bg-no-repeat bg-top-left">
      <AppContainer>
        <div class="grid sm:grid-cols-2 gap-8 sm:gap-16 md:gap-32 items-start">
          <div>
            <h1 class="text-white mb-8 font-medium text-2xl">
              Sortable Post List
            </h1>
            <PostList :posts="posts" @update="handleUpdate" />
          </div>
          <PostHistoryList :history="postsHistory" />
        </div>
      </AppContainer>
    </AppSection>
  </main>
</template>

<script setup lang="ts">
import { updatePosition } from "@/composables/usePosts";
import { updatePostHistory } from "@/composables/useHistory";

useHead({
  title: "Sortable Post List",
  script: [
    {
      src: "https://kit.fontawesome.com/6d2b7e1919.js",
      body: true,
    },
  ],
});

const posts: Ref = await usePosts();
const postsHistory: Ref = useHistory();

const handleUpdate = (oldIndex: number, newIndex: number) => {
  const updatedPost = updatePosition(oldIndex, newIndex);
  updatePostHistory(updatedPost.id, oldIndex, newIndex);
};
</script>
