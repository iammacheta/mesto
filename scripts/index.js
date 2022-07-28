import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const data = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
}

// Находим модальное окно PROFILE
const popupElementProfile = document.querySelector('.popup_type_edit-profile')
// Находим кнопку закрытия модального окна профиля
const closeButtonProfile = popupElementProfile.querySelector('.popup__close-button')

// Находим форму профиля в DOM
const formElementProfile = popupElementProfile.querySelector('.form')

// Находим поля формы профиля
const nameInput = formElementProfile.querySelector('.form__input_type_name')
const jobInput = formElementProfile.querySelector('.form__input_type_job')

// Находим профайл в DOM 
const profile = document.querySelector('.profile')

// Находим элементы в профайле
const profileName = profile.querySelector('.profile__name')
const profileJob = profile.querySelector('.profile__job')
const editButton = profile.querySelector('.profile__edit-button')


// Находим модальное окно CARD
const popupElementCard = document.querySelector('.popup_type_add-card')
// Находим кнопку закрытия модального окна card
const closeButtonCard = popupElementCard.querySelector('.popup__close-button')

// Находим форму card в DOM
const formElementCard = popupElementCard.querySelector('.form')

// Находим поля формы card
const cardNameInput = formElementCard.querySelector('.form__input_type_card-name')
const cardUrlInput = formElementCard.querySelector('.form__input_type_card-url')

// Находим кнопку добавить карточку
const addButton = profile.querySelector('.profile__add-button')

// Находим элемент figure
const figureElement = document.querySelector('.popup__fullscreen')

// Находим элемент фулскрин картинку
const imageFullscreen = figureElement.querySelector('.popup__image')

// Находим элемент подпись к фулскрин картинке
const imageCaption = figureElement.querySelector('.popup__caption')

//   Добавляем 6 карточек из "коробки" через JavaScript
const galleryContainer = document.querySelector('.gallery')
const cardTemplate = document.querySelector('#card-template').content

// Находим модальное окно FULLSCREEN
const popupElementFullscreen = document.querySelector('.popup_type_fs')
// Находим кнопку закрытия модального окна card
const closeButtonFullscreen = popupElementFullscreen.querySelector('.popup__close-button')

// Обработчик «отправки» формы profile
function handleSubmitEditProfileForm(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.

  // Заменяем текст в элементах профиля на введенное содержимое полей ввода
  profileName.textContent = nameInput.value
  profileJob.textContent = jobInput.value

  // При сохранении данных из формы, нужно ее закрыть
  closePopup(popupElementProfile)
}

// Обработчик «отправки» формы Card
function handleSubmitAddCardForm(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.

  const newCard = {}
  newCard.name = cardNameInput.value
  newCard.link = cardUrlInput.value

  const cardElement = createCard(newCard.name, newCard.link)

  // Добавляем новую карточку в начало галереи 
  addCard(cardElement)

  // Очищаем поля ввода
  evt.target.reset()

  // При сохранении данных из формы, нужно ее закрыть
  closePopup(popupElementCard)
}

function addCard(cardElement) {
  // Добавляем карточку в начало галереи
  galleryContainer.prepend(cardElement)
}

// Объявляем функцию открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opend')
  // Вешаем слушатель события нажатия кнопки и клика для закрытия по Esc и клику по оверлею
  document.addEventListener('keyup', closeByEsc)
  popup.addEventListener('click', closeByClick)
}

// Объявляем функцию закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opend')
  // При закрытии формы удаляем слушатели
  document.removeEventListener('keyup', closeByEsc)
  popup.removeEventListener('click', closeByClick)
}

// Функция закрытия при нажатии на esc
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opend')
    closePopup(openedPopup)
  }
}

// Функция закрытия попапа кликом на оверлей 
function closeByClick(evt) {
  if (evt.target.classList.contains('popup_opend')) {
    const openedPopup = document.querySelector('.popup_opend')
    closePopup(evt.target)
  }
}


// Прикрепляем обработчик к кнопке сохранить в форме profile:
// он будет следить за событием “submit” - «отправка»
popupElementProfile.addEventListener('submit', handleSubmitEditProfileForm)

// Обработка кнопки Редактировать, открываем форму profile
editButton.addEventListener('click', () => {
  openPopup(popupElementProfile)
  const thisPopupForm = popupElementProfile.querySelector('.form')
  const popupValitator = new FormValidator(data, thisPopupForm)
  popupValitator.resetValidation()
})

// Обработка кнопки крестика, закрываем форму profile
closeButtonProfile.addEventListener('click', () => {
  closePopup(popupElementProfile)
})

// Прикрепляем обработчик к кнопке сохранить в форме добавления карточки:
// он будет следить за событием “submit” - «отправка»
popupElementCard.addEventListener('submit', handleSubmitAddCardForm)

// Обработка кнопки Редактировать, открываем форму рекдактирования карточки
addButton.addEventListener('click', () => {
  openPopup(popupElementCard)
  const thisPopupForm = popupElementCard.querySelector('.form')
  const popupValitator = new FormValidator(data, thisPopupForm)
  popupValitator.resetValidation()
})

// Обработка кнопки крестика, закрываем форму редактирования карточки
closeButtonCard.addEventListener('click', () => {
  closePopup(popupElementCard)
})

// Обработка кнопки крестика, закрываем фуллскрин
closeButtonFullscreen.addEventListener('click', () => {
  closePopup(popupElementFullscreen)
})

// Проходимся по всем элементам, создаем карточки и добавляем их в галерею
initialCards.forEach(element => {
  const cardElement = createCard(element.name, element.link)
  addCard(cardElement);
})

// Добавление обработчиков всем формам
const formList = Array.from(document.querySelectorAll('.form'));
formList.forEach((formElement) => {
  const formValidator = new FormValidator(data, formElement);
  formValidator.enableValidation();
});

function createCard(newCardName, newCardLink) {
  const card = new Card(newCardName, newCardLink, '#card-template', popupElementFullscreen, imageFullscreen, imageCaption, openPopup, handleCardClick)
  return card.generateCard();
}

function handleCardClick(name, link, popup) {
  imageFullscreen.src = link
  imageFullscreen.alt = name
  imageCaption.textContent = name
  openPopup(popup)
}