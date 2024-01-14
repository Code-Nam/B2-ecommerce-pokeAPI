import { addSingleProduct } from "../utils/addProduct.js";
import { fetchAPI } from "../utils/pokeAPI.js";
import { toggleMenuBurger } from "../utils/toggleMenuBurger.js";

const itemProduct = () => {
  const itemProduct = document.querySelector(".item-product-wrapper");
  let url = window.location.href;
  let itemName = url.split('=')[1];
  let Newitem = (itemName) =>{
    return fetchAPI(`https://pokeapi.co/api/v2/item/${itemName}`);
  } 

  // Function to render data in DOM
  function renderData(data) {
    const id = data.id;
    const itemCard = document.createElement("div");
    itemCard.classList.add("item-product");
    itemCard.innerHTML = `
      <p class="item-product__description__name">${data.name}</p>
      <div class="item-product__img">
        <img src="${data.sprites.default}" alt="${data.name}">
      </div>
      <div class="item-product__description">
      <p>Category: ${data.category.name}</p>
      <p>Effect: ${data.effect_entries[0].effect}</p>
      <p>Attributes: ${data.attributes.map((item) => item.name).join(', ')}</p>
      <p>Flavor Text: ${data.flavor_text_entries[0].text}</p>
      </div>
      <a href="item.html" class="pokemon-card__link">Go back</a>
      `;
    const itemButtonCart = document.createElement("button");
    itemButtonCart.classList.add("add-to-cart");
    itemButtonCart.innerHTML = "Add to Cart";
    addSingleProduct(itemButtonCart, id);
    itemProduct.appendChild(itemCard);
    itemCard.appendChild(itemButtonCart);
  }

  // Initial load
  Newitem(itemName).then((data) => {
    renderData(data);
  });
};

itemProduct();
toggleMenuBurger();