import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const GardenItem = ({ gardenItem }) => (
  <>
    { gardenItem &&
      <li key={gardenItem.id} className="overflow-hidden col-span-1 flex flex-col rounded shadow bg-white hover:shadow-lg transition ease-in-out duration-150">
        <Link className="flex-1 flex flex-col" to={`/garden/${gardenItem.slug.current}`}>
          <Img className="w-full h-56 flex-shrink-0 mx-auto" fluid={gardenItem.image.asset.fluid} alt={gardenItem.title} />
          <h3 className="text-center mt-2 uppercase leading-5 font-semibold">{gardenItem.title}</h3>
          <p className="mb-2 text-center text-gray-700">{gardenItem.author.name}</p>
        </Link>
      </li >}
  </>
)

export default GardenItem
