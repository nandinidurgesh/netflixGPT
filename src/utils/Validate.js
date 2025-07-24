export const validateForm = (email, password, name, formType) => {

  if (formType === true && !name) {  
    return "Name is required for sign up.";
  }

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
  if (!email || !password) {
    return "Email and password are required.";
  }
  if(!isEmailValid) {
    return "Invalid email format." ;
  }
  if(!isPasswordValid) {
    return "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.";
  }
  return null;
}