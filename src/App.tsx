import React from "react";

// import App from './App.tsx'
import "./index.css";
import Signup from "./pages/Signup.tsx";
import Signin from "./pages/Signin.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Signup />} />
          {/* <Route path="/login" element={<Signin />} /> */}
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
