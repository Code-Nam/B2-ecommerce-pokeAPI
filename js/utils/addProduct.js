export const addProduct = (buttonsCart, id) => {
	buttonsCart.addEventListener("click", () => {
		const cart = JSON.parse(localStorage.getItem("cart")) || [];
		const pokemonName =
			buttonsCart.previousElementSibling.previousElementSibling.textContent;
		const pokemonImg =
			buttonsCart.previousElementSibling.previousElementSibling
				.previousElementSibling.src;
		const pokemonPrice = Math.floor(Math.random() * 100);
		const pokemon = {
			id: id,
			name: pokemonName,
			img: pokemonImg,
			price: pokemonPrice,
		};

		const addedProduct = confirm(`Add ${pokemonName} to cart?`);

		if (!addedProduct) return;
		alert("Item added to cart!");
		cart.push(pokemon);
		localStorage.setItem("cart", JSON.stringify(cart));
	});
};

export const addSingleProduct = (buttonCart, id) => {
	buttonCart.addEventListener("click", () => {
		const cart = JSON.parse(localStorage.getItem("cart")) || [];
		const pokemonName =
			buttonCart.previousElementSibling.previousElementSibling
				.previousElementSibling.previousElementSibling.textContent;
		const pokemonImg =
			buttonCart.previousElementSibling.previousElementSibling
				.previousElementSibling.children[0].src;
		const pokemonPrice = Math.floor(Math.random() * 100);
		const pokemon = {
			id: id,
			name: pokemonName,
			img: pokemonImg,
			price: pokemonPrice,
		};

		const addedProduct = confirm(`Add ${pokemonName} to cart?`);

		if (addedProduct) {
			cart.push(pokemon);
			localStorage.setItem("cart", JSON.stringify(cart));
		}
	});
};
