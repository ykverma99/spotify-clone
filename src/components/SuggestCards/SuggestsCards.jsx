import { useState } from "react";
import ButtonIcon from "../Button/ButtonIcon";
import { IoPlay } from "react-icons/io5";

/* eslint-disable react/prop-types */
const SuggestsCards = ({ src, title, desc }) => {
  const [mouseHover, setmouseHover] = useState(false);
  function handleMouseEnter() {
    setmouseHover(true);
  }
  function handleMouseLeave() {
    setmouseHover(false);
  }
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex h-72 w-52 cursor-pointer flex-col items-center gap-3 rounded-md p-3 backdrop-blur ${mouseHover ? "bg-white/15" : " bg-white/5"}`}
    >
      <div className="relative h-3/4 w-full rounded-md ">
        <img
          src={src}
          alt={src}
          className="h-full w-full rounded-md object-cover shadow-lg shadow-black"
        />
        <div
          className={`ease absolute right-2 transition-all delay-150 duration-200 ease-in ${mouseHover ? "visible bottom-2 " : "invisible bottom-0"}`}
        >
          <ButtonIcon
            icon={<IoPlay color="black" size={25} />}
            size="lg"
            className="absolute left-0 top-0"
          />
          {/* <IoPlay color="black" size={25} /> */}
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold text-white">{title}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  );
};

export default SuggestsCards;
