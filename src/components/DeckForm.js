import React from 'react'
import { Tile } from './Tile'
import { saveDeck } from '../services'

export function DeckForm({ onSave, onCancel, deck }) {
  const id = deck ? deck.id : undefined

  const [currentName, setCurrentName] = React.useState(() =>
    deck ? deck.name : ''
  )

  function handleReset(event) {
    event.preventDefault()
    setCurrentName('')
    onCancel && typeof onCancel === 'function' && onCancel()
  }

  function handleSubmit(event) {
    event.preventDefault()
    // TODO: Handle validation - no empty submissions
    saveDeck({ name: currentName, id }).then(deck => {
      setCurrentName('')
      onSave && typeof onSave === 'function' && onSave(deck)
    })
  }

  function handleInputChange(event) {
    const { value } = event.target
    setCurrentName(value)
  }

  return (
    <Tile>
      <h3 className="font-bold underline text-xl text-blue-900">
        {id ? 'Update Deck' : 'Add a Deck'}
      </h3>
      <form onReset={handleReset} onSubmit={handleSubmit}>
        <div className="mt-2">
          <label
            className="block uppercase tracking-loose font-medium text-xs text-blue-800"
            htmlFor={id ? `deck_${id}` : 'deckName'}
          >
            Deck name:
          </label>
          <input
            className="w-full border rounded shadow"
            id={id ? `deck_${id}` : 'deckName'}
            type="text"
            onChange={handleInputChange}
            value={currentName}
          />
        </div>
        <div className="mt-4 py-2 flex justify-end">
          <button
            type="submit"
            className="px-2 text-white font-medium rounded bg-blue-700"
          >
            save
          </button>
          <button
            type="reset"
            className="px-2 underline text-blue-700 font-medium"
          >
            cancel
          </button>
        </div>
      </form>
    </Tile>
  )
}
