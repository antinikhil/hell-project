const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {

button.addEventListener("click", () => {

alert("Added to Cart!");

});

});

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.background = "#000";

}else{

navbar.style.background = "rgba(0,0,0,.8)";

}

});