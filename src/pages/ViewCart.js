// import React from 'react';
// import { useLocation , useParams } from 'react-router-dom';
// import '../styles/viewcart.css';

// const ViewCart = () => {
//   const location = useLocation();
//   const { product } = location.state || {};
//   const { id } = useParams();

//   if (!product) {
//     return <p>No product details available. Please go back and select a product.</p>;
//   }

//   return (
//     <div className="viewcart-container">
//       <h1>Product Details</h1>
//       <div className="product-details-container">
//         <img src={product.image} alt={product.name} className="product-image" />
//         <div className="product-info">
//           <h2 className="product-name">{product.name}</h2>
//           <p className="product-description">Description: {product.description}</p>
//           <p className="product-descriptions">Additional Info: {product.descriptions}</p>
//           <p className="product-price">Price: ${product.price}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewCart;

