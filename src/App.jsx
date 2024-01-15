import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Residential from "./Pages/Residential";
import Commercial from "./Pages/Commercial";
import Specialized from "./Pages/Specialized";
import Horticulture from "./Pages/Horticulture";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/residential" element={<Residential />} />
        <Route path="/services/commercial" element={<Commercial />} />
        <Route path="/services/specialized" element={<Specialized />} />
        <Route path="/services/horticulture" element={<Horticulture />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Booking />} />
      </Routes>
    </>
  );
}

export default App;

