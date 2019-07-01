export default function validateLogin(values) {
  let errors = {};
  // /\S+@\S+\.\S+/

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 10) {
    errors.password = "Password needs to be more than 10 characters";
  }
  // email
  // the string to be more than 8 chars
  // need the string to be email

  // password
  // the string to be more than 8 chars

  return errors;
}
