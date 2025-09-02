import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {FaShoppingBag, FaDollarSign, FaShoppingCart, FaRegMoneyBillAlt, FaChartLine,} from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

const DashboardPage = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate();

  const handleAddTransaction = () => {
    alert("Add Transaction clicked!");
    navigate("/add-transaction");
  };

  const data = [
    { day: "Mon", Sales: 2500, Purchases: 1200 },
    { day: "Tue", Sales: 2000, Purchases: 1500 },
    { day: "Wed", Sales: 3000, Purchases: 1000 },
    { day: "Thu", Sales: 2800, Purchases: 900 },
    { day: "Fri", Sales: 3500, Purchases: 1200 },
    { day: "Sat", Sales: 2200, Purchases: 700 },
    { day: "Sun", Sales: 2700, Purchases: 800 },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center space-x-4">
          <img src="/Images/Logo.svg" alt="Biashara Boss Logo" className="h-12 w-auto" />
          <h1
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "34px",
              color: "#000000",
            }}
          >
            Biashara Boss
          </h1>
        </div>

        <div className="flex items-center" style={{ gap: "30px" }}>
          <div className="relative w-48">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full h-12 px-4 rounded-[8px] text-black text-lg font-medium placeholder-gray-600 focus:outline-none appearance-none"
              style={{
                backgroundColor: "#D9D9D9",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "33px",
                color: "#000000",
              }}
            />
          </div>

          <button
            onClick={handleAddTransaction}
            className="flex items-center w-64 h-12 px-4 rounded-[8px] bg-orange-500 text-white text-lg font-medium hover:bg-orange-600 transition"
            style={{
              backgroundColor: "#F97316",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "33px",
              color: "#FFFFFF",
            }}
          >
            <span className="mr-2 text-2xl">+</span>
            Add Transaction
          </button>
        </div>
      </header>

      <div className="grid grid-cols-5 gap-[80px] mt-[80px]">
        <div className="bg-[#D9D9D9] rounded-[8px] flex flex-col items-center w-40 h-40 justify-center p-4 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <h2 className="text-lg font-medium text-gray-700">Opening Stock</h2>
          <p className="text-2xl font-bold text-gray-900 mt-1">Ksh. 5,000</p>
          <FaShoppingBag className="text-[#FF6800] text-4xl mt-2" />
        </div>
        <div className="bg-[#D9D9D9] rounded-[8px] flex flex-col items-center justify-center p-4 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <h2 className="text-lg font-medium text-gray-700">Sales</h2>
          <p className="text-2xl font-bold text-gray-900 mt-1">Ksh. 2,500</p>
          <FaDollarSign className="text-[#5FA331] text-4xl mt-2" />
        </div>
        <div className="bg-[#D9D9D9] rounded-[8px] flex flex-col items-center justify-center p-4 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <h2 className="text-lg font-medium text-gray-700">Purchases</h2>
          <p className="text-2xl font-bold text-gray-900 mt-1">Ksh. 1,200</p>
          <FaShoppingCart className="text-[#FF6800] text-4xl mt-2" />
        </div>
        <div className="bg-[#D9D9D9] rounded-[8px] flex flex-col items-center justify-center p-4 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <h2 className="text-lg font-medium text-gray-700">Expenses</h2>
          <p className="text-2xl font-bold text-gray-900 mt-1">Ksh. 800</p>
          <FaRegMoneyBillAlt className="text-[#FF6800] text-4xl mt-2" />
        </div>
        <div className="bg-[#D9D9D9] rounded-[8px] flex flex-col items-center justify-center p-4 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <h2 className="text-lg font-medium text-gray-700">Profit/Loss</h2>
          <p className="text-2xl font-bold text-gray-900 mt-1">Ksh. 700</p>
          <FaChartLine className="text-[#5FA331] text-4xl mt-2" />
        </div>
      </div>

      <div className="bg-[#D9D9D9] p-6 rounded-[8px] mt-[50px]">
        <h2 className="text-xl font-semibold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
          Sales vs Purchases (Monday - Sunday)
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
            <CartesianGrid stroke="#D9D9D9" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
            <Bar dataKey="Sales" fill="#d28752ff" />
            <Bar dataKey="Purchases" fill="#FF6800" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardPage;
