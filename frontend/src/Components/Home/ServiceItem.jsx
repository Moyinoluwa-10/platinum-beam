// react
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceItem = ({ img, title, description, linkAddress }) => {
  return (
    <>
      {title ? (
        <div>
          <img
            src={img}
            alt="service-image"
            className="rounded-xl sm:aspect-[280/210] md:aspect-[344/258] lg:aspect-[301/225] xl:aspect-[344/254]"
          />
          <h4 className="text-tertiary text-2xl mb-2 font-pt-bold mt-6">
            {title}
          </h4>
          <p className="text-xl mb-4 max-w-5xl">{description}</p>
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