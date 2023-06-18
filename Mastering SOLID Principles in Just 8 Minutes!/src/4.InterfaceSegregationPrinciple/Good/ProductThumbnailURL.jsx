import React from "react";

// ✅ Good: reducing unnecessary dependencies and making the codebase more maintainable and scalable.
const ProductThumbnailURL = ({ imageURL, alt }) => {
  return (
    <div>
      <img src={imageURL} alt={alt} />
    </div>
  );
};

export default ProductThumbnailURL;
