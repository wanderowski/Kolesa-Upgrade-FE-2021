<template>
    <form class="header__search search" @submit="noReloading">
        <button class="search__icon" aria-label="Поиск"></button>
        <input
            type="search"
            class="search__field"
            placeholder="Поиск"
            v-model="search"
            @change="searchCard"
        />
    </form>
</template>

<script>
export default {
    name: "Search",
    data() {
        return {
            search: "",
        };
    },
    methods: {
        searchCard() {
            this.$emit("searchCard", this.search);
        },
        noReloading(e) {
            e.preventDefault();
        },
    },
};
</script>
