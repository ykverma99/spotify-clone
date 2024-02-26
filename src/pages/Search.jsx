import Header from "../components/views/Header";
import BeforeSearch from "../components/views/BeforeSearch";
import AfterSearch from "../components/views/AfterSearch";
import { useEffect, useRef, useState } from "react";
import Layout from "../layout/Layout";

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
        {inputValue.length > 0 ? <AfterSearch /> : <BeforeSearch />}
      </main>
    </Layout>
  );
};

export default Search;
