import React from 'react'
import Img from 'gatsby-image'
import LeftQuote from '../components/LeftQuote'


const StoryCard = ({ story }) => (
  <>
    { story &&
      <li key={story.id} className="text-2xl text-center p-4 min-h-64 overflow-hidden col-span-1 flex flex-col  rounded shadow bg-white hover:shadow-lg transition animate">
        <button className="flex-1 flex flex-col">
          {/* // Left */}
          <div className="flex flex-col flex-1 items-center justify-center">
            <h3>
              <LeftQuote />
              <span className="italic"> {story.excerpt}</span>
            </h3>
          </div>
          {/* // Right */}
          <div className="flex items-center justify-center">
            <div className="flex-shrink-0">
              <Img className="mx-auto h-10 w-10 rounded-full" fluid={story.author.image.asset.fluid} alt="" />
            </div>
            <div className="ml-3">
              <div className="text-lg text-gray-400 uppercase tracking-wide leading-6 font-medium">{story.author.name}</div>
            </div>
          </div>
        </button>
      </li >
    }
  </>
)

export default StoryCard
