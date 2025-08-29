import React from "react"

export default function Header({ onAdd }) {
  return (
    <header className="bg-slate-800 text-white">
      <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-500 rounded flex items-end px-1">
            <div className="w-2 h-2 bg-white rounded" />
            <div className="w-2 h-3 bg-white rounded ml-1" />
            <div className="w-2 h-4 bg-white rounded ml-1" />
          </div>
          <div className="font-bold text-lg">Biashara Boss</div>
        </div>

        {/* Date + Add Button */}
        <div className="flex items-center gap-3">
          <div className="text-sm bg-white text-slate-800 px-3 py-2 rounded">
            {new Date().toLocaleDateString()}
          </div>
          <button
            onClick={onAdd}
            className="bg-orange-500 text-white px-4 py-2 rounded-full"
          >
            + Add Transaction
          </button>
        </div>
      </div>
    </header>
  )
}
