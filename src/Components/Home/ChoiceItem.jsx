import PropTypes from "prop-types";

const ChoiceItem = ({ img, title, description }) => {
  return (
    <>
      {title ? (
        <div className="text-center">
          <img src={img} alt="cleaning-service-logo" className="mx-auto" />
          <h4 className="text-secondary text-2xl md:text-3xl my-2 font-bold">
            {title}
          </h4>
          <p className="text-xl md:text-2xl mb-10 max-w-5xl">{description}</p>
        </div>
      ) : (
        <div className="lg:block hidden"></div>
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
