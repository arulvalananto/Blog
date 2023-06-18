import React from "react";

import ProductThumbnailURL from "./ProductThumbnailURL";

// ✅ Good Practice
const Products = ({ product }) => {
  return (
    <div>
      <ProductThumbnailURL imageURL={product.imageURL} alt={product.name} />
      <h4>{product?.name}</h4>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
    </div>
  );
};

export default Products;
