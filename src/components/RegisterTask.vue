<template>
  <div class="text-white flex gap-2">
    <input
      @keydown.enter="todooStore.add_tasks(new_task), (body = '')"
      type="text"
      name=""
      v-model="body"
      class="w-full p-2 rounded-md appearance-none outline-none text-black"
    />

    <button
      @click="todooStore.add_tasks(new_task), (body = '')"
      class="w-[20%] bg-blue-500 rounded-md"
    >
      +
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodooStore } from "../stores/todooStore";
const todooStore = useTodooStore();
const body = ref("");

const new_task = ref({
  title: body,
});
</script>
