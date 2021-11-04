<template>
    <div class="main__content">
        <modal
            :openedItem="openedItem"
            :isOpen="modalShow"
            @close="closeModal"
            @order="setOrder"
        ></modal>
        <img
            src="@/assets/banner.png"
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
                    >По вашему запросу ничего не найдено...</span
                >
            </div>
        </div>
    </div>
</template>

<script>
import Card from "./components/Card.vue";
import FilterCategories from "./components/FilterCategories.vue";
import HotKey from "./components/HotKey.vue";
import Modal from "./components/Modal.vue";
import { mapState } from "vuex";
export default {
    data() {
        return {
            hotKeys: [
                {
                    url: "/get",
                    type: "get",
                    img: "/emoji_plus.png",
                    desc: "Получить баллы",
                },
                {
                    url: "/howto",
                    type: "howto",
                    img: "/emoji_question.png",
                    desc: "Как получить баллы",
                },
                {
                    url: "/gift",
                    type: "gift",
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
            modalShow: false,
            categoryToRender: "all",
            openedItem: {},
        };
    },
    components: {
        Card,
        FilterCategories,
        HotKey,
        Modal,
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
        ...mapState({
            clothes: "clothes",
            accessories: "accessories",
            searchValue: "searchValue",
        }),
    },
    mounted() {
        this.$store.dispatch("fetchShopData");
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
        setOrder(cost) {
            this.$store.dispatch("submitOrder", cost);
            alert("Заказ оформлен!");
        },
    },
};
</script>

<style></style>
