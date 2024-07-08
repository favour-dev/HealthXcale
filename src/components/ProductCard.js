import React from 'react';
import '../styles/productcard.css'; 
 

const ProductCard = ({ product, showAddToCart, showPrice, alignText }) => {
    return (
      <div >
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
        </div>
        <div className='product-details' style={{ textAlign: alignText }}>
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-descriptions">{product.descriptions}</p>
            {showPrice && <p className="product-price">${product.price}</p>}
            {/* <p className="product-price">₦{product.price}</p> */}
            {/* <button className="buy-button">Add to cart</button> */}
            {showAddToCart && <button className="buy-button">Add to Cart</button>}
        </div>
      </div>
    );
  };

export default ProductCard;

