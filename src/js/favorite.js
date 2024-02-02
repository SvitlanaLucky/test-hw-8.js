import { instruments } from '../helpers/instruments';
import { common } from './common';
import { createMarkup } from '../helpers/createMarkup';
import { createModal } from '../helpers/createModal';

const list = document.querySelector('.js-list');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];

createMarkup(favorite, list);
list.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('js-info')) {
    const product = findProduct(event.target);
    createModal(product);
  }
}

function findProduct(elem) {
  const productId = Number(elem.closest('.js-card').dataset.id);
  return instruments.find(({ id }) => id === productId);
}
