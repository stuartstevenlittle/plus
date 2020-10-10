import React from 'react'
import Layout from './src/components/Layout'

import "./src/styles/tailwind.css"
import "./src/styles/main.css"
import "./src/styles/swiper.css"
export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)