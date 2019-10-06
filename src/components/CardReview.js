import React from 'react'
import { Tile } from './Tile'
import { Link } from '@reach/router'

export function CardReview({ cards, deckId, deckName }) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isFront, setIsFront] = React.useState(true)

  function handlePrevCard() {
    setCurrentIndex(current => (current - 1 + cards.length) % cards.length)
  }

  function handleNextCard() {
    setIsFront(true)
    setCurrentIndex(current => (current + 1) % cards.length)
  }

  function handleCardFlip() {
    setIsFront(current => !current)
  }

  const currentCard =
    cards && cards.length ? cards[currentIndex] : { term: '', definition: '' }
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl text-gray-600 font-medium text-center">
        {currentIndex + 1}/{cards.length}
      </div>
      <Tile className="md:w-1/2 lg:w-1/3" style={{ height: '60vh' }}>
        <div className="text-center text-4xl font-bold text-blue-800">
          {isFront ? currentCard.term : currentCard.definition}
        </div>
        <div className="mt-4 flex justify-between items-end">
          <div>
            <button
              className="mb-1 px-2 text-gray-900 font-medium rounded shadow-sm bg-blue-400"
              onClick={handleCardFlip}
            >
              flip
            </button>
          </div>
          <div className="flex items-end">
            <button
              className="mb-1 px-2 text-gray-900 font-medium rounded shadow-sm bg-gray-400"
              onClick={handlePrevCard}
            >
              previous
            </button>
            <button
              className="mb-1 ml-2 px-2 text-gray-900 font-medium rounded shadow-sm bg-gray-400"
              onClick={handleNextCard}
            >
              next
            </button>
          </div>
        </div>
      </Tile>
      <Link to={`/deck/${deckId}/${deckName}`}>Back to deck</Link>
    </div>
  )
}
