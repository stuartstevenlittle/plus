import React from 'react'
import Slider from '../components/Slider'
const Home = ({ data }) => {
  const slideData = data.slideData.nodes
  return (
    <div className="min-h-screen bg-white">
      <Slider slideData={slideData} />
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <div className="px-4 py-8 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  )
}

export const pageQuery = graphql`
{
  slideData: allSanitySlide {
                nodes {
                id
      title
      order
      image {
                asset {
                fluid(maxWidth: 1250) {
                src
              }
        }
      }
    }
  }
}
`

export default Home