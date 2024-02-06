import Button from "../Button/Button";
import ButtonIcon from "../Button/ButtonIcon";
import Navigatearrow from "../Navigatearrow";
import { GoBell } from "react-icons/go";
import { PiUsersThreeBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between px-4 py-4">
      <Navigatearrow />
      <div className="flex gap-2">
        <Button size="sm" className={"mx-1 bg-white text-black"}>
          Explore Premium
        </Button>
        <ButtonIcon icon={<GoBell />} size="sm" className="bg-gray-950" />
        <ButtonIcon
          icon={<PiUsersThreeBold />}
          size="sm"
          className="bg-gray-950"
        />
        <ButtonIcon icon={<FaRegUser />} size="sm" className="bg-gray-950" />
      </div>
    </header>
  );
};

export default Header;
