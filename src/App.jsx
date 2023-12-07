import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Service from "./Pages/Service";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Booking />} />
      </Routes>
    </>
  );
}

export default App;

