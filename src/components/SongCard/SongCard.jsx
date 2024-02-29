import { Link } from "react-router-dom";
import Text from "../Text/Text";

/* eslint-disable react/prop-types */

const sizeImg = {
  sm: "h-12 w-12",
  md: "h-14 w-14",
};
const SongCard = ({
  src,
  title,
  icon,
  name,
  option,
  isHover = true,
  size = "md",
  iconLiked,
  href,
  ...extraprops
}) => {
  return (
    <Link
      to={href}
      {...extraprops}
      className={`ease my-3 flex cursor-pointer items-center gap-3 rounded-md p-1 transition-all  duration-200 ease-in ${isHover ? "hover:bg-gray-600 hover:bg-opacity-40 " : ""}`}
    >
      <div className={`${sizeImg[size]} rounded-md`}>
        {src ? (
          <img
            className="h-full w-full rounded-md object-cover"
            src={src}
            alt={src}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-purple-400">
            {iconLiked}
          </div>
        )}
      </div>
      <div className="capitalize">
        <Text className="font-medium tracking-wide text-white">{title}</Text>
        <div className="flex items-center gap-1 text-sm text-gray-400">
          {icon != null ? <span>{icon}</span> : null}
          <Text varient="hoverline">{name}</Text>
          {option != null ? (
            <span className="h-1 w-1 rounded-full bg-gray-400"></span>
          ) : null}
          <Text varient="hoverline">{option}</Text>
        </div>
      </div>
    </Link>
  );
};

export default SongCard;
