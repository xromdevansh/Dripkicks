document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total');
    const checkoutSection = document.getElementById('checkout');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const payBtn = document.getElementById('payBtn');

    // Sample data, you can replace this with your actual product data
    const sampleItem = {
        name: "Nike Mens Dunk low",
        price: 9195.00,       
    };

    // Function to add an item to the cart
    function addItemToCart(item) {
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <div class="product-details">
                <h3>${item.name}</h3>
                <p>MRP: ₹${item.price.toFixed(2)}</p>
            </div>
        `;

        cartItems.appendChild(cartItem);
    }

    // Initial setup with a sample item in the cart
    addItemToCart(sampleItem);
    updateTotal();

    // Function to update the total amount
    function updateTotal() {
        const items = document.querySelectorAll('.cart-item');
        let totalPrice = 0;

        items.forEach(item => {
            const priceString = item.querySelector('.product-details p').textContent.split('₹')[1];
            const price = parseFloat(priceString.replace(/,/g, ''));
            totalPrice += price;
        });

        totalAmount.textContent = `Total: ₹${totalPrice.toFixed(2)}`;
    }

    // Event listener for the checkout button
    checkoutBtn.addEventListener('click', function () {
        checkoutSection.style.display = 'block';
    });

    // Event listener for the pay button
    payBtn.addEventListener('click', function () {
        const address = document.getElementById('address').value;

        // You can add logic here to handle the payment process

        // For now, let's simply display an alert
        alert(`Payment successful!\nAddress: ${address}`);
    });
});
