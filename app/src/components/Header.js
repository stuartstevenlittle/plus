import React, { useState } from 'react'
import { Transition } from "@headlessui/react";
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import sortArray from '../utils/sortArray'

const Header = () => {
  const [showToolsMenu, setShowToolsMenu] = useState(false)

  const { image, featuresData } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "logo.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
  featuresData: allSanityCategory {
    nodes {
      title
      showInMenu
      slug {
        current
      }
      order
      menuText
      icon    {
        asset {
            fixed {
              src
            }
          }
      }
    }
  }
}
  `)

  const features = featuresData.nodes
  sortArray(features, 'order');

  return (
    <nav className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex z-30">
            {/* Left */}
            <Link className="flex-shrink-0 flex items-center  text-2xl sm:text-4xl" to="/">
              <Img className="w-8 h-8 sm:w-14 sm:h-14 flex-shrink-0 mx-auto" fluid={image.sharp.fluid} />
              <span className="ml-2 text-gray-500 font-semibold uppercase">Plus</span><span className="ml-1 text-gray-400">Perth</span>
            </Link>
          </div>
          {/* Right */}
          <div className="hidden sm:ml-2 sm:flex sm:items-center">
            <div className="hidden sm:-my-px sm:ml-2 space-x-8 sm:flex">
              <div className="relative">
                <button onClick={() => setShowToolsMenu(!showToolsMenu)} type="button" className="group text-gray-500 inline-flex items-center text-lg space-x-2 leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                  <span>Digital Garden</span>
                  <svg className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <Transition
                  show={showToolsMenu}
                >
                  <div className="z-40 absolute transform mt-3 px-2 w-screen max-w-md sm:px-0 lg:max-w-3xl">
                    <div className="rounded-lg shadow-lg">
                      <div className="rounded-lg shadow-xs overflow-hidden">
                        <ul className="z-50 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {features.map((feature, index) =>
                            <MenuItem key={index} feature={feature} showToolsMenu={showToolsMenu} setShowToolsMenu={setShowToolsMenu} />
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>

              {/* <div className="relative">
                <button onClick={() => setShowToolsMenu(!showToolsMenu)} type="button" className="group text-gray-500 inline-flex items-center text-lg space-x-2 leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                  <span>Resources</span>
                  <svg className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <Transition
                  show={showToolsMenu}
                >
                  <div className="z-40 absolute transform mt-3 px-2 w-screen max-w-md sm:px-0 lg:max-w-3xl">
                    <div className="rounded-lg shadow-lg">
                      <div className="rounded-lg shadow-xs overflow-hidden">
                        <ul className="z-50 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {features.map((feature, index) =>
                            <MenuItem key={index} feature={feature} showToolsMenu={showToolsMenu} setShowToolsMenu={setShowToolsMenu} />
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div> */}

              <Link to="/wellbeing-calendar" className="inline-flex items-center px-1 text-lg font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-300 animate">
                Calendar
            </Link>

              <Link to="#" className="inline-flex items-center px-1 text-lg font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-300 animate">
                What's Happening
            </Link>
              <Link to="#" className="inline-flex items-center px-1 text-lg font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-300 animate">
                Training
            </Link>
              <Link to="#" className="inline-flex items-center px-1 text-lg font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-300 animate">
                About Plus
            </Link>
              <Link to="#" className="inline-flex items-center px-1 text-lg font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-300 animate">
                Get Involved
            </Link>
            </div>
            {/* Icons */}
            <Link to="/contact" className="ml-8 focus:outline-none inline" id="user-menu" aria-label="User menu" aria-haspopup="true">
              <svg className="w-6 h-6 text-gray-400 hover:text-gray-500 animate" fill="transparent" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </Link>
            <button className="ml-4 focus:outline-none inline" id="user-menu" aria-label="User menu" aria-haspopup="true">
              <svg className="w-6 h-6 text-gray-400 hover:text-gray-500 animate" fill="transparent" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            {/* <!-- Mobile menu button --> */}
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 animate">
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
          <Link to="#" className="block pl-3 pr-4 py-2 border-l-4 border-teal-600 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 animate">
            Home
        </Link>

          <Link to="self-help" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 animate">
            Self-Help
        </Link>

          <Link to="#" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 animate">
            What's Happening
        </Link>

          <Link to="#" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 animate">
            Coaching Services
        </Link>

          <Link to="#" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 animate">
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
            <Link to="#" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 animate" role="menuitem">
              Your Profile
          </Link>

            <Link to="#" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 animate" role="menuitem">
              Settings
          </Link>

            <Link to="#" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 animate" role="menuitem">
              Sign out
          </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

const MenuItem = ({ feature, setShowToolsMenu, showToolsMenu }) => (
  <>
    { feature.showInMenu === true && <li >
      <Link to={`/${feature.slug.current}`} onClick={() => setShowToolsMenu(!showToolsMenu)} className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-600 text-white sm:h-12 sm:w-12">
          {feature.icon && <Img className="w-8 h-8 text-white" fluid={feature.icon.asset.fixed} alt={feature.title} />}
        </div>
        <div className="space-y-1">
          <p className="text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
          <p className="text-base leading-5 text-gray-500">{feature.menuText}</p>
        </div>
      </Link>
    </li>
    }
  </>
)
export default Header