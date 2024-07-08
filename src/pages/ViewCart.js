// src/pages/ViewCart.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const ViewCart = () => {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div>
      <h1>Product Details</h1>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      {/* Add more product details here */}
    </div>
  );
};

export default ViewCart;

