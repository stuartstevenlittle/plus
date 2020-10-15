import React from 'react'
import Img from 'gatsby-image'

const Avatar = ({ person }) => (
  <div className="flex items-center justify-center">
    <div className="flex-shrink-0">
      <Img className="mx-auto h-12 w-12  sm:h-16 sm:w-16 rounded-full" fluid={person.image.asset.fluid} alt="" />
    </div>
    <div className="ml-4 sm:ml-5">
      <div className=" sm:text-xl leading-6 font-medium text-gray-900">{person.name}</div>
      {/* <div className="sm:text-xl sm:mt-1 leading-6 font-medium text-gray-500">Development Manager at PLUS</div> */}
    </div>
  </div>
)
export default Avatar
