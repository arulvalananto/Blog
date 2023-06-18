import React from "react";

import ProductThumbnailURL from "./ProductThumbnailURL";

// ❌ Bad Practice
const Products = ({ product }) => {
  return (
    <div>
      <ProductThumbnailURL product={product} />
      <h4>{product?.name}</h4>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
    </div>
  );
};

export default Products;
