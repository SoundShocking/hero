import vars from '../_vars';
import { scrollTo } from '../functions/smooth-scroll';

vars.$navLinks.forEach(el => {
  el.addEventListener('click', e => {
    const href = e.target.getAttribute('href');
    if (href) {
      e.preventDefault();

      scrollTo(document.querySelector(href));
    }
  })
});

vars.$navMobileLinks.forEach(el => {
  el.addEventListener('click', e => {
    const href = e.target.getAttribute('href');
    if (href) {
      e.preventDefault();

      document.body.style.overflow = 'visible';
      vars.$navMobile.classList.remove('nav-mobile--show');
      scrollTo(document.querySelector(href));
    }
  })
});

vars.$headerBars.addEventListener('click', (e) => {
  vars.$navMobile.classList.add('nav-mobile--show');
  document.body.style.overflow = 'hidden';
})

vars.$navMobileClose.addEventListener('click', (e) => {
  vars.$navMobile.classList.remove('nav-mobile--show');
  document.body.style.overflow = 'visible';
})

vars.$menuFooterLinks.forEach(el => {
  el.addEventListener('click', e => {
    const href = e.target.getAttribute('href');
    if (href) {
      e.preventDefault();

      scrollTo(document.querySelector(href));
    }
  })
})