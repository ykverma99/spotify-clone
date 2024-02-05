import { useState } from "react";
import Text from "./components/Text/Text";
import { RiSearchEyeLine } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { TbCards } from "react-icons/tb";
import { IoAdd } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";

function App() {
  const [switchLinks, setswitchLinks] = useState(false);
  return (
    <div className="grid h-screen  grid-cols-5 grid-rows-8 gap-3 bg-black">
      {/* in this sidebar we show theour playlists */}
      <aside className="col-start-1 col-end-2 row-span-7 space-y-5 bg-gray-600 bg-opacity-30 px-3 py-7 text-white">
        {/* container is used to shift from home to search */}
        <div className="space-y-4 rounded-lg bg-black bg-opacity-60 p-5">
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
        {/* this container store the our play lists */}
        <div className="space-y-4 rounded-lg bg-black bg-opacity-60 p-5">
          <div className="flex justify-between">
            <Text leftIcon={<TbCards size={23} />} className="text-gray-400">
              Your Library
            </Text>
            <div className="flex items-center gap-2">
              <IoAdd size={25} className="text-gray-400" />
              <IoMdArrowForward size={25} className="text-gray-400" />
            </div>
          </div>
        </div>
      </aside>

      {/* main section in which all the content is passed down */}
      <main className="col-start-2 col-end-6 row-span-7 bg-red-500"></main>

      {/* this is the right sidebar and this will only open when a song is playing and we want
        to show the artist detail */}
      <aside className="col-start-1  col-end-6 bg-cyan-300">gasd</aside>
    </div>
  );
}

export default App;
