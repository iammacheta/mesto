// Находим форму в DOM
let formElement = document.querySelector('.popup')

// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__name')
let jobInput = formElement.querySelector('.popup__job')

// Находим профайл в DOM 
let profile = document.querySelector('.profile')

// Находим элементы в профайле
let profileName = profile.querySelector('.profile__name');
let profileJob = profile.querySelector('.profile__job');

// Обработчик «отправки» формы
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.

    // Заменяем текст в элементах профиля на введенное содержимое полей ввода
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    // При сохранении данных из формы, нужно ее закрыть
    formElement.classList.remove('popup_opend');
}

// Функция открытия поп-апа
function openPupup() {
    formElement.classList.add('popup_opend');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

// Функция закрытия поп-апа
function closePupup() {
    formElement.classList.remove('popup_opend');
}

// Обработка кнопки Редактировать, открываем форму
let editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', openPupup);

// Обработка кнопки крестика, закрываем форму
let closeButton = formElement.querySelector('.popup__close-button');
closeButton.addEventListener('click', closePupup);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);