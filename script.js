document.addEventListener("DOMContentLoaded", function() {

    const addFilmBtn = document.querySelector(".add-film-btn");
    addFilmBtn.addEventListener("click", function () {
        document.querySelector(".modal").style.display = "block"
    })

    const closeModalBtn = document.querySelector("#close-btn");
    closeModalBtn.addEventListener("click", function () {
        document.querySelector(".modal").style.display = "none"
    })

    /*
    TODO
     1. Реализовать функционал для добавления картинки через блок .file-add__choose
     что бы картинка добавлялась в input поле #img-upload
     2. По нажатию на кнопку .action-field__btn #save-btn создать все елементы для карточки и передать
        значения с полей .modal__input с .modal
     3. Реализовать функционал для добавления картинки через блок .file-add__drug-and-drop методом
         drag and drop что бы картинка добавлялась в input поле #img-upload
     4. Добавить на созданные плитки с кино кнопку удаления плитки и кнопку редактирования содержимого
        плитки.
     5. Узнать как сохранить наделанные изменения при перезагрузке страницы. И провести минимальное ревью кода.
    */
})