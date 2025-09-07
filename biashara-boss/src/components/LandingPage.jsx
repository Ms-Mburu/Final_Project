import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/dashboard");
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
                onClick={() => scrollToSection(item.replace(" ", "").toLowerCase())}
                className="cursor-pointer transition-colors duration-300 hover:text-orange-400"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "33px", color: "#FFFFFF" }}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section id="home" className="flex flex-col items-center justify-center mt-[80px] space-y-10 px-4">
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

      <section id="aboutus" className="text-center px-10 py-16">
        <h2 className="text-3xl font-bold text-orange-400 mb-6">About Us</h2>
        <p className="text-white text-xl leading-relaxed max-w-3xl mx-auto">
          Biashara Boss helps small business owners in Kenya — from kiosks and mitumba sellers to salon operators and boda boda riders —
          track stock, sales, purchases, and expenses. No more guesswork or notebooks. Instantly know your profit or loss at the end of the day.
        </p>
      </section>

      <section id="services" className="px-10 py-16 bg-[#2f3e58]">
        <h2 className="text-3xl font-bold text-orange-400 text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            { title: "Track Sales & Purchases", desc: "Easily log your daily sales and purchases." },
            { title: "See Profit or Loss Instantly", desc: "Get automatic calculations without math stress." },
            { title: "Works Offline, Mobile-first", desc: "Access your records anytime, even without internet." },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-[#D9D9D9] p-8 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
            >
              <h3 className="text-2xl font-semibold mb-4 text-black">{service.title}</h3>
              <p className="text-gray-700 text-lg">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contactus" className="px-10 py-16">
        <h2 className="text-3xl font-bold text-orange-400 text-center mb-6">Contact Us</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent!");
          }}
          className="max-w-xl mx-auto flex flex-col space-y-6"
        >
          <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-[8px] focus:outline-none" />
          <input type="email" placeholder="Your Email" className="px-4 py-3 rounded-lg focus:outline-none" />
          <textarea placeholder="Your Message" rows="5" className="px-4 py-3 rounded-lg focus:outline-none"></textarea>
          <button
            type="submit"
            className="bg-orange-500 text-white py-3 rounded-[8px] hover:bg-orange-600 transition"
            style={{ backgroundColor: "#F97316" }}
          >
            Send
          </button>
        </form>
      </section>

      <footer className="px-8 py-6">
        <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "33px", color: "#FFFFFF" }}>
          Don’t have an account?{" "}
          <span
            className="cursor-pointer hover:underline transition duration-300"
            style={{ color: "#F97316" }}
            onClick={() => alert("Redirecting to Create Account page...")}
          >
            Create One
          </span>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
