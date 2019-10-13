import React from 'react'
import { Link } from '@reach/router'
import { Tile } from './Tile'
import { DeckForm } from './DeckForm'
import { SecondaryButton, DangerButton } from './Buttons'

function ReadOnlyDeckPreview({ id, name, cardCount, onRemove, onEdit }) {
  function handleEdit() {
    onEdit && typeof onEdit === 'function' && onEdit()
  }

  function handleRemove() {
    onRemove && typeof onRemove === 'function' && onRemove(id)
  }

  return (
    <Tile>
      <h4 className="font-bold underline text-xl text-blue-900">
        <Link to={`/deck/${id}/${encodeURIComponent(name)}`}>{name}</Link>
      </h4>
      <div className="mt-4 pb-1 flex justify-between items-end">
        <div>
          <span className="block uppercase text-blue-700 text-xs tracking-loose font-medium">
            cards
          </span>
          <span className="font-bold text-lg">{cardCount}</span>
        </div>
        <div>
          <SecondaryButton onClick={handleEdit}>edit</SecondaryButton>
          <DangerButton onClick={handleRemove}>delete</DangerButton>
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
