// hamburger menu
let nav = document.getElementById("tNav");
let ul = document.getElementById("navList");
function menu() {
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
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
  spaceBetween: 30,
  breakpoints: {
    280: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*
 * -- Get image from api for hero slider
 * ** USE XMLHttpRequest
 */
let slider = document.getElementById("sliders");
function sliderImage() {
  var xhttp = new XMLHttpRequest();
  xhttp.responseType = JSON;
  xhttp.open("GET", "https://picsum.photos/v2/list?limit=100", true);
  xhttp.onload = function () {
    if (this.status == 200) {
      let image = JSON.parse(this.responseText);
      var output = "";
      for (let i = 0; i < 3; i++) {
        output += `
            <div class="swiper-slide"><img src="${image[Math.floor(Math.random() * 99)].download_url}" alt=""></div>
        `;
      }
      document.getElementById("sWrapper").innerHTML = output;
      // console.log("The request succeeded.");
    } else if (this.status == 404 || this.status == 403) {
      console.log("Error 403 OR 404");
    } else {
      console.log("Error is: " + this.status);
    }
  };
  xhttp.send();
}
// sliderImage();

/*
 * -- Get image from api for hero slider
 * -- USE fetch
 * -- for document use https://picsum.photos/
 */
function onGet() {
  const url = "https://picsum.photos/v2/list?limit=100";
  var headers = {};

  fetch(url, {
    method: "GET",
    mode: "cors",
    headers: headers,
  })
    .then((response) => {
      if (!response.ok) {
        console.log(response);
        throw new Error(response.error);
      }
      return response.json();
    })
    .then((data) => {
      var output = "";
      for (let i = 0; i < 3; i++) {
        output += `
            <div class="swiper-slide"><img src="${data[Math.floor(Math.random() * 99)].download_url}" alt=""></div>
        `;
      }
      document.getElementById("sWrapper").innerHTML = output;
    })
    .catch(function (error) {
      console.log(error);
    });
}
onGet();

// play embed video
let videoPlayer = document.querySelector(".video-play-btn.embed-play");
if (videoPlayer) {
  videoPlayer.addEventListener("click", playVideo);
  function playVideo() {
    var embedVideoContainer = document.querySelector(".video-embed-content");
    embedVideoContainer.classList.add("show-video");
  }
}

/*
 * -- active submenu by click insted of hover
 */
document.querySelectorAll(".nav-item").forEach((el) => el.addEventListener("click", menus));
function menus() {
  let subMenus = document.querySelectorAll(".sub-menus");
  let uls = this.getElementsByClassName("sub-menus");
  if (uls[0].style.display === "block") {
    uls[0].style.display = "";
  } else {
    subMenus.forEach((element, index) => (subMenus[index].style.display = ""));
    uls[0].style.display = "block";
  }
}

/*
 * Back to top
 */
window.addEventListener("scroll", function () {
  let backToTop = document.getElementById("back-to-top");
  scrollpos = window.scrollY;
  if (scrollpos > 300) {
    backToTop.classList.add("show-back-to-top");
    backToTop.addEventListener("click", function () {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
  } else {
    backToTop.classList.remove("show-back-to-top");
  }
});
