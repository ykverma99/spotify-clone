import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import ButtonIcon from "./Button/ButtonIcon";

const Navigatearrow = () => {
  const [pageShift, setpageShift] = useState(false);
  return (
    <div className="inline-flex items-center gap-2 text-white">
      <ButtonIcon
        className="bg-gray-950"
        size="sm"
        icon={<MdKeyboardArrowLeft size={30} />}
        onClick={() => setpageShift(true)}
      />
      <ButtonIcon
        className={`bg-gray-950 ${pageShift ? "cursor-pointer" : "cursor-not-allowed bg-opacity-50"}`}
        size="sm"
        icon={<MdKeyboardArrowRight size={30} />}
        disabled={pageShift ? false : true}
        onClick={() => {
          console.log("object");
        }}
      />
    </div>
  );
};

export default Navigatearrow;
