import React from 'react'
import Avatar from './Avatar'
import LeftQuote from '../components/LeftQuote'
import RightQuote from '../components/RightQuote'

const QuoteCard = ({ quote }) => (
  <>
    { quote &&
      <li key={quote.id} className="text-2xl p-4 min-h-64 overflow-hidden col-span-1 flex flex-col rounded shadow bg-white hover:shadow-lg transition ease-in-out duration-150">
        <h3>
          <LeftQuote />
          <span className="italic"> {quote.text}</span>
          <RightQuote />
        </h3>
        <Avatar person={quote.quoteAuthor} />
      </li >}
  </>
)

export default QuoteCard
