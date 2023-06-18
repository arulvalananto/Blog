import React from "react";

import Product from "./Product";
import products from "../../data/products.json";

// ✅ good code

// Here each component has single responsibility
// Products component is responsible for iterating products.
// Product component are responsible for structuring and managing each product operations.

const Products = () => {
  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product?.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
