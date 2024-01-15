import PropTypes from "prop-types";

const ServiceItem = ({ img, name, description }) => {
  return (
    <>
      {name ? (
        <div>
          <img src={img} alt="service-image" />
          <h4 className="text-secondary text-2xl md:text-3xl mb-2 font-bold mt-6">
            {name}
          </h4>
          <p className="text-xl md:text-2xl mb-5 md:mb-8 max-w-5xl">
            {description}
          </p>
          <p>
            <a
              href=""
              className="text-primary text-xl md:text-2xl transition-all hover:underline"
            >
              Let's do this
            </a>
          </p>
        </div>
      ) : (
        <div className="lg:block hidden"></div>
      )}
    </>
  );
};

ServiceItem.propTypes = {
  img: PropTypes.any,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default ServiceItem;
