// Получаем элементы
const openModalBtn = document.getElementById("openModalBtn");
const myModal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeModalBtn");

// Открытие модального окна
openModalBtn.addEventListener("click", function() {
    myModal.classList.add("show");
});

// Закрытие модального окна
closeModalBtn.addEventListener("click", function() {
    myModal.classList.remove("show");
});
