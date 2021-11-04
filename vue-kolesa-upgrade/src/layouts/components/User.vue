<template>
    <a href="#" class="user">
        <img
            :src="userData.avatarUrl"
            alt="Аватар"
            width="44"
            height="44"
            class="user__avatar"
        />
        <span class="user__desc">
            <span class="user__name"> {{ userData.name }} </span>
            <span class="user__points"> {{ userData.score }} баллов </span>
        </span>
    </a>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "User",
    computed: mapState({
        userData: "userData",
    }),
    created() {
        this.$store.dispatch("fetchUserData");
    },
};
</script>
