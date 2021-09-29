// Собираем сначала всем превьюшки и селекторы цвета
const previewElems = Array.from(document.querySelectorAll('.card__radio')).filter(elem => elem.name === 'preview');
const colorElems = Array.from(document.querySelectorAll('.card__radio')).filter(elem => elem.name === 'color');
// Выбираем наш mainPreview (Основная картинка с выбранной футболкой)
const mainPreview = document.querySelector('#mainPreview');

// Эта функция служит для изменения основной картинки и для смены выбранного радио инпута
// в зависимости от того, на какую превьюшку нажали

// eslint-disable-next-line no-unused-vars
function previewClick(event) {
    mainPreview.setAttribute('src', event.target.src);

    // Пробегаем по всем радиоинпутам, отвечающим за цвет  и находим нужный в зависимости от
    // выбранного превью
    switch (event.target.alt) {
        case 'Бежевый цвет':
            colorElems.filter(elem => elem.id === 'color-milk')[0].checked = true;
            break;
        case 'Синий цвет':
            colorElems.filter(elem => elem.id === 'color-blue')[0].checked = true;
            break;
        case 'Серый цвет':
            colorElems.filter(elem => elem.id === 'color-gray')[0].checked = true;
            break;
        default:
            break;
    }
}

// Эта функция служит для изменения основной картинки и для смены выбранной превьюшки
// в зависимости от того, на какой цвет нажали

// eslint-disable-next-line no-unused-vars
function colorClick(event) {
    let previewElem = '';

    switch (event.target.id) {
        case 'color-milk':
            [previewElem] = previewElems.filter(elem => elem.id === 'preview-milk');
            break;
        case 'color-blue':
            [previewElem] = previewElems.filter(elem => elem.id === 'preview-blue');
            break;
        case 'color-gray':
            [previewElem] = previewElems.filter(elem => elem.id === 'preview-gray');
            break;
        default:
            break;
    }
    previewElem.checked = true;
    mainPreview.src = previewElem.nextElementSibling.src;
}
