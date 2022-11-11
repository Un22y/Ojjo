import main from "@/pages/main"
import productPage from "@/pages/productPage"
import catalog from "@/pages/catalog"
import contacts from "@/pages/contacts"
import { createRouter, createWebHistory } from "vue-router"


const routes = [
    {
        path: '/',
        component: main,
    },
    {
        path: '/catalog/:id',
        component: productPage,
    },
    {
        path: '/catalog',
        component: catalog,
    },
    {
        path: '/contacts',
        component: contacts,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;