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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
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

router.beforeEach((to, from, next) => {
    const loader = document.querySelector(".loader");

    if (loader) {
        loader.style.display = "flex";
    }
    next();
});

router.afterEach(() => {
    const loader = document.querySelector(".loader");

    if (loader) {
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});

export default router;
