import React from 'react'
import { Router } from '@reach/router'
import { getCardsByDeckId, destroyCard } from '../services'
import { CardList } from './CardList'
import { CardReview } from './CardReview'

export function DeckOverview({ deckId, deckName }) {
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    getCardsByDeckId(deckId).then(setCards)
  }, [deckId])

  function handleNewCard(card) {
    setCards(existingCards => [...existingCards, card])
  }

  function handleCardUpdate(card) {
    setCards(existingCards =>
      existingCards.map(c => (c.id === card.id ? card : c))
    )
  }

  function handleRemove(id) {
    const isConfirmed = window.confirm(
      'Are you sure you want to remove this card?'
    )
    if (isConfirmed) {
      destroyCard(id).then(() =>
        setCards(existingCards => existingCards.filter(c => c.id !== id))
      )
    }
  }
  return (
    <div className="container mx-auto">
      <h3 className="text-center text-4xl font-medium text-blue-700">
        {deckName}
      </h3>
      <Router>
        <CardList
          path="/"
          cards={cards}
          deckId={deckId}
          onRemove={handleRemove}
          onUpdate={handleCardUpdate}
          onCreate={handleNewCard}
        />
        <CardReview
          path="/review"
          cards={cards}
          deckId={deckId}
          deckName={deckName}
        />
      </Router>
    </div>
  )
}
