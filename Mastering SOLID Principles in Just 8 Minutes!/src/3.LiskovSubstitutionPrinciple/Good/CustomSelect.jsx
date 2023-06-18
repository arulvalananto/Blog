import React from "react";

// ✅ Good Practice
// Here our customselect component has characteristics of base `select` element

const CustomSelect = ({ value, iconClassName, handleChange, ...props }) => {
  return (
    <div>
      <i className={iconClassName}></i>
      <select value={value} onChange={handleChange} {...props}>
        <options value={1}>One</options>
        <options value={2}>Two</options>
        <options value={3}>Three</options>
      </select>
    </div>
  );
};

export default CustomSelect;
