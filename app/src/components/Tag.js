import React, { useState } from 'react'

const Tag = (props) => {
  console.log(props)

  // // State
  // const [filteredTags, setFilteredTags] = useState([])

  // // Computed properties  
  // const tagClasses = tag => {
  //   return (filteredTags.indexOf(tag.name) === -1) ? 'bg-white' : 'bg-indigo-100 text-indigo-800'
  // }

  // // Methods
  // function onClickTag(event) {
  //   const clickedTag = event.target.firstChild.data
  //   if (filteredTags.indexOf(clickedTag) === -1) { // the clicked tag isn't already in the filter array
  //     // 1. add it so that it gets a coloured background
  //     setFilteredTags(tagsFilter => [...tagsFilter, clickedTag])

  //     // 2. filter the garden items array based on the clicked tag, then put those items into the filteredItems array
  //     gardenItems.filter(gardenItem => gardenItem.tags.map(t => t.name).some(tag => [...filteredTags, clickedTag].includes(tag)))
  //       .forEach(filteredItem => {
  //         if (filteredItems.indexOf(filteredItem) === -1) {  // the item isn't already in the filter array, so add it so that it shows on the page
  //           setFilteredItems(filteredItems => [...filteredItems, filteredItem])
  //         }
  //       });
  //   }
  //   else {  // the clicked tag is already in the filter array - i.e. it has now been switched off
  //     // 1. remove it from the filter array, to set the background back to white
  //     setFilteredTags(filteredTags.filter(tag => tag !== clickedTag))

  //     // 2. remove any items that match the tag that was turned off. So loop over filteredItems, and check each one
  //     filteredItems.forEach(item => {
  //       // if the value matches the clicked one, remove it from the array
  //       if (item.tags.map(t => t.name).includes(clickedTag)) {
  //         setFilteredItems(filteredItems.filter(item => !item.tags.map(t => t.name).includes(clickedTag)))
  //       }
  //     })
  //   }
  // }


  return (
    <input type="text" onChange={event => props.onChange(event.target.value)} />
    // <li><button onClick={onClickTag}
    //   className={`${tagClasses(tag)} focus:outline-none items-center min-w-28 px-4 py-2 shadow text-gray-500 bg-white hover:text-indigo-800 hover:bg-indigo-50 col-span-1 flex flex-col text-center rounded animate`}
    // >{tag.name}</button></li >
  )
}

export default Tag






