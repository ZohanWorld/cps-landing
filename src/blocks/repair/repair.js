const initSlider = function () {
  const swiper = new Swiper('.swiper-repair', {
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

const sliderMenu = document.querySelector('.repair-list')
const showMore = document.querySelector('.show-more__repair')
const showMoreButton = document.querySelector('.repair__show-more')
const showMoreIcon = document.querySelector('.repair__more-icon')

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