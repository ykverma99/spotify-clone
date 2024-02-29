/* eslint-disable react/prop-types */
import SongCard from "../SongCard/SongCard";
import { BiPlusCircle } from "react-icons/bi";
import { PiSealCheckFill } from "react-icons/pi";

const TableBody = ({
  index,
  title,
  name,
  src,
  album,
  time,
  date,
  toggle,
  toggleClick,
  onClick,
}) => {
  return (
    <>
      <tr
        onDoubleClick={onClick}
        className="group rounded-lg transition-all duration-150 ease-in hover:bg-white/10"
      >
        <td className="max-w-2 pl-2">{index}</td>
        <td className="max-w-24" scope="row">
          <SongCard
            size="sm"
            isHover={false}
            title={title}
            name={name}
            src={src}
          />
        </td>
        <td className="max-w-28  ">{album}</td>
        <td className="max-w-20">
          <div className="flex  items-center justify-between pr-2">
            <span>{date}</span>
            <span className="cursor-pointer opacity-0 group-hover:opacity-100">
              {!toggle ? (
                <BiPlusCircle onClick={toggleClick} size={20} />
              ) : (
                <PiSealCheckFill
                  color="limegreen"
                  onClick={toggleClick}
                  size={20}
                />
              )}
            </span>
          </div>
        </td>
        <td className="max-w-4 pr-3">
          <span>{time}</span>
        </td>
      </tr>
    </>
  );
};

export default TableBody;
