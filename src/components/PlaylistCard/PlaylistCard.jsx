import ButtonIcon from "../Button/ButtonIcon";
import { IoPlay } from "react-icons/io5";
// import { IoPause } from "react-icons/io5";

/* eslint-disable react/prop-types */
const PlaylistCard = ({ src, text }) => {
  return (
    <div className="flex items-center  text-white">
      <div className="h-[4.5rem] w-[4.5rem] rounded-l-md bg-gray-50">
        <img
          className="h-full w-full rounded-l-md object-cover"
          src={src}
          alt={src}
        />
      </div>
      <div className="flex h-[4.5rem]  w-[25rem] items-center justify-between rounded-r-md bg-white/15 px-3 py-4 backdrop-blur">
        <p className="font-semibold capitalize">{text}</p>
        <ButtonIcon icon={<IoPlay size={25} />} />
      </div>
    </div>
  );
};

export default PlaylistCard;
