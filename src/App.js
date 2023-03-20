import "./App.css";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import WebDevelopment from "./pages/WebDevelopment";
import Cpp from "./pages/Cpp";
import Java from "./pages/Java";
import Python from "./pages/Python";
import Verilog from "./pages/Verilog";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webdevelopment" element={<WebDevelopment />} />
          <Route path="/cpp" element={<Cpp />} />
          <Route path="/java" element={<Java />} />
          <Route path="/python" element={<Python />} />
          <Route path="/verilog" element={<Verilog />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
