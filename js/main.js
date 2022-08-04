var elHeaderMenuOpenBtn = document.querySelector(".js-menu-open-btn");
var elHeader = document.querySelector(".site-header");

elHeaderMenuOpenBtn.addEventListener("click", function(){
    elHeader.classList.toggle("site-header--open");
})
