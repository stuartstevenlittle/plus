import React from 'react'
import Img from 'gatsby-image'

const PictureCard = ({ picture }) => (
  <>
    { picture &&
      <li key={picture.id} className="overflow-hidden mx-4 sm:mx-0 col-span-1 flex flex-col rounded shadow bg-white hover:shadow-lg transition ease-in-out duration-150">
        <div className="cursor-pointer flex-1 flex flex-col">
          <Img className="w-full h-56 flex-shrink-0 mx-auto" fluid={picture.image.asset.fluid} alt={picture.title} />
          <h3 className="text-center mt-2 uppercase leading-5 font-semibold">{picture.title}</h3>
          <p className="mb-2 text-center text-gray-700">{picture.author.name}</p>
        </div>
      </li >}
  </>
)

export default PictureCard
