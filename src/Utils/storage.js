const KEY = "biashaboss_data_v1"

export function loadData() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : { transactions: [], stock: [] }
  } catch (e) {
    console.error("Failed to load local data", e)
    return { transactions: [], stock: [] }
  }
}

export function saveData(data) {
  try {
    localStorage.setItem(KEY, JSON.stringify(data))
  } catch (e) {
    console.error("Failed to save local data", e)
  }
}
