import Text from "../Text/Text";
import { RiSearchEyeLine } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const PageLinkBox = () => {
  const { pathname } = useLocation();
  const url = pathname.split("/")[1];
  return (
    <div className="rounded-lg bg-gray-600 bg-opacity-30 p-5">
      <Link to={"/"}>
        <Text
          as={"h2"}
          varient="hoverline"
          leftIcon={<IoMdHome size={25} />}
          className={`${url == "search" ? "text-gray-400" : ""}`}
        >
          Home
        </Text>
      </Link>
      <Link className="my-2" to={"/search"}>
        <Text
          as={"h2"}
          varient="hoverline"
          leftIcon={<RiSearchEyeLine size={24} />}
          className={`mt-3 ${url != "search" ? "text-gray-400" : ""}`}
        >
          Search
        </Text>
      </Link>
    </div>
  );
};

export default PageLinkBox;
