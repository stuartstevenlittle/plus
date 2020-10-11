import React, { useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import FilterBox from '../components/FilterBox'

const GardenGrid = ({ tags, gardenItems }) => {
  tags.sort((a, b) => a.name.localeCompare(b.name))
  gardenItems.sort((a, b) => a.title.localeCompare(b.title))

  const [tagsFilter, setTagsFilter] = useState([])
  const [filteredItems, setFilteredItems] = useState([])

  let tempFilteredItems = []

  // Event Handlers  
  function getTagClasses(tag) {
    return (tagsFilter.indexOf(tag.name) === -1) ? 'bg-white' : 'bg-gray-200'
  }

  function onClickTag(event) {
    const clickedTag = event.target.firstChild.data
    if (tagsFilter.indexOf(clickedTag) === -1) { // the clicked tag isn't already in the filter array, so:

      // add it to the filter array
      setTagsFilter(tagsFilter => [...tagsFilter, clickedTag])

      // create a temporary array of the gardenItems that are returned by applying that tag filter
      tempFilteredItems = gardenItems.filter(gardenItem => gardenItem.tags.map(t => t.name).some(tag => tagsFilter.includes(tag)))

      // loop over that array
      tempFilteredItems.forEach(filteredGarden => {
        if (filteredItems.indexOf(filteredGarden) === -1) {
          // add the item to the gardenItems array, to show on the page
          setFilteredItems(filteredItems => [...filteredItems, filteredGarden])
        }
      });
    }
    else {
      setTagsFilter(tagsFilter.filter(tag => tag !== clickedTag))
    }
  }

  // A Tag
  const Tag = ({ tag }) => (
    <li><button onClick={onClickTag}
      className={`${getTagClasses(tag)} focus:outline-none items-center min-w-28 px-4 py-2 shadow text-gray-500 bg-gray-50 hover:bg-gray-100 col-span-1 flex flex-col text-center rounded animate`}
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
    <div className="max-w-screen-xl mx-auto ">
      <div className="mb-6 flex justify-end items-start">
        <div className="flex z-10">
          <div className="relative">
            <button type="button" className="mr-4 py-2 group text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 animate">
              <span>Tags</span>
              <svg className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {/* The tag menu */}
            {/* hidden */}
            <div className="absolute right-0 mt-2 w-screen max-w-4xl sm:px-0">
              <div className="rounded-lg shadow-lg">
                <div className="rounded-lg shadow-xs overflow-hidden">
                  <ul className="bg-white px-5 py-6 z-20 relative grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    {/* <ul className="mt-1 grid gap-x-2 gap-y-2"> */}
                    {tags.map((tag, index) =>
                      <Tag key={index} tag={tag} />
                    )}
                    {/* </ul> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <button className="min-w-32 hover:text-gray-900 text-gray-500 mr-4 shadow-sm focus:outline-none items-center px-4 py-2 col-span-1 flex flex-col text-center rounded border animate">New Post</button>
          <FilterBox />
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 pb-12">
        {gardenItems.map((gardenItem, index) =>
          <Garden key={index} gardenItem={gardenItem} />
        )}
      </ul>
    </div>
  )
}
export default GardenGrid
