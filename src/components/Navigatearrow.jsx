import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import ButtonIcon from "./Button/ButtonIcon";

const Navigatearrow = () => {
  const [pageShift, setpageShift] = useState(false);
  return (
    <div className="inline-flex items-center gap-2 text-white">
      <ButtonIcon
        bg={"rgb(0,0,0,0.7)"}
        size="sm"
        icon={<MdKeyboardArrowLeft size={30} />}
        onClick={() => setpageShift(true)}
      />
      <ButtonIcon
        bg={`${pageShift ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.4)"}`}
        className={`${pageShift ? "cursor-pointer" : "cursor-not-allowed"}`}
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
