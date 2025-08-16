import React, { useEffect, useState } from "react";
import Block from "../../components/Block";
import Input from "../../components/Input";
import SignInIcon from "./sign-in.svg?react";
import { useOverlayFlow, useUser } from "../../store/Auth";
import { useNavigate } from "react-router";

const SignIn: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const { overlayFlow, setOverlayFlow } = useOverlayFlow();

  useEffect(() => {
    if (user) {
      navigate("/");
      return;
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm(username, password, setErrors)) {
      setUser({ username });
      navigate("/");
    }
  };

  const handleSignUpClick: React.MouseEventHandler = (e) => {
    e.preventDefault();
    if (overlayFlow) {
      setOverlayFlow("signup");
    } else {
      navigate("/signup");
    }
  };

  const actions = (
    <div className="text-stone-500 p-2 text-sm text-center">
      Do not have an account?{" "}
      <a
        className="text-indigo-500 hover:text-indigo-600"
        onClick={handleSignUpClick}
      >
        Sign Up
      </a>
    </div>
  );

  return (
    <Block className="max-w-full w-md" actions={actions}>
      <div className="sign-in p-8">
        <div className="mb-16 text-center">
          <div className="mx-auto bg-stone-100 rounded-full p-2 w-10 h-10 flex items-center justify-center aspect-square mb-4">
            <SignInIcon />
          </div>
          <div>
            <h2 className="font-bold text-lg">Sign in to continue</h2>
            <p className="text-sm text-stone-400">
              Sign in to access the feature on this app
            </p>
          </div>
        </div>
        <form className="flex flex-col gap-5 mb-4" onSubmit={handleSubmit}>
          <Input
            id="username"
            label="Username or username"
            placeholder="Enter your username or username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            error={errors.username}
            required
          />
          <Input
            type="password"
            id="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            error={errors.password}
            required
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-sm text-white rounded-lg p-2 cursor-pointer"
          >
            Sign In
          </button>
        </form>
      </div>
    </Block>
  );
};

export default SignIn;

function validateForm(
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

  // Username/username validation
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
