import React, { useState } from 'react'
import { graphql } from 'gatsby'
import QuoteCard from '../components/QuoteCard'
import ToolGridContainer from '../components/ToolGridContainer'

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

  const [filteredTools, setFilteredTools] = useState([])

  return (
    <ToolGridContainer toolType="Quote" tools={data.quotes.nodes} filteredTools={filteredTools} setFilteredTools={setFilteredTools}>
      {filteredTools.map((tool, index) => {
        return (
          <QuoteCard key={index} quote={tool} />
        )
      })}
    </ToolGridContainer>
  )
}
export default InspiringWords