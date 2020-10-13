import React from 'react'

const Section = ({ title, subtitle, children, colour, noBorder, noTopGap }) => {
  const firstWord = title.replace(/ .*/, '');
  const theRest = title.replace(firstWord, '')
  return (
    // <section className={`bg-${colour}-50 w-full border-b border-warm-gray-100`}>
    <section className={`bg-${colour}-50 ${noBorder ? '' : 'border-b border-warm-gray-100'} w-full`}>
      <div className={`${noTopGap ? '' : 'pt-8'} max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0`}>
        {title &&
          <div className="section-header uppercase text-2xl sm:text-4xl text-center text-gray-900">
            <h1 className="font-bold ">{firstWord}<span className="font-light ml-1">{theRest}</span></h1>
          </div>
        }
        {subtitle &&
          <p className="max-w-4xl mx-auto text-xl text-center text-gray-600">{subtitle}</p>
        }
        {children}
      </div>
    </section>
  )
}
export default Section

