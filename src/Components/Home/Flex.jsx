// react
import PropTypes from "prop-types";

// components
import Button from "../Button";

const Flex = ({ img, name, description, linkAddress, linkText }) => {
  return (
    <section className="container p-5 py-16 flex flex-col lg:flex-row justify-between items-center gap-12">
      <div>
        <img src={img} alt="image" className="rounded-xl" />
      </div>
      <div className="lg:max-w-xl">
        <h3 className="text-secondary text-4xl md:text-5xl mb-4 font-semibold">
          {name}
        </h3>
        <p className="text-xl md:text-2xl mb-10">{description}</p>
        <div>
          <Button linkAddress={linkAddress}>{linkText}</Button>
        </div>
      </div>
    </section>
  );
};

Flex.propTypes = {
  img: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkAddress: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default Flex;
