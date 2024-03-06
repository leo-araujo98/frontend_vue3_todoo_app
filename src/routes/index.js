import { createRouter, createWebHistory } from 'vue-router'
import home from "../views/home.vue"
// import about from "../views/about.vue"

const routes = [
    { path: '/', component: home, name: "home" },
    // { path: '/sobre', component: () => import('../views/about.vue'), name: "sobre" }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;