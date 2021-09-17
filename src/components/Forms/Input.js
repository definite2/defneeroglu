import React from "react";

const Input = (props) => {
  return (
    <input
      className="appearance-none w-full border-primary-100  text-gray-700  py-2 px-2 rounded-md leading-tight focus:outline-none focus:ring-primary-200 focus:border-primary-200 shadow-sm dark:bg-gray-800 dark:text-gray-100"
      {...props}
    />
  );
};

export default Input;
