<template>
    <router-link
        :to="'/shop' + hotKey.url"
        class="points__box"
        :class="
            hotKey.type === 'get'
                ? 'points__get'
                : hotKey.type === 'howto'
                ? 'points__howto'
                : 'points__gift'
        "
    >
        <img
            :src="require('@/assets' + hotKey.img)"
            :alt="hotKey.desc"
            class="points__emoji"
            width="48"
        />
        <span class="points__desc">{{ hotKey.desc }} </span>
    </router-link>
</template>

<script>
export default {
    name: "HotKey",
    props: {
        hotKey: Object,
    },
};
</script>
