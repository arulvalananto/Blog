import React, { useState } from "react";

import BadCustomForm from "./Bad/CustomForm";
import AbstractForm from "./Good/AbstractForm";

const DependencyInversionPrinciple = () => {
  const [email, setEmail] = useState();

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    // submit business logic here
  };

  return (
    <div>
      {/** ❌ Avoid: tightly coupled and hard to change */}
      <BadCustomForm>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
        />
      </BadCustomForm>

      <AbstractForm onSubmit={handleFormSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
        />
        <button type="submit">Submit</button>
      </AbstractForm>
    </div>
  );
};

export default DependencyInversionPrinciple;
