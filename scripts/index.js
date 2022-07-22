import {Card} from './Card.js'; 

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

// Находим карточку в тепмлейт, чтобы потом ее клонирвоать в функции
const cardTemplateElement  = cardTemplate.querySelector('.gallery__card')

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

  // Вызываем функцию создания новой карточки и передаем ей новый объект на вход
  const card = new Card (newCard.name, newCard.link, '#card-template', popupElementFullscreen, imageFullscreen, imageCaption, openPopup)
  const cardElement = card.generateCard();
  // Добавляем новую карточку в начало галереи 
  addCard(cardElement)


  // Очищаем поля ввода
  cardNameInput.value = ''
  cardUrlInput.value = ''

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
    closePopup(openedPopup)
  }
}


// Прикрепляем обработчик к кнопке сохранить в форме profile:
// он будет следить за событием “submit” - «отправка»
popupElementProfile.addEventListener('submit', handleSubmitEditProfileForm)

// Обработка кнопки Редактировать, открываем форму profile
editButton.addEventListener('click', () => {
  openPopup(popupElementProfile)
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
  const card = new Card (element.name, element.link, '#card-template', popupElementFullscreen, imageFullscreen, imageCaption, openPopup)
  const cardElement = card.generateCard();
  addCard(cardElement);
})