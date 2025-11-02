import Image from 'next/image'

interface AvatarProps {
  src?: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
  fallback?: string
}

export function Avatar({ 
  src, 
  alt, 
  size = 'md',
  fallback 
}: AvatarProps) {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  }

  const initials = fallback || alt.split(' ').map(n => n[0]).join('').toUpperCase()

  return (
    <div className={`${sizes[size]} rounded-full overflow-hidden flex items-center justify-center bg-gray-300 text-gray-700 font-medium relative`}>
      {src ? (
        <Image 
          src={src} 
          alt={alt} 
          fill
          className="object-cover"
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  )
}