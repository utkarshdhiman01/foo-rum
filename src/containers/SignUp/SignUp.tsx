import React, { useState } from "react";
import Block from "../../components/Block";
import Input from "../../components/Input";
import SignUpIcon from "./sign-up.svg?react";

const SignUp: React.FC = () => {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
    repeatPassword?: string;
  }>({});

  const validateForm = () => {
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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: Handle sign up logic here
      console.log("Form is valid");
    }
  };

  const actions = (
    <div className="text-stone-500 p-2 text-sm text-center">
      Already have an account?{" "}
      <a className="text-indigo-500 hover:text-indigo-600" href="/signin">
        Sign In
      </a>
    </div>
  );

  return (
    <Block className="max-w-full w-md" actions={actions}>
      <div className="sign-in p-8">
        <div className="mb-16 text-center">
          <div className="mx-auto bg-stone-100 rounded-full p-2 w-10 h-10 flex items-center justify-center aspect-square mb-4">
            <SignUpIcon />
          </div>
          <div>
            <h2 className="font-bold text-lg">Create an account to continue</h2>
            <p className="text-sm text-stone-400">
              Create an account to access the feature on this app
            </p>
          </div>
        </div>
        <form className="flex flex-col gap-5 mb-4" onSubmit={handleSubmit}>
          <Input
            id="username"
            label="Username or username"
            placeholder="Enter your username or username"
            value={username}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.username}
            required
          />
          <Input
            type="password"
            id="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            required
          />
          <Input
            type="password"
            id="repeat-password"
            label="Repeat password"
            placeholder="Enter your password again"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            error={errors.repeatPassword}
            required
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-sm text-white rounded-lg p-2 cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>
    </Block>
  );
};

export default SignUp;
