import React from 'react'
// import { Link } from 'gatsby'
import Img from 'gatsby-image'

const NewsCarousel = ({ news: posts }) => {
  return (
    <ul className="mt-3 pb-6  grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {
        posts.map((newsItem, index) =>
          <NewsItem key={index} newsItem={newsItem} />
        )
      }
    </ul>
  )
}

const NewsItem = ({ newsItem }) => (

  <li className="col-span-1 flex">
    {/* <Link className="flex" to={newsItem.slug.current}> */}
    <div className="flex-shrink-0 flex items-center justify-center w-16">
      <Img className="w-20 h-20 flex-shrink-0 mx-auto bg-black rounded-full" fluid={newsItem.mainImage.asset.fluid} alt={newsItem.title} />
    </div>
    <div className="flex-1 flex items-center justify-between truncate">
      <div className="flex-1 px-4 py-2 truncate">
        <a href="#" className="text-lg uppercase leading-5 font-semibold text-cool-gray-600 hover:text-gray-700 animate">{newsItem.title}</a>
        <p className="text-gray-500">{newsItem.exerpt}</p>
      </div>
    </div>
    {/* </Link> */}
  </li>


)

export default NewsCarousel