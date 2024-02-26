/* eslint-disable react/prop-types */
import ButtonIcon from "../Button/ButtonIcon";
import { IoPlay } from "react-icons/io5";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";

const TablePlaylist = ({ children }) => {
  return (
    <div className="min-h-[26rem] bg-black/30 p-5">
      <div className="inline-flex items-center gap-3 pb-4">
        <ButtonIcon size="md" icon={<IoPlay size={25} color="black" />} />
        <ButtonIcon
          varient="flat"
          icon={<BiDotsHorizontalRounded color="white" size={30} />}
        />
      </div>
      <table className="w-full text-left text-gray-400">
        <thead className="capitalize">
          <tr>
            <th className="py-3" scope="col">
              #
            </th>
            <th className="py-3" scope="col">
              Title
            </th>
            <th className="py-3" scope="col">
              Album
            </th>
            <th className="py-3" scope="col">
              Date Added
            </th>
            <th className="w-10 py-3 pr-3 text-right" scope="col">
              <CiClock2 color="inherit" />
            </th>
          </tr>
        </thead>
        <tbody className="border-collapse text-gray-400">
          {/* {songs.map((elm, i) => {
            return (
              <TableBody
                title={elm.song}
                name={elm.artist[0].name}
                src={elm.artist[0].album[0].albumImage}
                album={elm.artist[0].album[0].albumName}
                time={"3:59"}
                date={"5 days"}
                key={i}
                index={i + 1}
              />
            );
          })} */}
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default TablePlaylist;
