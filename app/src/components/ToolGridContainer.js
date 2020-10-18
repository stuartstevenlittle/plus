import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ToolGrid from '../components/ToolGrid'

const ToolGridContainer = ({ children, toolType, tools, filteredTools, setFilteredTools }) => {

  const { tagsData } = useStaticQuery(graphql`
  query {
    tagsData: allSanityTags {
      nodes {
        name
      }
    }
  }
  `)
  const tags = tagsData.nodes


  return (
    <ToolGrid tags={tags} toolType={toolType} tools={tools} filteredTools={filteredTools} setFilteredTools={setFilteredTools}>
      {children}
    </ToolGrid>

  )
}
export default ToolGridContainer