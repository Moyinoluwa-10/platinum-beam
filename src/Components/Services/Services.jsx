// components
import Header from "../Header";
import Footer from "../Footer";
import Transform from "../Transform";

import PropTypes from "prop-types";

const Services = ({ children }) => {
  return (
    <>
      <section className="hero min-h-screen text-white flex flex-col">
        <Header />
        <div className="p-5 container flex-grow flex place-items-center">
          <p className="text-2xl max-w-2xl mx-auto text-center">
            Our Services <br /> Tailor-Made Cleaning Solutions for Every Need
          </p>
        </div>
      </section>

      {children}

      <Transform />
      <Footer />
    </>
  );
};

Services.propTypes = {
  children: PropTypes.node,
};

export default Services;
