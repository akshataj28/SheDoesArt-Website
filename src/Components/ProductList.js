import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-item" key={product.id}>
          <Link to={product.link}>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
          </Link>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
