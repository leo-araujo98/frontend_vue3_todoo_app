<template>
  <NavBar />

  <div class="bg-gray-900 flex flex-col w-screen h-screen">
    <div
      class="flex flex-col w-[80%] justify-center my-auto mx-auto bg-gray-700 gap-3 rounded-md overflow-auto p-3"
    >
      <RegisterTask />
      <Todoo />
    </div>
  </div>
</template>

<script setup>
import Todoo from "../components/Todoo.vue";
import NavBar from "../components/NavBar.vue";
import RegisterTask from "../components/RegisterTask.vue";
</script>