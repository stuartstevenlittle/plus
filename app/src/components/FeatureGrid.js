import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import sortArray from '../utils/sortArray'

const FeatureGrid = ({ features }) => {
  sortArray(features, 'order');
  return (
    <ul className="mt-2 pb-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) =>
        <FeatureItem key={index} feature={feature} />
      )}
    </ul>
  )
}

const FeatureItem = ({ feature }) => (
  <li className="col-span-1 flex flex-col text-center px-8 xl:px-0 hover:opacity-90 animate">
    <Link className="flex-1 flex flex-col" to={feature.slug.current}>
      <Img className="w-72 h-72 flex-shrink-0 mx-auto bg-black rounded-full" fluid={feature.mainImage.asset.fluid} alt={feature.title} />
      <h3 className="mt-6 text-xl uppercase leading-5 font-semibold">{feature.title}</h3>
      <p className="text-lg mx-8 mb-4 mt-2">{feature.description}</p>
    </Link>
  </li >
)

export default FeatureGrid