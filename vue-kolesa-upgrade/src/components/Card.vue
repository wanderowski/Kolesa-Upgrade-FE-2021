<template>
    <div class="card" :key="product.id" @click="openModal(product)">
        <img
            :src="
                product.mainImage
                    ? product.mainImage
                    : require('@/assets/default.jpg')
            "
            :alt="product.title"
            class="card__pic"
            width="330"
            height="330"
        />
        <div class="card__info">
            <span class="card__points"> {{ product.price }} баллов </span>
            <span class="card__title">
                {{ product.title }}
            </span>
            <span v-if="product.isNew" class="card__new">NEW</span>

            <span class="card__sizes"> Размеры S/M/L </span>
            <button class="btn btn--blue" @click="openModal(product)">
                Заказать
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        product: Object,
    },
    methods: {
        openModal(item) {
            this.$emit("openProductModal", item);
        },
    },
};
</script>
