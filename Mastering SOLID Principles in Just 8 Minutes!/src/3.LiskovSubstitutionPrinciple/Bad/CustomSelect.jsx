import React from "react";

// ❌ Bad Practice
// violates the substitution principle as it changes the behavior of the derived component and
// may lead to unexpected issues when used in place of the base Select component

const CustomSelect = ({ value, iconClassName, handleChange }) => {
  return (
    <div>
      <i className={iconClassName}></i>
      <select value={value} onChange={handleChange}>
        <options value={1}>One</options>
        <options value={2}>Two</options>
        <options value={3}>Three</options>
      </select>
    </div>
  );
};

export default CustomSelect;
