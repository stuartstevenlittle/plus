import React, { useEffect, useRef } from 'react'

const FilterBox = () => {
  // autofocus equivalent using hooks - https://reactgo.com/react-focus-input/
  const searchInput = useRef(null);
  useEffect(() => { searchInput.current.focus() }, [])
  return (
    <div >
      <div className="relative shadow-sm">
        <div className="-mr-32 absolute inset-y-0 right-0 flex items-center pointer-events-none">
          <svg className="w-full h-5 text-gray-400 dark:text-gray-600 transition duration-150" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" ><path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
        </div>
        <input ref={searchInput} type="search" placeholder="Filter" aria-label="Global search box" className="bg-transparent rounded border outline-none h-10 block w-full pl-4 sm:text-sm sm:leading-5" />
      </div>
    </div>
  )

}

export default FilterBox