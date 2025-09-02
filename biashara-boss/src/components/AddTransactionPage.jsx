import React, { useState } from "react";

const AddTransactionPage = () => {
  const [transactionType, setTransactionType] = useState("Sales");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [savedTransactions, setSavedTransactions] = useState([]);
  const [message, setMessage] = useState("");
  


  const handleSave = () => {
    if (!item || !amount || !date || !category) {
      setMessage("Please fill all fields before saving.");
      return;
    }

    const newTransaction = { transactionType, item, amount, date, category };
    setSavedTransactions([...savedTransactions, newTransaction]);

    setMessage("Transaction saved successfully!");
    setItem("");
    setAmount("");
    setDate("");
    setCategory("");
  };

  const handleCancel = () => {
    setTransactionType("Sales");
    setItem("");
    setAmount("");
    setDate("");
    setCategory("");
    setMessage("Transaction canceled.");
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <header className="flex items-center justify-between mb-12">
        <div className="flex items-center space-x-4">
          <img
            src="/Images/Logo.svg"
            alt="Biashara Boss Logo"
            className="h-12 w-auto"
          />
          <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "34px", color: "#000000" }}>
            Biashara Boss
          </h1>
        </div>
      </header>

      <h2 className="text-center mb-8" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "50px", color: "#000000" }}>
        Add Transaction
      </h2>

      <div className="flex justify-center gap-[80px] mt-[80px]">
        {["Sales", "Purchases", "Expenses"].map((type) => (
          <button
            key={type}
            onClick={() => {
        setTransactionType(type);
        setCategory(type);
        document.getElementById("categoryInput")?.scrollIntoView({ behavior: "smooth" });
      }}
            
            className={`px-6 py-3 rounded-[8px] text-lg font-medium transition ${
              transactionType === type ? "bg-[#F97316] text-white" : "bg-[#D9D9D9] text-black hover:bg-gray-300"
            }`}
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "33px" }}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center mt-[50px]">
        <input type="text" placeholder="Item/Description" value={item} onChange={(e) => setItem(e.target.value)}
          className="w-2/5 h-12 px-4  rounded-[8px] text-black placeholder-gray-600 focus:outline-none"
          style={{ backgroundColor: "#D9D9D9", fontFamily: "Poppins, sans-serif", fontSize: "33px", marginBottom: "40px"}} />

        <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}
          className="w-2/5 h-12 px-4 rounded-[8px] text-black placeholder-gray-600 focus:outline-none"
          style={{ backgroundColor: "#D9D9D9", fontFamily: "Poppins, sans-serif", fontSize: "33px", marginBottom: "40px"}} />

        <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
          className="w-2/5 h-12 px-4 rounded-[8px] text-black placeholder-gray-600 focus:outline-none appearance-none"
          style={{ backgroundColor: "#D9D9D9", fontFamily: "Poppins, sans-serif", fontSize: "33px", marginBottom: "40px" }} />

        <select value={category} onChange={(e) => setCategory(e.target.value)}
          className="w-2/5 h-12 px-4 rounded-[8px] text-black focus:outline-none"
          style={{ backgroundColor: "#D9D9D9", fontFamily: "Poppins, sans-serif", fontSize: "33px", marginBottom: "40px" }}>
          <option value="">Select Category</option>
          <option value="Sales">Sales</option>
          <option value="Purchases">Purchases</option>
          <option value="Expenses">Expenses</option>
        </select>

        <div className="flex space gap-[80px]">
          <button onClick={handleSave} className="px-8 py-3 rounded-[8px] text-white font-semibold hover:bg-[#e65a00] transition" style={{ backgroundColor: "#FF6800", fontFamily: "Poppins, sans-serif", fontSize: "33px", marginBottom: "50px"}}>
            Save
          </button>
          <button onClick={handleCancel} className="px-8 py-3 rounded-[8px] text-black bg-gray-300 font-semibold hover:bg-gray-400 transition" style={{fontFamily: "Poppins, sans-serif", fontSize: "33px", marginBottom: "50px"}}>
            Cancel
          </button>
        </div>

        {message && <p className="mt-4 text-center text-lg text-gray-700">{message}</p>}
        {savedTransactions.length > 0 && (
          <div className="mt-8 w-2/5">
            <h3 className="font-semibold mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>Saved Transactions:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {savedTransactions.map((t, index) => (
                <li key={index}>
                  {t.transactionType} - {t.item} - Ksh. {t.amount} - {t.date} - {t.category}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddTransactionPage;
