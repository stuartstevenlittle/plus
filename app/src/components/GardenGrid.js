import React, { useState } from 'react'
import { Link } from 'gatsby'
import GardenItem from '../components/GardenItem'
import Tag from '../components/Tag'
import Fade from '../components/Fade'

const GardenGrid = ({ tags, gardenItems }) => {
  tags.sort((a, b) => a.name.localeCompare(b.name))
  gardenItems.sort((a, b) => a.title.localeCompare(b.title))

  // State
  const [filteredTags, setFilteredTags] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [showTagCloud, setShowTagCloud] = useState(false)


  function handleTagClick(clickedTag) {
    if (filteredTags.indexOf(clickedTag) === -1) { // the clicked tag isn't already in the filter array
      // 1. add it so that it gets a coloured background
      setFilteredTags(tagsFilter => [...tagsFilter, clickedTag])

      // 2. filter the garden items array based on the clicked tag, then put those items into the filteredItems array
      gardenItems.filter(gardenItem => gardenItem.tags.map(t => t.name).some(tag => [...filteredTags, clickedTag].includes(tag)))
        .forEach(filteredItem => {
          if (filteredItems.indexOf(filteredItem) === -1) {  // the item isn't already in the filter array, so add it so that it shows on the page
            setFilteredItems(filteredItems => [...filteredItems, filteredItem])
          }
        });
    }
    else {  // the clicked tag is already in the filter array - i.e. it has now been switched off
      // 1. remove it from the filter array, to set the background back to white
      setFilteredTags(filteredTags.filter(tag => tag !== clickedTag))

      // 2. remove any items that match the tag that was turned off. So loop over filteredItems, and check each one
      filteredItems.forEach(item => {
        // if the value matches the clicked one, remove it from the array
        if (item.tags.map(t => t.name).includes(clickedTag)) {
          setFilteredItems(filteredItems.filter(item => !item.tags.map(t => t.name).includes(clickedTag)))
        }
      })
    }
  }






  // Template
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">

      {/* Suubmit link and Tags */}
      <div className="mb-3 flex justify-end items-center">
        <div className="flex z-10">
          <div className="relative">
            <Link to="#" className="group text-gray-500 inline-flex text-base leading-6 font-medium hover:text-gray-900 focus:outline-none animate">Submit a picture</Link>
            <button type="button" onClick={() => setShowTagCloud(!showTagCloud)} className="ml-6 py-2 group text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none animate">
              <span>Tags</span>
              <svg className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {/* The tag menu */}
            <Fade showTagCloud={showTagCloud}>
              <div className="absolute right-0 mr-4 -mt-1 w-screen max-w-4xl sm:px-0">
                <div className="rounded-lg shadow-lg bg-white">
                  <div className="rounded-lg shadow-xs overflow-hidden">
                    <ul className="px-5 py-6 z-20 relative grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                      {tags.map((tag, index) =>
                        <Tag key={index} tag={tag} filteredTags={filteredTags} gardenItems={gardenItems} onClickTag={clickedTag => handleTagClick(clickedTag)} />
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      {/* The cards */}
      <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 pb-4">
        {filteredItems.length === 0 && gardenItems.map((gardenItem, index) => <GardenItem key={index} gardenItem={gardenItem} />)}
        {filteredItems.length !== 0 && filteredItems.map((gardenItem, index) => <GardenItem key={index} gardenItem={gardenItem} />)}
      </ul>
    </div>
  )
}
export default GardenGrid
