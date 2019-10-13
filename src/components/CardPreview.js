import React from 'react'
import { Tile } from './Tile'
import { CardForm } from './CardForm'
import { SecondaryButton, DangerButton, TertiaryButton } from './Buttons'

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
    <Tile className={isFront ? '' : 'bg-indigo-100'}>
      <h4 className="mt-4 text-center font-bold text-2xl text-blue-800">
        {isFront ? term : definition}
      </h4>
      <div className="pb-1 flex justify-between">
        <TertiaryButton onClick={flipCard}>
          {isFront ? 'show back' : 'show front'}
        </TertiaryButton>
        <div className="flex items-end">
          <SecondaryButton onClick={handleEdit}>edit</SecondaryButton>
          <DangerButton onClick={handleRemove}>delete</DangerButton>
        </div>
      </div>
    </Tile>
  )
}
