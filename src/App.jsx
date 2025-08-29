import React, { useEffect, useState } from "react"
import Header from "./components/Header"
import Dashboard from "./components/Dashboard"
import AddTransaction from "./components/AddTransaction"
import { loadData, saveData } from "./utils/storage"

export default function App() {
  const [data, setData] = useState(loadData())
  const [view, setView] = useState("dashboard")

  useEffect(() => {
    saveData(data)
  }, [data])

  function addTransaction(tx) {
    setData(prev => ({ ...prev, transactions: [tx, ...prev.transactions] }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAdd={() => setView("add")} />
      <main className="max-w-5xl mx-auto p-4">
        {view === "dashboard" && (
          <Dashboard data={data} onNavigateAdd={() => setView("add")} />
        )}
        {view === "add" && (
          <AddTransaction
            onSave={tx => {
              addTransaction(tx)
              setView("dashboard")
            }}
            onCancel={() => setView("dashboard")}
          />
        )}
      </main>
    </div>
  )
}
