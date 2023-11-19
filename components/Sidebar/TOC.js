import { useState, useEffect } from 'react'
import useIntersectNode from '@/hooks/useIntersection'
import clsx from 'clsx'
import { m } from 'framer-motion'

export function TOC(framerProps) {
  const [headings, setHeadings] = useState([])
  useEffect(() => {
    const afterElm = document.getElementById('post-body')
    const headingElements = Array.from(afterElm.querySelectorAll('h1,h2,h3,h4,h5,h6'))
    setHeadings(headingElements)
  }, [])

  const [activeNode] = useIntersectNode(
    [...headings.map((heading) => `#${heading.id}`)],
    `0% 0% -55% 0%`,
    1
  )

  // Function to determine the Heading Level based on `nodeName` (H2, H3, etc)
  const getLevel = (nodeName) => {
    return Number(nodeName.replace('H', ''))
  }

  return (
    <>
      {headings.map((heading) => {
        return (
          <m.a
            key={heading.id}
            href={`#${heading.id}`}
            className={clsx(
              'block mt-3 text-sm hover:text-primary-500 focus-visible:outline-primary',
              {
                'text-primary-500': heading.id === activeNode,
                'ml-2': getLevel(heading.nodeName) === 3,
                'ml-4': getLevel(heading.nodeName) === 4,
              }
            )}
            {...framerProps}
          >
            {heading.innerText}
          </m.a>
        )
      })}
    </>
  )
}
