import React, { useState } from 'react'
import { Transition } from "@headlessui/react";
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import FilterBox from '../components/FilterBox'

const GardenGrid = ({ tags, gardenItems }) => {
  tags.sort((a, b) => a.name.localeCompare(b.name))
  gardenItems.sort((a, b) => a.title.localeCompare(b.title))

  const [filteredTags, setFilteredTags] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  // Event Handlers  
  function getTagClasses(tag) {
    return (filteredTags.indexOf(tag.name) === -1) ? 'bg-white' : 'bg-indigo-100 text-indigo-800'
  }

  function onClickTag(event) {
    const clickedTag = event.target.firstChild.data
    if (filteredTags.indexOf(clickedTag) === -1) { // the clicked tag isn't already in the filter array, so add it so that it gets a coloured background
      setFilteredTags(tagsFilter => [...tagsFilter, clickedTag])

      // loop over that array
      gardenItems.filter(gardenItem => gardenItem.tags.map(t => t.name).some(tag => [...filteredTags, clickedTag].includes(tag)))
        .forEach(filteredItem => {
          if (filteredItems.indexOf(filteredItem) === -1) {  // the item isn't already in the filter array, so add it so that it shows on the page
            setFilteredItems(filteredItems => [...filteredItems, filteredItem])
          }
        });
    }
    else {
      setFilteredTags(filteredTags.filter(tag => tag !== clickedTag))
    }
  }

  // A Tag
  const Tag = ({ tag }) => (
    <li><button onClick={onClickTag}
      className={`${getTagClasses(tag)} focus:outline-none items-center min-w-28 px-4 py-2 shadow text-gray-400 bg-white hover:text-indigo-800 hover:bg-indigo-50 col-span-1 flex flex-col text-center rounded animate`}
    >{tag.name}</button></li >
  )

  // A Garden Item
  const Garden = ({ gardenItem }) => (
    <li key={gardenItem.id} className="overflow-hidden col-span-1 flex flex-col rounded shadow bg-white hover:shadow-lg transition ease-in-out duration-150">
      <Link className="flex-1 flex flex-col" to={gardenItem.slug.current}>
        <Img className="w-full h-56 flex-shrink-0 mx-auto" fluid={gardenItem.image.asset.fluid} alt={gardenItem.title} />
        <div className="flex justify-between mx-4">
          {/* Left */}
          <div>
            <h3 className="mt-2 uppercase leading-5 font-semibold">{gardenItem.title}</h3>
            <p className="text-warm-gray-400 mb-2" >{gardenItem.tags.map(tag => { return <span key={tag.name} className="mr-2">#{tag.name}</span> })}</p>
          </div>
          {/* Right */}
          <div className="mt-2 flex flex-col items-end">
            <p className="ml-1">
              <span className="ml-1 text-gray-700">{gardenItem.author.name}</span>
            </p>
          </div>
        </div>
      </Link>
    </li >
  )

  // The Actual Page
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-90"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-300"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="absolute right-0 mr-4 mt-1 w-screen max-w-4xl sm:px-0">
          <div className="rounded-lg shadow-lg">
            <div className="rounded-lg shadow-xs overflow-hidden">
              <ul className="bg-gray-50 px-5 py-6 z-20 relative grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {tags.map((tag, index) =>
                  <Tag key={index} tag={tag} />
                )}
              </ul>
            </div>
          </div>
        </div>
      </Transition>
    </>
    // <div className="max-w-screen-xl mx-auto min-h-screen ">

    //   {/* Tags, New post and Filterbox */}
    //   <div className="mb-6 flex justify-end items-start">
    //     <div className="flex z-10">
    //       <div className="relative">
    //         <button type="button" onClick={() => setIsOpen(!isOpen)} className="mr-4 py-2 group text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 animate">
    //           <span>Tags</span>
    //           <svg className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    //             <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    //           </svg>
    //         </button>
    //         {/* The tag menu */}
    //         <Transition
    //           show={isOpen}
    //           enter="transition-opacity duration-750"
    //           enterFrom="opacity-0"
    //           enterTo="opacity-100"
    //           leave="transition-opacity duration-1500"
    //           leaveFrom="opacity-100"
    //           leaveTo="opacity-0"
    //         >
    //           {/* <div className="absolute right-0 mr-4 mt-1 w-screen max-w-4xl sm:px-0">
    //             <div className="rounded-lg shadow-lg">
    //               <div className="rounded-lg shadow-xs overflow-hidden">
    //                 <ul className="bg-gray-50 px-5 py-6 z-20 relative grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
    //                   {tags.map((tag, index) =>
    //                     <Tag key={index} tag={tag} />
    //                   )}
    //                 </ul>
    //               </div>
    //             </div>
    //           </div> */}
    //            I will fade in and out
    //         </Transition>
    //       </div>
    //       <button className="min-w-32 hover:bg-blue-200 hover:border-blue-300 hover:text-blue-800 text-gray-500 mr-4 shadow-sm focus:outline-none items-center px-4 py-2 col-span-1 flex flex-col text-center rounded border animate">New Post</button>
    //       <FilterBox />
    //     </div>
    //   </div>

    //   {/* The cards */}
    //   <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 pb-12">
    //     {filteredItems.length !== 0 && filteredItems.map((gardenItem, index) => <Garden key={index} gardenItem={gardenItem} />)}
    //     {filteredItems.length === 0 && gardenItems.map((gardenItem, index) => <Garden key={index} gardenItem={gardenItem} />)}
    //   </ul>
    // </div>
  )
}
export default GardenGrid
