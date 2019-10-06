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
          className="py-2 text-gray-700 text-lg font-medium underline"
        >
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
