export class Card {
    // Передаем в конструктор все данные необходимые для создания карточки:
    // селектор темплейта и данные для открытия фулскин + саму функцию фулскрин, как колбек
    constructor(name, link, templateSelector, popupElementFullscreen, imageFullscreen, imageCaption, openPopup) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
        // Параметры для функции открытия фулскрин
        this._popupElementFullscreen = popupElementFullscreen;
        this._imageFullscreen = imageFullscreen;
        this._imageCaption = imageCaption;
        // Передаем функцию для открытия фулскрин
        this._openPopup = openPopup;
    }

    _getTemplate() {
        const cardElement = document
            // ищем темплейт и клонируем его
            .querySelector(this._templateSelector)
            .content
            .querySelector('.gallery__card')
            .cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        // Присваиваем значения атрибутам картинок
        this._element.querySelector('.gallery__image').alt = this._name;
        this._element.querySelector('.gallery__image').src = this._link;

        // Подпись карточки
        this._element.querySelector('.gallery__text').textContent = this._name;

        return this._element;

    }

    _setEventListeners() {
        // Добавляем слушатель на кнопку like
        this._element.querySelector('.gallery__like').addEventListener('click', () => {
            this._handleLikeClick();
        });

        // Добавляем слушатель на кнопку удалить
        this._element.querySelector('.gallery__delete').addEventListener('click', (evt) => {
            this._handleDeleteClick();
        });

        // Добавляем слушатель на открытие в фуллскрин
        this._element.querySelector('.gallery__image').addEventListener('click', () => {
            this._handleFullscreenClick();
        })
    }

    // Ручка для кнопки лайк
    _handleLikeClick() {
        this._element.querySelector('.gallery__like').classList.toggle('gallery__like_active');
    }

    // Ручка для удаления карточки
    _handleDeleteClick() {
        this._element.querySelector('.gallery__delete').parentElement.remove();
    }

    // Ручка для открытия фулскрин
    _handleFullscreenClick() {
        this._openPopup(this._popupElementFullscreen)
        this._imageFullscreen.src = this._link
        this._imageFullscreen.alt = this._name
        this._imageCaption.textContent = this._name
    }
}
