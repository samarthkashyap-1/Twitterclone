import "./index.css";
import Signup from "./pages/Signup.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound.tsx";
import Home from "./pages/Home.tsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Signup />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/home" element={<Home/>} />
        <Route path ='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
