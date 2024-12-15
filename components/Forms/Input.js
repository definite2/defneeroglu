import React from 'react'

const Input = (props) => {
  const { label, error = null, value, id, onChange, type, className, ...rest } = props
  return (
    <>
      {label && (
        <label className="block tracking-wide mr-3 py-1 text-left font-medium text-xl px-2 text-gray-900 dark:text-gray-50 ">
          {label}
        </label>
      )}
      <input
        id={id}
        name={id}
        type={type}
        onChange={onChange}
        value={value}
        className={`appearance-none w-full border-gray-300 dark:border-gray-500  text-gray-700 bg-primary-light py-4 px-2 rounded-md leading-tight focus:outline-none focus:ring-gray-400 focus:border-gray-400 shadow-sm dark:bg-gray-800 dark:text-gray-100 dark:focus:border-gray-500 dark:focus:ring-gray-500 ${className}`}
        {...rest}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </>
  )
}

export default Input
