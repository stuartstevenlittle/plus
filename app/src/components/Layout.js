import React from 'react'
import { Helmet } from 'react-helmet';
import { globalHistory as history } from '@reach/router'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  const { location } = history
  const route = location.pathname.replace('/', '')

  return (

    <div>
      <Helmet>
        <html lang="en" />
        <body class="debug-screens" />
      </Helmet>
      <div className="h-stretch min-h-screen text-gray-900 bg-warm-gray-50">
        <div className={`mx-auto shadow ${route === 'pictures' || route === 'quotes' || route === 'stories' || route === 'poems' ? 'bg-warm-gray-50' : 'bg-white'} `}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default Layout