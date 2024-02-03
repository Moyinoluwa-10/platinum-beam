// react
import { Routes, Route } from "react-router-dom";

// styling
import "./App.css";

// components
import About from "./Pages/About";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Residential from "./Pages/Residential";
import Commercial from "./Pages/Commercial";
import Specialized from "./Pages/Specialized";
import Horticulture from "./Pages/Horticulture";
import ResidentialBasic from "./Pages/ResidentialBasic";
import ResidentialDeep from "./Pages/ResidentialDeep";
import Faqs from "./Pages/Faqs";
import Error from "./Pages/Error";
import Terms from "./Pages/Terms";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/residential" element={<Residential />} />
        <Route
          path="/services/residential/basic"
          element={<ResidentialBasic />}
        />
        <Route
          path="/services/residential/deep"
          element={<ResidentialDeep />}
        />
        <Route path="/services/commercial" element={<Commercial />} />
        <Route path="/services/specialized" element={<Specialized />} />
        <Route path="/services/horticulture" element={<Horticulture />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
