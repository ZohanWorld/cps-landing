const initSlider = function () {
  const swiper = new Swiper('.swiper-price', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination'
    },

    centeredSlides: true,

    slidesPerView: 1.1,

    breakpoints: {
      320: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 1.5
      },
      640: {
        slidesPerView: 2
      }
    }
  })
}

initSlider()