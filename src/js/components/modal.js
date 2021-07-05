import vars from '../_vars';
import Modal from 'bootstrap/js/dist/modal';
import Inputmask from 'inputmask';

const orderModal = new Modal(vars.$orderModal);
const thanksModal = new Modal(vars.$thanksModal);

Inputmask({ "mask": "+38 (099) 999-99-99" }).mask(vars.$inputTypeTel, {
  clearMaskOnLostFocus: true
});

if (vars.$seviceButtons.length > 0) {
  vars.$seviceButtons.forEach(el => {
    el.addEventListener('click', (e) => {
      const serviceName = e.target.closest('.services__item').querySelector('.service__name').textContent;

      vars.$orderModal.querySelector('.modal__title').textContent = `Я хочу ${serviceName}`;
      vars.$orderModal.querySelector('input[name="packet"]').value = serviceName;

      orderModal.show();
    })
  })
}

vars.$orderModalForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    name: e.target.name.value,
    phone: e.target.phone.value,
    link: e.target.instagram_link.value,
    packet: e.target.packet.value,
    form: 'order'
  };

  ga('send', 'event', 'send-form', 'order-form')

  fetch('/mail.php', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      console.log(response)

      if (response.ok) {
        setTimeout(() => {
          e.target.reset();
          orderModal.hide();
          thanksModal.show();
        }, 500)
      }
    })
    .catch(e => console.log(e))
})

vars.$targetCustomizationButton.addEventListener('click', (e) => {
  vars.$orderModal.querySelector('.modal__title').textContent = `Я хочу таргетированную рекламу`;
  vars.$orderModal.querySelector('input[name="packet"]').value = 'таргетированная реклама';

  orderModal.show();
})

vars.$ctaForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    name: e.target.name.value,
    phone: e.target.phone.value,
    link: e.target.link.value,
    form: 'cta'
  }

  ga('send', 'event', 'send-form', 'cta-form')

  fetch('/mail.php', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      console.log(response)

      if (response.ok) {
        setTimeout(() => {
          e.target.reset();
          orderModal.hide();
          thanksModal.show();
        }, 500)
      }
    })
    .catch(e => console.log(e))
})