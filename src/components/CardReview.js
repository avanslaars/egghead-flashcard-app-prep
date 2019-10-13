import React from 'react'
import { Tile } from './Tile'
import { Link } from '@reach/router'
import { SecondaryButton, PrimaryButton, TertiaryButton } from './Buttons'

export function CardReview({ cards, deckId, deckName }) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isFront, setIsFront] = React.useState(true)

  function handlePrevCard() {
    setIsFront(true)
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
      <Tile
        className={`md:w-1/2 lg:w-1/3 h-tall ${isFront ? '' : 'bg-indigo-100'}`}
      >
        <div className="text-center text-4xl font-bold text-blue-800">
          {isFront ? currentCard.term : currentCard.definition}
        </div>
        <div className="mt-4 flex justify-between items-end py-2">
          <div>
            <TertiaryButton onClick={handleCardFlip}>
              {isFront ? 'show back' : 'show front'}
            </TertiaryButton>
          </div>
          <div className="flex items-end">
            <SecondaryButton onClick={handlePrevCard}>previous</SecondaryButton>
            <PrimaryButton onClick={handleNextCard}>next</PrimaryButton>
          </div>
        </div>
      </Tile>
      <Link
        to={`/deck/${deckId}/${deckName}`}
        className="flex items-center text-blue-700 font-bold underline mt-4"
      >
        <svg
          className="w-6 h-6 fill-current mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z" />
        </svg>
        Back to deck
      </Link>
    </div>
  )
}
