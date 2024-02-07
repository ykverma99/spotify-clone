/* eslint-disable react/prop-types */
const defaultStyles =
  "inline-flex items-center gap-3 rounded-full hover:brightness-[.96] hover:scale-[1.02]  active:-translate-y-0.5 ";

const varients = {
  fill: "bg-green-500 font-semibold text-white border-0",
  outline: "border hover:border-white border-gray-500 hover:font-semibold3",
  flat: "bg-secondary-dark border-0 p-0 md:px-0 text-accent-dark",
};
const sizes = {
  sm: "p-2 text-xs font-medium md:px-4",
  md: "p-3 text-sm font-medium md:px-6 md:text-base",
  lg: "p-4 text-sm font-bold md:px-8 md:text-xl",
};

let defaultElement = "button";
const Button = ({
  as,
  children,
  leftIcon,
  rightIcon,
  className = "",
  varient = "fill",
  size = "md",
  onClick,
  bg,
  color,
  ...extraprops
}) => {
  let Component = as ?? defaultElement;
  return (
    <Component
      onClick={onClick}
      {...extraprops}
      style={{ backgroundColor: bg, color: color }}
      className={`${defaultStyles} ${sizes[size]} ${varients[varient]}  ${className}`}
    >
      {leftIcon != null ? <span>{leftIcon}</span> : null}
      {children}
      {rightIcon != null ? <span>{rightIcon}</span> : null}
    </Component>
  );
};

export default Button;
