import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ToolGrid from '../components/ToolGrid'
import PictureCard from '../components/PictureCard'

const ToolGridContainer = ({ gardenItems }) => {
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


  return (
    // <pre>{JSON.stringify(tags, null, 2)}</pre>
    <ToolGrid tags={tags} tools={gardenItems} filteredTools={filteredTools} setFilteredTools={setFilteredTools}>
      {filteredTools.map((tool, index) => {
        return (
          <PictureCard key={index} picture={tool} />
        )
      })}
    </ToolGrid>

  )
}
export default ToolGridContainer