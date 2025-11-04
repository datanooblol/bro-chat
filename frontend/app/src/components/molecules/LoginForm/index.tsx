import { Input, Button, Text } from '../../atoms'

interface LoginFormProps {
  email: string
  password: string
  error: string
  loading: boolean
  onEmailChange: (value: string) => void
  onPasswordChange: (value: string) => void
  onSubmit: (e: React.FormEvent) => void
}

export function LoginForm({
  email,
  password,
  error,
  loading,
  onEmailChange,
  onPasswordChange,
  onSubmit
}: LoginFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
      />
      
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
      />
      
      {error && (
        <Text className="text-red-500 text-sm text-center">{error}</Text>
      )}
      
      <Button
        type="submit"
        disabled={loading}
        variant="dark"
        className="w-full"
      >
        {loading ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  )
}