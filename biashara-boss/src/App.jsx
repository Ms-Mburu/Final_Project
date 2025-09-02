import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import DashboardPage from "./components/DashboardPage";
import AddTransactionPage from "./components/AddTransactionPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/add-transaction" element={<AddTransactionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
