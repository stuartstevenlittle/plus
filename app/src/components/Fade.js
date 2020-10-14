import React from 'react'
import { Transition } from "@headlessui/react";
const Fade = ({ children, showTagCloud }) => {
  return (
    <Transition
      show={showTagCloud}
      enter="transition ease-out duration-150"
      enterFrom="transform opacity-0 scale-90"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-150"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      {children}
    </Transition>

  )
}
export default Fade
