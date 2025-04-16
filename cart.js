// cart.js

const cartItems = [];

function addToCart(productId) {
    const product = getProductDetails(productId);
    if (product) {
        cartItems.push(product);
        updateCartIcon();
        alert('Product added to cart!');
    }
}

function getProductDetails(productId) {
    // You can implement logic to fetch product details from your data source.
    // For now, using hard-coded data.

    const products = [
        { id: 1, name: 'Nike Mens Dunk low', price: 9195.00 },
        // Add details for other products
    ];

    return products.find((product) => product.id === productId);
}

function updateCartIcon() {
    const cartIcon = document.getElementById('cart-icon');
    if (cartIcon) {
        // You can customize the display, e.g., show the number of items in the cart.
        cartIcon.innerHTML = `<i class='bx bx-cart'></i>`;
    }
}
