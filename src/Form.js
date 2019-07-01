import React, { useState } from "react";
import useForm from "./useForm";

const Form = () => {
  const { handleChange, handleSubmit, values } = useForm(submit);

  function submit() {
    console.log("Submitted Succesful");
  }
  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Email</label>
          <div>
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            {/* for output errors */}
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
            {/* for output errors */}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;
