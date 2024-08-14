import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Components/Header';
import Banner from './Components/Banner';
import Categories from './Components/Categories';
import Sale from './Components/Sale';
import Collection from './Components/Collection';
import Bestseller from './Components/Bestseller';
import AboutUs from './Components/about-us';
import Footer from './Components/footer';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import ProductDetail from './Components/ProductDetail';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Product 1', price: 100, quantity: 1, imageUrl: 'path/to/image1.jpg', link: '/product/1' },
    { id: 2, name: 'Product 2', price: 200, quantity: 1, imageUrl: 'path/to/image2.jpg', link: '/product/2' },
    { id: 3, name: 'Product 3', price: 300, quantity: 1, imageUrl: 'path/to/image3.jpg', link: '/product/3' }
  ];

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Categories />
              <Sale />
              <Collection />
              <Bestseller />
              <ProductList products={products} addToCart={addToCart} />
              <Footer />
            </>
          } />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
