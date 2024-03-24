
import { defineStore } from "pinia";
import { ref } from 'vue'
import axios from "axios";

export const useTodooStore = defineStore({
    id: "todoo",
    state: () => ({
        back_url: 'http://localhost:3333/task',
        tasks_date: ref([]),
        body: ref()
    }),

    actions: {
        async get_tasks() {
            const response = await axios.get(this.back_url);
            this.tasks_date = response.data
            console.log(this.tasks_date)
        },

        async add_tasks(task) {
            this.body = task
            const response = await axios.post(this.back_url, this.body);
            this.get_tasks()

        },
        async edit_tasks(task, body) {
            console.log(task)
            console.log(body)

        },
        async detele_tasks(task) {
            this.body = task
            const response = await axios.delete(`${this.back_url}/${task}`);
            this.get_tasks()

        }
    },
});
