<template>
  <div id="app">
    <div class="main">
        <div class="main__modal modal" v-if="modalShow">
            <div class="modal__background" @click="closeModal()"></div>
            <div class="container">
                <div class="modal__wrapper">
                    <button class="modal__close" @click="closeModal()">
                    </button>
                        <div class="modal__pics">
                            <div class="modal__pic">
                                <img
                                id="mainPreview"
                                :src="require('./assets/' + openedItem.img)"
                                :alt="openedItem.title"
                                width=330
                                height=330
                                >
                            </div>
                            <div class="modal__hint">
                                <label>
                                    <input type="radio" name="preview" class="modal__radio" id="preview-milk">
                                    <img
                                    src="./assets/🌆 preview_1.png"
                                    alt="Бежевый цвет"
                                    width=50
                                    height=50
                                    onclick="previewClick(event)">
                                </label>
                            </div>
                        </div>
                        <div class="modal__desc">
                            <h1 class="modal__name"></h1>
                            <div class="modal__actions">
                                <div class="modal__info">
                                    <p class="modal__points">
                                        баллов
                                    </p>
                                    <button class="btn btn--blue modal__btn">Заказать</button>
                                </div>
                                <div class="modal__balance">
                                    <p class="modal__balance-desc">
                                        Твой баланс:
                                        <span class="modal__balance-value">3945 баллов</span>
                                    </p>
                                    <span class="modal__balance-logo">
                                        🛍
                                    </span>
                                </div>
                            </div>
                            <div class="modal__size">
                                <span class="modal__size-desc">Размеры:</span>
                                <div class="modal__options">
                                    <label>
                                        <input type="radio" name="size" class="modal__radio" checked>
                                        <div class="modal__radio-container">
                                            <span class="modal__size-name">S</span>
                                        </div>
                                    </label>
                                    <label>
                                        <input type="radio" name="size" class="modal__radio">
                                        <div class="modal__radio-container">
                                            <span class="modal__size-name">M</span>
                                        </div>
                                    </label>
                                    <label>
                                        <input type="radio" name="size" class="modal__radio">
                                        <div class="modal__radio-container">
                                            <span class="modal__size-name">L</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div class="modal__details">
                                <span class="modal__headers">Детали:</span>
                                <p class="modal__description">

                                </p>
                            </div>
                            <div class="modal__choose">
                                <span class="modal__headers">Как выбрать размер:</span>
                                <p class="modal__description">Написать дяде Рику для уточнения.</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div class="container">
            <div class="main__wrapper">
                <a href="/main_page.html" class="main__logo">
                    <img
                    src="./assets/logo.svg"
                    alt="Логотип"
                    width="215"
                    height="35">
                </a>
                <div class="main__aside">
                    <nav class="nav">
                        <a v-for="(item, index) in navItems" :class="{'nav__item': true, 'nav__item-active': item.active}" :key="index">{{item.title}}</a>
                    </nav>
                </div>
                <header class="header">
                    <div class="header__search search">
                        <button
                            class="search__icon" aria-label="Поиск">
                        </button>
                        <input
                            type="search"
                            class="search__field"
                            placeholder="Поиск"
                        >
                    </div>
                    <a href="#" class="user">
                        <img
                            src="./assets/avatar.png"
                            alt="Аватар"
                            width="44"
                            height="44"
                            class="user__avatar">
                        <span class="user__desc">
                            <span class="user__name">
                                Мортиджан
                            </span>
                            <span class="user__points">
                                300 баллов
                            </span>
                        </span>
                    </a>
                </header>
                <div class="main__content">
                    <img src="./assets/banner.png" alt="Летняя Распродажа" class="main__banner">
                    <div class="main__points points">
                        <button class="points__box points__get">
                            <img
                            src="./assets/emoji_plus.png"
                            alt="Получить"
                            class="points__emoji"
                            width="48"
                            >
                            <span class="points__desc">Получить баллы</span>
                        </button>
                        <button class="points__box points__howto">
                            <img
                            src="./assets/emoji_question.png"
                            alt="Как получить"
                            class="points__emoji"
                            width="48">

                            <span class="points__desc">Как получить баллы</span>
                        </button>
                        <button class="points__box points__gift">
                            <img
                            src="./assets/emoji_gift.png"
                            alt="Подарить"
                            class="points__emoji"
                            width="48">
                            <span class="points__desc">Подарить баллы</span>
                        </button>
                    </div>
                    <div class="main__products products">
                        <div class="products__types">
                            <input data-key="all" type="radio" name="Type" class="products__radio" id="all" checked @click="categorySelect('all')">
                            <label class="products__type" for="all">
                                Все товары
                            </label>
                            <input data-key="clothes" type="radio" name="Type" class="products__radio" id="clothes" @click="categorySelect('clothes')">
                            <label class="products__type" for="clothes">
                                Одежда
                            </label>
                            <input data-key="accessories" type="radio" name="Type" class="products__radio" id="accessories" @click="categorySelect('accessories')">
                            <label class="products__type" for="accessories">
                                Аксессуары
                            </label>
                        </div>
                        <div class="products__cards">
                            <div class="card" v-for="product in productsToRender" :key="product.id" @click="openModal(product.id)">
                                <img
                                    :src="require('./assets/' + product.img)"
                                    :alt="product.title"
                                    class="card__pic"
                                    width="330"
                                    height="330"
                                >
                                <div class="card__info">
                                    <span class="card__points">
                                        {{ product.price }} баллов
                                    </span>
                                    <span class="card__title">
                                        {{ product.title }}
                                    </span>
                                    <span v-if="product.isNew" class="card__new">NEW</span>

                                    <span class="card__sizes">
                                        Размеры S/M/L
                                    </span>
                                    <button class="btn btn--blue" @click="openModal(product.id)">Заказать</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <div class="footer__social">
                    <span class="footer__copyright">
                        © Kolesa Group
                    </span>
                    <div class="footer__icons">
                        <a href="https://vk.com/kolesakz" target="_blank"><img src="./assets/VK.png" alt="VK" class="footer__icon"></a>
                        <a href="https://www.youtube.com/user/kolesakzvideo" target="_blank"><img src="./assets/YouTube.png" alt="YouTube" class="footer__icon"></a>
                        <a href="https://www.instagram.com/kolesagroup/" target="_blank"><img src="./assets/Instagram.png" alt="Instagram" class="footer__icon"></a>
                    </div>
                </div>
                <div class="footer__contact">
                    <span class="footer__desc">
                        Есть идеи что улучшить?<br>Не знаешь, с кем решить проблему?
                    </span>
                    <button class="btn btn--white">
                        Написать
                    </button>
                </div>
            </div>

        </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
      return {
          clothes:  [
            {
                id:      0,
                price:   550,
                isNew:   true,
                title:   'Футболка "Злая Зая"',
                img:     'shirts/angry.jpg',
                details: 'Брендированная футболка. Материал: Хлопок 80%, Вискоза 20%',
            },
            {
                id:      1,
                price:   580,
                isNew:   true,
                title:   'Футболка "Не ходи за мной"',
                img:     'shirts/dont_chase.jpg',
                details: 'Брендированная футболка. Материал: Хлопок 75%, Вискоза 25%',

            },
            {
                id:      2,
                price:   970,
                isNew:   false,
                title:   'Темная футболка "Ненавижу надписи"',
                img:     'shirts/hate_labels.jpg',
                details: 'Брендированная футболка. Материал: Хлопок 50%, Вискоза 50%',

            },
            {
                id:      3,
                price:   860,
                isNew:   false,
                title:   'Свитшот',
                img:     'shirts/dont_chase.jpg',
                details: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',

            },
            {
                id:      4,
                price:   480,
                isNew:   false,
                title:   'Футболка "Эволюционируй или сдохни"',
                img:     'shirts/angry.jpg',
                details: 'Футболка для самых смелых. Материал: Синтетика 99%, Хлопок 1%',

            },
            {
                id:      5,
                price:   310,
                isNew:   false,
                title:   'Хорошая футболка',
                img:     'shirts/hate_labels.jpg',
                details: 'Просто хорошая футболка!',

            },
        ],
        accessories: [
            {
                id:      6,
                price:   330,
                isNew:   false,
                title:   'Бутылка для питья',
                img:     'accessories/bottle.jpg',
                details: 'Спортивная бутылка для воды из пластика',

            },
            {
                id:      7,
                price:   680,
                isNew:   true,
                title:   'Нарукавник для бега',
                img:     'accessories/hand-cover-green.jpg',
                details: 'Нарукавник для рук во время бега. Помогает в холодную погоду',

            },
            {
                id:      8,
                price:   820,
                isNew:   false,
                title:   'Кружка синяя',
                img:     'accessories/mug-blue.jpg',
                details: 'Кружка для чая. Цвет: Синий. Объем: 300мл.',

            },
            {
                id:      9,
                price:   700,
                isNew:   false,
                title:   'Кружка зеленая',
                img:     'accessories/mug-green.jpg',
                details: 'Кружка для чая. Цвет: Зеленый. Объем: 400 мл.',

            },
            {
                id:      10,
                price:   530,
                isNew:   false,
                title:   'Нарукавник для бега',
                img:     'accessories/hand-cover-blue.jpg',
                details: 'Зимние нарукавники для рук во время бега. Цвет: Синий',

            },
            {
                id:      11,
                price:   380,
                isNew:   true,
                title:   'Бутылка для питья',
                img:     'accessories/bottle-blue.webp',
                details: 'Спортивная бутылка для воды из пластика. Цвет: Синий',

            },
        ],
        navItems: [
            {title: 'Оргсхема', active: false},
            {title: 'Kolesa Team', active: false},
            {title: 'Kolesa Shop', active: true},
            {title: 'Картина компании', active: false},
            {title: 'Новости', active: false},
            {title: 'Education', active: false},
            {title: 'Guidelines', active: false},
            {title: 'Библиотека', active: false},
            {title: 'FAQ', active: false}
        ],
        modalShow: false,
        categoryToRender: 'all',
        openedItem: {},
    }
  },

  computed: {
      all() {
          const all = this.clothes.concat(this.accessories);
          this.sortEachCategory([all, this.clothes, this.accessories]);
          return all;
      },
      productsToRender() {
          if(this.categoryToRender === 'all') {
              return this.all;
          }
          else if(this.categoryToRender === 'clothes') {
              return this.clothes;
          }
          else if(this.categoryToRender === 'accessories') {
              return this.accessories;
          }
      },
  },
  methods: {
      sortEachCategory(allCategories) {
        allCategories.forEach((category) => {
            category.sort((a, b) => (a.isNew === false && b.isNew === true ? 1 : -1));
        });
      },

      closeModal() {
          this.modalShow = false;
      },
      openModal(id) {
          this.modalShow = true;
          this.openedItem = this.all.filter((item) => item.id === id)[0];
      },
      categorySelect(category) {
          if( category === 'all') {
              this.categoryToRender = 'all'
          }
          else if(category === 'clothes') {
              this.categoryToRender = 'clothes'
          }
          else if(category === 'accessories') {
              this.categoryToRender = 'accessories'
          }
      }

  },
}
</script>

<style src="./scss/styles.scss" lang="scss">

</style>
