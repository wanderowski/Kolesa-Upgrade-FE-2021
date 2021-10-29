<template>
    <div class="card" @click="openModal(product)">
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

            <div class="card__sizes">
                <span v-if="product.sizes && product.sizes.length"
                    >Размеры
                    <span v-for="(size, index) in product.sizes" :key="index">
                        {{ size }}
                        <span v-if="index !== product.sizes.length - 1">/</span>
                    </span>
                </span>
                <div v-else>Информации о размерах нет</div>
            </div>
            <button class="btn btn--blue card__btn" @click="openModal(product)">
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
