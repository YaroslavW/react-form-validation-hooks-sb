import { useState } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({ email: "", password: "" });
  //new state for errors
  const [errors, setErrors] = useState({ email: "", password: "" });
  // function that validates thas errors these errors
  // pass these errors back to forms
  const handleChange = event => {
    const { name, value } = event.target;
    console.log(event.target.name);
    console.log(event.target.value);
    setValues({
      ...values,
      [name]: value
      // [event.target.name] : event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // submit()
    setErrors(validate(values));
    // handling errors
    callback();
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
