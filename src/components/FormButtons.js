import React from 'react'
import { PrimaryButton, SecondaryButton } from './Buttons'

export function FormButtons() {
  return (
    <div className="mt-4 py-2 flex justify-end">
      <PrimaryButton type="submit">save</PrimaryButton>
      <SecondaryButton type="reset">cancel</SecondaryButton>
    </div>
  )
}
