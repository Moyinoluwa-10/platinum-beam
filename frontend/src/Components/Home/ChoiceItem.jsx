// react
import PropTypes from "prop-types";

const ChoiceItem = ({ img, title, description }) => {
  return (
    <>
      {title ? (
        <div className="text-center">
          <div className="flex items-center justify-center bg-secondary w-20 md:w-24 h-20 md:h-24 rounded-full mx-auto">
            <img
              src={img}
              alt="cleaning-service-logo"
              className="mx-auto w-12 md:w-16 h-12 md:h-16"
            />
          </div>
          <h4 className="text-tertiary text-2xl my-2 font-pt-bold">{title}</h4>
          <p className="text-xl md:text-2xl max-w-5xl">{description}</p>
        </div>
      ) : (
        <div className="hidden lg:block xl:hidden"></div>
      )}
    </>
  );
};

ChoiceItem.propTypes = {
  img: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ChoiceItem;
