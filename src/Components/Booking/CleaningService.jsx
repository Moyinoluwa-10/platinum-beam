// react
import PropTypes from "prop-types";
import { GoInfo } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";

// components
import { MyCheckbox } from "./FormComponents";

const CleaningService = ({ title, value, description, id, isOpen, onOpen }) => {
  return (
    <div className="flex items-center gap-2 relative">
      <MyCheckbox name="cleaningService" value={value}>
        {title}
      </MyCheckbox>
      <GoInfo onClick={() => onOpen(id)} className={"cursor-pointer"} />
      {isOpen === id && (
        <p className="p-5 bg-white shadow-xl rounded-md border border-gray-400 absolute top-0 left-0 z-[5] max-w-lg">
          <MdOutlineCancel
            className="text-2xl ml-auto mb-2 cursor-pointer"
            onClick={() => onOpen(null)}
          />
          {description}
        </p>
      )}
    </div>
  );
};

CleaningService.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
  isOpen: PropTypes.oneOf([PropTypes.number, null]),
  onOpen: PropTypes.func,
};

export default CleaningService;
