/* eslint-disable react/prop-types */
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ButtonIcon from "./Button/ButtonIcon";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navigatearrow = ({ isInput, onChange }) => {
  const navigate = useNavigate();
  const handlePrevRoute = () => {
    navigate(-1);
  };
  return (
    <div className="inline-flex items-center gap-2 text-white">
      <ButtonIcon
        bg={"rgb(0,0,0,0.7)"}
        size="sm"
        icon={<MdKeyboardArrowLeft size={30} />}
        onClick={handlePrevRoute}
      />
      <ButtonIcon
        bg="rgba(0,0,0,0.7)"
        className="cursor-pointer"
        size="sm"
        icon={<MdKeyboardArrowRight size={30} />}
        // disabled={pageShift ? false : true}
        onClick={() => {
          navigate(1);
        }}
      />
      {isInput && (
        <div className="group relative flex items-center">
          <label htmlFor="search" className="absolute left-0 z-20 px-3">
            <IoIosSearch size={20} />
          </label>
          <input
            onChange={onChange}
            type="text"
            id="search"
            name="search"
            className="w-96 rounded-full bg-white/20 px-10 py-3 group-hover:bg-white/40"
            placeholder="What do you want to listen to?"
          />
        </div>
      )}
    </div>
  );
};

export default Navigatearrow;
