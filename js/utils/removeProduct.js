export const removeProduct = (removeButton, index) => {
  
  removeButton.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== index);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
  });
}