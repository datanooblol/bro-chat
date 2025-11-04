import { Text, Badge } from '../../atoms'

interface StatsCardProps {
  title: string
  count: number
}

export function StatsCard({ title, count }: StatsCardProps) {
  return (
    <div className="text-center space-y-2">
      <Text className="text-sm font-medium text-gray-600">{title}</Text>
      <Badge variant="primary" className="text-lg px-4 py-2">{count}</Badge>
    </div>
  )
}