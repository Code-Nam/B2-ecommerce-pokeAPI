import { fetchAPI } from "../utils/pokeAPI";

export const carousel = () => {
  const carousel = document.querySelector('carousel-home-page')
  const pikachu = fetchAPI('https://pokeapi.co/api/v2/pokemon/pikachu');
  const masterBall = fetchAPI('https.//pokeapi.co/api/v2/item/master-ball');
  Promise.all([pikachu, masterBall])
}