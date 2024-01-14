import { removeProduct } from "../utils/removeProduct.js";

export const cart = () => {
  const selectedProducts = document.querySelector(".selected-products");
  const products = JSON.parse(localStorage.getItem("cart")) || [];
  const cartWrapper = document.createElement("div");
  cartWrapper.classList.add("cart-wrapper");

  products.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <p>${item.name}</p>
      <p>$ ${item.price}</p>
    `;

    const removeItemButton = document.createElement("button");
    removeItemButton.classList.add("remove-item");
    removeItemButton.innerHTML = "Remove";
    removeProduct(removeItemButton, item.id);

    cartItem.appendChild(removeItemButton);
    cartWrapper.appendChild(cartItem);
  });

  selectedProducts.appendChild(cartWrapper);
}