const header =document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY>0);
})
document.addEventListener('DOMContentLoaded', function () {
    const paymentForm = document.getElementById('payment-form');

    paymentForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Get form data
        const formData = new FormData(paymentForm);

        // Convert form data to JSON
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        // Send form data to server-side script for payment processing
        fetch('process_payment.php', {
            method: 'POST',
            body: JSON.stringify(jsonData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server
            if (data.success) {
                // Payment successful, redirect or show success message
                alert('Payment successful!'); // Example: show success message
                // window.location.href = 'thankyou.html'; // Example: redirect to thank you page
            } else {
                // Payment failed, show error message
                alert('Payment failed: ' + data.message); // Example: show error message
            }
        })
        .catch(error => {
            // Handle any errors that occur during the fetch request
            console.error('Error:', error);
            alert('An error occurred. Please try again later.'); // Example: show error message
        });
    });
});
