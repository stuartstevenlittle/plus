import React from 'react'

const Tag = ({ tag, filteredTags, onClickTag }) => {

  // Computed properties  
  const tagClasses = tag => {
    return (filteredTags.indexOf(tag.name) === -1) ? 'bg-white' : 'bg-indigo-100 text-indigo-800'
  }

  return (
    // <input type="text" onChange={event => props.onChange(event.target.value)} />
    <li>
      <button onClick={event => onClickTag(event.target.firstChild.data)} className={`${tagClasses(tag)} focus:outline-none items-center min-w-28 px-4 py-2 shadow text-gray-500 bg-white hover:text-indigo-800 hover:bg-indigo-50 col-span-1 flex flex-col text-center rounded animate`}>
        {tag.name}
      </button>
    </li>
  )
}

export default Tag






