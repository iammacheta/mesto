// Находим форму в DOM
let formElement = document.querySelector('.popup')

// Находим поля формы
let nameInput = formElement.querySelector('.popup__name')
let jobInput = formElement.querySelector('.popup__job')
// Находим кнопки формы
let closeButton = formElement.querySelector('.popup__close-button')
let saveButton = formElement.querySelector('.popup__submit')

// Находим профайл в DOM 
let profile = document.querySelector('.profile')

// Находим элементы в профайле
let profileName = profile.querySelector('.profile__name')
let profileJob = profile.querySelector('.profile__job')
let editButton = profile.querySelector('.profile__edit-button')


// Функция открытия поп-апа
function openPupup(evt) {
    formElement.classList.add('popup_opend')
    nameInput.value = profileName.textContent
    jobInput.value = profileJob.textContent
}

// Функция закрытия поп-апа
function closePupup(evt) {
    formElement.classList.remove('popup_opend')
}

// Обработчик «отправки» формы
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.

    // Получаем значение полей jobInput и nameInput из свойства value
    let nameInputValue = nameInput.value
    let jobInputValue = jobInput.value

    // Заменяем текст в элементах профиля на введенное содержимое полей ввода
    profileName.textContent = nameInputValue
    profileJob.textContent = jobInputValue

    // При сохранении данных из формы, нужно ее закрыть
    formElement.classList.remove('popup_opend')
}

// Прикрепляем обработчик к кнопке сохранить в форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler)

// Обработка кнопки Редактировать, открываем форму
editButton.addEventListener('click', openPupup)

// Обработка кнопки крестика, закрываем форму
closeButton.addEventListener('click', closePupup)