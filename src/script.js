const products = [
    { id: 1, name: 'Product 1', price: 100, quantity: 1 },
    { id: 2, name: 'Product 2', price: 200, quantity: 1 },
    { id: 3, name: 'Product 3', price: 300, quantity: 1 }
];

let cart = [];

function displayProducts() {
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product });
    }
    displayCart();
}

function displayCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '<h2>Cart</h2>';
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
        `;
        cartContainer.appendChild(cartItemElement);
    });
    if (cart.length > 0) {
        const paymentSection = document.getElementById('payment-section');
        paymentSection.innerHTML = `
            <h2>Payment</h2>
            <button onclick="makePayment()">Pay Now</button>
        `;
    }
}

function makePayment() {
    const sellerUPI = 'seller@upi';
    const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    // Mock payment process
    alert(`Payment of Rs. ${totalAmount} to ${sellerUPI} is successful.`);
    sendOrderDetails();
}

function sendOrderDetails() {
    const whatsappNumber = '1234567890';
    const orderDetails = cart.map(item => `${item.name}: ${item.quantity} x ${item.price}`).join('\n');
    // Mock WhatsApp messaging
    alert(`Order details sent to WhatsApp number ${whatsappNumber}:\n${orderDetails}`);
    cart = [];
    displayCart();
    document.getElementById('payment-section').innerHTML = '';
}

displayProducts();
