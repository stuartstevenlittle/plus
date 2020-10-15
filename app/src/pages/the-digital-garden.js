import React, { useState } from 'react'
import { graphql } from 'gatsby'
import PictureCard from '../components/PictureCard'
import ToolGridContainer from '../components/ToolGridContainer'

export const pageQuery = graphql`
{
  gardenItems: allSanityPlant {
    nodes {
      id
      title
      plantType {
        name
      }
      image {
          asset {
            fluid(maxWidth: 600) {
              ...GatsbySanityImageFluid
            }
          }
        }
      slug {
        current
      }
      author {
        name
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      tags {
        name
      }
    }
  }
}
`

const TheDigitalGarden = ({ data }) => {

  const [filteredTools, setFilteredTools] = useState([])

  return (
    <ToolGridContainer toolType="Picture" tools={data.gardenItems.nodes} filteredTools={filteredTools} setFilteredTools={setFilteredTools}>
      {filteredTools.map((tool, index) => {
        return (
          <PictureCard key={index} picture={tool} />
        )
      })}
    </ToolGridContainer>
  )
}
export default TheDigitalGarden