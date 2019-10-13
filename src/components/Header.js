import React from 'react'
import { Link } from '@reach/router'

export function Header() {
  return (
    <header className="px-2 border-t-8 border-blue-500">
      <h1 className="text-blue-800 text-3xl font-bold">
        <Link to="/">
          Study<span className="text-blue-500">Deck</span>
        </Link>
      </h1>
      <h2 className="text-lg uppercase font-medium text-gray-700">
        Retention Through Repetition
      </h2>
    </header>
  )
}
