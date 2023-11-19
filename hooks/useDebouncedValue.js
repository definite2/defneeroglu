import { useEffect, useState } from 'react'
/**
 *
 * @param {*} value
 * @param {*} delay
 * @returns value with delay
 */

export const useDebouncedValue = (value, delay) => {
  const [debouncedVal, setDebouncedVal] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedVal(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  return debouncedVal
}
