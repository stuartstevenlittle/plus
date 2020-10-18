import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

const Map = () => {
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
          latitude={56.394675}
          longitude={-3.43163}
        >
          <svg className="w-12 h-12 text-teal-700" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" viewBox="0 0 365 560"><path d="M182.9 551.7c0 .1.2.3.2.3s175.2-269 175.2-357.4c0-130.1-88.8-186.7-175.4-186.9C96.3 7.9 7.5 64.5 7.5 194.6 7.5 283 182.8 552 182.8 552l.1-.3zm-60.7-364.5c0-33.6 27.2-60.8 60.8-60.8 33.6 0 60.8 27.2 60.8 60.8S216.5 248 182.9 248c-33.5 0-60.7-27.2-60.7-60.8z" /></svg>
        </Marker>
      </ReactMapGL>
    </div>
  )
}
export default Map