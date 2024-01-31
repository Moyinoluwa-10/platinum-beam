// react
import PropTypes from "prop-types";

// components
import Header from "./Header";

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
          <h2 className="text-3xl md:text-4xl font-pt-bold mb-1">
            {pageTitle}
          </h2>
        )}
        {pageText && <p className="text-2xl">{pageText}</p>}
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
