document.addEventListener("DOMContentLoaded", function (node, child) {

    const openModalBtn = document.querySelector(".add-film-btn");
    openModalBtn.addEventListener("click", function () {
        document.querySelector(".modal").style.display = "block";
    })

    const closeModalBtn = document.querySelector("#close-btn");
    closeModalBtn.addEventListener("click", function () {
        document.querySelector(".modal").style.display = "none";
    })

    /*
    TODO
     1. Реализовать функционал для добавления картинки через блок .file-add__choose
     что бы картинка добавлялась в input поле #img-upload и что бы появлялся предпросмотр загруженой картинки - DONE
     2. По нажатию на кнопку .action-field__btn #save-btn создать все елементы для карточки и передать
        значения с полей .modal__input с .modal
     3. Реализовать функционал для добавления картинки через блок .file-add__drug-and-drop методом
         drag and drop что бы картинка добавлялась в input поле #img-upload
     4. Добавить на созданные плитки с кино кнопку удаления плитки и кнопку редактирования содержимого
        плитки.
     5. Узнать как сохранить наделанные изменения при перезагрузке страницы. И провести минимальное ревью кода.
    */


    const imgUploadInput = document.querySelector("#img-upload");
    const imgUploadCustomInput = document.querySelector(".file-add__choose");
    imgUploadCustomInput.addEventListener("click",function () {
        imgUploadInput.click();
    })

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

})