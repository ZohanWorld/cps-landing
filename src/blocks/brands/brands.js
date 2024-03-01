const initSlider = function () {
  const swiper = new Swiper('.swiper--brands', {
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
        slidesPerView: 1.5
      },
      480: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 3
      }
    }
  })
}

initSlider()

const sliderMenu = document.querySelector('.slider-menu__links')
const showMore = document.querySelector('.show-more__wrapper')
const showMoreButton = document.querySelector('.slider-menu__show-more')
const showMoreIcon = document.querySelector('.slider-menu__more-icon')

showMore.addEventListener('click', function () {
  sliderMenu.classList.toggle('hide-menu')

  if (showMoreButton.textContent == 'Показать все') {
    showMoreButton.textContent = 'Скрыть'
    showMoreIcon.style.transform = 'rotate(180deg)'
  } else {
    showMoreButton.textContent = 'Показать все'
    showMoreIcon.style.transform = 'rotate(0deg)'
  }
})
