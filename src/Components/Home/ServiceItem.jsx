// react
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceItem = ({ img, title, description, linkAddress }) => {
  return (
    <>
      {title ? (
        <div>
          <img src={img} alt="service-image" className="rounded-xl" />
          <h4 className="text-secondary text-2xl md:text-3xl mb-2 font-semibold mt-6">
            {title}
          </h4>
          <p className="text-xl md:text-2xl mb-5 md:mb-8 max-w-5xl">
            {description}
          </p>
          <p>
            <Link
              to={linkAddress}
              href=""
              className="service-link text-xl md:text-2xl"
            >
              Learn more
            </Link>
          </p>
        </div>
      ) : (
        <div className="hidden lg:block xl:hidden"></div>
      )}
    </>
  );
};

ServiceItem.propTypes = {
  img: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  linkAddress: PropTypes.string,
};

export default ServiceItem;
