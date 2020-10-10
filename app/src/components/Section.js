import React from 'react'

const Section = ({ title, children, colour, noShadow }) => {
  const firstWord = title.replace(/ .*/, '');
  const theRest = title.replace(firstWord, '')
  return (
    <section className={`bg-${colour}-100 ${noShadow ? '' : 'shadow'} w-full`}>
      <div className="max-w-screen-xl mx-auto py-4 sm:py-12 px-4 sm:px-6 lg:px-8">
        {title &&
          <div className="section-header uppercase text-2xl sm:text-4xl text-center mb-4">
            <h1 className="font-bold">{firstWord}<span className="font-light ml-1">{theRest}</span></h1>
          </div>
        }
        {children}
      </div>
    </section>
  )
}
export default Section

