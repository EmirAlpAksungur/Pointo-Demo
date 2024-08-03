$( document ).ready(() => {
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
    Fancybox.bind('[data-fancybox="gallery"]', {
      animated: false,
      showClass: false,
      hideClass: false,
    
      Toolbar: false,
    
      closeButton: "top",
      click: false,
      dragToClose: false,
    
      Carousel: {
        // Disable content slide animation
        friction: 0,
    
        // Disable touch guestures
        Panzoom: {
          touch: false,
        },
    
        Navigation: false,
      },
    
      Image: {
        // Disable animation from/to thumbnail on start/close
        zoom: false,
    
        // Disable zoom on scroll event
        wheel: false,
    
        // Disable zoom on image click
        click: false,
    
        // Fit image horizontally only
        fit: "contain-w",
      },
    
      // Center thumbnails only if draggable
      Thumbs: {
        minScreenHeight: 0,
        Carousel: {
          center: function () {
            return this.elemDimWidth > this.wrapDimWidth;
          },
        },
      },
    });
  });
  
  
  
  
  
  
  
  