import React from 'react'

const ContactUs = () => {
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24" >
      <div className="relative max-w-xl mx-auto">
        <svg className="absolute left-full transform translate-x-1/2" width={404} height={404} fill="none" viewBox="0 0 404 404">
          <defs>
            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg className="absolute right-full bottom-0 transform -translate-x-1/2" width={404} height={404} fill="none" viewBox="0 0 404 404">
          <defs>
            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div className="text-center">
          <h2 className="text-2xl leading-9 font-extrabold text-gray-800 sm:text-4xl sm:leading-10">
            Get in touch
      </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
      </p>
        </div>
        <div className="mt-12">
          <form name="contact v1"
            method="POST"
            action="/contact-submitted"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <input type="hidden" name="bot-field" /> <input type="hidden" name="form-name" value="contact v1" />

            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">Name</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input id="name" className="form-input py-3 px-4 block w-full transition animate" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">Email</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input id="email" type="email" className="form-input py-3 px-4 block w-full transition animate" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium leading-5 text-gray-700">Message</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <textarea id="message" rows={4} className="form-textarea py-3 px-4 block w-full transition animate" defaultValue={""} />
              </div>
            </div>
            <div className="sm:col-span-2">
              <span className="w-full inline-flex rounded-md shadow-sm">
                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700 transition animate">
                  Submit
            </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default ContactUs