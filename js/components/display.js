import { fetchAPI } from "../utils/pokeAPI.js";

export const display = () => {
	const display = document.querySelector(".display");
	const pikachu = fetchAPI("https://pokeapi.co/api/v2/pokemon/pikachu");
	const masterBall = fetchAPI("https://pokeapi.co/api/v2/item/master-ball");

	//! Promise all to wait for all promises to be resolved before displaying the data
	Promise.all([pikachu, masterBall])
		.then((data) => {
			const [pikachu, masterBall] = data;
			display.innerHTML = `
        <div class="display-item">
          <p class="display-item__pretitle">Explore the possibilities</p>
          <h2 class="display-item__title">Pokemons</h2>
          <p class="display-item__description">
            Discover your perfect Pokémon companion from our selection for sale! From classic favorites to rare finds, elevate your journey with diverse options. Catch yours today and embark on thrilling adventures!
          </p>
          <a class="button">Discover now</a>
          <img src="${pikachu.sprites.front_default}" class="display-item__img" alt="pikachu">
        </div>
        <div class="display-item">
          <p class="display-item__pretitle">prepare for your adventure</p>
          <h2 class="display-item__title">Items</h2>
          <p class="display-item__description">
            Pokémon enthusiasts, explore our curated collection featuring stylish Poké Ball accessories and cozy Pikachu plush toys. Enhance your collection with high-quality merchandise, perfect for Trainers and fans alike!          
          </p>
          <a class="button">Shop now</a>
          <img src="${masterBall.sprites.default}" class="display-item__img" alt="master ball">
        </div>
      `;
		})
		.catch((error) => console.error(error));
};
