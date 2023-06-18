import React from "react";
import products from "../../data/products.json";

// ❌ bad code
// breaking single responsibility principle
// 👇 Avoid this

const Products = () => {
  return (
    <div className="products">
      {products.map((product) => (
        <div key={product?.id} className="product">
          <h3>{product?.name}</h3>
          <p>${product?.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
