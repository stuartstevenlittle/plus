import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Map = () => {
  const { marker } = useStaticQuery(graphql`
    query {
      marker: file(relativePath: { eq: "marker.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
  
}
  `)

  const [viewport, setViewport] = useState({
    latitude: 56.394675,
    longitude: -3.43163,
    zoom: 16,
    width: "40vw",
    height: "40vh"
  })

  return (
    <div className="pt-4 pb-8 rounded overflow-hidden">
      <ReactMapGL
        className=" rounded overflow-hidden"
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoic3R1YXJ0c3RldmVubGl0dGxlIiwiYSI6ImNrZ2V6dmRhajB0bWIycXMxMTh5bWs3d2QifQ.a5Nt-xUOhBJl8K8H_pr7gQ"
        onViewportChange={viewport => setViewport(viewport)}

      >
        <Marker
          // offsetTop={-48}
          // offsetLeft={-24}
          latitude={56.394675}
          longitude={-3.43163}
        >
          <Img className="w-6 h-6 sm:w-14 sm:h-14 flex-shrink-0 mx-auto" fluid={marker.sharp.fluid} />
        </Marker>
      </ReactMapGL>
    </div>
  )
}
export default Map