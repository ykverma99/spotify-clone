/* eslint-disable react/prop-types */
const Input = ({ label, labelFor, placeholder, text, onChange }) => {
  return (
    <div className="group relative  space-y-2 text-white">
      <label htmlFor={labelFor} className="px-3">
        {label}
      </label>
      <br />
      <input
        onChange={onChange}
        type={text ? text : "text"}
        className="w-96 rounded-full border border-gray-400 bg-transparent p-3"
        placeholder={placeholder}
        id={labelFor}
        name={labelFor}
      />
    </div>
  );
};

export default Input;
