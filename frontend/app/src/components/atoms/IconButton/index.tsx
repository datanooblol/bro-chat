interface IconButtonProps {
  onClick: () => void
  children: React.ReactNode
  variant?: 'danger' | 'default'
  disabled?: boolean
  className?: string
}

export function IconButton({ 
  onClick, 
  children, 
  variant = 'default', 
  disabled = false,
  className = '' 
}: IconButtonProps) {
  const variants = {
    default: 'text-gray-500 hover:text-gray-700',
    danger: 'text-red-500 hover:text-red-700'
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`p-2 rounded-md transition-colors ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  )
}