import React from 'react'
import { Link } from 'gatsby'



const ContactSubmitted = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-xl font-bold">Thanks for your enquiry</h1>
      <p className="mt-4">Someone will get back to you soon.</p>
      <Link to="/" className="mt-4 inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-700 hover:bg-teal-600 focus:outline-none focus:border-teal-700 active:bg-teal-700 animate">
        Home
      </Link>
    </div>
  )

}
export default ContactSubmitted
