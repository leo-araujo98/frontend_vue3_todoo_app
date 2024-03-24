<template>
  <div class="justify-center flex z-90 items-center my-auto z-20">
    <ModalEdit @close="showEdit" v-if="modalEdit">
      <div class="flex flex-col gap-2">
        <input
          v-model="EditValue"
          type="text"
          class="p-2"
          placeholder="Nome da task"
        />
        <button
          @click="todooStore.detele_tasks(index.id, body)"
          class="bg-blue-500"
        >
          Salvar
        </button>
      </div>
    </ModalEdit>
  </div>

  <div class="relative rounded-md z-10">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Tarefa</th>
          <th scope="col" class="px-6 py-3">Criada em</th>
          <th scope="col" class="px-6 py-3">Status</th>
          <th scope="col" class="px-6 py-3">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="index in todooStore.tasks_date"
          :key="index"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ index.title }}
          </th>
          <td class="px-6 py-4">{{ index.created_at }}</td>
          <td class="px-6 py-4">{{ index.status }}</td>
          <td class="px-6 py-4 flex gap-1">
            <Actions
              @delete-task="todooStore.detele_tasks(index.id)"
              @edit-task="showEdit, taskId"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useTodooStore } from "../stores/todooStore";
import Actions from "./Actions.vue";
import ModalEdit from "./ModalEdit.vue";

const taskId = ref();
const EditValue = ref("");

const edit_task = ref({
  title: EditValue,
});

const todooStore = useTodooStore();

const modalEdit = ref(false);

const showEdit = () => {
  modalEdit.value = !modalEdit.value;
};

onMounted(() => {
  todooStore.get_tasks();
});
</script>
