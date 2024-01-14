import { addProduct } from "../utils/addProduct.js";
import { fetchAPI } from "../utils/pokeAPI.js";
import { toggleMenuBurger } from "../utils/toggleMenuBurger.js";

export const itemList = () => {
  const itemList = document.querySelector(".item-list");
  let offset = 0;
	let limit = 30;
  let NewItem = () => {
    return fetchAPI(`https://pokeapi.co/api/v2/item?limit=${limit}&offset=${offset}`);
  };
    // Function to render data in DOM
	function renderData(data) {
    data.results.forEach((item) => {
      const itemData = fetchAPI(`https://pokeapi.co/api/v2/item/${item.name}`);
      const id = item.url.split('/')[6];
      Promise.all([itemData]).then((data) => {
        const [itemData] = data;

        const itemCard = document.createElement("div");
        itemCard.classList.add("item-card");
        itemCard.innerHTML = `
          <img src="${itemData.sprites.default}" alt="${itemData.name}">
          <p class="item-item__name">${itemData.name}</p>
          <a href="itemProduct.html?=${itemData.name}" class="item-card__link">View Details</a>
        `;
        itemList.appendChild(itemCard);
        
        const itemButtonCart = document.createElement("button");
        itemButtonCart.classList.add("add-to-cart");
        itemButtonCart.innerHTML = "Add to Cart";
        addProduct(itemButtonCart, id);
        itemCard.appendChild(itemButtonCart);
      })

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
			NewItem().then((data) => {
				renderData(data);
			});
		}
	}

  
	// Attach scroll event listener
	window.addEventListener("scroll", handleScroll);

	// Initial load
	NewItem().then((data) => {
		renderData(data);
	});
};

itemList();
toggleMenuBurger();