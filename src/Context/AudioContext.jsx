/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// AudioContext.jsx
import { createContext, useContext, useState, useRef, useEffect } from "react";

const AudioContext = createContext();

export const useAudio = () => {
  return useContext(AudioContext);
};

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = currentSong.audioSrc;
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentSong, isPlaying]);

  const playPauseToggle = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const setSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const value = {
    isPlaying,
    playPauseToggle,
    setSong,
  };

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};
