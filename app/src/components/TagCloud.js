import React, { useState } from 'react'
import Tag from '../components/Tag'
import Fade from '../components/Fade'

const TagCloud = ({ tags, filteredTags, onClickTag }) => {
  const [showTagCloud, setShowTagCloud] = useState(false)
  return (
    <div>
      <button type="button" onClick={() => setShowTagCloud(!showTagCloud)} className="ml-6 pb-2 group text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none animate">
        <span>Tags</span>
        <svg className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition animate" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      <Fade showTagCloud={showTagCloud}>
        <div className="absolute right-0 mr-4 -mt-1 w-screen max-w-4xl sm:px-0">
          <div className="rounded-lg shadow-lg bg-white">
            <div className="rounded-lg shadow-xs overflow-hidden">
              <ul className="px-5 py-6 z-20 relative grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {tags.map((tag, index) =>
                  <Tag key={index} tag={tag} filteredTags={filteredTags} onClickTag={clickedTag => onClickTag(clickedTag)} />
                )}
              </ul>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}
export default TagCloud

