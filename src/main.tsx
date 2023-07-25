import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Signup from './pages/Signup.tsx'
import Signin from "./pages/Signin.tsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
