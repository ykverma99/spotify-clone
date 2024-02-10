/* eslint-disable react/prop-types */
import Text from "../Text/Text";

const BrowseCard = ({ text }) => {
  const color = Math.random().toString(16).slice(-6);
  return (
    <div
      className="h-48 w-48 rounded-xl p-5 text-white"
      style={{ backgroundColor: `#${color}` }}
    >
      <Text className="text-2xl font-semibold">{text}</Text>
    </div>
  );
};

export default BrowseCard;
