import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PictureCard from '../components/PictureCard'
import QuoteCard from '../components/QuoteCard'
import ToolGrid from '../components/ToolGrid'

const ToolGridWrapper = ({ toolType, allTools }) => {
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
  const allTags = tagsData.nodes
  const tags = allTags.filter(tag => {
    return allTools.some(tool => {
      return tool.tags.some(toolTag => { return tag.name === toolTag.name })
    });
  });

  // State
  const [filteredTools, setFilteredTools] = useState([])

  // Computed properties
  const computedTools = _ => {
    const tools = (filteredTools.length > 0) ? filteredTools : allTools
    let mappedTools
    switch (toolType) {
      case 'Picture':
        mappedTools = tools.map((tool, index) => <PictureCard key={index} picture={tool} />)
        break
      case 'Quote':
        mappedTools = tools.map((tool, index) => <QuoteCard key={index} quote={tool} />)
        break
      default:
        // TODO do something sensible here
        mappedTools = tools.map((tool, index) => <QuoteCard key={index} quote={tool} />)
        break
    }
    return mappedTools
  }

  return (
    <ToolGrid tags={tags} toolType={toolType} tools={allTools} filteredTools={filteredTools} setFilteredTools={setFilteredTools}>
      <pre>{JSON.stringify(tags, null, 2)}</pre>

      { computedTools()}
    </ToolGrid>
  )
}
export default ToolGridWrapper