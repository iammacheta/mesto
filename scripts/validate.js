// Функция для показа span элемента с ошибкой
function showInputError(formElement, inputElement, errorMessage, classSet) {
    const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.add(classSet.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(classSet.errorClass);
};

// Функция для скрытия span элемента с ошибкой
function hideInputError(formElement, inputElement, classSet) {
    const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.remove(classSet.inputErrorClass);
    errorElement.classList.remove(classSet.errorClass);
    errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
function checkInputValidity(formElement, inputElement, classSet) {
    if (!inputElement.validity.valid) {
        // Если поле не проходит валидацию, покажем ошибку
        showInputError(formElement, inputElement, inputElement.validationMessage, classSet);
    } else {
        // Если проходит, скроем
        hideInputError(formElement, inputElement, classSet);
    }
};

// Добавление обработчиков события input всем полям формы
function setEventListeners(formElement, classSet) {
    const inputList = Array.from(formElement.querySelectorAll(classSet.inputSelector));
    const buttonElement = formElement.querySelector(classSet.submitButtonSelector)

    toggleButtonState(inputList, buttonElement, classSet);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, classSet);
            toggleButtonState(inputList, buttonElement, classSet);
        });
    });
};

// Добавление обработчиков всем формам
function enableValidation(classSet) {
    const formList = Array.from(document.querySelectorAll(classSet.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement, classSet);
    });
};


// Функция для проверки наличия невалидного поля
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid
    })
}

// Функция активации/деактивации кнопки
function toggleButtonState(inputList, buttonElement, classSet) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(classSet.inactiveButtonClass)
        buttonElement.setAttribute('disabled', 'disabled')
    } else {
        buttonElement.classList.remove(classSet.inactiveButtonClass)
        buttonElement.removeAttribute('disabled')
    }
}

// Включение валидации. Все настройки передаются при вызове
enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error_visible'
})