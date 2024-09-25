/*
   TODO
    1. Реализовать функционал для добавления картинки через блок .file-add__choose
    что бы картинка добавлялась в input поле #img-upload и что бы появлялся предпросмотр загруженой картинки - DONE
    2. По нажатию на кнопку .action-field__btn #save-btn создать все елементы для карточки и передать
       значения с полей .modal__input с .modal
    2.1 Создать функция которая упоковывает все данные с модалки в объект
    2.2 Создать фабрику которая будет получать обьект и с него делать плитку
    3. Реализовать функционал для добавления картинки через блок .file-add__drug-and-drop методом
        drag and drop что бы картинка добавлялась в input поле #img-upload
    4. Добавить на созданные плитки с кино кнопку удаления плитки и кнопку редактирования содержимого
       плитки.
    5. Узнать как сохранить наделанные изменения при перезагрузке страницы. И провести минимальное ревью кода.
   */
document.addEventListener("DOMContentLoaded", function (node, child) {

    /* по нажатию на кнопку ".add-film-btn" отображаем модальное окно для добавления фильма */
    const openModalBtn = document.querySelector(".add-film-btn");
    openModalBtn.addEventListener("click", function () {
        document.querySelector(".modal").style.display = "block";
    })

    /* по нажатию на кнопку #close-btn закрываем модальное окно для добавления фильма без сохранения данных*/
    const closeModalBtn = document.querySelector("#close-btn");
    closeModalBtn.addEventListener("click", function () {
        document.querySelector(".modal").style.display = "none";
    })

    /* при клике на кастомный инпут #img-upload передает данные в стандартный инпут .file-add__choose*/
    const imgUploadInput = document.querySelector("#img-upload");
    const imgUploadCustomInput = document.querySelector(".file-add__choose");
    imgUploadCustomInput.addEventListener("click",function () {
        imgUploadInput.click();
    })

    /* превью загруженного фото в #img-upload */
    imgUploadInput.addEventListener("change", function(event) {
        let uploadedImg = event.target.files[0];
        if (uploadedImg) {
            let photoPreview = document.querySelector(".photo-preview");
            let photoPreviewImg  = document.querySelector(".photo-preview__img");
            let photoPreviewParagraph = document.querySelector(".photo-preview__name");

            photoPreview.style.display = "flex";
            photoPreviewImg.src = window.URL.createObjectURL(uploadedImg)
            photoPreviewParagraph.textContent = uploadedImg.name;
            document.querySelector(".file-add").appendChild(photoPreview);
        }
    })

    /* собирает введенные данные в модальное окно и превращает в объект по нажатию кнопки сейв*/
        const saveFilmButton = document.querySelector("#save-btn");
            saveFilmButton.addEventListener("click", function () {

        })

    /* Берет данные с выбранного input type=text и отдает в переменную */
        function getInputData(textInputId) {
            const inputField = document.querySelector(textInputId);
            return (inputField.value);
    }

    /*возвращает URL фото загруженного в input type=file*/
        function getInputImgSrc (fileInputId){
            const inputImgField = document.querySelector(fileInputId).files[0];
            return (window.URL.createObjectURL(inputImgField));
        }

    /*создать класс ПЛитка который будет принимать дефолтные значения с модалки и у нее будет функция создания плитки функция получения данных с плитки для редактирования и метод очищения модального окна*/

    /*function inputDataToObject () {
        let name = getInputData("#name");
        let genre = getInputData("#genre");
        let director = getInputData("#director");
        let description = getInputData("#description");
        let comment = getInputData("#comment");
        let photo = getInputImgSrc("#img-upload")

    }*/
})