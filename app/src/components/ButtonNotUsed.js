import React from 'react'

const Button = ({ colour }) => {
  return (
    <button className={`hover:bg-${colour}-200 hover:border-{colour}-300 hover:text-{colour}-800 text-gray-500 mr-4 shadow-sm focus:outline-none items-center min-w-28 px-4 py-2 col-span-1 flex flex-col text-center rounded border animate`}>New Post</button>
  )
}
export default Button
