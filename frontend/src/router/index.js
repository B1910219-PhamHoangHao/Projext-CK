import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/view/ContactBook.vue";
import ContactBookAdmin from "@/view/ContactBookAdmin.vue";
const routes = [{
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () =>
            import ("@/view/NotFound.vue"),
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () =>
            import ("@/view/ContactEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: '/contacts/add',
        name: 'contact.add',
        component: () =>
            import ("@/view/ContactAdd.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import ("@/view/Login.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import ("@/view/Register.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import ("@/view/About.vue"),
    },
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
    {
        path: "/admin",
        name: "contactbookadmin",
        component: ContactBookAdmin,
    },
];
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});
export default router;