<template>
    <div id="app">
        <div class="main">
            <modal-card
                :is-open="modalShow"
                :opened-item="openedItem"
                :user-score="score"
                @close="closeModal"
                @order="setScore"
            ></modal-card>
            <div class="container">
                <div class="main__wrapper">
                    <a href="/main_page.html" class="main__logo">
                        <img
                            src="@/assets/logo.svg"
                            alt="Логотип"
                            width="215"
                            height="35"
                        />
                    </a>
                    <div class="main__aside">
                        <navigation :nav-items="navItems"></navigation>
                    </div>
                    <header class="header">
                        <search @searchCard="searchCard"></search>
                        <user
                            @userInfo="setUser"
                            :user-data="{ name: this.name, score: this.score }"
                        ></user>
                    </header>
                    <div class="main__content">
                        <img
                            src="@/assets/banner.png"
                            alt="Летняя Распродажа"
                            class="main__banner"
                        />
                        <div class="main__points points">
                            <hot-key
                                v-for="item in hotKeys"
                                :key="item.desc"
                                :hotKey="item"
                            ></hot-key>
                        </div>
                        <div class="main__products products">
                            <div class="products__types">
                                <filter-categories
                                    v-for="filter in filters"
                                    :details="filter"
                                    @categorySelect="categorySelect"
                                ></filter-categories>
                            </div>
                            <div class="products__cards">
                                <card
                                    v-for="product in productsToRender"
                                    :product="product"
                                    @openProductModal="openModal"
                                ></card>
                                <span
                                    class="products__not-found"
                                    v-if="
                                        productsToRender.length ? false : true
                                    "
                                    >По вашему запросу ничего не
                                    найдено...</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-black></footer-black>
    </div>
</template>

<script>
import ModalCard from "@/components/Modal.vue";
import Search from "@/components/Search.vue";
import User from "@/components/User.vue";
import Navigation from "@/components/Navigation.vue";
import Card from "@/components/Card.vue";
import FooterBlack from "@/components/FooterBlack.vue";
import HotKey from "@/components/HotKey.vue";
import FilterCategories from "@/components/FilterCategories.vue";
import axios from "@/axios";

export default {
    name: "App",
    components: {
        ModalCard,
        Search,
        User,
        Navigation,
        Card,
        FooterBlack,
        HotKey,
        FilterCategories,
    },
    data() {
        return {
            clothes: [],
            accessories: [],
            backup: [],
            navItems: [
                { title: "Оргсхема", active: false },
                { title: "Kolesa Team", active: false },
                { title: "Kolesa Shop", active: true },
                { title: "Картина компании", active: false },
                { title: "Новости", active: false },
                { title: "Education", active: false },
                { title: "Guidelines", active: false },
                { title: "Библиотека", active: false },
                { title: "FAQ", active: false },
            ],
            hotKeys: [
                {
                    img: "/emoji_plus.png",
                    desc: "Получить баллы",
                    type: "get",
                },
                {
                    img: "/emoji_question.png",
                    desc: "Как получить баллы",
                    type: "howto",
                },
                {
                    img: "/emoji_gift.png",
                    desc: "Подарить баллы",
                    type: "gift",
                },
            ],
            filters: [
                {
                    key: "all",
                    desc: "Все товары",
                    checked: true,
                },
                {
                    key: "clothes",
                    desc: "Одежда",
                    checked: false,
                },
                {
                    key: "accessories",
                    desc: "Аксессуары",
                    checked: false,
                },
            ],
            score: 0,
            name: "",
            modalShow: false,
            categoryToRender: "all",
            openedItem: {
                img: "shirts/angry.jpg",
                id: 9999,
                price: 0,
                isNew: false,
                title: "",
                details: "",
            },
        };
    },
    computed: {
        all() {
            const all = this.clothes.concat(this.accessories);
            this.sortEachCategory([all, this.clothes, this.accessories]);
            return all;
        },
        productsToRender() {
            if (this.categoryToRender === "all") {
                return this.all;
            } else if (this.categoryToRender === "clothes") {
                return this.clothes;
            } else if (this.categoryToRender === "accessories") {
                return this.accessories;
            }
        },
    },
    mounted() {
        Promise.all([
            axios.get("templates/-_RLsEGjof6i/data"),
            axios.get("templates/q3OPxRyEcPvP/data"),
        ]).then((res) => {
            this.clothes = res[0].data;
            this.accessories = res[1].data;
            this.backup = {
                clothes: res[0].data,
                accessories: res[1].data,
            };
        });
    },
    methods: {
        sortEachCategory(allCategories) {
            allCategories.forEach((category) => {
                category.sort((a, b) =>
                    a.isNew === false && b.isNew === true ? 1 : -1
                );
            });
        },
        categorySelect(category) {
            if (category === "all") {
                this.categoryToRender = "all";
            } else if (category === "clothes") {
                this.categoryToRender = "clothes";
            } else if (category === "accessories") {
                this.categoryToRender = "accessories";
            }
        },
        openModal(item) {
            this.modalShow = true;
            this.openedItem = item;
        },
        closeModal() {
            this.modalShow = false;
        },
        setUser(user) {
            this.score = user.score;
            this.name = user.name;
        },
        setScore(cost) {
            this.score -= cost;
        },
        searchCard(title) {
            if (title) {
                this.clothes = this.clothes.filter((item) =>
                    item.title.includes(title)
                );
                this.accessories = this.accessories.filter((item) =>
                    item.title.includes(title)
                );
            } else {
                this.clothes = this.backup.clothes;
                this.accessories = this.backup.accessories;
            }
        },
    },
};
</script>

<style src="@/scss/styles.scss" lang="scss"></style>
