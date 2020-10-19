import React from 'react'

const ContactUs = () => {
  return (
    <div className="relative bg-white " >
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-warm-gray-50" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-warm-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
              Get in touch
        </h2>

            <p className="mt-3 text-lg leading-6 text-gray-500">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
        </p>
            <dl className="mt-8 text-base leading-6 text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>77 Canal Street</p>
                  <p>Perth</p>
                  <p>PH2 8JJ</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="ml-3">
                    (01738) 626242
              </span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="ml-3">
                    plusperth@msn.com
              </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form name="contact"
              method="POST"
              action="/contact-submitted"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="grid grid-cols-1 gap-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input className="hidden" name="bot-field" />
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <div className="relative rounded-md shadow-sm">
                  <input id="name" name="name" placeholder="Name" className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="relative rounded-md shadow-sm">
                  <input id="email" name="email" placeholder="Email" type="email" className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <div className="relative rounded-md shadow-sm">
                  <textarea id="message" name="message" rows={4} className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Message" defaultValue={""} />
                </div>
              </div>
              <div>
                <span className="inline-flex rounded-md shadow-sm">
                  <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-700 hover:bg-teal-600 focus:outline-none focus:border-teal-700 active:bg-teal-700 animate">
                    Submit
              </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}
export default ContactUs