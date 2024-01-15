import PropTypes from "prop-types";

const MemberItem = ({ img, name, position }) => {
  return (
    <div className="">
      <img src={img} alt="member-image" className="w-full aspect-[100/105]" />
      <p className="text-xl md:text-2xl font-semibold mt-5">{name}</p>
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
