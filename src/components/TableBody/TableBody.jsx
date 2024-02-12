/* eslint-disable react/prop-types */
import SongCard from "../SongCard/SongCard";

const TableBody = ({ index, title, name, src, album, time, date }) => {
  return (
    <>
      <tr className="rounded-lg transition-all duration-150 ease-in hover:bg-white/10">
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
        <td className="max-w-20 ">{date}</td>
        <td className="max-w-4 pr-3">{time}</td>
      </tr>
    </>
  );
};

export default TableBody;
