import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import './App.css';
import Dashboard from "./pages/Dashboard.jsx";
import Docs from "./pages/Docs.jsx";
import Analytics from "./pages/Analytics.jsx"; // Import the Analytics page

function App() {
  return (
    <Router>
      {/* Routes for Dashboard, Docs, and Analytics pages */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/analytics" element={<Analytics />} /> {/* New Analytics route */}
      </Routes>
    </Router>
  );
}

export default App;
