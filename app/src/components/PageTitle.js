import React from 'react'

const PageTitle = ({ title, subtitle }) => {
  const firstWord = title.replace(/ .*/, '');
  const theRest = title.replace(firstWord, '')
  return (
    <>
      <div className="section-header uppercase text-4xl text-center text-gray-900">
        <h1 className="font-bold ">{firstWord}<span className="font-light ml-1">{theRest}</span></h1>
      </div>
      <p className="max-w-4xl mx-auto text-xl text-center text-gray-600 mb-8">{subtitle}</p>
    </>
  )
}
export default PageTitle