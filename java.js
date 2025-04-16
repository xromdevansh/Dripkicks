const header =document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY>0);
})
// cart.js

const cartItems = [];

function addToCart(productId) {
    const product = getProductDetails(productId);
    if (product) {
        cartItems.push(product);
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
