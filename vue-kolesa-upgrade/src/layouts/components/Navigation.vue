<template>
    <nav class="nav">
        <router-link
            :to="item.url"
            v-for="(item, index) in navItems"
            class="nav__item"
            :exact="item.exact"
            active-class="nav__item-active"
            :key="index"
        >
            {{ item.title }}
        </router-link>
    </nav>
</template>

<script>
export default {
    name: "Navigation",
    props: {
        navItems: Array,
    },
};
</script>
