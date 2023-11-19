import React, { useRef, useState } from 'react'
import { ChevronUp } from 'react-feather'
export const Accordion = (props) => {
  const [expanded, setExpanded] = useState(false)
  const [height, setHeight] = useState('0px')
  const [opacity, setOpacity] = useState(0)
  const [rotate, setRotate] = useState('transform duration-700 ease')
  const contentSpace = useRef(null)
  function toggleAccordion() {
    setExpanded(expanded === false ? true : false)
    // @ts-ignore
    setHeight(expanded ? '0px' : `${contentSpace.current.scrollHeight}px`)
    setOpacity(1)
    setRotate(expanded ? 'transform duration-500 ease' : 'transform duration-500 ease rotate-180')
  }

  return (
    <div className="flex flex-col">
      <button
        className="py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center"
        onClick={toggleAccordion}
      >
        <p className="inline-block text-primary-600 hover:text-primary-500">{props.title}</p>
        <ChevronUp className={`${rotate} inline-block text-primary-500`} />
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}`, opacity: `${opacity}` }}
        className="overflow-hidden transition-all duration-500 ease-in-out delay-100"
      >
        <div className={`pb-10 transition-all ease-in-out duration-500  ${expanded ? 'scale-100' : 'scale-95'}`}>
          {props.children}
        </div>
      </div>
    </div>
  )
}
