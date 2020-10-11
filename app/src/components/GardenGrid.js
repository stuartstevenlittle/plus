import React, { useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import FilterBox from '../components/FilterBox'
import Button from '../components/Button'

const GardenGrid = ({ tags, gardenItems }) => {
  tags.sort((a, b) => a.name.localeCompare(b.name))
  gardenItems.sort((a, b) => a.title.localeCompare(b.title))

  const [tagsFilter, setTagsFilter] = useState([])
  const [filteredItems, setFilteredItems] = useState([])

  let tempFilteredItems = []

  // Event Handlers  
  function getTagClasses(tag) {
    return (tagsFilter.indexOf(tag.name) === -1) ? 'bg-white' : 'bg-indigo-100'
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
      className={`${getTagClasses(tag)} focus:outline-none items-center min-w-28 px-4 py-2 hover:bg-indigo-50 col-span-1 flex flex-col text-center rounded border transition ease-in-out duration-150`}
    >{tag.name}</button></li >
  )

  // A Garden Item
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
          </div>
        </div>
      </Link>
    </li >
  )

  // The Actual Page
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="mb-8 mt-3 flex justify-between items-start">

        <div className="flex">
          <div>
            <h2 className="text-xs uppercase tracking-wide text-gray-500">Tag Cloud</h2>
            {/* <ul className="mt-1 grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {tags.map((tag, index) =>
                <Tag key={index} tag={tag} />
              )}
            </ul> */}
          </div>
        </div>

        <div className="flex">
          <Button colour="blue" />
          <FilterBox />
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 pb-16">
        {gardenItems.map((gardenItem, index) =>
          <Garden key={index} gardenItem={gardenItem} />
        )}
      </ul>
    </div>
  )
}
export default GardenGrid
