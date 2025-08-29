import React from "react"
import SummaryCard from "./SummaryCard"
import { computeSummary } from "../utils/helpers"

export default function Dashboard({ data, onNavigateAdd }) {
  const summary = computeSummary(data.transactions)

  return (
    <section>
      {/* Heading */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Today</h1>
        <button
          onClick={onNavigateAdd}
          className="bg-orange-500 text-white px-3 py-1 rounded"
        >
          Add
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <SummaryCard title="Opening Stock" value={`KSh ${summary.openingStock}`} />
        <SummaryCard title="Sales" value={`KSh ${summary.sales}`} positive />
        <SummaryCard title="Purchases" value={`KSh ${summary.purchases}`} />
        <SummaryCard title="Expenses" value={`KSh ${summary.expenses}`} negative />
        <SummaryCard
          title="Profit/Loss"
          value={`KSh ${summary.profit}`}
          isProfit={summary.profit >= 0}
        />
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="font-semibold mb-2">Weekly Sales vs Expenses</h2>
        <div className="h-40 flex items-center justify-center text-gray-400">
          [Chart Placeholder]
        </div>
      </div>
    </section>
  )
}
