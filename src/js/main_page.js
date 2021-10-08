import '../scss/styles.scss';

let currentCategory = '';

const clothes = [
    {
        id:    0,
        price: 550,
        isNew: true,
        title: 'Футболка "Злая Зая"',
        img:   '/src/assets/shirts/angry.jpg',

    },
    {
        id:    1,
        price: 580,
        isNew: true,
        title: 'Футболка "Не ходи за мной"',
        img:   '/src/assets/shirts/dont_chase.jpg',

    },
    {
        id:    2,
        price: 970,
        isNew: false,
        title: 'Темная футболка "Ненавижу надписи"',
        img:   '/src/assets/shirts/hate_labels.jpg',

    },
    {
        id:    3,
        price: 860,
        isNew: false,
        title: 'Свитшот',
        img:   '/src/assets/shirts/dont_chase.jpg',

    },
    {
        id:    4,
        price: 480,
        isNew: false,
        title: 'Футболка "Эволюционируй или сдохни"',
        img:   '/src/assets/shirts/angry.jpg',

    },
    {
        id:    5,
        price: 310,
        isNew: false,
        title: 'Просто хорошая футболка',
        img:   '/src/assets/shirts/hate_labels.jpg',

    },
];

const accessories = [
    {
        id:    0,
        price: 330,
        isNew: false,
        title: 'Бутылка для питья',
        img:   '/src/assets/accessories/bottle.jpg',

    },
    {
        id:    1,
        price: 680,
        isNew: true,
        title: 'Нарукавник для бега',
        img:   '/src/assets/accessories/hand-cover-green.jpg',

    },
    {
        id:    2,
        price: 820,
        isNew: false,
        title: 'Кружка синяя',
        img:   '/src/assets/accessories/mug-blue.jpg',

    },
    {
        id:    3,
        price: 700,
        isNew: false,
        title: 'Кружка зеленая',
        img:   '/src/assets/accessories/mug-green.jpg',

    },
    {
        id:    4,
        price: 530,
        isNew: false,
        title: 'Нарукавник для бега',
        img:   '/src/assets/accessories/hand-cover-blue.jpg',

    },
    {
        id:    5,
        price: 380,
        isNew: true,
        title: 'Бутылка для питья',
        img:   '/src/assets/accessories/bottle-blue.webp',

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
        <button class="btn btn--blue">Заказать</button>
    </div>
    `;

    return card;
};

// Функция для отрисовки целой категории товаров
const renderCategory = (category) => {
    const catalog = document.querySelector('.js__catalog');

    while (catalog.firstChild) {
        catalog.removeChild(catalog.lastChild);
    }

    category.forEach((card) => {
        const {
            img, title, price, isNew, id,
        } = card;
        const cardHtml = makeProductCard(title, img, isNew, price, id);

        catalog.appendChild(cardHtml);
    });
};

sortEachCategory([all, clothes, accessories]); // В самом начале сортирую все категории
renderCategory(all); // Затем рендериться категория "Все товары" по умолчанию

// В зависимости от нажатой кнопки, рендериться опредленная категория
document.querySelectorAll('.js__category-button')
    .forEach((button) => {
        button
            .addEventListener('click', (event) => {
                const btn = event.target;
                const categoryKey = btn.dataset.key;

                if (categoryKey !== currentCategory) {
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
            });
    });
