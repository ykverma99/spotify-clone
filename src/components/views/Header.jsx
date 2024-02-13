/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import ButtonIcon from "../Button/ButtonIcon";
import Navigatearrow from "../Navigatearrow";
import { GoBell } from "react-icons/go";
import { PiUsersThreeBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
// style={{ margin: "0 2px", backgroundColor: "white", color: "black" }}
const Header = ({ isInput, onChange, bg, isScroll }) => {
  return (
    <header
      className={`${isScroll ? "static" : "sticky top-0 z-50"} flex items-center justify-between p-4`}
      style={{ backgroundColor: `#${bg}` }}
    >
      <Navigatearrow isInput={isInput} onChange={onChange} />
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
        <Link to={"/login"}>
          <ButtonIcon
            // onClick={handleLink}
            icon={<FaRegUser />}
            size="sm"
            bg={"rgba(0,0,0,0.7)"}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
