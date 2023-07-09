import Swiper from 'swiper';
import '../../node_modules/swiper/swiper.scss';
import { supportItems } from './support-items';

const supportListEl = document.querySelector('.js-support_list');
const upBtn = document.querySelector('.swiper-up');

upBtn.addEventListener('click', onNext);

function findImage(name, arrImgFounds) {
return arrImgFounds.find(found => found.title === name);
};

function renderMarkup(arr) {
  supportListEl.insertAdjacentHTML('beforeend', arr);
};

const markUp = supportItems
  .map(({ title, url }, index) => {
    const number = (index + 1).toString().padStart(2, '0');
    const imgfinded = findImage(title, supportItems );
    const img = imgfinded.img;    

    return `<div class="support__item swiper-slide">
  <a href="${url}" class="support__link" aria-label="${title}" target="_blank" rel="noopener norefferer nofollow">
  <p class="support__number">${number}</p>
  <img class="support__img" src="${img}" data-source="${url}" alt="${title}"/>
  </a></div>`;
  })
  .join('');

renderMarkup(markUp);
renderMarkup(markUp);

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

function onNext() {
  swiper.slideNext(250);
}