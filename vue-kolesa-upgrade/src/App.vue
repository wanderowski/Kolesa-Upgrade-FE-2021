<template>
    <div id="app">
        <div class="main">
            <modal
                :openedItem="openedItem"
                :isOpen="modalShow"
                :user-score="score"
                @close="closeModal"
                @order="setOrder"
            ></modal>
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
                    <div class="main__content">
                        <img
                            src="./assets/banner.png"
                            alt="Летняя Распродажа"
                            class="main__banner"
                        />
                        <div class="main__points points">
                            <hot-key
                                v-for="(hotKey, index) in hotKeys"
                                :hot-key="hotKey"
                                :key="index"
                            ></hot-key>
                        </div>
                        <div class="main__products products">
                            <div class="products__types">
                                <filter-categories
                                    v-for="(filter, index) in filters"
                                    :details="filter"
                                    :key="index"
                                    @categorySelect="categorySelect"
                                />
                            </div>
                            <div class="products__cards">
                                <card
                                    v-for="product in productsToRender"
                                    :key="product.id"
                                    :product="product"
                                    @openProductModal="openModal"
                                />
                                <span
                                    class="products__not-found"
                                    v-if="!productsToRender.length"
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
import Card from "@/components/Card.vue";
import FilterCategories from "@/components/FilterCategories.vue";
import FooterBlack from "@/components/FooterBlack.vue";
import HotKey from "@/components/HotKey.vue";
import Modal from "@/components/Modal.vue";
import Navigation from "@/components/Navigation.vue";
import Search from "@/components/Search.vue";
import User from "@/components/User.vue";
import axios from "./axios";

export default {
    name: "App",
    data() {
        return {
            clothes: [],
            accessories: [],
            hotKeys: [
                {
                    type: "get",
                    img: "/emoji_plus.png",
                    desc: "Получить баллы",
                },
                {
                    type: "howto",
                    img: "/emoji_question.png",
                    desc: "Как получить баллы",
                },
                {
                    type: "dift",
                    img: "/emoji_gift.png",
                    desc: "Подарить баллы",
                },
            ],
            filters: [
                {
                    key: "all",
                    checked: true,
                    desc: "Все товары",
                },
                {
                    key: "clothes",
                    checked: false,
                    desc: "Одежда",
                },
                {
                    key: "accessories",
                    checked: false,
                    desc: "Аксессуары",
                },
            ],
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
            modalShow: false,
            categoryToRender: "all",
            openedItem: {},
            backup: {},
            username: "",
            score: 0,
            searchValue: "",
        };
    },
    components: {
        Card,
        FilterCategories,
        FooterBlack,
        HotKey,
        Modal,
        Navigation,
        Search,
        User,
    },

    computed: {
        all() {
            const all = this.clearClothesData.concat(this.clearAccessoriesData);
            this.sortEachCategory([
                all,
                this.clearClothesData,
                this.clearAccessoriesData,
            ]);
            return all;
        },
        productsToRender() {
            if (this.categoryToRender === "all") {
                return this.all;
            } else if (this.categoryToRender === "clothes") {
                return this.clearClothesData;
            } else if (this.categoryToRender === "accessories") {
                return this.clearAccessoriesData;
            }
        },
        clearClothesData() {
            let clearData = [];

            if (this.searchValue !== "") {
                clearData = this.clothes.filter((item) =>
                    item.title.includes(this.searchValue)
                );
            } else {
                clearData = this.clothes;
            }

            return clearData;
        },
        clearAccessoriesData() {
            let clearData = [];

            if (this.searchValue !== "") {
                clearData = this.accessories.filter((item) =>
                    item.title.includes(this.searchValue)
                );
            } else {
                clearData = this.accessories;
            }

            return clearData;
        },
    },
    methods: {
        sortEachCategory(allCategories) {
            allCategories.forEach((category) => {
                category.sort((a, b) =>
                    a.isNew === false && b.isNew === true ? 1 : -1
                );
            });
        },
        closeModal() {
            this.modalShow = false;
        },
        openModal(product) {
            this.modalShow = true;
            this.openedItem = product;
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
        // restoreItems() {
        //     this.clothes = this.backup.clothes;
        //     this.accessories = this.backup.accessories;
        // },
        setSearchValue(searchValue) {
            // this.restoreItems();
            // if (searchValue) {
            //     this.clothes = this.clothes.filter((item) =>
            //         item.title.includes(searchValue)
            //     );
            //     this.accessories = this.accessories.filter((item) =>
            //         item.title.includes(searchValue)
            //     );
            // }
            this.searchValue = searchValue;
        },
        setUser(user) {
            this.username = user.name;
            this.score = user.score;
        },
        setOrder(cost) {
            this.score -= cost;
            alert("Заказ оформлен");
        },
    },
    created() {
        Promise.all([
            axios.get("templates/-_RLsEGjof6i/data"),
            axios.get("templates/q3OPxRyEcPvP/data"),
        ]).then((response) => {
            this.clothes = response[0].data;
            this.accessories = response[1].data;
            // this.backup = {
            //     clothes: this.clothes,
            //     accessories: this.accessories,
            // };
        });
    },
};
</script>

<style src="./scss/styles.scss" lang="scss"></style>
