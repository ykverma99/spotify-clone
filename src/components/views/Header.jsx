import Button from "../Button/Button";
import ButtonIcon from "../Button/ButtonIcon";
import Navigatearrow from "../Navigatearrow";
import { GoBell } from "react-icons/go";
import { PiUsersThreeBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
// style={{ margin: "0 2px", backgroundColor: "white", color: "black" }}
const Header = () => {
  return (
    <header className="flex justify-between p-4">
      <Navigatearrow />
      <div className="flex gap-2">
        <Button size="sm" className={"mx-1"} bg={"white"} color={"black"}>
          Explore Premium
        </Button>
        <ButtonIcon icon={<GoBell />} size="sm" bg={"rgba(0,0,0,0.7)"} />
        <ButtonIcon
          icon={<PiUsersThreeBold />}
          size="sm"
          bg={"rgba(0,0,0,0.7)"}
        />
        <ButtonIcon icon={<FaRegUser />} size="sm" bg={"rgba(0,0,0,0.7)"} />
      </div>
    </header>
  );
};

export default Header;
