<template>
    <div class="loader" v-if="isLoading">
        <div class="loader__wrapper"></div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "Loader",
    computed: mapState({
        isLoading: "isLoading",
    }),
};
</script>

<style lang="scss">
.loader {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    &__wrapper {
        border: 16px solid #f3f3f3; /* Light grey */
        position: fixed;
        left: 50%;
        top: 50%;
        border-top: 16px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
    }
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
