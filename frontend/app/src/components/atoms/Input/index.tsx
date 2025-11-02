import { forwardRef } from 'react'

interface InputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: 'text' | 'email' | 'password'
  disabled?: boolean
  onKeyPress?: (e: React.KeyboardEvent) => void
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ 
  value, 
  onChange, 
  placeholder, 
  type = 'text',
  disabled = false,
  onKeyPress 
}, ref) {
  return (
    <input
      ref={ref}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      disabled={disabled}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
    />
  )
})