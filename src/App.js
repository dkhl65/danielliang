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
  fetch("https://ipapi.co/json/")
    .then((res) => res.json())
    .then((data) => {
      fetch("https://visitortracker.vercel.app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ipaddr: data.ip, website: "danielliang" }),
      }).catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));

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
