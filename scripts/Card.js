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
        this._galleryImage = this._element.querySelector('.gallery__image');
        this._galleryLike = this._element.querySelector('.gallery__like');
        this._galleryDelete = this._element.querySelector('.gallery__delete');
        this._setEventListeners();

        // Присваиваем значения атрибутам картинок
        this._galleryImage.alt = this._name;
        this._galleryImage.src = this._link;

        // Подпись карточки
        this._element.querySelector('.gallery__text').textContent = this._name;

        return this._element;
    }

    _setEventListeners() {
        // Добавляем слушатель на кнопку like
        this._galleryLike.addEventListener('click', () => {
            this._handleLikeClick();
        });

        // Добавляем слушатель на кнопку удалить
        this._galleryDelete.addEventListener('click', (evt) => {
            this._handleDeleteClick();
        });

        // Добавляем слушатель на открытие в фуллскрин
        this._galleryImage.addEventListener('click', () => {
            this._handleFullscreenClick();
        })
    }

    // Ручка для кнопки лайк
    _handleLikeClick() {
        this._galleryLike.classList.toggle('gallery__like_active');
    }

    // Ручка для удаления карточки
    _handleDeleteClick() {
        this._galleryDelete.parentElement.remove();
    }

    // Ручка для открытия фулскрин
    _handleFullscreenClick() {
        this._openPopup(this._popupElementFullscreen)
        this._imageFullscreen.src = this._link
        this._imageFullscreen.alt = this._name
        this._imageCaption.textContent = this._name
    }
}