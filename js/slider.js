const swiper = new Swiper('.slider-container', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    effect: 'slide',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  