import React from 'react'

export function Tile({ children, className, ...props }) {
  return (
    <div
      className={`px-2 rounded shadow-md border-2 border-gray-500 bg-gray-100 flex flex-col justify-between ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
