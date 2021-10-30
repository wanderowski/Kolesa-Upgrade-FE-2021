<template>
    <nav class="nav">
        <a
            v-for="(item, index) in navItems"
            class="nav__item"
            :class="{ 'nav__item-active': item.active }"
            :key="index"
        >
            {{ item.title }}
        </a>
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
