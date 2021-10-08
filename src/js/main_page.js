import '../scss/styles.scss';

// eslint-disable-next-line no-unused-vars
import { colorClick, previewClick } from './modal';

let currentCategory = '';

const categoryButtons = document.querySelectorAll('.js__category-button');
const modal = document.querySelector('.js__modal');

const clothes = [
    {
        id:      0,
        price:   550,
        isNew:   true,
        title:   'Футболка "Злая Зая"',
        img:     '/src/assets/shirts/angry.jpg',
        details: 'Брендированная футболка. Материал: Хлопок 80%, Вискоза 20%',

    },
    {
        id:      1,
        price:   580,
        isNew:   true,
        title:   'Футболка "Не ходи за мной"',
        img:     '/src/assets/shirts/dont_chase.jpg',
        details: 'Брендированная футболка. Материал: Хлопок 75%, Вискоза 25%',

    },
    {
        id:      2,
        price:   970,
        isNew:   false,
        title:   'Темная футболка "Ненавижу надписи"',
        img:     '/src/assets/shirts/hate_labels.jpg',
        details: 'Брендированная футболка. Материал: Хлопок 50%, Вискоза 50%',

    },
    {
        id:      3,
        price:   860,
        isNew:   false,
        title:   'Свитшот',
        img:     '/src/assets/shirts/dont_chase.jpg',
        details: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',

    },
    {
        id:      4,
        price:   480,
        isNew:   false,
        title:   'Футболка "Эволюционируй или сдохни"',
        img:     '/src/assets/shirts/angry.jpg',
        details: 'Футболка для самых смелых. Материал: Синтетика 99%, Хлопок 1%',

    },
    {
        id:      5,
        price:   310,
        isNew:   false,
        title:   'Хорошая футболка',
        img:     '/src/assets/shirts/hate_labels.jpg',
        details: 'Просто хорошая футболка!',

    },
];

const accessories = [
    {
        id:      6,
        price:   330,
        isNew:   false,
        title:   'Бутылка для питья',
        img:     '/src/assets/accessories/bottle.jpg',
        details: 'Спортивная бутылка для воды из пластика',

    },
    {
        id:      7,
        price:   680,
        isNew:   true,
        title:   'Нарукавник для бега',
        img:     '/src/assets/accessories/hand-cover-green.jpg',
        details: 'Нарукавник для рук во время бега. Помогает в холодную погоду',

    },
    {
        id:      8,
        price:   820,
        isNew:   false,
        title:   'Кружка синяя',
        img:     '/src/assets/accessories/mug-blue.jpg',
        details: 'Кружка для чая. Цвет: Синий. Объем: 300мл.',

    },
    {
        id:      9,
        price:   700,
        isNew:   false,
        title:   'Кружка зеленая',
        img:     '/src/assets/accessories/mug-green.jpg',
        details: 'Кружка для чая. Цвет: Зеленый. Объем: 400 мл.',

    },
    {
        id:      10,
        price:   530,
        isNew:   false,
        title:   'Нарукавник для бега',
        img:     '/src/assets/accessories/hand-cover-blue.jpg',
        details: 'Зимние нарукавники для рук во время бега. Цвет: Синий',

    },
    {
        id:      11,
        price:   380,
        isNew:   true,
        title:   'Бутылка для питья',
        img:     '/src/assets/accessories/bottle-blue.webp',
        details: 'Спортивная бутылка для воды из пластика. Цвет: Синий',

    },
];

// Создаю общий массив из всех объектов всех категорий
const all = clothes.concat(accessories);

// Функции для сортировки всех категории так, чтобы 'новые товары' были первыми
const sortEachCategory = (allCategories) => {
    allCategories.forEach((category) => {
        category.sort((a, b) => (a.isNew === false && b.isNew === true ? 1 : -1));
    });
};

// Функция для рендера карточки продукта
const makeProductCard = (title, image, isNew, price, id) => {
    const card = document.createElement('div');

    card.classList.add('card');
    card.classList.add('js__card');
    card.setAttribute('data-id', id);
    card.innerHTML += `
    <img
        src="${image}"
        alt="${title}"
        class="card__pic"
        width="330"
        height="330"
    >
    <div class="card__info">
        <span class="card__points">
            ${price} баллов
        </span>
        <span class="card__title">
            ${title}
        </span>
        ${isNew ? '<span class="card__new">NEW</span>' : ''}

        <span class="card__sizes">
            Размеры S/M/L
        </span>
        <button class="btn btn--blue js__order-button">Заказать</button>
    </div>
    `;

    return card;
};

// Функция для создания узла с контейнром для модалки

const renderModal = (image, title, price, details) => {
    const modalContainer = document.createElement('div');

    modalContainer.classList.add('container');
    modalContainer.classList.add('js__container');
    modalContainer.innerHTML += `
                <div class="modal__wrapper">
                <button class="modal__close js__close-button">
                </button>
                    <div class="modal__pics">
                        <div class="modal__pic">
                            <img
                            id="mainPreview"
                            src="${image}"
                            alt="${title}"
                            width=330
                            height=330
                            >
                        </div>

                    </div>
                    <div class="modal__desc">
                        <h1 class="modal__name">${title}</h1>
                        <div class="modal__actions">
                            <div class="modal__info">
                                <p class="modal__points">
                                    ${price} баллов
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
                            ${details}
                            </p>
                        </div>
                        <div class="modal__choose">
                            <span class="modal__headers">Как выбрать размер:</span>
                            <p class="modal__description">Написать дяде Рику для уточнения.</p>
                        </div>
                    </div>
                </div>
        `;

    return modalContainer;
};

// Эта функция обновляет контент внутри модалки
const updateModal = (id) => {
    const {
        img, title, price, details,
    } = all.filter(elem => elem.id === parseInt(id, 10))[0]; // Используя массив всех товаров, находим нужный при помощи фильтра

    const containerNode = document.querySelector('.js__container'); // Находим узел контейнера для последующего удаления

    modal.removeChild(containerNode); // Удаляем контейнер, чтобы установить новый с обновленными данными
    modal.appendChild(renderModal(img, title, price, details)); // Рендерим новый контейнер и аппендим его в модалку

    // Данная часть кода обновляет eventListener для кнопки закрытия. Без нее, при смене категории, eventListener перестает работать
    document.querySelector('.js__close-button')
        .addEventListener('click', () => {
            modal.style.display = 'none';
        });
};

// Функция для отрисовки целой категории товаров
const renderCategory = (category) => {
    const catalog = document.querySelector('.js__catalog');

    while (catalog.firstChild) {
        catalog.removeChild(catalog.lastChild); // Удаляем все элементы до тех пор, пока не останется чайлдов у каталога
    }

    category.forEach((card) => {
        const {
            img, title, price, isNew, id,
        } = card;
        const cardHtml = makeProductCard(title, img, isNew, price, id); // Создаем для каждого свою html-карточку и закидываем в каталог

        catalog.appendChild(cardHtml);
    });
};

sortEachCategory([all, clothes, accessories]); // В самом начале сортирую все категории
renderCategory(all); // Затем рендериться категория "Все товары" по умолчанию

// В зависимости от нажатой кнопки, рендериться опредленная категория
categoryButtons
    .forEach((button) => {
        button
            .addEventListener('click', (event) => {
                const btn = event.target;
                const categoryKey = btn.dataset.key;

                if (categoryKey !== currentCategory) { // Проверка выбрана новая или старая категория
                    if (categoryKey === 'clothes') {
                        renderCategory(clothes);
                        currentCategory = 'clothes';
                    } else if (categoryKey === 'accessories') {
                        renderCategory(accessories);
                        currentCategory = 'accessories';
                    } else if (categoryKey === 'all') {
                        renderCategory(all);
                        currentCategory = 'all';
                    } else {
                        alert('Данной категории товара не существует');
                    }
                }

                // Здесь также обновляются eventListener'ы для каждой кнопки после ре-рендера
                document.querySelectorAll('.js__order-button')
                    .forEach((elem) => {
                        const { id } = elem.parentElement.parentElement.dataset;

                        elem
                            .addEventListener('click', () => {
                                updateModal(id);
                                modal.style.display = 'block';
                            });
                    });
                document.querySelectorAll('.js__card')
                    .forEach((card) => {
                        const { id } = card.dataset;

                        card.addEventListener('click', () => {
                            updateModal(id);
                            modal.style.display = 'block';
                        });
                    });
            });
    });

// Данный код позволяет открывать модалку кликом по кнопке "заказать"
document.querySelectorAll('.js__order-button')
    .forEach((button) => {
        const { id } = button.parentElement.parentElement.dataset;

        button
            .addEventListener('click', () => {
                updateModal(id);
                modal.style.display = 'block';
            });
    });

// Данный код позволяет открывать модалку кликом по самой карточке
document.querySelectorAll('.js__card')
    .forEach((card) => {
        const { id } = card.dataset;

        card.addEventListener('click', () => {
            updateModal(id);
            modal.style.display = 'block';
        });
    });

// Данный код позволяет закрывать модалку кликом по фону
document.querySelector('.js__background')
    .addEventListener('click', () => {
        modal.style.display = 'none';
    });
