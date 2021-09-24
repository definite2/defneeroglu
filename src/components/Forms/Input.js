import React from "react";

const Input = (props) => {
  const { label, error = null, value, id, onChange, type } = props;
  return (
    <>
      {label && (
        <label className="block tracking-wide mr-3 py-1 text-left font-medium text-xl px-2 text-transparent bg-clip-text bg-gradient-to-br from-orange-400  to-primary-400">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        className="appearance-none w-full border-primary-300  text-gray-700  py-4 px-2 rounded-md leading-tight focus:outline-none focus:ring-primary-500 focus:border-primary-500 shadow-sm dark:bg-gray-800 dark:text-gray-100"
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </>
  );
};

export default Input;
