import React from 'react'

const Section = ({ title, children, colour, noShadow }) => {
  const firstWord = title.replace(/ .*/, '');
  const theRest = title.replace(firstWord, '')
  return (
    <section className={`bg-${colour}-100 ${noShadow ? '' : 'shadow'} w-full`}>
      <div className="max-w-screen-xl mx-auto pt-4 pb-6 px-4 sm:px-6 lg:px-8 xl:px-0">
        {title &&
          <div className="section-header uppercase text-2xl sm:text-4xl text-center mb-2 text-gray-900">
            <h1 className="font-bold ">{firstWord}<span className="font-light ml-1">{theRest}</span></h1>
          </div>
        }
        {children}
      </div>
    </section>
  )
}
export default Section

