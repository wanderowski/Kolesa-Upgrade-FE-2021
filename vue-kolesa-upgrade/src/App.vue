<template>
  <div id="app">
    <p class="text">
      {{count}}
    </p>
    <p :class="{
      'text--color-blue': isEagle,
      'text--color-red': !isEagle,
    }">
      {{text}}
    </p>
    <button class="button" @click="randomize">
      Random
    </button>

    <ul>
      <li v-for="name in students" :key="name">
        {{ name }}
      </li>
    </ul>

    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      count: 0,
      students: [
        'Адель',
        'Даурен',
        'Санжар',
        'Дурбек',
      ],
    };
  },
  computed: {
    text() {
      return this.count > 0.5 ? 'Орел' : 'Решка';
    },
    isEagle() {
      return this.count > 0.5;
    },
  },
  methods: {
    randomize() {
      this.count = Math.random();
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.text {
  font-size: 28px;
  &--color-blue {
  color: blue;
  }

  &--color-red {
  color: red;
    }
}
</style>
