function changeSlide(slideNumber) {
  for (var i = 1; i <= 4; i++) {
    var currentSlideId = "slide-" + i;
    var currentSlide = document.getElementById(currentSlideId);
    currentSlide.style.backgroundImage = "url('/Spid/img/slide-" + slideNumber + ".png')";

    var currentNavItem = document.getElementById("nav-item-" + i);
    if (i === slideNumber) {
      currentNavItem.classList.add("selected");
    } else {
      currentNavItem.classList.remove("selected");
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if(document.location.pathname == "/Spid/html/pubblicaAmministrazione.html") {
    changeSlide(1);
  }
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpointes: {
    0:{
      slidesPerView: 1,
    },
    520:{
      slidesPerView: 2,
    },
    950:{
      slidesPerView: 3,
    },
  },

});

