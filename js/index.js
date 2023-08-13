document.addEventListener("DOMContentLoaded", function () {
  const videoIframes = document.querySelectorAll(".video-box > .overlay + iframe");
  const mainSlider = document.querySelector(".slider_container");
  const videoPopup = document.getElementById("popup");
  const closePopup = document.querySelector(".popup__close");


  // Main Slider //

  const mainSwiper = new Swiper(".cards", {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  // Popup slider // 

  const popupSwiper = new Swiper(videoPopup.querySelector(".popup__slider"), {
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullet: true,
    },
  });

  videoIframes.forEach(function (iframe) {
    iframe.previousElementSibling.addEventListener("click", function () {
      console.log("clicked");
      const videoUrl = iframe.dataset.videoUrl; 
      const popupIframes = document.querySelectorAll(".popup__slider iframe");

      popupIframes.forEach(function (popupIframe, popupIndex) {
        if (popupIframe.dataset.index === iframe.dataset.index) {
          popupSwiper.slideTo(popupIndex); 
          popupIframe.src = videoUrl; // Set the video URL
        }
      });

      videoPopup.style.visibility = "visible";
      videoPopup.style.opacity = 1;
      mainSlider.style.visibility = "hidden";
      mainSlider.style.opasity = 0;
    });
  });


  closePopup.addEventListener("click", function () {
    popupSwiper.slides.forEach(function (slide) {
      slide.querySelector("iframe").src = "";
    });
    videoPopup.style.visibility = "hidden";
    videoPopup.style.opacity = 0;
    mainSlider.style.visibility = "visible";
    mainSlider.style.opasity = 1;
  });
});

