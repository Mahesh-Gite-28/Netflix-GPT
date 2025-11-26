export const checkValidData = (name, email, password, isSignInForm) => {
  // Validate full name only during Sign Up
  if (!isSignInForm) {
    const isNameValid = /^[\p{L} .'-]+$/u.test(name);
    if (!isNameValid) return "Please enter a valid full name";
  }

  const isEmailValid =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
