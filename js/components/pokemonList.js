import { fetchAPI } from "../utils/pokeAPI.js";

export const pokemonList = () => {
	const pokemonList = document.querySelector(".pokemon-list");
  let offset = 0;
	let limit = 20;
	let NewPokemon = (offset) =>{
    return fetchAPI(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  } 

  // Function to render data in DOM
	function renderData(data) {
    data.results.forEach((item) => {
      const pokemonCard = document.createElement("div");
      pokemonCard.classList.add("pokemon-card");
      pokemonCard.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.url.split('/')[6]}.png" alt="${item.name}">
        <p class="pokemon-item__name">${item.name}</p>
				<a href="product.html?=${item.name}" class="pokemon-item__link">View Details</a>
      `;
      pokemonList.appendChild(pokemonCard);
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
			NewPokemon(offset).then((data) => {
				renderData(data);
			});
		}
	}

	// Attach scroll event listener
	window.addEventListener("scroll", handleScroll);

	// Initial load
	NewPokemon(offset).then((data) => {
		renderData(data);
	});
};
