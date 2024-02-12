import Text from "../Text/Text";
import headphones from "../../assets/headphones.jpg";
import singer from "../../assets/singer.jpg";

const HeaderPlaylist = () => {
  return (
    <div className="flex items-center gap-7 px-5 pt-5 text-white">
      <div className="h-52 w-52 rounded shadow-lg shadow-black">
        <img
          className="h-full w-full rounded object-cover"
          src={headphones}
          alt="headphone"
        />
      </div>
      <div className="space-y-3">
        <Text className="text-sm uppercase tracking-wide">Playlist</Text>
        <Text as={"h2"} className="text-7xl font-bold">
          Soulful songs i the wave
        </Text>
        <Text className="text-sm text-gray-400">
          Forgot about popularity & meaning, just enjoy music vibes from all
          over the Globe. Enable shows unavailable songs & use calender to sort
          the latest editions...
        </Text>
        <span className="flex items-end gap-1">
          <div className="h-7 w-7 rounded-full">
            <img
              className="h-full w-full rounded-full object-cover"
              src={singer}
              alt="singer"
            />
          </div>
          <div className="flex items-center gap-2">
            <Text className="text-sm">Artist</Text>
            <span className="h-1 w-1 rounded-full bg-white"></span>
            <Text className="text-sm">9 liskes</Text>
            <span className="h-1 w-1 rounded-full bg-white"></span>
            <Text className="text-sm">4309 songs,</Text>
          </div>
          <Text className="text-sm text-gray-400">over 24 hr</Text>
        </span>
      </div>
    </div>
  );
};

export default HeaderPlaylist;