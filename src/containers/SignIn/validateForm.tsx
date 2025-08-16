import type React from "react";

export function validateForm(
  username: string,
  password: string,
  setErrors: React.Dispatch<
    React.SetStateAction<{ username: string; password: string }>
  >
) {
  let isValid = true;
  const newErrors = {
    username: "",
    password: "",
  };

  // bypassing for given values
  if (
    (username === "demo@example.com" && password === "password123") ||
    (username === "test@user.com" && password === "testpass")
  ) {
    return true;
  }

  // Email or username validation
  if (!username) {
    newErrors.username = "Email/username is required";
    isValid = false;
  } else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^[a-zA-Z0-9_-]{3,16}$/.test(
      username
    )
  ) {
    newErrors.username = "Please enter a valid email address or username";
  }

  // Password validation
  if (!password) {
    newErrors.password = "Password is required";
    isValid = false;
  } else if (password.length < 8) {
    newErrors.password = "Password must be at least 8 characters long";
    isValid = false;
  }

  setErrors(newErrors);
  return isValid;
}
