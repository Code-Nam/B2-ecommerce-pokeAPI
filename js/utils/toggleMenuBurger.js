//* Toggle menu burger when breakpoint Mobile reached

export const toggleMenuBurger = () =>{
  const burger_menu = document.querySelector(".menu-burger");
  const menu = document.querySelector(".menu");
  burger_menu.addEventListener("click", () => {
    let menuX = menu.style.transform
    menuX === "translateX(0%)" ? menu.style.transform = "translateX(-100%)" : menu.style.transform = "translateX(0%)"
  });
}