// react
import PropTypes from "prop-types";

// components
import Footer from "../Footer";
import Transform from "../Transform";

const Services = ({ children }) => {
  return (
    <>
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
