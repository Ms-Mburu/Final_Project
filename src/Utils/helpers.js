export function computeSummary(transactions) {
  const summary = { openingStock: 0, sales: 0, purchases: 0, expenses: 0, profit: 0 }
  transactions.forEach(tx => {
    if (tx.type === "sale") summary.sales += tx.amount
    if (tx.type === "purchase") summary.purchases += tx.amount
    if (tx.type === "expense") summary.expenses += tx.amount
  })
  summary.profit = summary.sales - (summary.purchases + summary.expenses)
  return summary
}
