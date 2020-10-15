import React from 'react'
import { globalHistory as history } from '@reach/router'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  const { location } = history
  const route = location.pathname.replace('/', '')

  return (
    <div>
      <div className="h-stretch min-h-screen text-gray-900">
        <div className={`mx-auto shadow ${route === 'the-digital-garden' || route === 'inspiring-words' ? 'bg-warm-gray-50' : 'bg-white'} `}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default Layout