import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PictureCard from '../components/PictureCard'
import QuoteCard from '../components/QuoteCard'
import ToolGrid from '../components/ToolGrid'

const ToolGridWrapper = ({ toolType, tools }) => {
  // Data
  const { tagsData } = useStaticQuery(graphql`
  query {
    tagsData: allSanityTag {
      nodes {
        name
      }
    }
  }
  `)
  const tags = tagsData.nodes

  // State
  const [filteredTools, setFilteredTools] = useState([])

  // Computed properties
  const computedTools = _ => {
    const arrayToUse = (filteredTools.length > 0) ? filteredTools : tools
    return (toolType === 'Picture') ?
      arrayToUse.map((tool, index) => <PictureCard key={index} picture={tool} />)
      :
      arrayToUse.map((tool, index) => <QuoteCard key={index} quote={tool} />)
  }

  return (
    <ToolGrid tags={tags} toolType={toolType} tools={tools} filteredTools={filteredTools} setFilteredTools={setFilteredTools}>
      { computedTools()}
    </ToolGrid>
  )
}
export default ToolGridWrapper