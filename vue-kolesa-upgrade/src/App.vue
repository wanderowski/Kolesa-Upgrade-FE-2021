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
                        <user
                            :localData="{ name: username, score: score }"
                            @userInfo="setUser"
                        ></user>
                    </header>
                    <router-view
                        :score="score"
                        :setOrder="setOrder"
                        :searchValue="searchValue"
                    />
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

            username: "",
            score: 0,
            searchValue: "",
        };
    },
    components: {
        FooterBlack,
        Navigation,
        Search,
        User,
    },

    methods: {
        setSearchValue(searchValue) {
            this.searchValue = searchValue;
        },
        setUser(user) {
            this.username = user.name;
            this.score = user.score;
        },
        setOrder(cost) {
            this.score -= cost;
            alert("Заказ оформлен!");
        },
    },
};
</script>

<style src="./scss/styles.scss" lang="scss"></style>
