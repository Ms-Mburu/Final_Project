import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between" style={{ backgroundColor: "#384D6C" }}>
      <header className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center space-x-4">
          <img src="/Images/Logo.svg" alt="Biashara Boss Logo" className="h-12 w-auto" />
          <h1 style={{ fontFamily: "Poppins, sans-serif", fontSize: "34px", fontWeight: "bold", color: "#000000" }}>
            Biashara Boss
          </h1>
        </div>

        <nav>
          <ul className="flex justify-evenly w-[900px] list-none">
            {["Home", "About Us", "Services", "Contact Us"].map((item) => (
              <li
                key={item}
                className="cursor-pointer transition-colors duration-300 hover:text-orange-400"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "33px", color: "#FFFFFF" }}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center mt-[80px] space-y-10 px-4">
        <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "40px", color: "#F97316", textAlign: "center" }}>
          Manage your Business with Ease and Efficiency
        </h2>

        <input
          type="text"
          placeholder="Email or Phone Number"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          className="w-[400px] px-4 py-4 rounded-[8px] text-center placeholder:text-center focus:outline-none focus:ring-4 focus:ring-orange-300 transition duration-300"
          style={{ backgroundColor: "#F97316", fontFamily: "Poppins, sans-serif", fontSize: "33px", color: "#FFFFFF", opacity: 0.9 }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[400px] px-4 py-4 rounded-[8px] mt-[30px] text-center placeholder:text-center focus:outline-none focus:ring-4 focus:ring-orange-300 transition duration-300"
          style={{ backgroundColor: "#F97316", fontFamily: "Poppins, sans-serif", fontSize: "33px", color: "#FFFFFF", opacity: 0.9 }}
        />

        <button
          onClick={handleSignIn}
          className="w-[400px] py-4 rounded-[8px] mt-[30px] transition duration-300 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300"
          style={{ backgroundColor: "#F97316", fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "33px", color: "#FFFFFF" }}
        >
          Sign In
        </button>
      </section>

      <footer className="px-8 py-6">
        <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "33px", color: "#FFFFFF" }}>
          Don’t have an account?{" "}
          <span className="cursor-pointer hover:underline transition duration-300" style={{ color: "#F97316" }} onClick={() => alert("Redirecting to Create Account page...")}>
            Create One
          </span>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
