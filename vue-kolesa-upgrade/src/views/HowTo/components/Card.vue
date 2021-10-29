<template>
    <div class="howto__card">
        <div class="howto__main-info">
            <img
                width="48px"
                height="48px"
                :src="require('@/assets/' + item.img)"
                :alt="item.title"
            />
            <span class="howto__title">{{ item.title }}</span>
            <span class="howto__reward">{{ item.reward }} баллов</span>
            <p class="howto__description">{{ item.desc }}</p>
        </div>

        <button class="btn btn--blue howto__btn">Отправить заявку</button>
    </div>
</template>

<script>
export default {
    name: "HowToCard",
    props: {
        item: Object,
    },
};
</script>
