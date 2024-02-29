import SongCard from "../SongCard/SongCard";
import AudioPlayer from "../AudioPLayer/AudioPlayer";
import ButtonIcon from "../Button/ButtonIcon";
import { RiVideoLine } from "react-icons/ri";
import { HiOutlineQueueList } from "react-icons/hi2";
import { PiDevicesDuotone } from "react-icons/pi";
import { TiVolumeUp, TiVolumeDown, TiVolumeMute } from "react-icons/ti";
import { useState } from "react";
import useAudioSrc from "../../hooks/useAudioSrc";
import { useQuery } from "@tanstack/react-query";
import { singleSong } from "../../api/data";

const MusicControll = () => {
  const [volume, setVolume] = useState(100);
  const { audioDetail } = useAudioSrc();

  const { data: song } = useQuery({
    queryKey: ["songDetail", audioDetail],
    queryFn: () => singleSong(audioDetail),
  });
  const customCurrentTime = (currentTime) => {
    return `${formatTime(currentTime)}`;
  };
  const customDuration = (duration) => {
    return `${formatTime(duration)}`;
  };
  // console.log(song && song.data[0]);
  return (
    <div className="grid grid-cols-3 px-3 py-3">
      <SongCard
        title={song?.data[0]?.songName}
        src={
          song?.data[0]?.album
            ? song?.data[0]?.album.albumImage
            : song?.data[0]?.track.trackImage
        }
        name={song?.data[0]?.artist[0]?.name}
        isHover={false}
      />
      <AudioPlayer
        customCurrentTime={customCurrentTime}
        customDuration={customDuration}
      />
      <div className="flex items-center justify-end text-gray-400">
        <ButtonIcon size="sm" icon={<RiVideoLine size={25} />} varient="flat" />
        <ButtonIcon
          size="sm"
          icon={<HiOutlineQueueList size={25} />}
          varient="flat"
        />
        <ButtonIcon
          size="sm"
          icon={<PiDevicesDuotone size={25} />}
          varient="flat"
        />
        <ButtonIcon
          size="sm"
          varient="flat"
          icon={
            +volume == 0 ? (
              <TiVolumeMute size={25} />
            ) : +volume <= 50 ? (
              <TiVolumeDown size={25} />
            ) : (
              <TiVolumeUp size={25} />
            )
          }
        />
        <input
          type="range"
          max={100}
          min={0}
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          className="volume-range"
        />
      </div>
    </div>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default MusicControll;
