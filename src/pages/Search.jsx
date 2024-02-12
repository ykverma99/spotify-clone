import LibraryBox from "../components/views/LibraryBox";
import PageLinkBox from "../components/views/PageLinkBox";
import Header from "../components/views/Header";
import BeforeSearch from "../components/views/BeforeSearch";
import AfterSearch from "../components/views/AfterSearch";
import { useEffect, useRef, useState } from "react";

const Search = () => {
  const [inputValue, setinputValue] = useState("");
  const [navBg, setNavBg] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    const main = mainRef.current;
    const onScroll = () => {
      if (main.scrollTop >= 50) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    main.addEventListener("scroll", onScroll);
    return () => main.removeEventListener("scroll", onScroll);
  }, []);

  function handleSearchInput(e) {
    setinputValue(e.target.value);
  }

  const color = Math.random().toString(16).slice(-6);
  return (
    <div className="grid h-screen grid-cols-5 grid-rows-8 gap-3 overflow-y-hidden bg-black px-5 pt-5">
      {/* in this sidebar we show theour playlists */}
      <aside className="col-start-1 col-end-2 row-span-7 space-y-3 rounded-lg text-white">
        {/* container is used to shift from home to search */}
        <PageLinkBox />

        {/* this container store the our play lists */}
        <LibraryBox />
      </aside>

      {/* main section in which all the content is passed down */}
      <main
        ref={mainRef}
        className="col-start-2  col-end-6 row-span-7 overflow-y-auto rounded-lg bg-gray-600 bg-opacity-30"
      >
        <Header
          bg={navBg && color}
          isInput={true}
          onChange={handleSearchInput}
        />
        {inputValue.length > 0 ? <AfterSearch /> : <BeforeSearch />}
      </main>
      {/* this is the right sidebar and this will only open when a song is playing and we want
        to show the artist detail */}
      <aside className="col-start-1 col-end-6 rounded-lg  bg-gray-600 bg-opacity-30">
        gasd
      </aside>
    </div>
  );
};

export default Search;
