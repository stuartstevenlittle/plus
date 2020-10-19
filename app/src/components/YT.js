import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    youtube: ({ node }) => {
      const { url } = node
      const id = getYouTubeId(url)
      return (<YouTube videoId={id} />)
    }
  }
}

export default serializers