import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import WebDevelopment from "./WebDevelopment";
import Cpp from "./Cpp";
import Java from "./Java";
import Python from "./Python";
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
