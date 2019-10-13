import React from 'react'
import { saveCard } from '../services'
import { Form } from './Form'

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

  function handleKeyDown(event) {
    if (event.metaKey && event.key === 'Enter') {
      save()
    }
  }

  function save() {
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

  function handleSubmit(event) {
    event.preventDefault()
    // TODO: Handle validation - no empty submissions
    save()
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
    <Form
      heading={id ? 'Update Card' : 'Add a Card'}
      onReset={handleReset}
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDown}
    >
      <div className="mt-2">
        <label
          htmlFor={`card_term_${id ? id : 'new'}`}
          className="block uppercase tracking-loose font-medium text-xs text-blue-800"
        >
          Term
        </label>
        <textarea
          id={`card_term_${id ? id : 'new'}`}
          className="w-full border rounded shadow"
          onChange={handleTermChange}
          value={currentTerm}
        />
      </div>
      <div className="mt-2">
        <label
          htmlFor={`card_def_${id ? id : 'new'}`}
          className="block uppercase tracking-loose font-medium text-xs text-blue-800"
        >
          Definition
        </label>
        <textarea
          id={`card_def_${id ? id : 'new'}`}
          className="w-full border rounded shadow"
          onChange={handleDefinitionChange}
          value={currentDefinition}
        />
      </div>
    </Form>
  )
}
