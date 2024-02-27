import PlaylistCard from "../components/PlaylistCard/PlaylistCard";
import SuggestsCards from "../components/SuggestCards/SuggestsCards";
import CardViews from "../components/views/CardViews";
import Header from "../components/views/Header";
import headphones from "../assets/headphones.jpg";
import singer from "../assets/singer.jpg";
import { useEffect, useRef, useState } from "react";
import Layout from "../layout/Layout";
import { useQuery } from "@tanstack/react-query";
import {
  retriveRadomAlbum,
  retriveRadomSongs,
  retriveRadomTrack,
} from "../api/data";

const Home = () => {
  const arr = new Array(5).fill("");
  const [navBg, setNavBg] = useState(false);
  const mainRef = useRef(null);

  const { data: randomSongs } = useQuery({
    queryKey: ["randomSong1"],
    queryFn: retriveRadomSongs,
  });
  const { data: randomAlbum } = useQuery({
    queryKey: ["randomAlbum1"],
    queryFn: retriveRadomAlbum,
  });
  const { data: randomTrack } = useQuery({
    queryKey: ["randomTrack1"],
    queryFn: retriveRadomTrack,
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
  const color = Math.random().toString(16).slice(-6);
  return (
    <Layout>
      <main
        ref={mainRef}
        className="scrollbar-thumb-rounded-full scroll-track-rounded-full col-start-2 col-end-6 row-span-7 overflow-y-auto rounded-lg  bg-gray-600 bg-opacity-30 scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-slate-400"
      >
        <Header bg={navBg && color} />
        {/* <PlaylistComponent /> */}
        <CardViews heading={"Good Evening"}>
          <PlaylistCard
            href={"/playlist"}
            text={"Liked Songs"}
            src={headphones}
          />
          {arr.map((_, i) => {
            return (
              <PlaylistCard
                href={"/playlist"}
                text={"Liked Songs"}
                src={i % 2 == 0 ? singer : headphones}
                key={i}
              />
            );
          })}
        </CardViews>

        <CardViews
          justify={"justify-start"}
          gap={"gap-6"}
          heading={"Made for username"}
        >
          {randomSongs &&
            randomSongs.data.map((elm) => {
              return (
                <SuggestsCards
                  href={`/playlist/${elm.album ? elm.album.albumName : elm.track.trackName}`}
                  key={elm._id}
                  src={elm?.album?.albumImage || elm?.track?.trackImage}
                  title={elm?.album?.albumName || elm?.track?.trackName}
                  desc={`${elm.artist.map((val) => val.name)} ${elm.album ? "album" : "track"}`}
                />
              );
            })}
        </CardViews>
        <CardViews
          justify={"justify-start"}
          gap={"gap-6"}
          heading={"Top Albums"}
        >
          {randomAlbum &&
            randomAlbum.data.map((elm) => {
              return (
                <SuggestsCards
                  key={elm._id}
                  href={`/playlist/${elm.albumName}`}
                  src={elm?.albumImage}
                  title={elm?.albumName}
                  desc={`${elm.artist.map((val) => val.name)} album ${elm.albumName}`}
                />
              );
            })}
        </CardViews>
        <CardViews
          justify={"justify-start"}
          gap={"gap-6"}
          heading={"Top Single Tracks"}
        >
          {randomTrack &&
            randomTrack.data.map((elm) => {
              return (
                <SuggestsCards
                  href={`/playlist/${elm.trackName}`}
                  key={elm._id}
                  src={elm?.trackImage}
                  title={elm?.trackName}
                  desc={`${elm.artist.map((val) => val.name)} track ${elm.trackName}`}
                />
              );
            })}
        </CardViews>
      </main>
    </Layout>
  );
};

export default Home;
