import React from "react";

// import App from './App.tsx'
import "./index.css";
import Signup from "./pages/Signup.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Signup/>} />
          <Route path="/user/:emailcheck" element={<Feed/>} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
