import React, { useState } from 'react'
import { graphql } from 'gatsby'
import ToolGrid from '../components/ToolGrid'
import PictureCard from '../components/PictureCard'

export const pageQuery = graphql`
{
  tags: allSanityTag {
    nodes {
      name
    }
  }
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

  const tags = data.tags.nodes
  const gardenItems = data.gardenItems.nodes
  const [filteredItems, setFilteredItems] = useState([])

  return (
    <ToolGrid tags={tags} tools={gardenItems} filteredItems={filteredItems} setFilteredItems={setFilteredItems}>
      {filteredItems.map((tool, index) => {
        return (
          <PictureCard key={index} picture={tool} />
        )
      })}
    </ToolGrid>
  )
}
export default TheDigitalGarden