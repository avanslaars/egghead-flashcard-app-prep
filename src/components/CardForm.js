import React from 'react'
import { Tile } from './Tile'
import { saveCard } from '../services'

export function CardForm({ onSave, deckId, onCancel, card }) {
  const id = card ? card.id : undefined

  const [currentTerm, setCurrentTerm] = React.useState(() =>
    card ? card.term : ''
  )
  const [currentDefinition, setCurrentDefinition] = React.useState(() =>
    card ? card.definition : ''
  )

  function clearForm() {
    setCurrentTerm('')
    setCurrentDefinition('')
  }

  function handleReset(event) {
    event.preventDefault()
    clearForm()
    // TODO: Make a lesson on creating this `sfn` snippet
    onCancel && typeof onCancel === 'function' && onCancel()
  }

  function handleSubmit(event) {
    event.preventDefault()
    saveCard({
      id,
      term: currentTerm,
      definition: currentDefinition,
      deckId
    }).then(card => {
      clearForm()
      onSave && typeof onSave === 'function' && onSave(card)
    })
  }

  function handleTermChange(event) {
    const { value } = event.target
    setCurrentTerm(value)
  }

  function handleDefinitionChange(event) {
    const { value } = event.target
    setCurrentDefinition(value)
  }

  return (
    <Tile>
      <h3 className="font-bold underline text-xl text-blue-900">
        {id ? 'Update Card' : 'Add a Card'}
      </h3>
      <form onReset={handleReset} onSubmit={handleSubmit}>
        <div className="mt-2">
          <label
            htmlFor="cardTerm"
            className="block uppercase tracking-loose font-medium text-xs text-blue-800"
          >
            Term
          </label>
          <textarea
            id="cardTerm"
            className="w-full border rounded shadow"
            onChange={handleTermChange}
            value={currentTerm}
          />
        </div>
        <div className="mt-2">
          <label
            htmlFor="cardDefinition"
            className="block uppercase tracking-loose font-medium text-xs text-blue-800"
          >
            Definition
          </label>
          <textarea
            id="cardDefinition"
            className="w-full border rounded shadow"
            onChange={handleDefinitionChange}
            value={currentDefinition}
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
