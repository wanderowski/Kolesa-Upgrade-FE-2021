<template>
    <div class="howto">
        <h2 class="howto__header-text header-text">Как получить баллы?</h2>
        <div class="howto__cards">
            <card
                v-for="(card, index) in cards"
                :item="card"
                :key="index"
            ></card>
        </div>
    </div>
</template>

<script>
import Card from "./components/Card.vue";
export default {
    name: "HowTo",
    data() {
        return {
            cards: [
                {
                    img: "howto_conference.png",
                    title: "Выступление на конференции",
                    reward: 90,
                    desc: "Стань спикером на международной конференции по своему направлению",
                },
                {
                    img: "howto_meetup.png",
                    title: "Выступление на meetup",
                    reward: 60,
                    desc: "Стань спикером в Колёсах и на meetup других компаний. Расскажи о наших продуктах и технологиях которые мы используем",
                },
                {
                    img: "howto_habr.png",
                    title: "Статья на habr/vc.ru/rusbase",
                    reward: 60,
                    desc: "Подготовь качественный контент, напиши и опубликуй статью на профильную тему",
                },
            ],
        };
    },
    components: {
        Card,
    },
};
</script>

<style></style>
