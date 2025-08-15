// SignIn.tsx
import React, { useState } from "react";
import Block from "../../components/Block";
import Input from "../../components/Input";
import SignInIcon from "./sign-in.svg?react";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
  };

  const actions = (
    <div className="text-stone-500 p-2 text-sm text-center">
      Do not have an account?{" "}
      <a className="text-indigo-500 hover:text-indigo-600" href="/signup">
        Sign Up
      </a>
    </div>
  );

  return (
    <Block className="max-w-md" actions={actions}>
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
            label="Email or username"
            placeholder="Enter your email or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            id="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
