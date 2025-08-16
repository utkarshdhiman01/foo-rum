import type React from "react";

export function validateForm(
  username: string,
  password: string,
  repeatPassword: string,
  setErrors: React.Dispatch<
    React.SetStateAction<{
      username?: string;
      password?: string;
      repeatPassword?: string;
    }>
  >
) {
  const newErrors: {
    username?: string;
    password?: string;
    repeatPassword?: string;
  } = {};

  // Email or username validation
  if (!username) {
    newErrors.username = "Email/username is required";
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
  } else if (password.length < 8) {
    newErrors.password = "Password must be at least 8 characters long";
  }

  // Repeat password validation
  if (!repeatPassword) {
    newErrors.repeatPassword = "Please confirm your password";
  } else if (password !== repeatPassword) {
    newErrors.repeatPassword = "Passwords do not match";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
}
