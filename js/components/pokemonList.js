import { addProduct } from "../utils/addProduct.js";
import { fetchAPI } from "../utils/pokeAPI.js";

export const pokemonList = () => {
	const pokemonList = document.querySelector(".pokemon-list");
  let offset = 0;
	let limit = 30;
	let NewPokemon = () =>{
    return fetchAPI(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  } 

  // Function to render data in DOM
	function renderData(data) {
    data.results.forEach((item) => {
			const id = item.url.split('/')[6];
      const pokemonCard = document.createElement("div");
      pokemonCard.classList.add("pokemon-card");
      pokemonCard.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.url.split('/')[6]}.png" alt="${item.name}">
        <p class="pokemon-item__name">${item.name}</p>
				<a href="pokemonProduct.html?=${item.name}" class="pokemon-card__link">View Details</a>
      `;
			const pokemonButtonCart = document.createElement("button");
			pokemonButtonCart.classList.add("add-to-cart");
			pokemonButtonCart.innerHTML = "Add to Cart";
			addProduct(pokemonButtonCart, id);
      pokemonList.appendChild(pokemonCard);
			pokemonCard.appendChild(pokemonButtonCart);
    })
	}

	function handleScroll() {
		if (
			// Check if user is near bottom of page
			window.innerHeight + window.scrollY >=
			document.body.offsetHeight - 100
		) {
			// Show loader and fetch more data
      offset += limit;
			NewPokemon().then((data) => {
				renderData(data);
			});
		}
	}

	// Attach scroll event listener
	window.addEventListener("scroll", handleScroll);

	// Initial load
	NewPokemon().then((data) => {
		renderData(data);
	});
};
