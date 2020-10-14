import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const ToolCard = ({ tool }) => (
  <>
    { tool &&
      <li key={tool.id} className="overflow-hidden col-span-1 flex flex-col rounded shadow bg-white hover:shadow-lg transition ease-in-out duration-150">
        <Link className="flex-1 flex flex-col" to={`/garden/${tool.slug.current}`}>
          <Img className="w-full h-56 flex-shrink-0 mx-auto" fluid={tool.image.asset.fluid} alt={tool.title} />
          <h3 className="text-center mt-2 uppercase leading-5 font-semibold">{tool.title}</h3>
          <p className="mb-2 text-center text-gray-700">{tool.author.name}</p>
        </Link>
      </li >}
  </>
)

export default ToolCard
