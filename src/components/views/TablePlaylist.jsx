import ButtonIcon from "../Button/ButtonIcon";
import { IoPlay } from "react-icons/io5";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const TablePlaylist = () => {
  return (
    <div>
      <div className="inline-flex items-center">
        <ButtonIcon size="md" icon={<IoPlay size={25} color="black" />} />
        <ButtonIcon
          varient="flat"
          icon={<BiDotsHorizontalRounded color="white" size={25} />}
        />
      </div>
    </div>
  );
};

export default TablePlaylist;
