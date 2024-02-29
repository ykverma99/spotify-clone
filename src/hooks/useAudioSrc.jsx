import { useContext } from "react";
import { AudioSrcContext } from "../Context/AudioSrcContext";

const useAudioSrc = () => {
  const context = useContext(AudioSrcContext);
  if (!context) {
    throw new Error("useAudioSrc must be used within an AudioSrcProvider");
  }
  return context;
};

export default useAudioSrc;
