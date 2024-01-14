//* Toggle menu burger when breakpoint Mobile reached

export const toggleMenuBurger = () => {
	const burger_menu = document.querySelector(".menu-burger");
	const menu = document.querySelector(".menu");
	let touchstartX = null;
	let touchstartY = null;

	burger_menu.addEventListener("click", () => {
		let menuX = menu.style.transform;
		menuX === "translateX(-10%)"
			? (menu.style.transform = "translateX(-130%)")
			: (menu.style.transform = "translateX(-10%)");
	});

	menu.addEventListener("touchstart", (event) => {
		touchstartX =
			event.touches[0]
				.clientX; /** User touchstart based on X coordinates of browser's window **/
		touchstartY =
			event.touches[0]
				.clientY; /** User touchstart based on Y coordinates of browser's window **/
	});

	menu.addEventListener("touchmove", (event) => {
		let touchendX = event.touches[0].clientX;
		let touchendY = event.touches[0].clientY;
		let diffX = touchstartX - touchendX;
		let diffY = touchstartY - touchendY;
		if (!touchendX || !touchendY) {
			return;
		}

		if (Math.abs(diffX) > Math.abs(diffY)) {
			/** Checks the magnitude of the differences to indicate wether the swipe is horizontal or vertical, which in this case is horizontal **/
			if (diffX > 0) {
				/** If diffX is greater than 0, the swipe is from right to left **/
				menu.style.transform = "translateX(-100%)";
			} else {
				menu.style.transform = "tranlateX(0%)";
			}
		}
		touchendX = null;
		touchendY = null;
	});
};
