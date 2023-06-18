import React from "react";

import BadButton from "./Bad/Button";
import Button from "./Good/Button";
import IconButton from "./Good/IconButton";

// ❌ Avoid: Modified existing component prop
const OpenClosedPrincipleWithBadPractice = () => {
  const handleClick = () => {};
  return (
    <>
      <h1>Open Closed Principle</h1>
      <div>
        <BadButton
          text="Submit"
          onClick={handleClick}
          icon="fas fa-arrow-right"
        />
      </div>
    </>
  );
};

// ✅ Good Practice: Open-Closed Principle
const OpenClosedPrincipleWithGoodPractice = () => {
  const handleClick = () => {
    // Handle button click event
  };

  return (
    <div>
      <h1>Open Closed Principle</h1>
      <Button text="Click Me" onClick={handleClick} />
      <IconButton text="Submit" icon="fas fa-heart" onClick={handleClick} />
    </div>
  );
};

export default OpenClosedPrincipleWithGoodPractice;
