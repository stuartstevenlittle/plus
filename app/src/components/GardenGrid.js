import React, { useEffect, useState } from 'react'
import { Transition } from "@headlessui/react";
import { Link } from 'gatsby'
import Img from 'gatsby-image'
// import FilterBox from '../components/FilterBox'

const GardenGrid = ({ tags, gardenItems }) => {
  tags.sort((a, b) => a.name.localeCompare(b.name))
  gardenItems.sort((a, b) => a.title.localeCompare(b.title))

  // State
  const [filteredTags, setFilteredTags] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  // const [stuItems, setStuItems] = useState([])
  const [showTagCloud, setShowTagCloud] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    setFilteredItems(
      gardenItems.filter(item => item.description.includes(search))
    )
  }, [search, gardenItems])

  // Computed properties  
  const tagClasses = tag => {
    return (filteredTags.indexOf(tag.name) === -1) ? 'bg-white' : 'bg-indigo-100 text-indigo-800'
  }

  // Methods
  function onClickTag(event) {
    const clickedTag = event.target.firstChild.data
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
          console.log(item)
          setFilteredItems(filteredItems.filter(item => !item.tags.map(t => t.name).includes(clickedTag)))
        }
      })
    }
  }

  function onChangeFilterbox(event) {
    setSearch(event.target.value)

  }

  // Components
  // A Tag
  const Tag = ({ tag }) => (
    <li><button onClick={onClickTag}
      className={`${tagClasses(tag)} focus:outline-none items-center min-w-28 px-4 py-2 shadow text-gray-400 bg-white hover:text-indigo-800 hover:bg-indigo-50 col-span-1 flex flex-col text-center rounded animate`}
    >{tag.name}</button></li >
  )

  // A Garden Item
  const Garden = ({ gardenItem }) => (
    <>
      { gardenItem &&
        <li key={gardenItem.id} className="overflow-hidden col-span-1 flex flex-col rounded shadow bg-white hover:shadow-lg transition ease-in-out duration-150">
          <Link className="flex-1 flex flex-col" to={gardenItem.slug.current}>
            <Img className="w-full h-56 flex-shrink-0 mx-auto" fluid={gardenItem.image.asset.fluid} alt={gardenItem.title} />
            <h3 className="text-center mt-2 uppercase leading-5 font-semibold">{gardenItem.title}</h3>
            <p className="mb-2 text-center text-gray-700">{gardenItem.author.name}</p>
            <p className="mb-2 text-center text-gray-700">{gardenItem.description}</p>
          </Link>
        </li >}
    </>
  )

  // The Actual Page
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen ">

      {/* Tags, New post and Filterbox */}
      <div className="mb-6 flex justify-end items-start">
        <div className="flex z-10">
          <div className="relative">
            <button type="button" onClick={() => setShowTagCloud(!showTagCloud)} className="mr-4 py-2 group text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 animate">
              <span>Tags</span>
              <svg className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {/* The tag menu */}
            <Transition
              show={showTagCloud}
              enter="transition ease-out duration-150"
              enterFrom="transform opacity-0 scale-90"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <div className="absolute right-0 mr-4 mt-1 w-screen max-w-4xl sm:px-0">
                <div className="rounded-lg">
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
          </div>
          <button className="min-w-32 hover:bg-blue-200 hover:border-blue-300 hover:text-blue-800 text-gray-500 mr-4 shadow-sm focus:outline-none items-center px-4 py-2 col-span-1 flex flex-col text-center rounded border animate">Submit Post</button>
          {/* <FilterBox /> */}
          <div >
            <div className="w-44 relative shadow-sm">
              <div className="-mr-32 absolute inset-y-0 right-0 flex items-center pointer-events-none">
                <svg className="w-full h-5 text-gray-400 dark:text-gray-600 transition duration-150" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" ><path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              </div>
              <input onChange={e => onChangeFilterbox(e)} type="search" placeholder="Filter" aria-label="Global search box" className="bg-transparent rounded border outline-none h-10 block w-full pl-4 sm:text-sm sm:leading-5" />
            </div>
          </div>
        </div>
      </div>

      {/* The cards */}
      <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 pb-12">
        {filteredItems.length !== 0 && filteredItems.map((gardenItem, index) => <Garden key={index} gardenItem={gardenItem} />)}
        {filteredItems.length === 0 && gardenItems.map((gardenItem, index) => <Garden key={index} gardenItem={gardenItem} />)}
        {/* {filteredItems.map((gardenItem, index) => <Garden key={index} gardenItem={gardenItem} />)} */}
      </ul>
    </div>
  )
}
export default GardenGrid
