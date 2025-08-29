import React from "react"

export default function SummaryCard({ title, value, positive, negative, isProfit }) {
  const valueColor = isProfit
    ? "text-green-500"
    : negative
    ? "text-red-500"
    : "text-gray-900"

  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-start gap-3">
      <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center text-white">
        📊
      </div>
      <div>
        <div className="text-sm text-gray-600">{title}</div>
        <div className={`text-lg font-bold ${valueColor}`}>{value}</div>
      </div>
    </div>
  )
}
