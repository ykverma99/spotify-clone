/* eslint-disable react/prop-types */
const SongCard = ({
  src,
  title,
  icon,
  name,
  option,
  isHover = true,
  ...extraprops
}) => {
  return (
    <div
      {...extraprops}
      className={`ease my-3 flex cursor-pointer items-center gap-3 rounded-md p-1 transition-all delay-75  duration-300 ease-in ${isHover ? "hover:bg-gray-600 hover:bg-opacity-40 " : ""}`}
    >
      <div className="h-14 w-14 rounded-md bg-gray-50">
        <img
          className="h-full w-full rounded-md object-cover"
          src={src}
          alt={src}
        />
      </div>
      <div className="capitalize">
        <p className="font-medium">{title}</p>
        <div className="flex items-center gap-1 text-sm text-gray-400">
          {icon != null ? <span>{icon}</span> : null}
          <p>{name}</p>
          {option != null ? (
            <span className="h-1 w-1 rounded-full bg-gray-400"></span>
          ) : null}
          <p>{option}</p>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
