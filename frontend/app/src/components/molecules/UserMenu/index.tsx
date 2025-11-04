import { Avatar } from '../../atoms'
import { useAuth } from '../../../lib/hooks/use-auth'

export function UserMenu() {
  const { user } = useAuth()
  
  if (!user) return null

  const userInitial = user.email.charAt(0).toUpperCase()

  return (
    <div className="flex items-center space-x-3">
      <Avatar 
        alt={user.email}
        fallback={userInitial}
        size="sm"
      />
    </div>
  )
}