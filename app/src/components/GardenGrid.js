import React, { useState } from 'react'
import { Transition } from "@headlessui/react";
import { Link } from 'gatsby'
import GardenItem from '../components/GardenItem'
import Tag from '../components/Tag'


const GardenGrid = ({ tags, gardenItems }) => {
  tags.sort((a, b) => a.name.localeCompare(b.name))
  gardenItems.sort((a, b) => a.title.localeCompare(b.title))

  // State
  const [nameState, setNameState] = useState('Stuart')
  const [filteredItems, setFilteredItems] = useState([])
  const [showTagCloud, setShowTagCloud] = useState(false)

  // Template
  return (
    <div>
      <h1>{nameState}</h1>
      <Tag onChange={value => setNameState(value)} />
    </div>
    // <div className="max-w-screen-xl mx-auto min-h-screen">

    //   {/* Suubmit link and Tags */}
    //   <div className="mb-3 flex justify-end items-center">

    //     <div className="flex z-10">
    //       <div className="relative">
    //         <Link to="#" className="group text-gray-500 inline-flex text-base leading-6 font-medium hover:text-gray-900 focus:outline-none animate">Submit a picture</Link>
    //         <button type="button" onClick={() => setShowTagCloud(!showTagCloud)} className="ml-6 py-2 group text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none animate">
    //           <span>Tags</span>
    //           <svg className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    //             <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    //           </svg>
    //         </button>
    //         {/* The tag menu */}
    //         <Transition
    //           show={showTagCloud}
    //           enter="transition ease-out duration-150"
    //           enterFrom="transform opacity-0 scale-90"
    //           enterTo="transform opacity-100 scale-100"
    //           leave="transition ease-in duration-150"
    //           leaveFrom="transform opacity-100 scale-100"
    //           leaveTo="transform opacity-0 scale-95"
    //         >
    //           <div className="absolute right-0 mr-4 -mt-1 w-screen max-w-4xl sm:px-0">
    //             <div className="rounded-lg shadow-lg bg-white">
    //               <div className="rounded-lg shadow-xs overflow-hidden">
    //                 <ul className="px-5 py-6 z-20 relative grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
    //                   {tags.map((tag, index) =>
    //                     <Tag key={index} tag={tag} gardenItems={gardenItems} />
    //                   )}
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //         </Transition>
    //       </div>
    //     </div>
    //   </div>

    //   {/* The cards */}
    //   <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 pb-4">
    //     {filteredItems.length === 0 && gardenItems.map((gardenItem, index) => <GardenItem key={index} gardenItem={gardenItem} />)}
    //     {filteredItems.length !== 0 && filteredItems.map((gardenItem, index) => <GardenItem key={index} gardenItem={gardenItem} />)}
    //   </ul>
    // </div>
  )
}
export default GardenGrid
