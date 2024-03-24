<template>
<div>
  
</div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const openModal = () => {
  isOpen.value = !isOpen.value;
};
</script>
