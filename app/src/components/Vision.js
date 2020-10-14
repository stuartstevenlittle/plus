import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Vision = ({ vision }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "susan-avatar.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className="relative">
      <svg className="absolute top-20 left-4 md:left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50" stroke="currentColor" fill="none" viewBox="0 0 144 144">
        <path strokeWidth={2} d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z" />
      </svg>
      <blockquote>
        <div className="mx-auto text-center md:max-w-5xl text-xl md:text-3xl leading-12 font-medium text-gray-900">
          <p>
            {vision}
          </p>
        </div>
        <footer className="">
          <div className="flex items-center justify-center">
            <div className="flex-shrink-0">
              <Img className="mx-auto h-12 w-12  sm:h-16 sm:w-16 rounded-full" fluid={image.sharp.fluid} />
            </div>
            <div className="ml-4 sm:ml-5">
              <div className=" sm:text-xl leading-6 font-medium text-gray-900">Susan Scott</div>
              <div className="sm:text-xl sm:mt-1 leading-6 font-medium text-gray-500">Development Manager at PLUS</div>
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
  )
}
export default Vision