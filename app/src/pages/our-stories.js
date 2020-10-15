import React from 'react'
import { graphql } from 'gatsby'
import ToolGridWrapper from '../components/ToolGridWrapper'

export const pageQuery = graphql`
{
  stories: allSanityStory {
    nodes {
      id
      text
      excerpt
            buttonText
      tags {
        name
      }
      author {
        name
         age
      location
        image {
          asset {
            fluid(maxWidth: 600) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
}
`


const OurStories = ({ data }) => {
  const toolType = "Story"
  const allTools = data.stories.nodes
  allTools.sort((a, b) => a.text.localeCompare(b.text))
  // return <pre>{JSON.stringify(data, null, 2)}</pre>

  return <ToolGridWrapper toolType={toolType} allTools={allTools} />
}
export default OurStories