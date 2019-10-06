import React from 'react'
import './styles/tailwind.css'
import { Router } from '@reach/router'
import { Header } from './components/Header'
import { DeckList } from './components/DeckList'
import { DeckOverview } from './components/DeckOverview'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Router className="px-2">
          <DeckList path="/" />
          <DeckOverview path="/deck/:deckId/:deckName/*" />
        </Router>
      </main>
    </div>
  )
}

export default App
