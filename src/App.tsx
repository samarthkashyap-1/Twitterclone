import "./index.css";
import Signup from "./pages/Signup.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound.tsx";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Container from "./pages/Container.tsx";


function App() {
    const [parent] = useAutoAnimate();
  return (
    <div ref={parent}>

    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Signup />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/home" element={<Container/>} />
        <Route path="/explore" element={<Container/>} />
        <Route path ='*' element={<NotFound/>} />
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
