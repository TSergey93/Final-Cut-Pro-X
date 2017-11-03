var picture_1 = document.getElementById("picture_1");
var picture_2 = document.getElementById("picture_2");
var mobile_menu_arrow = document.querySelector(".mobile_menu_arrow");
var nav = document.querySelector("header nav");
var modal_overlay = document.querySelector(".modal_overlay");

/*picture_1 и picture_2 отвечают за скрытие картинок*/

picture_1.addEventListener("click", function(event) {
    event.preventDefault();
    picture_1.classList.toggle("display");
});

picture_2.addEventListener("click", function(event) {
    event.preventDefault();
    picture_1.classList.toggle("display");
});

/*Функция отвечает за открытие/закрытие меню для мобильных устройств*/

mobile_menu_arrow.addEventListener("click", function(event) {
    mobile_menu_arrow.classList.toggle("mobile_menu_arrow_click");
    nav.classList.toggle("nav_mobile_click");
    modal_overlay.classList.toggle("display");
});

/*Функция отвечает за закрытие меню при клике вне его*/

modal_overlay.addEventListener("click", function(event) {
    mobile_menu_arrow.classList.toggle("mobile_menu_arrow_click");
    nav.classList.toggle("nav_mobile_click");
    modal_overlay.classList.toggle("display");
});
