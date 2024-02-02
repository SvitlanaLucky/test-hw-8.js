function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name }) => `<li data-id="${id}" class="js-card">
        <img src="${img}" alt="${name}" />
        <h2>${name}</h2>
        <p><a class="js-info" href="#">More information</a></p>
        <div>
          <button class="js-favorite">Add to favorite</button>
          <button class="js-basket">Add to basket</button>
        </div>
      </li>`
      )
      .join('');
  } else {
    markup = `<li>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0Qlk_ZUGbgoDzniVe3yPA0RIRXXThhc1tQ&usqp=CAU" alt="404"/>
      </li>`;
  }

  list.innerHTML = markup;
}

export { createMarkup };
