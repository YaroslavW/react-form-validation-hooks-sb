import React, { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const handleChange = event => {
    const { name, value } = event.target;
    // console.log(event.target.name);
    // console.log(event.target.value);
    setValues({
      ...values,
      [name]: value
      // [event.target.name] : event.target.value
    });
  };
  return (
    <div>
      <form noValidate>
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
