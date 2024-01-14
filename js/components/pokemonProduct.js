import { addSingleProduct } from "../utils/addProduct.js";
import { fetchAPI } from "../utils/pokeAPI.js";

const pokemonProduct = () => {
	const pokemonProduct = document.querySelector(".pokemon-product-wrapper");
	let url = window.location.href;
	let pokemonName = url.split("=")[1];
	let NewPokemon = (pokemonName) => {
		return fetchAPI(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
	};

	// Function to render data in DOM
	function renderData(data) {
		const id = data.id;
		const pokemonCard = document.createElement("div");
		pokemonCard.classList.add("pokemon-product");
		pokemonCard.innerHTML = `
      <p class="pokemon-product__description__name">${data.name}</p>
      <div class="pokemon-product__img">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
					data.id
				}.png" alt="${data.name}">
      </div>
      <div class="pokemon-product__description">
        <p>Height: ${data.height}</p>
        <p>Weight: ${data.weight}</p>
        <p>Base Experience: ${data.base_experience}</p>
        <p>Abilities: ${data.abilities
					.map((item) => item.ability.name)
					.join(", ")}</p>
        <p>Types: ${data.types.map((item) => item.type.name).join(", ")}</p>
        <ul>
          ${data.stats
						.map((item) => `<li>${item.stat.name}: ${item.base_stat}</li>`)
						.join("")}
        </ul>
      </div>
      <a href="pokemon.html" class="pokemon-card__link">Go back</a>
      `;
		const pokemonButtonCart = document.createElement("button");
		pokemonButtonCart.classList.add("add-to-cart");
		pokemonButtonCart.innerHTML = "Add to Cart";
		addSingleProduct(pokemonButtonCart, id);
		pokemonProduct.appendChild(pokemonCard);
		pokemonCard.appendChild(pokemonButtonCart);
	}

	// Initial load
	NewPokemon(pokemonName).then((data) => {
		renderData(data);
	});
};

pokemonProduct();
