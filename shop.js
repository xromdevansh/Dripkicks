// shop.js

const products = [
    { id: 1, name: 'Nike Mens Dunk low', category: 'male', price: 9195.00 },
    { id: 2, name: 'Jordan Nu Retro 1 Low', category: 'male', price: 9195.00 },
    { id: 3, name: 'Nike Dunk Low Retro Premium', category: 'male', price: 15195.00 },
    { id: 4, name: 'Air Jordan 1 Low', category: 'male', price: 15195.00 },
    { id: 5, name: 'Air Jordan 1 Low SE', category: 'male', price: 15195.00 },
    { id: 6, name: 'Air Jordan 1 Mid', category: 'male', price: 20195.00 },
    { id: 7, name: 'Nike Air Force 1 \'07', category: 'male', price: 11195.00 },
    { id: 8, name: 'Nike Court Vision Low Next Nature', category: 'male', price: 16125.00 },
    { id: 9, name: 'NikeCourt Legacy', category: 'male', price: 22195.00 },
    // Add more products with their categories
];

function filterProducts(category) {
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

function displayProducts(products) {
    // Update this function to display the filtered products in your HTML, similar to the existing product display code.
    // You may need to modify the HTML structure to accommodate the filtered products.
}
