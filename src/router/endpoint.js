import { createRouter, createWebHistory } from "vue-router"

const endpoint = createRouter({
    history: createWebHistory(), 
    routes: [
        {
            path: "/", 
            name: "main",
            component: () => import("../components/Videos.vue") 
        }, 
        {
            path: "/login", 
            name: "login", 
            component: () => import("../components/Login.vue")
        }, 
        {
            path: "/register", 
            name: "register", 
            component: () => import("../components/Register.vue")
        }, 
        {
            path: "/videos/detail//:orderId(\\d+)", 
            name: "VideoDetail", 
            component: () => import("../components/VideoDetail.vue")
        }, 
        {
            path: "/:pathMatch(.*)*", 
            name: "NotFound", 
            component: () => import("../components/NotFound.vue")
        }
    ]
})

export default endpoint
