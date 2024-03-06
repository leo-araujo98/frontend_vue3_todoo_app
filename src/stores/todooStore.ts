
import { defineStore } from "pinia";
import { ref } from 'vue'
import axios from "axios";

export const useTodooStore = defineStore({
    id: "todoo",
    state: () => ({
        tasks_date: ref([])
    }),

    actions: {
        async get_tasks() {
            const response = await axios.get('http://localhost:3333/task');
            this.tasks_date = response.data
            console.log(this.tasks_date)
        }
    },
});
