import React from 'react'
import { Link } from '@reach/router'

import { CardForm } from './CardForm'
import { CardPreview } from './CardPreview'

export function CardList(props) {
  const { deckId, onRemove, onUpdate, onCreate, cards } = props

  return (
    <>
      <div className="flex justify-center text-center mt-2">
        <Link
          to="/"
          className="py-2 text-blue-700 text-lg font-bold underline flex items-center"
        >
          <svg
            className="w-6 h-6 fill-current mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z" />
          </svg>
          Back to decks
        </Link>
        <Link
          to="review"
          className="ml-4 px-4 py-2 bg-green-700 text-white text-lg font-medium uppercase rounded shadow"
        >
          Study deck
        </Link>
      </div>
      <div className="gridContainer mt-4">
        <CardForm onSave={onCreate} deckId={deckId} />
        {cards.map(card => (
          <CardPreview
            deckId={deckId}
            key={card.id}
            {...card}
            onSave={onUpdate}
            onRemove={onRemove}
          />
        ))}
      </div>
    </>
  )
}
