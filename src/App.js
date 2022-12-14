import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbars from "./components/NavBars";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Navbars /> 
        <Routes>  
          <Route path="/" element={<Home />} />          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />          
        </Routes>
    </BrowserRouter>
  );
}

export default App;
