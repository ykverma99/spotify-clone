/* eslint-disable react/prop-types */
import Text from "../Text/Text";
import { FaCheckCircle } from "react-icons/fa";

const Lists = ({ time, icon, src, title, singer }) => {
  return (
    <li className="group flex w-[50vw] cursor-pointer list-none items-center justify-between rounded-md px-2 py-1 text-white transition-all duration-150 ease-in hover:bg-gray-500 hover:bg-opacity-20">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-md">
          <img
            className="h-full w-full rounded-md object-cover"
            src={src}
            alt={src}
          />
        </div>
        <div>
          <Text>{title}</Text>
          <Text
            varient="hoverline"
            className="text-base leading-4 text-gray-400 group-hover:text-white"
          >
            {singer}
          </Text>
        </div>
      </div>
      <div>
        {icon && <FaCheckCircle className="bg-green-500 text-black" />}
        <p className="text-gray-400">{time}</p>
      </div>
    </li>
  );
};

export default Lists;
