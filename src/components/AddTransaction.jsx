import React, { useState } from "react"

export default function AddTransaction({ onSave, onCancel }) {
  const [type, setType] = useState("sale")
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("general")
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

  function handleSubmit(e) {
    e.preventDefault()
    const tx = {
      id: Date.now(),
      type,
      description,
      amount: Number(amount),
      category,
      date,
    }
    onSave(tx)
  }

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-4">
      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          className={`px-3 py-1 rounded ${type === "sale" ? "bg-orange-500 text-white" : "bg-gray-100"}`}
          onClick={() => setType("sale")}
        >
          Sales
        </button>
        <button
          type="button"
          className={`px-3 py-1 rounded ${type === "purchase" ? "bg-orange-500 text-white" : "bg-gray-100"}`}
          onClick={() => setType("purchase")}
        >
          Purchases
        </button>
        <button
          type="button"
          className={`px-3 py-1 rounded ${type === "expense" ? "bg-orange-500 text-white" : "bg-gray-100"}`}
          onClick={() => setType("expense")}
        >
          Expenses
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm text-gray-600">Item / Description</label>
          <input
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm text-gray-600">Amount (KSh)</label>
            <input
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Category</label>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              <option value="general">General</option>
              <option value="food">Food</option>
              <option value="stock">Stock</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-600">Date</label>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="flex gap-2 mt-2">
          <button type="submit" className="flex-1 bg-orange-500 text-white px-4 py-2 rounded">
            Save
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 border rounded px-4 py-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
