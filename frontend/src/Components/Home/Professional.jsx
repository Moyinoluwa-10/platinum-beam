// react
import PropTypes from "prop-types";

// components
import Button from "../Button";

const Professional = ({ img, name, description, linkAddress, linkText }) => {
  return (
    <section className="container p-5 py-16 flex flex-col lg:flex-row justify-between items-center gap-12">
      <div>
        <img src={img} alt="image" className="rounded-xl lg:max-h-[420px]" />
      </div>
      <div className="lg:max-w-xl">
        <h3 className="text-tertiary text-4xl md:text-5xl mb-4 font-pt-bold">
          {name}
        </h3>
        <p className="text-xl md:text-2xl mb-10">{description}</p>
        <div className="text-2xl">
          <Button linkAddress={linkAddress}>{linkText}</Button>
        </div>
      </div>
    </section>
  );
};

Professional.propTypes = {
  img: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkAddress: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default Professional;
