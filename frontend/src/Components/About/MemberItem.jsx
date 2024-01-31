// react
import PropTypes from "prop-types";

const MemberItem = ({ img, name, position }) => {
  return (
    <div className="lg:w-[300px] xl:w-[386px]">
      <img
        src={img}
        alt="member-image"
        className="w-full aspect-[100/105] rounded-xl"
      />
      <p className="text-xl md:text-2xl font-pt-bold mt-5">{name}</p>
      <p className="text-xl md:text-2xl">{position}</p>
    </div>
  );
};

MemberItem.propTypes = {
  img: PropTypes.any,
  name: PropTypes.string,
  position: PropTypes.string,
};

export default MemberItem;