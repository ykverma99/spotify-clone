/* eslint-disable react/prop-types */

// import { useState } from "react";

const RangeSlider = ({ currentTime, duration, handleSeek }) => {
  // const [isDrag, setisDrag] = useState(false);
  // const handleDragStart = () => {
  //   setisDrag(true);
  // };
  // const handleDragEnd = () => {
  //   setisDrag(false);
  // };

  return (
    <div className="relative flex items-center rounded-full bg-gray-700">
      <input
        // onMouseDown={handleDragStart}
        // onMouseUp={handleDragEnd}
        onChange={handleSeek}
        type="range"
        max={duration}
        value={currentTime}
        className="range-slider rounded-full"
        // style={{ zIndex: isDrag ? 1 : 2 }}
      />
      {/* slider value */}
      <div
        style={{
          width: `${(currentTime / duration) * 100}%`,
        }}
        className="absolute h-full rounded-full bg-gray-300"
      ></div>
    </div>
  );
};

export default RangeSlider;
