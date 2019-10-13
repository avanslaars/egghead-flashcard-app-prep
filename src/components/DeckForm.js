import React from 'react'
import { saveDeck } from '../services'
import { Form } from './Form'

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
    <Form
      heading={id ? 'Update Deck' : 'Add a Deck'}
      onReset={handleReset}
      onSubmit={handleSubmit}
    >
      <div className="mt-2">
        <label
          className="block uppercase tracking-loose font-medium text-xs text-blue-800"
          htmlFor={id ? `deck_name_${id}` : 'deck_name_new'}
        >
          Deck name:
        </label>
        <input
          className="w-full border rounded shadow"
          id={id ? `deck_name_${id}` : 'deck_name_new'}
          type="text"
          onChange={handleInputChange}
          value={currentName}
        />
      </div>
    </Form>
  )
}
