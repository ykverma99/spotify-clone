/* eslint-disable react/prop-types */

const defaultStyles =
  "inline-flex items-center justify-center rounded-full hover:brightness-[.96] hover:scale-[1.02] relative active:-translate-y-0.5 ";

const varients = {
  fill: "bg-green-500 text-white border-0",
  outline: "border hover:border-white border-gray-500 hover:font-semibold3",
  flat: " border-0 p-0 md:px-0",
};
const sizes = {
  xs: "h-6 w-6",
  sm: "h-9 w-9",
  md: "h-12 w-12",
  lg: "h-14 w-14",
};

const defaultElement = "button";

const ButtonIcon = ({
  as,
  icon,
  varient = "fill",
  className = "",
  bg,
  color,
  size = "md",
  onClick,
  ...extraprops
}) => {
  let Component = as ?? defaultElement;
  return (
    <Component
      className={`${defaultStyles} ${sizes[size]} ${varients[varient]} ${className} `}
      style={{ backgroundColor: bg, color: color }}
      onClick={onClick}
      {...extraprops}
    >
      {icon}
    </Component>
  );
};

export default ButtonIcon;
