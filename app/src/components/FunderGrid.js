import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'


const FunderGrid = ({ funders }) => (
  <div className="bg-white">
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo.svg" alt="Tuple" />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo.svg" alt="Mirage" />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo.svg" alt="StaticKit" />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
          <img className="h-12" src="https://tailwindui.com/img/logos/transistor-logo.svg" alt="Transistor" />
        </div>
        <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
          <img className="h-12" src="https://tailwindui.com/img/logos/workcation-logo.svg" alt="Workcation" />
        </div>
      </div>
    </div>
  </div>
)

// {
//   funders.map((funder, index) =>
//     <Funder key={index} funder={funder} />
//   )
// }


const Funder = ({ funder }) => (
  <li className="col-span-1 flex flex-col px-8 mt-2">
    <Link className="flex-1 flex flex-col" to={funder.slug.current}>
      <div className="flex items-start">
        <div>
          <Img className="h-32 w-32 flex-shrink-0 mx-auto" fluid={funder.image.asset.fluid} alt={funder.title} />
        </div>
      </div>
    </Link>
  </li >
)


export default FunderGrid

