// react
import PropTypes from "prop-types";

// components
import Header from "./Header";

const Hero = ({ pageTitle, pageText, bgImg }) => {
  return (
    <section
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImg})`,
      }}
      className="flex flex-col text-white !bg-cover !bg-no-repeat !bg-center"
    >
      <Header />
      <div className="p-5 py-24 container text-center">
        <h2 className="text-3xl md:text-4xl font-medium mb-1">{pageTitle}</h2>
        <p className="text-2xl">{pageText}</p>
      </div>
    </section>
  );
};

Hero.propTypes = {
  bgImg: PropTypes.string,
  pageTitle: PropTypes.string,
  pageText: PropTypes.string,
};

export default Hero;
