import vars from '../_vars';
import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

if (vars.$portfolioSlider) {
  const portfolioSlider = new Swiper(vars.$portfolioSlider, {
    loop: true,
    navigation: {
      nextEl: document.querySelector('.portfolio__navigation-next'),
      prevEl: document.querySelector('.portfolio__navigation-prev'),
    },
  })
}