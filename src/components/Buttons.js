import React from 'react'

function BaseButton({ type = 'button', onClick, children, className }) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export function PrimaryButton(props) {
  return (
    <BaseButton
      {...props}
      className="px-2 text-white font-medium rounded bg-blue-700"
    />
  )
}

export function SecondaryButton(props) {
  return (
    <BaseButton
      {...props}
      className="px-2 underline text-blue-700 font-medium"
    />
  )
}

export function TertiaryButton(props) {
  return (
    <BaseButton
      {...props}
      className="px-2 underline text-gray-700 font-medium"
    />
  )
}

export function DangerButton(props) {
  return (
    <BaseButton
      {...props}
      className="px-2 underline text-red-700 font-medium"
    />
  )
}
