/* eslint-disable react/prop-types */

const CardViews = ({ heading, children, justify, gap }) => {
  return (
    <div className="space-y-6 p-5">
      <h2 className="text-3xl font-semibold text-white">{heading}</h2>
      <div
        className={`flex flex-wrap items-center ${justify ? justify : "justify-center"} ${gap ? gap : "gap-3"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default CardViews;
