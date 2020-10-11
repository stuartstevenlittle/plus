import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

function sortArray(arr, prop) {
  return arr.sort((a, b) => a[prop] - b[prop]);
}

const FeatureGrid = ({ features }) => {
  sortArray(features, 'order');
  return (
    <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) =>
        <FeatureItem key={index} feature={feature} />
      )}
    </ul>
  )
}

const FeatureItem = ({ feature }) => (
  <li className="col-span-1 flex flex-col text-center px-8 xl:px-0 hover:opacity-90  transition ease-in-out duration-150">
    <Link className="flex-1 flex flex-col" to={feature.slug.current}>
      <Img className="w-64 h-64 flex-shrink-0 mx-auto bg-black rounded-full" fluid={feature.mainImage.asset.fluid} alt={feature.title} />
      <h3 className="mt-6 text-lg uppercase leading-5 font-semibold">{feature.title}</h3>
      <p className="mx-8 mb-4 mt-2">{feature.description}</p>
    </Link>
  </li >
)

export default FeatureGrid