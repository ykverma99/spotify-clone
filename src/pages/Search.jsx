import Header from "../components/views/Header";
import BeforeSearch from "../components/views/BeforeSearch";
import AfterSearch from "../components/views/AfterSearch";
import { useEffect, useRef, useState } from "react";
import Layout from "../layout/Layout";
import { useQuery } from "@tanstack/react-query";
import { retriveAllAlbum, retriveAllSongs } from "../api/data";

const Search = () => {
  const [inputValue, setinputValue] = useState("");
  const [navBg, setNavBg] = useState(false);
  const [songData, setsongData] = useState(null);
  const [albumData, setalbumData] = useState(null);
  const mainRef = useRef(null);
  const { data: song } = useQuery({
    queryKey: ["song"],
    queryFn: retriveAllSongs,
  });
  const { data: album } = useQuery({
    queryKey: ["album"],
    queryFn: retriveAllAlbum,
  });

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
    const inputValue = e.target.value;
    setinputValue(inputValue);
    if (song) {
      const filteredSongs = song.data.filter((elm) =>
        elm.songName.includes(inputValue),
      );
      setsongData(filteredSongs);
    }
    if (album) {
      const filteredAlbum = album.data.filter((elm) =>
        elm.albumName.includes(inputValue),
      );
      setalbumData(filteredAlbum);
    }
  }
  const color = Math.random().toString(16).slice(-6);
  return (
    <Layout>
      <main
        ref={mainRef}
        className="scrollbar-thumb-rounded-full scroll-track-rounded-full col-start-2 col-end-6 row-span-7 overflow-y-auto  rounded-lg bg-gray-600 bg-opacity-30 scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-slate-400"
      >
        <Header
          bg={navBg && color}
          isInput={true}
          onChange={handleSearchInput}
        />
        {inputValue.length > 0 ? (
          <AfterSearch data={songData.length ? songData : albumData} />
        ) : (
          <BeforeSearch />
        )}
      </main>
    </Layout>
  );
};

export default Search;
