/* eslint-disable react/no-unescaped-entities */
import ButtonIcon from "../Button/ButtonIcon";
import { IoPlay } from "react-icons/io5";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import Headphones from "../../assets/headphones.jpg";
import TableBody from "../TableBody/TableBody";

const arr = new Array(100).fill("");
const TablePlaylist = () => {
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
          {arr.map((_, i) => {
            return (
              <TableBody
                title={"Dhundle Dhundle"}
                name={"Singer"}
                src={Headphones}
                album={"Album"}
                time={"3:59"}
                date={"5 days"}
                key={i}
                index={i + 1}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TablePlaylist;
