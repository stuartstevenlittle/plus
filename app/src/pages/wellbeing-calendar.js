import React from 'react'
import { graphql } from 'gatsby'

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

const WellbeingCalender = () => <h1>Calendar</h1>
// const WellbeingCalender = ({ data }) => <ToolGridWrapper toolType="Picture" allTools={data.gardenItems.nodes} />

export default WellbeingCalender