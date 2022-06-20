// Находим модальное окно PROFILE
const popupElementProfile = document.querySelector('.popup_type_edit-profile')
// Находим кнопку закрытия модального окна профиля
const closeButtonProfile = popupElementProfile.querySelector('.popup__close-button')

// Находим форму профиля в DOM
const formElementProfile = popupElementProfile.querySelector('.form')

// Находим поля формы профиля
const nameInput = formElementProfile.querySelector('.form__input_type_name')
const jobInput = formElementProfile.querySelector('.form__input_type_job')
// Находим кнопку формы профиля
const saveButtonProfile = formElementProfile.querySelector('.form__submit')

// Находим профайл в DOM 
const profile = document.querySelector('.profile')

// Находим элементы в профайле
const profileName = profile.querySelector('.profile__name')
const profileJob = profile.querySelector('.profile__job')
const editButton = profile.querySelector('.profile__edit-button')

// Функция открытия поп-апа profile
function openPopupProfile(evt) {
  popupElementProfile.classList.add('popup_opend')
  console.log('click to add button')
  nameInput.value = profileName.textContent
  jobInput.value = profileJob.textContent
}

// Функция закрытия поп-апа profile
function closePupupProfile(evt) {
  popupElementProfile.classList.remove('popup_opend')
}

// Обработчик «отправки» формы profile
function submitEditProfileForm(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.

  // Заменяем текст в элементах профиля на введенное содержимое полей ввода
  profileName.textContent = nameInput.value
  profileJob.textContent = jobInput.value

  // При сохранении данных из формы, нужно ее закрыть
  popupElementProfile.classList.remove('popup_opend')
}

// Прикрепляем обработчик к кнопке сохранить в форме profile:
// он будет следить за событием “submit” - «отправка»
popupElementProfile.addEventListener('submit', submitEditProfileForm)

// Обработка кнопки Редактировать, открываем форму profile
editButton.addEventListener('click', openPopupProfile)

// Обработка кнопки крестика, закрываем форму profile
closeButtonProfile.addEventListener('click', closePupupProfile)


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

// Находим кнопку сохранения формы card
const createButtonCard = formElementCard.querySelector('.form__submit')

// Функция открытия поп-апа card
function openPopupCard(evt) {
  popupElementCard.classList.add('popup_opend')
}

// Функция закрытия поп-апа card
function closePupupCard(evt) {
  popupElementCard.classList.remove('popup_opend')
}

// Обработчик «отправки» формы Card
function formSubmitHandlerCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.

  const newCard = []
  newCard.name = cardNameInput.value
  newCard.link = cardUrlInput.value

  // Вызываем функцию создания новой карточки и передаем ей новый объект на вход
  createCard(newCard)

  // Очищаем поля ввода
  cardNameInput.value = ''
  cardUrlInput.value = ''

  // При сохранении данных из формы, нужно ее закрыть
  popupElementCard.classList.remove('popup_opend')
}

// Прикрепляем обработчик к кнопке сохранить в форме добавления карточки:
// он будет следить за событием “submit” - «отправка»
popupElementCard.addEventListener('submit', formSubmitHandlerCard)


// Обработка кнопки Редактировать, открываем форму рекдактирования карточки
addButton.addEventListener('click', openPopupCard)

// Обработка кнопки крестика, закрываем форму редактирования карточки
closeButtonCard.addEventListener('click', closePupupCard)




// Находим модальное окно FULLSCREEN
const popupElementFullscreen = document.querySelector('.popup_type_fs')
// Находим кнопку закрытия модального окна card
const closeButtonFullscreen = popupElementFullscreen.querySelector('.popup__close-button')

// Обработка кнопки крестика, закрываем фуллскрин
closeButtonFullscreen.addEventListener('click', closePupupFullscreen)

// Функция открытия поп-апа фуллскрин
function openPopupFullscreen(evt) {
  popupElementFullscreen.classList.add('popup_opend')
}

// Функция закрытия поп-апа фуллскрин
function closePupupFullscreen(evt) {
  popupElementFullscreen.classList.remove('popup_opend')
}

// Находим элемент figure
const figureElement = document.querySelector('.popup__fullscreen')

// Находим элемент фулскрин картинку
const imageFullscreen = figureElement.querySelector('.popup__image')

// Находим элемент подпись к фулскрин картинке
const imageCaption = figureElement.querySelector('.popup__caption')

const initialCards = [
  {
    name: 'Париж',
    link: 'https://images.unsplash.com/photo-1570168201769-8f2ca2e012de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1182&q=80'
  },
  {
    name: 'Нью-Йорк',
    link: 'https://images.unsplash.com/photo-1589251204996-3367cc27f084?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1155&q=80'
  },
  {
    name: 'Тбилиси',
    link: 'https://images.unsplash.com/photo-1589308955174-ad82f6416790?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80'
  },
  {
    name: 'Стамбул',
    link: 'https://images.unsplash.com/photo-1650802314281-50646ff3f65c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80'
  },
  {
    name: 'Санторини',
    link: 'https://images.unsplash.com/photo-1557701434-aa5a992f0343?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
  },
  {
    name: 'Австралия',
    link: 'https://images.unsplash.com/photo-1571690388560-4d0282e6b1d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80'
  }
]

//   Добавляем 6 карточек из "коробки" через JavaScript
const galleryContainer = document.querySelector('.gallery')
const cardTemplate = document.querySelector('#card-template').content


// Объявляем функцию для создания карточки
function createCard(element) {
  const cardElement = cardTemplate.querySelector('.gallery__card').cloneNode(true)
  const cardImage = cardElement.querySelector('.gallery__image')

  // Присваиваем значения атрибутам картинок
  cardImage.src = element.link
  cardImage.alt = element.name

  // Подпись карточки
  cardElement.querySelector('.gallery__text').textContent = element.name

  // Добавляем слушатель на кнопку лайк
  const cardLike = cardElement.querySelector('.gallery__like')
  cardLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('gallery__like_active')
  })

  // Добавляем слушатель на кнопку удалить
  const cardDelete = cardElement.querySelector('.gallery__delete')
  cardDelete.addEventListener('click', (evt) => {
    evt.target.parentElement.remove()
  })

  // Добавляем слушатель на открытие в фуллскрин
  cardImage.addEventListener('click', (evt) => {
    openPopupFullscreen()
    imageFullscreen.src = element.link
    imageFullscreen.alt = element.name
    imageCaption.textContent = element.name

  })

  // Добавляем карточку в начало галереи
  galleryContainer.prepend(cardElement)
}

// Проходимся по всем элементам и создаем карточки 
initialCards.forEach(element => {
  createCard(element)
})