import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userData: {
            name: "",
            score: 0,
            avatarUrl: "",
        },
        clothes: [],
        accessories: [],
        searchValue: "",
        isLoading: true,
    },
    mutations: {
        setUserData(state, payload) {
            state.userData = { ...state.userData, ...payload };
        },
        setClothes(state, payload) {
            state.clothes = payload;
        },
        setAccessories(state, payload) {
            state.accessories = payload;
        },
        setSearchValue(state, payload) {
            state.searchValue = payload;
        },
        setIsLoading(state, payload) {
            state.isLoading = payload;
        },
    },
    actions: {
        fetchUserData({ commit }) {
            axios.get("templates/7ZW3y5GAuIge/data").then((response) => {
                commit("setUserData", {
                    name: response.data.name,
                    score: response.data.score,
                    avatarUrl: response.data.avatarUrl,
                });
            });
        },
        fetchShopData({ commit }) {
            Promise.all([
                axios.get("templates/-_RLsEGjof6i/data"),
                axios.get("templates/q3OPxRyEcPvP/data"),
            ]).then((response) => {
                commit("setClothes", response[0].data);
                commit("setAccessories", response[1].data);
            });
        },
        submitOrder({ commit }, payload) {
            let temp = this.state.userData.score;
            temp -= payload;
            commit("setUserData", { score: temp });
        },
    },
    modules: {},
});
