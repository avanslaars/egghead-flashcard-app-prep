import React from 'react'
import { Tile } from './Tile'
import { CardForm } from './CardForm'

export function CardPreview({ deckId, onSave, ...props }) {
  const [isEditMode, setIsEditMode] = React.useState(false)

  function toggleEdit() {
    setIsEditMode(mode => !mode)
  }

  function handleUpdate(card) {
    toggleEdit()
    onSave && typeof onSave === 'function' && onSave(card)
  }

  return !isEditMode ? (
    <ReadOnlyCardPreview {...props} onEdit={toggleEdit} />
  ) : (
    <CardForm
      deckId={deckId}
      onCancel={toggleEdit}
      onSave={handleUpdate}
      card={props}
    />
  )
}

function ReadOnlyCardPreview({ id, term, definition, onEdit, onRemove }) {
  const [isFront, setIsFront] = React.useState(true)

  function flipCard() {
    setIsFront(current => !current)
  }

  function handleEdit() {
    onEdit && typeof onEdit === 'function' && onEdit()
  }

  function handleRemove() {
    onRemove && typeof onRemove === 'function' && onRemove(id)
  }

  return (
    <Tile>
      <h3 className="mt-4 text-center font-bold text-2xl text-blue-800">
        {isFront ? term : definition}
      </h3>
      <div className="pb-1 flex justify-between">
        <div>
          <button
            className="px-2 text-gray-800 font-medium rounded shadow bg-blue-200"
            onClick={flipCard}
          >
            flip
          </button>
        </div>
        <div className="flex items-end">
          <button
            className="px-2 underline text-blue-700 font-medium"
            onClick={handleEdit}
          >
            edit
          </button>
          <button
            className="px-2 underline text-red-700 font-medium"
            onClick={handleRemove}
          >
            delete
          </button>
        </div>
      </div>
    </Tile>
  )
}
