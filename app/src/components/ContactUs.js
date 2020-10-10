import React from 'react'


{/* <div className="mr-8">
  <p className="mx-20 mt-4 mb-4 text-xl leading-6 text-center text-gray-700">
    Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.
            </p>

  <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 px-8 pb-4 pt-2">
    <div>
      <label htmlFor="firstName" className="block text-sm font-medium leading-5 text-gray-700">First name</label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input id="firstName" name="firstName" value={values.firstName} onChange={updateValue} className="form-input py-3 px-4 block w-full transition ease-in-out duration-150" />
      </div>
    </div>
    <div>
      <label htmlFor="lastName" className="block text-sm font-medium leading-5 text-gray-700">Last name</label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input id="lastName" name="lastName" value={values.lastName} onChange={updateValue} className="form-input py-3 px-4 block w-full transition ease-in-out duration-150" />
      </div>
    </div>
    <div className="sm:col-span-2">
      <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">Email</label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input id="email" name="email" value={values.email} onChange={updateValue} className="form-input py-3 px-4 block w-full transition ease-in-out duration-150" />
      </div>
    </div>
    <div className="sm:col-span-2">
      <label htmlFor="message" className="block text-sm font-medium leading-5 text-gray-700">Message</label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <textarea id="message" name="message" rows="4" value={values.message} onChange={updateValue} className="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150"></textarea>
      </div>
    </div>
    <div className="sm:col-span-2">
      <span className="w-full inline-flex rounded-md shadow-sm">
        <button type="button" className="w-full inline-flex text-xl items-center justify-center px-6 py-3 mt-2 border border-transparent leading-6 font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-900 transition ease-in-out duration-150">
          Let's talk
                </button>
      </span>
    </div>
  </form>
</div> */}


const ContactUs = () => {
  return (
    <div>
      <div class="text-center">
        <p class="mt-4 text-lg leading-6 text-gray-500">
          Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>
      </div>
      <div class="mt-12">
        <form action="#" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700">First name</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input id="first_name" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150" />
            </div>
          </div>
          <div>
            <label for="last_name" class="block text-sm font-medium leading-5 text-gray-700">Last name</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input id="last_name" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-medium leading-5 text-gray-700">Email</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input id="email" type="email" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-medium leading-5 text-gray-700">Message</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <textarea id="message" rows="4" class="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150"></textarea>
            </div>
          </div>
          <div class="sm:col-span-2">
            <span class="w-full inline-flex rounded-md shadow-sm">
              <button type="button" className="w-full inline-flex text-xl items-center justify-center px-6 py-3 mt-2 border border-transparent leading-6 font-medium rounded-md text-white bg-dusty-blue-800 hover:bg-blue-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 animate">
                Get in Touch
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>

  )
}
export default ContactUs

