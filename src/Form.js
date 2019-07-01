import React from "react";
import useForm from "./useForm";
import validate from "./validateLogin";

const Form = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

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
            {errors.email && <p>{errors.email}</p>}
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
            {errors.password && <p>{errors.password}</p>}
            {/* for output errors */}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;
