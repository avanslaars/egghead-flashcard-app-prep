import React from 'react'
import { Tile } from './Tile'
import { FormButtons } from './FormButtons'

export function Form({ heading, onReset, onSubmit, children, ...formProps }) {
  return (
    <Tile>
      <h4 className="font-bold underline text-xl text-blue-900">{heading}</h4>
      <form onReset={onReset} onSubmit={onSubmit} {...formProps}>
        {children}
        <FormButtons />
      </form>
    </Tile>
  )
}
