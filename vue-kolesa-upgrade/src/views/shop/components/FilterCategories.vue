<template>
    <div>
        <input
            :data-key="details.key"
            type="radio"
            name="Type"
            class="products__radio"
            :id="details.key"
            :checked="details.checked"
            @click="select(details.key)"
        />
        <label class="products__type" :for="details.key">
            {{ details.desc }}
        </label>
    </div>
</template>

<script>
export default {
    name: "FitlerCategories",
    props: {
        details: Object,
    },
    methods: {
        select(key) {
            this.$emit("categorySelect", key);
        },
    },
};
</script>
