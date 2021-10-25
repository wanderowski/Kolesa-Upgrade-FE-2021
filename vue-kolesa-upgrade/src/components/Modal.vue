<template>
    <div class="main__modal modal" v-if="isOpen">
        <div class="modal__background" @click="closeModal()"></div>
        <div class="container">
            <div class="modal__wrapper">
                <button class="modal__close" @click="closeModal()"></button>
                <div class="modal__pics">
                    <div class="modal__pic">
                        <img
                            :src="
                                mainPreview ? mainPreview : openedItem.mainImage
                            "
                            :alt="openedItem.title"
                            width="330"
                            height="330"
                        />
                    </div>
                    <div
                        class="modal__hint"
                        v-if="openedItem.images && openedItem.images.length"
                    >
                        <label v-for="preview in openedItem.images">
                            <input
                                type="radio"
                                name="preview"
                                class="modal__radio"
                            />
                            <img
                                :src="preview"
                                alt="Алтернативный вид"
                                width="50"
                                height="50"
                                @click="previewClick"
                            />
                        </label>
                    </div>
                </div>
                <div class="modal__desc">
                    <h1 class="modal__name">{{ openedItem.title }}</h1>
                    <div class="modal__actions">
                        <div class="modal__info">
                            <p class="modal__points">
                                {{ openedItem.price }} баллов
                            </p>
                            <button
                                class="btn btn--blue modal__btn"
                                @click="order"
                            >
                                Заказать
                            </button>
                        </div>
                        <div class="modal__balance">
                            <p class="modal__balance-desc">
                                Твой баланс:
                                <span class="modal__balance-value"
                                    >{{ userScore }} баллов</span
                                >
                            </p>
                            <span class="modal__balance-logo"> 🛍 </span>
                        </div>
                    </div>
                    <div
                        class="modal__size"
                        v-if="openedItem.sizes && openedItem.sizes.length"
                    >
                        <span class="modal__size-desc">Размеры:</span>
                        <div class="modal__options">
                            <label v-for="size in openedItem.sizes">
                                <input
                                    type="radio"
                                    name="size"
                                    class="modal__radio"
                                />
                                <div class="modal__radio-container">
                                    <span class="modal__size-name">{{
                                        size
                                    }}</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="modal__details">
                        <span class="modal__headers">Детали:</span>
                        <p class="modal__description">
                            {{ openedItem.description }}
                        </p>
                    </div>
                    <div class="modal__choose">
                        <span class="modal__headers">Как выбрать размер:</span>
                        <p class="modal__description">
                            Написать дяде Рику для уточнения.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    data() {
        return {
            mainPreview: "",
        };
    },
    props: {
        openedItem: Object,
        isOpen: Boolean,
        userScore: Number,
    },
    methods: {
        closeModal() {
            this.$emit("close");
        },
        order() {
            if (this.userScore > this.openedItem.price) {
                this.$emit("order", this.openedItem.price);
                this.closeModal();
            } else {
                alert("Недостаточно средств!");
            }
        },
        previewClick(e) {
            this.mainPreview = e.target.src;
        },
    },
};
</script>

<style src="../scss/styles.scss" lang="scss"></style>
