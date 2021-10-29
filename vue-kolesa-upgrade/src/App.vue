<template>
    <div id="app">
        <div class="main">
            <div class="container">
                <div class="main__wrapper">
                    <a href="/main_page.html" class="main__logo">
                        <img
                            src="./assets/logo.svg"
                            alt="Логотип"
                            width="215"
                            height="35"
                        />
                    </a>
                    <div class="main__aside">
                        <navigation :navItems="navItems"></navigation>
                    </div>
                    <header class="header">
                        <search @searchData="setSearchValue"></search>
                        <user></user>
                    </header>
                    <router-view />
                </div>
            </div>
        </div>
        <footer-black></footer-black>
    </div>
</template>

<script>
import FooterBlack from "@/layouts/components/FooterBlack.vue";
import Navigation from "@/layouts/components/Navigation.vue";
import Search from "@/layouts/components/Search.vue";
import User from "@/layouts/components/User.vue";
import { mapState } from "vuex";

export default {
    name: "App",
    data() {
        return {
            navItems: [
                { title: "Оргсхема", url: "/", exact: true },
                { title: "Kolesa Team", url: "/about", exact: false },
                { title: "Kolesa Shop", url: "/shop", exact: false },
                { title: "Картина компании", url: "/view", exact: false },
                { title: "Новости", url: "/news", exact: false },
                { title: "Education", url: "/education", exact: false },
                { title: "Guidelines", url: "/guidelines", exact: false },
                { title: "Библиотека", url: "/library", exact: false },
                { title: "FAQ", url: "/faq", exact: false },
            ],
            searchValue: "",
        };
    },
    computed: mapState({
        userData: "userData",
    }),
    components: {
        FooterBlack,
        Navigation,
        Search,
        User,
    },

    methods: {
        setSearchValue(searchValue) {
            this.$store.commit("setSearchValue", searchValue);
        },
    },
};
</script>

<style src="./scss/styles.scss" lang="scss"></style>
