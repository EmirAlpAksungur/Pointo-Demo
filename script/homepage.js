$( document ).ready(() => {
  var headerswiper = new Swiper(".headerswiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
  });
  var sectionprofswiper = new Swiper(".section-prof-swiper", {
    loop:true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",      
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 60,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1279: { 
        slidesPerView: 3,
        spaceBetween: 60,
      },    
    },
  });
  var sirketlogoswiper = new Swiper(".sirket-logo-swiper", {
    slidesPerView: 7,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      400: { 
        slidesPerView: 3,
        spaceBetween: 60,
      },
      768: { 
        slidesPerView: 4,
        spaceBetween: 20,
      }, 
      1229: { 
        slidesPerView: 6,
        spaceBetween: 30,
      }, 
      1537: { 
        slidesPerView: 7,
        spaceBetween: 30,
      },    
    },
  });
});







