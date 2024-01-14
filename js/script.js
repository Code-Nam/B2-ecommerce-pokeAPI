import { display } from './components/display.js';
import { pokemonList } from './components/pokemonList.js';
import { cart } from './components/cart.js';
import { toggleMenuBurger } from './utils/toggleMenuBurger.js';

toggleMenuBurger();
display();
pokemonList();
cart();

