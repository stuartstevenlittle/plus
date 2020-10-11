import React, { useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import FilterBox from '../components/FilterBox'

const GardenGrid = ({ tags, gardenItems }) => {
  tags.sort((a, b) => a.name.localeCompare(b.name))
  gardenItems.sort((a, b) => a.title.localeCompare(b.title))

  const [tagsFilter, setTagsFilter] = useState([])
  const [filteredGardens, setFilteredGardens] = useState([])

  let tempFilteredGardens = []

  // Event Handlers  
  function getTagClasses(tag) {
    return (tagsFilter.indexOf(tag.name) === -1) ? 'bg-white' : 'bg-indigo-100'
  }

  function onClickTag(event) {
    const clickedTag = event.target.firstChild.data
    if (tagsFilter.indexOf(clickedTag) === -1) { // the clicked type isn't already in the filter array, so:

      // add it to the filter array
      setTagsFilter(tagsFilter => [...tagsFilter, clickedTag])

      // create a temporary array of the gardenItems that are returned by applying that tag filter
      tempFilteredGardens = gardenItems.filter(gardenItem => gardenItem.tags.map(t => t.name).some(tag => tagsFilter.includes(tag)))

      // loop over that array
      tempFilteredGardens.forEach(filteredGarden => {
        if (filteredGardens.indexOf(filteredGarden) === -1) {
          // add the item to the gardenItems array, to show on the page
          setFilteredGardens(filteredGardens => [...filteredGardens, filteredGarden])
        }
      });
    }
    else {
      setTagsFilter(tagsFilter.filter(tag => tag !== clickedTag))
    }
  }

  function onClickGardenType(event) {
    const clickedGardenType = event.target.firstChild.data
    if (gardenItemTypesFilter.indexOf(clickedGardenType) === -1) {  // the clicked type isn't already in the filter array, so:

      // add it to the filter array
      setGardenTypesFilter(gardenItemTypesFilter => [...gardenItemTypesFilter, clickedGardenType])

      // create a temporary array of the gardenItems that are returned by applying the filter of that type (e.g. 'poems')
      tempFilteredGardens = gardenItems.filter(x => x.gardenItemType.name === clickedGardenType)

      // loop over that array of 'poems'      
      tempFilteredGardens.forEach(filteredGarden => {
        if (filteredGardens.indexOf(filteredGarden) === -1) {       // the poem isn't already in the array of gardenItems, so:

          // add the gardenItem (i.e. the 'poem' in this example) to the gardenItems array
          setFilteredGardens(filteredGardens => [...filteredGardens, filteredGarden])
        }
      });
    }
    else {  // the clicked type IS already in the filter array (ie the button is lit up red), so remove it
      setGardenTypesFilter(gardenItemTypesFilter.filter(gardenItemType => gardenItemType !== clickedGardenType))
    }
  }


  // A Tag
  const Tag = ({ tag }) => (
    <li><button onClick={onClickTag}
      className={`${getTagClasses(tag)} focus:outline-none items-center min-w-28 px-4 py-2 hover:bg-indigo-50 col-span-1 flex flex-col text-center rounded border transition ease-in-out duration-150`}
    >{tag.name}</button></li >
  )

  // A GardenType
  const GardenType = ({ gardenItemType }) => (
    <li><button onClick={onClickGardenType}
      className={`${getGardenTypeClasses(gardenItemType)} focus:outline-none items-center min-w-28 px-4 py-2 hover:bg-pink-50 col-span-1 flex flex-col text-center rounded border transition ease-in-out duration-150`}
    >{gardenItemType.name}</button></li >
  )

  // A Garden
  const Garden = ({ gardenItem }) => (
    <li key={gardenItem.id} className="col-span-1 flex flex-col rounded shadow bg-white hover:shadow-lg transition ease-in-out duration-150">
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
            <div className="flex">
              <span className="text-warm-gray-400">{gardenItem.gardenItemType.name}</span>
            </div>
          </div>
        </div>
      </Link>
    </li >
  )

  // The Actual Page
  return (
    <>
      <div className="mx-8 mb-8 mt-3 flex justify-between items-start">

        <div className="flex">
          {/* Tag Cloud */}
          <div>
            <h2 className="text-xs uppercase tracking-wide text-gray-500">Tag Cloud</h2>
            <ul className="mt-1 grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {tags.map((tag, index) =>
                <Tag key={index} tag={tag} />
              )}
            </ul>
          </div>
          {/* Content Type */}
          <div className="ml-8">
            <h2 className="text-xs uppercase tracking-wide text-gray-500">Content Type</h2>
            <ul className="mt-1 grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {gardenItemTypes.map((gardenItemType, index) =>
                <GardenType key={index} gardenItemType={gardenItemType} />
              )}
            </ul>
          </div>
        </div>

        {/* Tools */}
        <div className="w-52">
          <h2 className="text-xs uppercase tracking-wide text-gray-500 mb-1">Tools</h2>
          <div className="grid grid-cols-1 gap-2">
            <FilterBox />
            <button className="shadow-sm focus:outline-none bg-white hover:bg-blue-200 hover:border-blue-300 hover:text-blue-800 items-center min-w-28 px-4 py-2 col-span-1 flex flex-col text-center rounded border transition ease-in-out duration-150">New Post</button>
          </div>
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 m-8">
        {gardenItems.map((gardenItem, index) =>
          <Garden key={index} gardenItem={gardenItem} />
        )}
      </ul>
    </>
  )
}
export default GardenGrid
