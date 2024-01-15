import PropTypes from "prop-types";

const ServiceItem = ({ img, title, description }) => {
  return (
    <>
      {title ? (
        <div>
          <img src={img} alt="service-image" />
          <h4 className="text-secondary text-2xl md:text-3xl mb-2 font-bold mt-6">
            {title}
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
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ServiceItem;
