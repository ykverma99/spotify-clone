/* eslint-disable react/prop-types */

const defaultStyles =
  "flex items-center gap-4 hover:text-white transition-all duration-300 ease-in";

const varients = {
  hoverline: "hover:underline underline-offset-2",
  underline: "underline underline-offset-2",
  initial: "",
};

const defaultElement = "p";

const Text = ({
  children,
  leftIcon,
  rightIcon,
  varient = "initial",
  as,
  className = "",
  onClick,
  ...extraprops
}) => {
  let Component = as ?? defaultElement;
  return (
    <Component
      className={`${defaultStyles} w-fit ${varients[varient]} ${className}`}
      onClick={onClick}
      {...extraprops}
    >
      {leftIcon != null ? <span>{leftIcon}</span> : null}
      {children}
      {rightIcon != null ? <span>{rightIcon}</span> : null}
    </Component>
  );
};

export default Text;
