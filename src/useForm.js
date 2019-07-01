import { useState } from "react";

const useForm = callback => {
  const [values, setValues] = useState({ email: "", password: "" });

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
    callback();
  };

  return {
    handleChange,
    handleSubmit,
    values
  };
};

export default useForm;
