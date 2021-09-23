import React from "react";

const Input = (props) => {
  const { label, error = null, rest } = props;
  return (
    <>
      {label && (
        <label className="block tracking-wide mr-3 py-1 text-left font-medium text-xl px-2 text-transparent bg-clip-text bg-gradient-to-br from-orange-400  to-primary-400">
          {label}
        </label>
      )}
      <input
        className="appearance-none w-full border-primary-100  text-gray-700  py-2 px-2 rounded-md leading-tight focus:outline-none focus:ring-primary-200 focus:border-primary-200 shadow-sm dark:bg-gray-800 dark:text-gray-100"
        {...rest}
      />
      {error && <span class="text-xs text-red-700">{error}</span>}
    </>
  );
};

export default Input;
