import React from 'react'
import { globalHistory as history } from '@reach/router'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  const { location } = history
  const route = location.pathname.replace('/', '')

  return (
    <div>
      {/* TODO do this more elegently */}
      <div className={`flex flex-col h-screen text-gray-900 mx-auto shadow ${route === 'pictures' || route === 'quotes' || route === 'stories' || route === 'poems' ? 'bg-warm-gray-50' : 'bg-white'} `}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>

    </div>
  )
}
export default Layout