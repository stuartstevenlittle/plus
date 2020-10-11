import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const FunderGrid = ({ funders }) => {
  return (
    <ul className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
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
    <Link className="flex-1 flex flex-col" to={funder.slug.current}>
      <div className="flex items-start">
        <Img className="h-32 w-32 flex-shrink-0 mx-auto" fluid={funder.image.asset.fluid} alt={funder.title} />
      </div>
    </Link>
  </li>
)
export default FunderGrid