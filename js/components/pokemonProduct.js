import { fetchAPI } from "../utils/pokeAPI.js";

const pokemonProduct = () => {
  const pokemonProduct = document.querySelector(".pokemon-product-wrapper");
  let url = window.location.href;
  let pokemonName = url.split('=')[1];
  let NewPokemon = (pokemonName) =>{
    return fetchAPI(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  } 

  // Function to render data in DOM
  function renderData(data) {
    console.log(data);
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon-product");
    pokemonCard.innerHTML = `
      <div class="pokemon-product__img-wrapper">
        <div class="pokemon-product__img">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}">
        </div>
      </div>
      <div class="pokemon-product__description">
      <p class="pokemon-product__description__name">${data.name}</p>
      <p>Height: ${data.height}</p>
      <p>Weight: ${data.weight}</p>
      <p>Base Experience: ${data.base_experience}</p>
      <p>Abilities: ${data.abilities.map((item) => item.ability.name).join(', ')}</p>
      <p>Types: ${data.types.map((item) => item.type.name).join(', ')}</p>
      <ul>
        ${data.stats.map((item) => `<li>${item.stat.name}: ${item.base_stat}</li>`).join('')}
      </ul>
      </div>
      `;
    pokemonProduct.appendChild(pokemonCard);
  }

  // Initial load
  NewPokemon(pokemonName).then((data) => {
    renderData(data);
  });
};

pokemonProduct();