import React, { useState } from "react";

import BadCustomSelect from "./Bad/CustomSelect";
import GoodCustomSelect from "./Good/CustomSelect";

const LiskovSubstitutionPrinciple = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      {/** ❌ Avoid this */}
      {/** Below Custom Select doesn't have the characteristics of base `select` element */}
      <BadCustomSelect value={value} handleChange={handleChange} />

      {/** ✅ Good: this component has the characteristics of base `select` element */}
      <GoodCustomSelect
        value={value}
        handleChange={handleChange}
        defaultValue={1}
      />
    </div>
  );
};

export default LiskovSubstitutionPrinciple;
