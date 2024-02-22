// react
import PropTypes from "prop-types";

// components
import Header from "./Header";

// framer-motion
import { motion } from "framer-motion";

const Hero = ({ pageTitle, pageText, bgImg, children }) => {
  return (
    <section
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgImg})`,
      }}
      className="flex flex-col text-white !bg-cover !bg-no-repeat !bg-center"
    >
      <Header />
      <div className="p-5 py-24 container text-center">
        {pageTitle && (
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl font-pt-bold mb-1"
          >
            {pageTitle}
          </motion.h2>
        )}
        {pageText && (
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl"
          >
            {pageText}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
};

Hero.propTypes = {
  bgImg: PropTypes.string,
  pageTitle: PropTypes.string,
  pageText: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
