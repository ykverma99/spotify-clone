// import { useState } from "react";
import ButtonIcon from "../Button/ButtonIcon";
import { IoPlay } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const defaultStyles =
  "group flex h-72 w-52 cursor-pointer flex-col items-center gap-3 rounded-md bg-white/5 p-3 backdrop-blur hover:bg-white/15";

const varients = {
  sm: "h-64 w-48",
  base: "h-72 w-52",
};

/* eslint-disable react/prop-types */
const SuggestsCards = ({ src, title, desc, isCross, size = "base" }) => {
  return (
    <div className={`${defaultStyles} ${varients[size]}`}>
      <div className="relative h-3/4 w-full rounded-md ">
        {isCross && (
          <div
            className={`ease invisible absolute right-2 top-2 transition-all duration-200 ease-in group-hover:visible group-hover:bottom-2`}
          >
            <ButtonIcon
              icon={<RxCross2 />}
              size="xs"
              className="absolute left-0 top-0"
              bg={"gray"}
            />
          </div>
        )}
        <img
          src={src}
          alt={src}
          className="h-full w-full rounded-md object-cover shadow-lg shadow-black"
        />
        <div
          className={`ease invisible absolute bottom-0 right-2 transition-all duration-200 ease-in group-hover:visible group-hover:bottom-2`}
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
