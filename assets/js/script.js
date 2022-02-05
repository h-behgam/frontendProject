// hamburger menu
let nav = document.getElementById("tNav");
let ul = document.getElementById("navList");
function menu() {
  ul.classList.toggle("opened");
}
nav.addEventListener("click", menu);

// hero slider
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// product slider
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
//   centeredSlides: true,
  spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction",
//   },
  breakpoints: {
    360: {
    slidesPerView: 1,
    // spaceBetween: 40,
  },
    768: {
        slidesPerView: 2,
        // spaceBetween: 30,
    },
    1024: {
    slidesPerView: 3,
    // spaceBetween: -40,
  },
  1200: {
    slidesPerView: 3,
    // spaceBetween: 10,
  },
},
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Get image from api for hero slider
let slider = document.getElementById("sliders");
// console.log(slider);
// slider.addEventListener('load', sliderImage);
function sliderImage() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://coffee.alexflipnote.dev/random.json", true);
  xhttp.onload = function () {
    if (this.status == 200) {
      let image = JSON.parse(this.responseText);
      var output = "";
      for (let i = 0; i < 3; i++) {
        output += `
            <div class="swiper-slide"><img src="${image.file}" alt=""></div>
        `;
      }
      document.getElementById("sWrapper").innerHTML = output;
      console.log("The request succeeded.");
    } else if (this.status == 404 || this.status == 403) {
      console.log("Error 403 OR 404");
    } else {
      console.log("Error is: " + this.status);
    }
  };
  xhttp.send();
}
sliderImage();



(function() {

    // play embed video
    var playEmbedBtn = document.querySelector('.video-play-btn.embed-play');
    if (playEmbedBtn) {
        playEmbedBtn.onclick = function openModal(e) {
            var embedVideoContainer = document.querySelector('.video-embed-content');
            embedVideoContainer.classList.add('show-video');
        };
    }
})();
// window.addEventListener('scroll', function(){
//     //Here you forgot to update the value
//     scrollpos = window.scrollY;

//     if(scrollpos > 10){
//         this.alert(11111);
//     }
//     else {
//         remove_class_on_scroll();
//     }
//     console.log(scrollpos);
// });
