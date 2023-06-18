import React from "react";

// ❌ Avoid: disclose unnecessary information for this component
// This introduces unnecessary dependencies and complexity for the component
const ProductThumbnailURL = ({ product }) => {
  return (
    <div>
      <img src={product.imageURL} alt={product.name} />
    </div>
  );
};

export default ProductThumbnailURL;
