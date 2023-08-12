document.addEventListener("DOMContentLoaded", function () {
  const videoIframes = document.querySelectorAll(".swiper > .swiper-wrapper > .swiper-slide > .video-box > iframe");
  const videoPopup = document.getElementById("popup");

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
      iframe.addEventListener("click", function () {
        console.log("clicked");
        const videoUrl = iframe.dataset.videoUrl; // Get the video URL from the data attribute
        const popupIframes = document.querySelectorAll(".popup__slider iframe");
        console.log(popupIframes);

        // Loop through the popup iframes to find the corresponding slide
        popupIframes.forEach(function (popupIframe, popupIndex) {
          if (popupIframe.dataset.index === iframe.dataset.index) {
            popupSwiper.slideTo(popupIndex); // Go to the corresponding slide
            popupIframe.src = videoUrl; // Set the video URL
          }
        });

        videoPopup.style.visibility = "visible";
        videoPopup.style.opacity = 1;
      });
    });
  
  // videoIframes.forEach(function (iframe, index) {
  //   iframe.addEventListener("click", function () {
  //     const videoUrl = iframe.src;

  //     popupSwiper.slideTo(index); // Go to the corresponding slide
  //     popupSwiper.slides[index].querySelector("iframe").src = videoUrl;
  //     videoPopup.style.visibility = "visible"; 
  //     videoPopup.style.opacity = 1;
  //   });
  // });

  videoPopup.addEventListener("click", function () {
    popupSwiper.slides.forEach(function (slide) {
      slide.querySelector("iframe").src = ""; 
    });
      videoPopup.style.visibility = "hidden";
      videoPopup.style.opacity = 0;
  });
});

