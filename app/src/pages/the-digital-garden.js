import React from 'react'
import { graphql } from 'gatsby'
// import PictureCard from '../components/PictureCard'
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

const TheDigitalGarden = ({ data }) => (
  <ToolGridContainer tools={data.gardenItems.nodes} />
)
export default TheDigitalGarden