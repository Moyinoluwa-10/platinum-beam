// react
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({ linkAddress, children }) => {
  return (
    <>
      <Link
        to={linkAddress}
        className="py-3 px-6 z-0 inline-block overflow-hidden bg-secondary rounded-md text-white relative border border-transparent hover:border-secondary hover:text-secondary transition-all duration-300 before:absolute before:block before:top-0 before:-left-[100%] before:w-full before:h-full before:bg-white before:-z-10 hover:before:left-0 before:transition-all before:duration-300"
        // className="py-3 px-6 block z-0 bg-secondary rounded-xl text-white relative before:absolute before:w-full before:h-full before:bg-red-600"
      >
        {children}
      </Link>
    </>
  );
};

Button.propTypes = {
  linkAddress: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
