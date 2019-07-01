import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({ email: "", password: "" });
  //new state for errors
  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);
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
    // callback();
    setIsSubmitting(true);
  };
  useEffect(() => {
    // check to see if there are not errors to
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
    // call our callback
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
