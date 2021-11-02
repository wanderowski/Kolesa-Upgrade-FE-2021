import Home from "../views/Home.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/shop",
        name: "Shop",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Shop/Shop.vue"),
    },
    {
        path: "/shop/howto",
        name: "How to get points",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/HowTo/HowTo.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
