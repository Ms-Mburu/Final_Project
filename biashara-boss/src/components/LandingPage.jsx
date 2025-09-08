import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#384D6C]">
      <header className="flex flex-row items-center justify-between px-4 md:px-8 py-4 sticky top-0 z-50 bg-[#384D6C] shadow-md">
        <div className="flex items-center space-x-4">
          <img
            src="/Images/Logo.svg"
            alt="Biashara Boss Logo"
            className="h-10 md:h-12 w-auto"
          />
          <h1
            className="font-bold text-black text-xl md:text-3xl"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Biashara Boss
          </h1>
        </div>

        <nav>
          <ul className="flex justify-end flex-wrap list-none mt-6 md:mt-0">
            {["Home", "About Us", "Services", "Contact Us"].map((item) => (
              <li
                key={item}
                onClick={() =>
                  scrollToSection(item.replace(" ", "").toLowerCase())
                }
                className="cursor-pointer hover:text-orange-400 transition-colors duration-300"
                style={{
                  color: "#FFFFFF",
                  fontSize: "20px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  marginInline: "20px",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section
        id="home"
        className="flex flex-col items-center justify-center mt-10 md:mt-20 space-y-6 px-4 md:px-8 text-center"
      >
        <h2
          className="text-2xl md:text-4xl font-extrabold text-orange-400"
          style={{ fontFamily: "Poppins, sans-serif", marginTop: "150px" }}
        >
          Manage your Business with Ease and Efficiency
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <button
            onClick={() => navigate("/signin")}
            className="w-[310px] md:w-80 py-3 rounded-[8px] transition duration-300 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="w-[310px] md:w-80 py-3 rounded-[8px] transition duration-300 border-2 border-orange-500 text-orange-500 hover:bg-orange-100 font-semibold text-lg"
          >
            Create Account
          </button>
        </div>
      </section>

      <section id="aboutus" className="px-4 md:px-10 py-16 mt-[200px]">
        <h2 className="text-center text-xl md:text-3xl font-bold text-orange-400 mb-8 scroll-mt-24">
          About Us
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/Images/about us.png"
              alt="About Us"
              className="w-[400px] max-w-md h-[300px] rounded-lg"
            />
          </div>
          <div className="md:w-1/2 text-left">
            <p className="text-white text-sm md:text-lg leading-relaxed">
              Biashara Boss helps small business owners in Kenya — from kiosks
              and mitumba sellers to salon operators and boda boda riders —
              track stock, sales, purchases, and expenses. No more guesswork or
              notebooks. Instantly know your profit or loss at the end of the
              day.
            </p>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="px-4 md:px-10 py-16 bg-[#2f3e58] mt-[100px]"
      >
        <h2 className="text-center text-xl md:text-3xl font-bold text-orange-400 mb-8 mt-[100px]">
          Our Services
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mt-[20px]">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/Images/Services.jpeg"
              alt="Our Services"
              className="w-[400px] max-w-md h-full rounded-lg"
            />
          </div>
          <div className="md:w-1/2 text-left">
            <ul className="space-y-4 text-white text-sm md:text-lg">
              <li>
                <strong>Track Sales & Purchases:</strong> Easily log your daily
                sales and purchases.
              </li>
              <li>
                <strong>See Profit or Loss Instantly:</strong> Get automatic
                calculations without math stress.
              </li>
              <li>
                <strong>Works Offline, Mobile-first:</strong> Access your
                records anytime, even without internet.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contactus" className="px-4 md:px-10 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
          <div className="text-center w-full">
            <h2 className="text-xl md:text-3xl font-bold text-orange-400 mb-4">
              Contact Us
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent!");
              }}
              className="flex flex-col space-y-4 w-full"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="px-3 py-2 rounded-[8px] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-3 py-2 rounded-[8px] focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="px-3 py-2 rounded-[8px] focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-500 text-white py-2 rounded-[8px] hover:bg-orange-600 transition"
                style={{ backgroundColor: "#F97316" }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="px-4 md:px-8 py-6 text-center">
        <p
          className="text-base md:text-xl font-medium text-white"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Don’t have an account?{" "}
          <span
            className="cursor-pointer hover:underline text-orange-400 transition duration-300"
            style={{ color: "#F97316" }}
            onClick={() => navigate("/signup")}
          >
            Create One
          </span>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
