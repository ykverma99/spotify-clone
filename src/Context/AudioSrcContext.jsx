import { createContext, useState } from "react";

const AudioSrcContext = createContext();

// eslint-disable-next-line react/prop-types
const AudioSrcProvider = ({ children }) => {
  const [audioSrc, setAudioSrc] = useState(``);
  const [audioDetail, setAudioDetail] = useState(null);
  const value = {
    audioSrc,
    setAudioSrc,
    audioDetail,
    setAudioDetail,
  };

  return (
    <AudioSrcContext.Provider value={value}>
      {children}
    </AudioSrcContext.Provider>
  );
};

export { AudioSrcContext, AudioSrcProvider };
