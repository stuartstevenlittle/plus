import React from 'react'
import { graphql } from 'gatsby'
import GardenGrid from '../components/GardenGrid'

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

const DigitalGarden = ({ data }) => {
  const tags = data.tags.nodes
  const gardenItems = data.gardenItems.nodes
  return (
    <GardenGrid tags={tags} gardenItems={gardenItems} />
  )
}
export default DigitalGarden