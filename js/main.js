var picture_1 = document.getElementById("picture_1");
var picture_2 = document.getElementById("picture_2");

picture_1.addEventListener("click", function(event) {
    event.preventDefault();
    picture_1.classList.toggle("display");
});

picture_2.addEventListener("click", function(event) {
    event.preventDefault();
    picture_1.classList.toggle("display");
});
