// SignupPage.jsx
import React, { useState } from "react";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    alert("Signup clicked! Implement your logic here.");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#384D6C] px-4">
      <h2 className="text-3xl font-bold text-orange-400 mb-6">Create Account</h2>
      <form onSubmit={handleSignUp} className="flex flex-col mt-[30px] space-y-4 w-[300px] max-w-md">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 rounded-lg focus:outline-none text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-3 rounded-lg focus:outline-none text-black"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
