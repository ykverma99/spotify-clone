import { TbCards, TbMusicHeart } from "react-icons/tb";
import { IoAdd } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";
import Text from "../Text/Text";
import Button from "../Button/Button";
import { IoIosSearch } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import SongCard from "../SongCard/SongCard";
import useUser from "../../hooks/useUser";

const LibraryBox = () => {
  const { user } = useUser();
  return (
    <div className="h-[72.7vh] space-y-4 rounded-lg bg-gray-600 bg-opacity-30 p-5">
      <div className="flex justify-between">
        <Text leftIcon={<TbCards size={23} />} className="text-gray-400">
          Your Library
        </Text>
        <div className="flex items-center gap-2">
          <IoAdd size={25} className="text-gray-400" />
          <IoMdArrowForward size={25} className="text-gray-400" />
        </div>
      </div>
      {/* playlist button */}
      <Button size="sm" varient="fill" bg={"rgba(156,163,175,0.2)"}>
        Playlist
      </Button>
      {/* option for searching in library */}
      <div className="flex items-center justify-between text-gray-400">
        <span>
          <IoIosSearch size={24} />
        </span>
        <div className="inline-flex items-center gap-2 text-gray-400">
          <span>Recents</span>
          <span>
            <TfiMenuAlt />
          </span>
        </div>
      </div>

      {/* playlistss */}
      <div>
        {user.playlist.map((elm) => {
          return (
            <SongCard
              href={`/playlist/${elm._id}`}
              title={elm.playlistName}
              name={elm.madeBy}
              option={
                elm.songs.length > 0
                  ? `${elm.songs?.length} songs`
                  : elm.album
                    ? elm.album?.albumName
                    : elm.track?.trackName
              }
              iconLiked={elm.songs.length > 0 && <TbMusicHeart size={25} />}
              src={elm?.album ? elm.album?.albumImage : elm.track?.trackImage}
              key={elm._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LibraryBox;
