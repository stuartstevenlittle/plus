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
  const tools = data.gardenItems.nodes
  const [filteredTools, setFilteredTools] = useState([])

  // Computed properties
  const computedTools = _ => (filteredTools.length > 0) ? filteredTools : tools

  return (
    <ToolGridContainer toolType="Picture" tools={tools} filteredTools={filteredTools} setFilteredTools={setFilteredTools}>
      { computedTools().map((tool, index) => <PictureCard key={index} picture={tool} />)}
    </ToolGridContainer>
  )
}
export default TheDigitalGarden