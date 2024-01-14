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
      <p class="">${item.name}</p>
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

	const checkOut = document.querySelector(".checkout-items");
	const totalPrice = products.reduce((acc, item) => acc + item.price, 0);
	const total = document.createElement("div");
	total.classList.add("total");
	total.innerHTML = `
    <p>Total: $ ${totalPrice}</p>
  `;

	const checkOutButton = document.createElement("button");
	checkOutButton.classList.add("checkout-button");
	checkOutButton.innerHTML = "Checkout";

	checkOutButton.addEventListener("click", () => {
		const userConfirmation = confirm("Are you sure you want to checkout?");

		if (!userConfirmation) return;
		alert("Thank you for your purchase!");
		localStorage.removeItem("cart");
		location.reload();
	});
	checkOut.appendChild(total);
	checkOut.appendChild(checkOutButton);
};
