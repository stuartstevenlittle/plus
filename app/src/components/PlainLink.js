import React from 'react'
import { Link } from 'gatsby'

const PlainLink = ({ label, to }) => {
  return (
    <Link to={to} className="group text-gray-500 inline-flex text-base leading-6 font-medium hover:text-gray-900 focus:outline-none animate">{label}</Link>
  )
}
export default PlainLink




