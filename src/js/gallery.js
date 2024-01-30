import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basiclightbox.min.css';

const instruments = [
  {
    id: 1,
    img: 'https://static.dnipro-m.ua/cache/products/5691/thumb_191584.jpg',
    name: 'Дриль-шуроповерт',
    price: 3198,
    description: 'Акумуляторний дриль-шуруповерт Dnipro-M CD-12CX Compact',
  },
  {
    id: 2,
    img: 'https://static.dnipro-m.ua/cache/products/5885/cart_list_301952.jpg',
    name: 'Шліфмашина',
    price: 3297,
    description:
      'Акумуляторна шліфмашина Dnipro-M DGA-201BC Ultra (без АКБ і ЗП)',
  },
  {
    id: 3,
    img: 'https://static.dnipro-m.ua/cache/products/5096/cart_list_303379.jpg',
    name: 'Перфоратор',
    price: 15999,
    description: 'Перфоратор бочковий Dnipro-M BH-40',
  },
  {
    id: 4,
    img: 'https://static.dnipro-m.ua/cache/products/4418/cart_list_301824.jpg',
    name: 'Дриль',
    price: 1398,
    description: 'Дриль безударний Dnipro-M ND-45',
  },
  {
    id: 5,
    img: 'https://static.dnipro-m.ua/cache/products/4209/cart_list_311205.jpg',
    name: 'Фрезер',
    price: 3333,
    description: 'Фрезер Dnipro-M ЕR-120S',
  },
  {
    id: 6,
    img: 'https://static.dnipro-m.ua/cache/products/6531/cart_list_308947.jpg',
    name: 'Мотокоса',
    price: 7998,
    description: 'Мотокоса Dnipro-M 50RX',
  },
  {
    id: 7,
    img: 'https://static.dnipro-m.ua/cache/products/6034/cart_list_196122.jpg',
    name: 'Електропила',
    price: 3999,
    description: 'Електропила ланцюгова Dnipro-M DSE-24DS + Олива Dnipro-M',
  },
  {
    id: 8,
    img: 'https://static.dnipro-m.ua/cache/products/6053/cart_list_301883.jpg',
    name: 'Повітродувка',
    price: 1797,
    description: 'Акумуляторна повітродувка Dnipro-M DVB-200 (без АКБ та ЗП)',
  },
];

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ id, img, name }) => `<li data-id="${id}" class="js-card">
        <img src="${img}" alt="${name}" />
        <h2>${name}</h2>
        <p><a class="js-info" href="#">More information</a></p>
        <div>
          <button>Add to favorite</button>
          <button>Add to basket</button>
        </div>
      </li>`
    )
    .join('');

  list.innerHTML = markup;
}

list.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('js-info')) {
    const { id } = event.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
    const instance = basicLightbox.create(`
	<div class="modal">
        <img src="${product.img}" alt="${product.name}"  width="200"/>
        <h2>${product.name}</h2>
        <h3>${product.price} грн</h3>
        <p>${product.description}</p>
        <div>
          <button>Add to favorite</button>
          <button>Add to basket</button>
        </div>
      </div>
`);
    instance.show();
  }
}

createMarkup(instruments);

function findProduct(productId) {
  return instruments.find(({ id }) => id === productId);
}
