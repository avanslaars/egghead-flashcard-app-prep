import React from 'react'
import { getAllDecks, destroyDeck } from '../services'
import { DeckForm } from './DeckForm'
import { DeckPreview } from './DeckPreview'

export function DeckList() {
  const [decks, setDecks] = React.useState([])

  function handleDelete(id) {
    const isConfirmed = window.confirm('Are you sure?')
    if (isConfirmed) {
      destroyDeck(id).then(() => {
        setDecks(decks => decks.filter(deck => deck.id !== id))
      })
    }
  }

  function handleNewDeck(deck) {
    setDecks(existingDecks => [...existingDecks, deck])
  }

  function handleDeckUpdate(deck) {
    setDecks(existingDecks =>
      existingDecks.map(d => (d.id === deck.id ? deck : d))
    )
  }

  React.useEffect(() => {
    getAllDecks().then(setDecks)
  }, [])

  return (
    <div className="gridContainer">
      <DeckForm onSave={handleNewDeck} />
      {decks.map(deck => (
        <DeckPreview
          key={deck.id}
          {...deck}
          onRemove={handleDelete}
          onUpdate={handleDeckUpdate}
        />
      ))}
    </div>
  )
}
