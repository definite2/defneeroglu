import { useState } from "react";
/**
 * 
 * @param {*} key 
 * @param {*} initialValue 
 * @returns a safe local storage value and setValue
 */
export const useLocalStorage = (key, initialValue) => {
  const [valueProxy, setValueProxy] = useState(() => {
    try {
      const safeValueFromLocalStorage = localStorage.getItem(key);
      return safeValueFromLocalStorage
        ? JSON.parse(safeValueFromLocalStorage)
        : initialValue;
    } catch (error) {
      //if error return initial value anyway
      return initialValue;
    }
  });
  const setValuetoLocalStorage = (value) => {
    try {
      localStorage.setItem(key, value);
      setValueProxy(value);
    } catch (error) {
      setValueProxy(value);
    }
  };
  return [valueProxy, setValuetoLocalStorage];
};
