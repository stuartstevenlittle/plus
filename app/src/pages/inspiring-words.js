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

const InspiringWords = ({ data }) => <ToolGridWrapper toolType="Quote" allTools={data.quotes.nodes} />
export default InspiringWords