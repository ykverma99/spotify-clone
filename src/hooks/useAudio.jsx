import { useContext } from "react";
import { AudioContext } from "../Context/AudioContext";

const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within a AudioProvider");
  }
  return context;
};

export default useAudio;
