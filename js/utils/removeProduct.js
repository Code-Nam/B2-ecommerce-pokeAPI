export const removeProduct = (removeButton, index) => {
  
  removeButton.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const userConfirmation = confirm("Are you sure you want to remove this item?");
    if (!userConfirmation) return;
    alert("Item removed from cart!");
    cart = cart.filter(item => item.id !== index);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
  });
}