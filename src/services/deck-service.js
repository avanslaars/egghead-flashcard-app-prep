export function getAllDecks() {
  return fetch('/api/deck').then(res => res.json())
}

function createDeck(deck) {
  return fetch('/api/deck', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(deck)
  }).then(res => res.json())
}

function updateDeck(deck) {
  return fetch(`/api/deck/${deck.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(deck)
  }).then(res => res.json())
}

export function saveDeck(deck) {
  return deck.id ? updateDeck(deck) : createDeck(deck)
}

export function destroyDeck(id) {
  return fetch(`/api/deck/${id}`, { method: 'DELETE' })
}
