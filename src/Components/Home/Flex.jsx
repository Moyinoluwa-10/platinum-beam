import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Flex = ({ img, name, description, linkAdd, linkText }) => {
  return (
    <section className="p-5 py-24 container flex flex-col lg:flex-row justify-between items-center gap-12">
      <div>
        <img src={img} alt="image" />
      </div>
      <div className="lg:max-w-xl">
        <h3 className="text-secondary text-4xl md:text-6xl mb-4 font-bold">
          {name}
        </h3>
        <p className="text-xl md:text-2xl mb-10">{description}</p>
        <div>
          <Link
            to={linkAdd}
            className="uppercase py-3 px-12 md:px-7 md:py-4 bg-primary rounded-2xl text-white inline-block"
          >
            {linkText}
          </Link>
        </div>
      </div>
    </section>
  );
};

Flex.propTypes = {
  img: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkAdd: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default Flex;
