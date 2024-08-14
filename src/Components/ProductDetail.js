import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.name} className="product-detail-image" />
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>Description: This is a detailed description of {product.name}.</p>
    </div>
  );
};

export default ProductDetail;
