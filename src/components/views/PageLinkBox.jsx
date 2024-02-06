import Text from "../Text/Text";
import { RiSearchEyeLine } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { useState } from "react";

const PageLinkBox = () => {
  const [switchLinks, setswitchLinks] = useState(false);

  return (
    <div className="space-y-4 rounded-lg bg-gray-600 bg-opacity-30 p-5">
      <Text
        as={"h2"}
        varient="hoverline"
        leftIcon={<IoMdHome size={25} />}
        className={`${switchLinks ? "text-gray-400" : ""}`}
        onClick={() => {
          setswitchLinks(false);
        }}
      >
        Home
      </Text>
      <Text
        as={"h2"}
        varient="hoverline"
        leftIcon={<RiSearchEyeLine size={24} />}
        className={`${!switchLinks ? "text-gray-400" : ""}`}
        onClick={() => {
          setswitchLinks(true);
        }}
      >
        Search
      </Text>
    </div>
  );
};

export default PageLinkBox;
