import CardViews from "./CardViews";
import SuggestsCards from "../SuggestCards/SuggestsCards";
import BrowseCard from "../Card/BrowseCard";
import { useQuery } from "@tanstack/react-query";
import { retriveRadomSongs } from "../../api/data";

const BeforeSearch = () => {
  const { data: randomSong, isLoading: loadingSongs } = useQuery({
    queryKey: ["randomSongs"],
    queryFn: retriveRadomSongs,
  });
  const arr2 = new Array(15).fill("");

  return loadingSongs ? (
    <div>loading...</div>
  ) : (
    <>
      <CardViews
        justify={"justify-start"}
        option={"Show all"}
        heading={"Recent searches"}
      >
        {randomSong &&
          randomSong.data.map((elm) => {
            return (
              <SuggestsCards
                href={`/playlist/${elm.album ? elm.album.albumName : elm.track.trackName}`}
                key={elm._id}
                size="sm"
                desc={`${elm.album?.albumName || elm.track?.trackName} ${elm.album ? "Album" : "Track"} ${elm.artist?.map((elm) => elm.name)}`}
                isCross={true}
                src={elm.album?.albumImage || elm.track?.trackImage}
                title={elm?.album?.albumName || elm?.track?.trackName}
              />
            );
          })}
      </CardViews>
      <CardViews justify={"justify-start"} heading={"Browse all"}>
        {arr2.map((_, i) => {
          return <BrowseCard key={i} text={"Music"} />;
        })}
      </CardViews>
    </>
  );
};

export default BeforeSearch;
