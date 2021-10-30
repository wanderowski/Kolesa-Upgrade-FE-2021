<template>
    <a href="#" class="user">
        <img
            src="@/assets/avatar.png"
            alt="Аватар"
            width="44"
            height="44"
            class="user__avatar"
        />
        <span class="user__desc">
            <span class="user__name"> {{ localData.name }} </span>
            <span class="user__points"> {{ localData.score }} баллов </span>
        </span>
    </a>
</template>

<script>
import axios from "../axios.js";

export default {
    name: "User",
    props: {
        localData: Object,
    },
    data() {
        return {
            name: "",
            points: 0,
        };
    },
    created() {
        axios.get("templates/7ZW3y5GAuIge/data").then((response) => {
            this.name = response.data.name;
            this.points = response.data.score;

            this.$emit("userInfo", { name: this.name, score: this.points });
        });
    },
};
</script>
