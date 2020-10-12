import React from 'react'
import Img from 'gatsby-image'

const FunderGrid = ({ funders }) => {
  return (
    <ul className="mt-8 pb-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
      {
        funders.map((funder, index) =>
          <Funder key={index} funder={funder} />
        )
      }
    </ul>
  )
}

const Funder = ({ funder }) => (
  <li className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
    <a href={funder.slug.current} className="flex-1 flex flex-col">
      <div className="flex items-start">
        <Img className="h-32 w-32 flex-shrink-0 mx-auto" fluid={funder.image.asset.fluid} alt={funder.title} />
      </div>
    </a>
  </li>
)
export default FunderGrid