var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 25,
  slidesPerColumnFill: 'row',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});