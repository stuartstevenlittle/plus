import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Header = () => {

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "logo.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <nav className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            {/* Left */}
            <Link className="flex-shrink-0 flex items-center  text-2xl sm:text-4xl" to="/">
              <Img className="w-8 h-8 sm:w-14 sm:h-14 flex-shrink-0 mx-auto" fluid={image.sharp.fluid} />
              <span className="ml-2 text-gray-500 font-semibold uppercase">Plus</span><span className="ml-1 text-gray-400">Perth</span>
            </Link>
          </div>
          {/* Right */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="hidden sm:-my-px sm:ml-6 space-x-8 sm:flex">
              <Link to="/" className="inline-flex items-center px-1 text-lg font-medium leading-5 text-gray-500 focus:outline-none transition duration-150 ease-in-out">
                Home
            </Link>
              <Link to="digital-garden" className="inline-flex items-center px-1 text-lg font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                Self-Help Tools
            </Link>
              <Link to="#" className="inline-flex items-center px-1 text-lg font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                What's Happening
            </Link>
              <Link to="#" className="inline-flex items-center px-1 text-lg font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                Coaching Services
            </Link>
              <Link to="#" className="inline-flex items-center px-1 text-lg font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                About Plus
            </Link>
              <Link to="#" className="inline-flex items-center px-1 text-lg font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                Get in Touch
            </Link>
              {/* Search */}
              <button className="focus:outline-none inline" id="user-menu" aria-label="User menu" aria-haspopup="true">
                <svg className="xl:mr-2 w-6 h-6 text-gray-400 hover:text-gray-500 animate" fill="transparent" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            {/* <!-- Mobile menu button --> */}
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
              {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
              <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
              <svg className="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="hidden sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          <Link to="#" className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out">
            Home
        </Link>

          <Link to="self-help" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
            Self-Help
        </Link>

          <Link to="#" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
            What's Happening
        </Link>

          <Link to="#" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
            Coaching Services
        </Link>

          <Link to="#" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
            About Plus
        </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4 space-x-3">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <div>
              <div className="text-base font-medium leading-6 text-gray-800">Tom Cook</div>
              <div className="text-sm font-medium leading-5 text-gray-500">tom@example.com</div>
            </div>
          </div>
          <div className="mt-3 space-y-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            <Link to="#" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">
              Your Profile
          </Link>

            <Link to="#" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">
              Settings
          </Link>

            <Link to="#" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">
              Sign out
          </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header