import React from 'react'
import Avatar from './Avatar'

const QuoteCard = ({ quote }) => (
  <>
    { quote &&
      <li key={quote.id} className="p-4 text-2xl overflow-hidden col-span-1 flex flex-col rounded shadow bg-white hover:shadow-lg transition ease-in-out duration-150">
        <h3 >{quote.text}</h3>
        <Avatar person={quote.quoteAuthor} />
      </li >}
  </>
)

export default QuoteCard
