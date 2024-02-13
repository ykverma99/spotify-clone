/* eslint-disable react/prop-types */
// AudioPlayer.js
import { useState, useRef } from "react";
import { IoPlay, IoPause } from "react-icons/io5";
import ButtonIcon from "../Button/ButtonIcon";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import Text from "../Text/Text";
import RangeSlider from "../views/RangeSlider";

const AudioPlayer = ({ audioSrc, customCurrentTime, customDuration }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={() => setDuration(audioRef.current.duration)}
      ></audio>

      <div className=" mb-2 flex items-center justify-center gap-2">
        <ButtonIcon
          color={"gray"}
          icon={<MdSkipPrevious size={30} />}
          varient="flat"
          size="sm"
        />
        <ButtonIcon
          bg={"white"}
          color={"black"}
          onClick={handlePlayPause}
          icon={!isPlaying ? <IoPlay size={20} /> : <IoPause size={20} />}
          size="sm"
        />
        <ButtonIcon
          color={"gray"}
          icon={<MdSkipNext size={30} />}
          varient="flat"
          size="sm"
        />
      </div>
      <div className="flex items-center gap-2 text-gray-300">
        <Text>
          {customCurrentTime
            ? customCurrentTime(currentTime)
            : formatTime(currentTime)}
        </Text>
        <RangeSlider
          currentTime={currentTime}
          duration={duration}
          handleSeek={handleSeek}
        />
        <Text>
          {customDuration ? customDuration(duration) : formatTime(duration)}
        </Text>
      </div>
    </div>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default AudioPlayer;
