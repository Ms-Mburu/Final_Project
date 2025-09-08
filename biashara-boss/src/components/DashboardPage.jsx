import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {FaShoppingBag, FaDollarSign, FaShoppingCart, FaRegMoneyBillAlt, FaChartLine,} from "react-icons/fa";
import {BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid,} from "recharts";

const DashboardPage = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [openingStock, setOpeningStock] = useState(5000);
  const [sales, setSales] = useState(2500);
  const [purchases, setPurchases] = useState(1200);
  const [expenses, setExpenses] = useState(800);
  const [history, setHistory] = useState([]); 

  const navigate = useNavigate();

  const handleAddTransaction = () => {
    alert("Add Transaction clicked!");
    navigate("/add-transaction");
  };

  const profitLoss = openingStock + sales - (purchases + expenses);

  const handleSaveLog = () => {
    if (!selectedDate) {
      alert("Please select a date before saving.");
      return;
    }

    const newEntry = {
      date: selectedDate,
      openingStock,
      sales,
      purchases,
      expenses,
      profitLoss,
    };

    setHistory([...history, newEntry]);
  };

  const data = [
    { day: "Mon", Sales: sales, Purchases: purchases },
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
          <img
            src="/Images/Logo.svg"
            alt="Biashara Boss Logo"
            className="h-12 w-auto"
          />
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
                fontSize: "20px",
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
              fontSize: "20px",
            }}
          >
            <span className="mr-2 text-2xl">+</span>
            Add Transaction
          </button>
        </div>
      </header>

      <div className="grid grid-cols-5 gap-[40px] mt-[40px]">
        <div className="bg-[#D9D9D9] rounded-[8px] flex flex-col items-center w-40 h-40 justify-center p-4">
          <h2 className="text-lg font-medium text-gray-700">Opening Stock</h2>
          <input
            type="number"
            value={openingStock}
            onChange={(e) => setOpeningStock(Number(e.target.value))}
            className="text-2xl font-bold text-center text-gray-900 mt-1 bg-transparent border-b-2 border-gray-500 focus:outline-none w-full"
          />
          <FaShoppingBag className="text-[#FF6800] text-4xl mt-2" />
        </div>

        <div className="bg-[#D9D9D9] rounded-[8px] flex flex-col items-center justify-center p-4">
          <h2 className="text-lg font-medium text-gray-700">Sales</h2>
          <input
            type="number"
            value={sales}
            onChange={(e) => setSales(Number(e.target.value))}
            className="text-2xl font-bold text-center text-gray-900 mt-1 bg-transparent border-b-2 border-gray-500 focus:outline-none w-full"
          />
          <FaDollarSign className="text-[#5FA331] text-4xl mt-2" />
        </div>

        <div className="bg-[#D9D9D9] rounded-[8px] flex flex-col items-center justify-center p-4">
          <h2 className="text-lg font-medium text-gray-700">Purchases</h2>
          <input
            type="number"
            value={purchases}
            onChange={(e) => setPurchases(Number(e.target.value))}
            className="text-2xl font-bold text-center text-gray-900 mt-1 bg-transparent border-b-2 border-gray-500 focus:outline-none w-full"
          />
          <FaShoppingCart className="text-[#FF6800] text-4xl mt-2" />
        </div>

        <div className="bg-[#D9D9D9] rounded-[8px] flex flex-col items-center justify-center p-4">
          <h2 className="text-lg font-medium text-gray-700">Expenses</h2>
          <input
            type="number"
            value={expenses}
            onChange={(e) => setExpenses(Number(e.target.value))}
            className="text-2xl font-bold text-center text-gray-900 mt-1 bg-transparent border-b-2 border-gray-500 focus:outline-none w-full"
          />
          <FaRegMoneyBillAlt className="text-[#FF6800] text-4xl mt-2" />
        </div>

        <div className="bg-[#D9D9D9] rounded-[8px] flex flex-col items-center justify-center p-4">
          <h2 className="text-lg font-medium text-gray-700">Profit/Loss</h2>
          <p
            className={`text-2xl font-bold mt-1 ${
              profitLoss >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            Ksh. {profitLoss}
          </p>
          <FaChartLine
            className={`text-4xl mt-2 ${
              profitLoss >= 0 ? "text-[#5FA331]" : "text-red-500"
            }`}
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={handleSaveLog}
          className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "18px",
          }}
        >
          Save Daily Log
        </button>
      </div>

      <div className="bg-[#D9D9D9] p-6 rounded-[8px] mt-[50px]">
        <h2
          className="text-xl font-semibold mb-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Sales vs Purchases (Monday - Sunday)
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
          >
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

      {history.length > 0 && (
        <div className="mt-10">
          <h2
            className="text-xl font-semibold mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Daily Logs
          </h2>
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Opening Stock</th>
                <th className="px-4 py-2 border">Sales</th>
                <th className="px-4 py-2 border">Purchases</th>
                <th className="px-4 py-2 border">Expenses</th>
                <th className="px-4 py-2 border">Profit/Loss</th>
              </tr>
            </thead>
            <tbody>
              {history.map((entry, idx) => (
                <tr key={idx} className="text-center">
                  <td className="px-4 py-2 border">{entry.date}</td>
                  <td className="px-4 py-2 border">Ksh. {entry.openingStock}</td>
                  <td className="px-4 py-2 border">Ksh. {entry.sales}</td>
                  <td className="px-4 py-2 border">Ksh. {entry.purchases}</td>
                  <td className="px-4 py-2 border">Ksh. {entry.expenses}</td>
                  <td
                    className={`px-4 py-2 border font-bold ${
                      entry.profitLoss >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    Ksh. {entry.profitLoss}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
