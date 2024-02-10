/* eslint-disable react/prop-types */

import Text from "../Text/Text";

const CardViews = ({ heading, children, justify, gap, option, className }) => {
  return (
    <div className="space-y-6 p-5">
      <div className="flex justify-between">
        <h2 className="text-3xl font-semibold text-white">{heading}</h2>
        <Text
          varient="hoverline"
          className="cursor-pointer font-semibold text-gray-400"
        >
          {option}
        </Text>
      </div>
      <div
        className={`flex flex-wrap items-center ${justify ? justify : "justify-center"} ${gap ? gap : "gap-3"} ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default CardViews;
