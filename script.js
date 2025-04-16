const cartItems = [];
const totalPriceElement = document.getElementById("total-price");
const cartContainer = document.getElementById("cart-items");

function addToCart(productId) {
  const product = getProductDetails(productId);
  if (product) {
    cartItems.push(product);
    updateCart();
  }
}

function updateCart() {
  cartContainer.innerHTML = ""; // Clear the existing cart items

  cartItems.forEach((item, index) => {
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `
      <span>${item.name}</span>
      <span class="cart-price">₹ ${item.price.toFixed(2)}</span>
      <button class="remove-from-cart-btn" onclick="removeFromCart(${index})">Remove</button>
    `;

    cartContainer.appendChild(cartItem);
  });

  updateCartTotal();
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
}

function updateCartTotal() {
  let totalPrice = 0;

  cartItems.forEach((item) => {
    totalPrice += item.price;
  });

  totalPriceElement.textContent = totalPrice.toFixed(2);
}

function checkout() {
  console.log("Cart Items:", cartItems);
  // You can add more logic here, like sending the cart data to a server for processing
}

function getProductDetails(productId) {
  // In a real application, you might fetch product details from a database or API.
  // For simplicity, using a hard-coded list here.
  const products = [
    { id: 1, name: "Product 1", price: 100.00 },
    { id: 2, name: "Product 2", price: 150.00 },
    // Add more products as needed
  ];

  return products.find((product) => product.id === productId);
}

  