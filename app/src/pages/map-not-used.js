// import React, { useState } from 'react'
// import ReactMapGL, { Marker } from 'react-map-gl'

// const Map = () => {
//   const [viewport, setViewport] = useState({
//     latitude: 56.394675,
//     longitude: -3.43163,
//     zoom: 16,
//     width: "100vw",
//     height: "100vh"
//   })

//   return (
//     <ReactMapGL
//       {...viewport}
//       mapboxApiAccessToken="pk.eyJ1Ijoic3R1YXJ0c3RldmVubGl0dGxlIiwiYSI6ImNrZ2V6dmRhajB0bWIycXMxMTh5bWs3d2QifQ.a5Nt-xUOhBJl8K8H_pr7gQ"
//       onViewportChange={viewport => setViewport(viewport)}
//     >
//       <Marker
//         // offsetTop={-48}
//         // offsetLeft={-24}
//         latitude={56.394675}
//         longitude={-3.43163}
//       >
//         <img src=" https://img.icons8.com/color/48/000000/marker.png" />
//       </Marker>
//     </ReactMapGL>
//   )
// }
// export default Map