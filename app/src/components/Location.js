import React from 'react'

const Location = () => {
  return (
    <div className="flex justify-between text-lg mb-4">
      {/* Left */}
      <div>
        <dt className="sr-only">Postal address</dt>
        <dd>
          <div className="flex items-center">
            <svg className="w-6 h-6 text-pink-700 opacity-75" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" viewBox="0 0 365 560"><path d="M182.9 551.7c0 .1.2.3.2.3s175.2-269 175.2-357.4c0-130.1-88.8-186.7-175.4-186.9C96.3 7.9 7.5 64.5 7.5 194.6 7.5 283 182.8 552 182.8 552l.1-.3zm-60.7-364.5c0-33.6 27.2-60.8 60.8-60.8 33.6 0 60.8 27.2 60.8 60.8S216.5 248 182.9 248c-33.5 0-60.7-27.2-60.7-60.8z" /></svg>
            <p className="ml-2">77 Canal Street</p>
          </div>
          <div className="ml-8">
            <p>Perth</p>
            <p>PH2 8JJ</p>
          </div>
        </dd>
      </div>
      {/* Middle */}
      <div>
        <dt className="sr-only">Phone number</dt>
        <dd className="flex items-center">
          <svg class="flex-shrink-0 h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
          <span className="ml-3">
            (01738) 626242
            </span>
        </dd>
        <dt className="sr-only">Email</dt>
        <dd className="flex items-center mt-1">
          <svg class="mt-1 flex-shrink-0 h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          <span className="ml-3">
            plusperth@msn.com
            </span>
        </dd>
      </div>
      {/* Right */}
      <div>
        <a href="https://www.facebook.com/PlusPerth-1514503322206433/" target="_blank" rel="noreferrer" className="text-gray-600 group animate flex">
          <svg className="h-7 w-7 text-gray-400 group-hover:text-blue-800" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
          <span className="ml-2 group-hover:text-blue-800">facebook</span>
        </a>
        <a href="https://twitter.com/PLUS_Perth" target="_blank" rel="noreferrer" className="text-gray-600 group animate flex mt-1">
          <svg className="h-7 w-7 text-gray-400 group-hover:text-blue-400" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
          <span className="ml-2 group-hover:text-blue-400">twitter</span>
        </a>
      </div>
    </div>


  )
}
export default Location