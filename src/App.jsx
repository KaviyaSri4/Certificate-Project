import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Verify from "./pages/Verify.jsx";

function App() {
  const [certificates, setCertificates] = useState([]);

  return (
    <Router>
      <Routes>

        <Route
          path="/"
          element={
            <Dashboard
              certificates={certificates}
              setCertificates={setCertificates}
            />
          }
        />

        <Route
          path="/verify/:id"
          element={<Verify certificates={certificates} />}
        />

      </Routes>
    </Router>
  );
}

export default App;