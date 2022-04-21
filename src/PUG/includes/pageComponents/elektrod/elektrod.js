const productDescrListItems = document.querySelectorAll('.product-descr__list-item');
// eslint-disable-next-line no-restricted-syntax
if (productDescrListItems !== null) {
  // eslint-disable-next-line no-restricted-syntax
  for (const listItem of productDescrListItems) {
    // eslint-disable-next-line no-loop-func
    listItem.addEventListener('click', (e) => {
      const targetItem = e.target;
      if (targetItem.closest('.product-descr__parameters-item')) {
        targetItem
          .closest('.product-descr__parameters-item')
          .classList.toggle('product-descr__parameters-item--active');
      }
    });
  }
}

const productName = document.querySelector('.product-name__descrp');
const requestPopUpTitle = document.getElementById('popUpTitle');

if (productName !== null && requestPopUpTitle !== null) {
  requestPopUpTitle.textContent += ` ${productName.textContent}`;
}

const openPopUpButtons = document.querySelectorAll('[data-model-target]');
const closePopUpButtons = document.querySelectorAll('.js-close-pop-up');
const overlay = document.getElementById('overlay');

const openPopUp = (popUp) => {
  popUp.classList.add('request-pop-up--active');
  overlay.classList.add('overlay--active');
};

const closePopUp = (popUp) => {
  popUp.classList.remove('request-pop-up--active');
  overlay.classList.remove('overlay--active');
};

if (openPopUpButtons !== null && closePopUpButtons !== null) {
  // eslint-disable-next-line no-restricted-syntax
  for (const openPopUpButton of openPopUpButtons) {
    openPopUpButton.addEventListener('click', () => {
      const popUp = document.querySelector(openPopUpButton.dataset.modelTarget); // #requestPopUp
      if (popUp !== null) {
        openPopUp(popUp);
      }
    });
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const closePopUpButton of closePopUpButtons) {
    closePopUpButton.addEventListener('click', () => {
      const popUp = closePopUpButton.closest('.js-pop-up');
      /* js-pop-up - universal class showing all pop-ups */
      if (popUp !== null) {
        closePopUp(popUp);
      }
    });
  }
}
