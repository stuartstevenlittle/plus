import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import sortArray from '../utils/sortArray'

SwiperCore.use([Navigation, Pagination, Autoplay])

const NewsCarousel = ({ newsItems }) => {
  sortArray(newsItems, 'publishedAt');

  // Phone Only
  const NewsItem = ({ newsItem }) => (
    <li className="col-span-1 flex flex-col px-8 xl:px-0 hover:opacity-90 animate">
      <Link className="flex sm:hidden flex-1 flex-col text-center" to={newsItem.slug.current}>
        <Img className="w-64 h-64 flex-shrink-0 mx-auto bg-black rounded-full" fluid={newsItem.mainImage.asset.fluid} alt={newsItem.title} />
        <h3 className="mt-6 text-xl uppercase leading-5 font-semibold">{newsItem.title}</h3>
        <p className="text-lg mx-8 mt-3">{newsItem.exerpt}</p>
        <p className="mx-8 mb-4 mt-2 text-blue-600">
          <span>Read More</span>
          <svg className="inline ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </p>
      </Link>
    </li >
  )

  // Tablet and up
  const slides = []
  newsItems.forEach(newsItem => {
    slides.push(
      <SwiperSlide key={newsItem.slug.current} tag="li">
        <div className="col-span-1 flex flex-col pb-4 pt-8 px-8 xl:px-0 hover:opacity-90 animate">
          <Link className="hidden sm:flex flex-1 flex-col" to={newsItem.slug.current}>
            {/* News Item Card */}
            <div className="flex">
              {/* Left */}
              <div>
                <Img className="w-40 h-40  flex-shrink-0 mx-auto bg-black rounded-full" fluid={newsItem.mainImage.asset.fluid} alt={newsItem.title} />
                <p className="text-center text-sm text-gray-500 uppercase tracking-wide mt-2">{newsItem.publishedAt}</p>
              </div>
              {/* Right */}
              <div className="ml-4">
                <h3 className="text-lg uppercase leading-5 font-semibold">{newsItem.title}</h3>
                <p className="text-base mt-2">{newsItem.exerpt}</p>
                <p className="mb-4 mt-2 text-blue-600">
                  <span>Read More</span>
                  <svg className="inline ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </SwiperSlide>
    )
  })

  return (
    <div className="mb-4">
      <ul className="sm:hidden grid mt-6 gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((newsItem, index) =>
          <NewsItem key={index} newsItem={newsItem} />
        )}
      </ul>
      <Swiper className="hidden sm:block" id="main" tag="section" wrapperTag="ul"
        spaceBetween={50}
        slidesPerView={3}
        speed={800}
        navigation
        pagination={{ clickable: true }}    >
        {slides}
      </Swiper>
    </div>
  )
}

export default NewsCarousel