import React from "react";

// ❌ Bad Practice
// This component follows concretion instead of abstraction
// We can't change the handleSubmit function with our own logic
// It breaks Dependency Inversion Principle

const CustomForm = ({ children }) => {
  const handleSubmit = () => {
    // submit operations
  };
  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default CustomForm;
