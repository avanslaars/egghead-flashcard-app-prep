import React from 'react'
import { Link } from '@reach/router'
import { Tile } from './Tile'
import { DeckForm } from './DeckForm'

function ReadOnlyDeckPreview({ id, name, cardCount, onRemove, onEdit }) {
  function handleEdit() {
    onEdit && typeof onEdit === 'function' && onEdit()
  }

  function handleRemove() {
    onRemove && typeof onRemove === 'function' && onRemove(id)
  }

  return (
    <Tile>
      <h3 className="font-bold underline text-xl text-blue-900">
        <Link to={`/deck/${id}/${encodeURIComponent(name)}`}>{name}</Link>
      </h3>
      <div className="mt-4 pb-1 flex justify-between items-end">
        <div>
          <span className="block uppercase text-blue-700 text-xs tracking-loose font-medium">
            cards
          </span>
          <span className="font-bold text-lg">{cardCount}</span>
        </div>
        <div>
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

export function DeckPreview({ onUpdate, ...props }) {
  const { id, name } = props
  const [isEditMode, setIsEditMode] = React.useState(false)

  function toggleEdit() {
    setIsEditMode(mode => !mode)
  }

  function handleUpdate(deck) {
    toggleEdit()
    onUpdate && typeof onUpdate === 'function' && onUpdate(deck)
  }

  return !isEditMode ? (
    <ReadOnlyDeckPreview {...props} onEdit={toggleEdit} />
  ) : (
    <DeckForm onSave={handleUpdate} onCancel={toggleEdit} deck={{ id, name }} />
  )
}
