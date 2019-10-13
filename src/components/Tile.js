import React from 'react'

export function Tile({ children, className, ...props }) {
  return (
    <div
      className={`px-2 rounded shadow-md border border-gray-200 bg-gray-100 flex flex-col justify-between ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
