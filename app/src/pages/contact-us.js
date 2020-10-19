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
          <form name="contact"
            method="POST"
            action="/contact-submitted"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <input type="hidden" name="bot-field" /> <input type="hidden" name="form-name" value="contact" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">Name</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input id="name" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">Email</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input id="email" type="email" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium leading-5 text-gray-700">Message</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <textarea id="message" rows={4} className="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150" defaultValue={""} />
              </div>
            </div>
            <div className="sm:col-span-2">
              <span className="w-full inline-flex rounded-md shadow-sm">
                <button type="button" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700 transition ease-in-out duration-150">
                  Submit
            </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>


    // <div className="relative bg-white " >
    //   <div className="absolute inset-0">
    //     <div className="absolute inset-y-0 left-0 w-1/2 bg-warm-gray-50" />
    //   </div>
    //   <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
    //     <div className="bg-warm-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
    //       <div className="max-w-lg mx-auto">
    //         <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
    //           Get in touch
    //     </h2>

    //         <p className="mt-3 text-lg leading-6 text-gray-500">
    //           Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
    //     </p>
    //         <dl className="mt-8 text-base leading-6 text-gray-500">
    //           <div>
    //             <dt className="sr-only">Postal address</dt>
    //             <dd>
    //               <p>77 Canal Street</p>
    //               <p>Perth</p>
    //               <p>PH2 8JJ</p>
    //             </dd>
    //           </div>
    //           <div className="mt-6">
    //             <dt className="sr-only">Phone number</dt>
    //             <dd className="flex">
    //               <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    //               </svg>
    //               <span className="ml-3">
    //                 (01738) 626242
    //           </span>
    //             </dd>
    //           </div>
    //           <div className="mt-3">
    //             <dt className="sr-only">Email</dt>
    //             <dd className="flex">
    //               <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    //               </svg>
    //               <span className="ml-3">
    //                 plusperth@msn.com
    //           </span>
    //             </dd>
    //           </div>
    //         </dl>
    //       </div>
    //     </div>
    //     <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
    //       <div className="max-w-lg mx-auto lg:max-w-none">
    //         <form name="contact"
    //           method="POST"
    //           action="/contact-submitted"
    //           data-netlify="true"
    //           netlify-honeypot="bot-field"
    //           className="grid grid-cols-1 gap-y-6"
    //         >
    //           <input type="hidden" name="bot-field" /> <input type="hidden" name="form-name" value="contact" />

    //           <div>
    //             <label htmlFor="name" className="sr-only">Name</label>
    //             <div className="relative rounded-md shadow-sm">
    //               <input id="name" name="name" placeholder="Name" className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" />
    //             </div>
    //           </div>
    //           <div>
    //             <label htmlFor="email" className="sr-only">Email</label>
    //             <div className="relative rounded-md shadow-sm">
    //               <input id="email" name="email" placeholder="Email" type="email" className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" />
    //             </div>
    //           </div>
    //           <div>
    //             <label htmlFor="message" className="sr-only">Message</label>
    //             <div className="relative rounded-md shadow-sm">
    //               <textarea id="message" name="message" rows={4} className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Message" defaultValue={""} />
    //             </div>
    //           </div>
    //           <div>
    //             <span className="inline-flex rounded-md shadow-sm">
    //               <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-700 hover:bg-teal-600 focus:outline-none focus:border-teal-700 active:bg-teal-700 animate">
    //                 Submit
    //           </button>
    //             </span>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div >

  )
}
export default ContactUs