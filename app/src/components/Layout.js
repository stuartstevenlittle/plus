import React from 'react'
import Helmet from 'react-helmet'
import { globalHistory as history } from '@reach/router'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  const { location } = history
  const route = location.pathname.replace('/', '')

  return (
    <div>
      <Helmet>
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/css/swiper.css" /> */}
      </Helmet>
      <div className="h-stretch min-h-screen text-gray-900">
        <div className={`mx-auto shadow ${route === 'digital-garden' ? 'bg-gray-50' : 'bg-white'} `}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default Layout