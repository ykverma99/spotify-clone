import { Link } from "react-router-dom";
import ButtonIcon from "../Button/ButtonIcon";
import { IoPlay } from "react-icons/io5";
// import { IoPause } from "react-icons/io5";

/* eslint-disable react/prop-types */
const PlaylistCard = ({ src, text, href, icon }) => {
  return (
    <Link to={href} className="flex items-center  text-white">
      <div className={`h-[4.5rem] w-[4.5rem] rounded-l-md ${icon ? "" : ""}`}>
        {src ? (
          <img
            className="h-full w-full rounded-l-md object-cover"
            src={src}
            alt={src}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-purple-400">
            {icon}
          </div>
        )}
      </div>
      <div className="flex h-[4.5rem]  w-[25rem] items-center justify-between rounded-r-md bg-white/15 px-3 py-4 backdrop-blur">
        <p className="font-semibold capitalize">{text}</p>
        <ButtonIcon icon={<IoPlay size={25} />} />
      </div>
    </Link>
  );
};

export default PlaylistCard;
