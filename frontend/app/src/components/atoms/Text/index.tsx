interface TextProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  weight?: 'normal' | 'medium' | 'bold'
  color?: 'primary' | 'secondary' | 'muted'
}

export function Text({ 
  children, 
  size = 'md', 
  weight = 'normal',
  color = 'primary' 
}: TextProps) {
  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }
  
  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold'
  }
  
  const colors = {
    primary: 'text-gray-900',
    secondary: 'text-gray-700',
    muted: 'text-gray-500'
  }

  return (
    <span className={`${sizes[size]} ${weights[weight]} ${colors[color]}`}>
      {children}
    </span>
  )
}