import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cart = [], setCart }) => {
  const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleRemove = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

//   const handlePayment = () => {
//     fetch('/pay', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ amount: totalAmount, upi_id: 'seller@upi' })
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to process payment');
//         }
//         return response.json();
//       })
//       .then(data => {
//         alert(data.message);
//         sendOrderDetails();
//       })
//       .catch(error => {
//         console.error('Payment failed:', error);
//         // Handle error (e.g., show an error message)
//       });
//   };

  const sendOrderDetails = () => {
    const whatsappNumber = '+918767756198';
    const orderDetails = cart.map(item => `${item.name}: ${item.quantity} x ${item.price}`).join('\n');
    fetch('/send_whatsapp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ whatsapp_number: whatsappNumber, order_details: orderDetails })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to send WhatsApp message');
        }
        return response.json();
      })
      .then(data => {
        alert(data.message);
        setCart([]);
      })
      .catch(error => {
        console.error('Failed to send WhatsApp message:', error);
        // Handle error (e.g., show an error message)
      });
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p className='messageempty'>Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div className="cart-item" key={item.id}>
              <Link to={item.link}>
                <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              </Link>
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <div className="quantity-buttons">
                  <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className="remove-button" onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ${totalAmount}</h3>
          <button className="pay-button" onClick={sendOrderDetails}>Pay Now</button>
        </>
      )}
    </div>
  );
};

export default Cart;
