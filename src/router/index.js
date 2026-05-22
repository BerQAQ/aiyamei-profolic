import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Works from '../views/Works.vue'
import Skills from '../views/Skills.vue'
import Contact from '../views/Contact.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/works', name: 'works', component: Works },
    { path: '/skills', name: 'skills', component: Skills },
    { path: '/contact', name: 'contact', component: Contact },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

export default router
