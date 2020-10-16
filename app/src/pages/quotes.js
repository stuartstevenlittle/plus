import React from 'react'
import { graphql } from 'gatsby'
import ToolGridWrapper from '../components/ToolGridWrapper'

export const pageQuery = graphql`
{
  quotes: allSanityQuote {
    nodes {
      id
      text
            tags {
        name
      }
          quoteAuthor {
        name
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }

    }
  }
}
`


const InspiringWords = ({ data }) => {
  const quotes = data.quotes.nodes
  quotes.sort((a, b) => a.text.localeCompare(b.text))
  return <ToolGridWrapper toolType="Quote" allTools={quotes} />
}
export default InspiringWords