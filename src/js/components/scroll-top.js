import vars from '../_vars';
import { scrollTo } from '../functions/smooth-scroll';
import throttle from 'lodash/throttle';

document.addEventListener('scroll', throttle(e => {
  if (pageYOffset >= window.innerHeight) {
    vars.$scrollTop.classList.add('scroll-top--show')
  } else {
    vars.$scrollTop.classList.remove('scroll-top--show')
  }
}, 500));

vars.$scrollTop.addEventListener('click', (e) => {
  scrollTo(vars.$wrapper);
})