import React from 'react'
import Img from 'gatsby-image'
import LeftQuote from '../components/LeftQuote'
import RightQuote from '../components/RightQuote'
const QuoteCard = ({ quote }) => (
  <>
    { quote &&
      <li key={quote.id} className="bg-white text-2xl text-center p-4 min-h-64 overflow-hidden col-span-1 flex flex-col  rounded shadow hover:shadow-lg transition ease-in-out duration-150">
        <div className="cursor-pointer flex-1 flex flex-col">
          {/* // Top */}
          <div className="flex flex-col flex-1 items-center justify-center">
            <h3>
              <LeftQuote />
              <span className="italic"> {quote.text}</span>
              <RightQuote />
            </h3>
          </div>
          {/* // Bottom */}
          <div className="flex items-center justify-center">
            <div className="flex-shrink-0">
              <Img className="mx-auto h-8 w-8 opacity-75 rounded-full" fluid={quote.author.image.asset.fluid} alt="" />
            </div>
            <div className="ml-3">
              <div className="text-base text-gray-400 uppercase tracking-wide leading-6 font-medium">{quote.author.name}</div>
            </div>
          </div>
        </div>
      </li >
    }
  </>
)

export default QuoteCard
