import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Donate from '../views/Donate.vue'
import Contact from '../views/Contact.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/tentang', component: About},
    {path: '/donasi', component: Donate},
    {path: '/kontak', component: Contact}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router