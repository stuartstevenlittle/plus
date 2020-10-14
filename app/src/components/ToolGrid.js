import React, { useState } from 'react'
import TagCloud from './TagCloud'
import PlainLink from './PlainLink'

const ToolGrid = ({ tags, tools, filteredTools, setFilteredTools, children }) => {
  tags.sort((a, b) => a.name.localeCompare(b.name))
  tools.sort((a, b) => a.title.localeCompare(b.title))

  // State
  const [filteredTags, setFilteredTags] = useState([])

  // Methods
  function handleTagClick(clickedTag) {
    if (filteredTags.indexOf(clickedTag) === -1) { // the clicked tag isn't already in the filter array
      // 1. add it so that it gets a coloured background
      setFilteredTags(tagsFilter => [...tagsFilter, clickedTag])

      // 2. filter the tools array based on the clicked tag, then put those items into the filteredTools array
      tools.filter(tool => tool.tags.map(t => t.name).some(tag => [...filteredTags, clickedTag].includes(tag)))
        .forEach(filteredItem => {
          if (filteredTools.indexOf(filteredItem) === -1) {  // the item isn't already in the filter array, so add it so that it shows on the page
            setFilteredTools(filteredTools => [...filteredTools, filteredItem])
          }
        });
    }
    else {  // the clicked tag is already in the filter array - i.e. it has now been switched off
      // 1. remove it from the filter array, to set the background back to white
      setFilteredTags(filteredTags.filter(tag => tag !== clickedTag))

      // 2. remove any items that match the tag that was turned off. So loop over filteredTools, and check each one
      filteredTools.forEach(item => {
        // if the value matches the clicked one, remove it from the array
        if (item.tags.map(t => t.name).includes(clickedTag)) {
          setFilteredTools(filteredTools.filter(item => !item.tags.map(t => t.name).includes(clickedTag)))
        }
      })
    }
  }

  // Template
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      {/* Toolbar */}
      <div className="mb-3 flex justify-end items-center">
        <div className="flex z-10">
          <div className="relative flex items-baseline">
            <PlainLink label="Submit a picture" to="#" />
            <TagCloud tags={tags} filteredTags={filteredTags} onClickTag={clickedTag => handleTagClick(clickedTag)} />
          </div>
        </div>
      </div>
      {/* Cards */}
      <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 pb-4">
        {/* {filteredTools.length === 0 && tools.map((tool, index) => <PictureCard key={index} picture={tool} />)}
        {filteredTools.length !== 0 && filteredTools.map((tool, index) => <PictureCard key={index} picture={tool} />)} */}
        {children}
      </ul>
    </div>
  )
}
export default ToolGrid
