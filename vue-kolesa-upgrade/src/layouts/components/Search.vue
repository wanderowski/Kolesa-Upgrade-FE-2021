<template>
    <form class="header__search search" @submit="noReloading">
        <button class="search__icon" aria-label="Поиск"></button>
        <input
            type="search"
            class="search__field"
            placeholder="Поиск"
            v-model="searchValue"
            @change="searchData"
        />
    </form>
</template>

<script>
export default {
    name: "Search",
    data() {
        return {
            searchValue: "",
        };
    },
    methods: {
        searchData() {
            this.$emit("searchData", this.searchValue);
        },
        noReloading(e) {
            e.preventDefault();
        },
    },
};
</script>
