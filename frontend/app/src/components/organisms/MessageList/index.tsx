import { MessageBubble } from '../../molecules'
import { TypingIndicator } from '../../atoms'

interface Message {
  id: string
  message: string
  sender: string
  avatar?: string
  timestamp: string
  isOwn: boolean
  isMarkdown?: boolean
}

interface MessageListProps {
  messages: Message[]
  isTyping?: boolean
}

export function MessageList({ messages, isTyping = false }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          message={msg.message}
          sender={msg.sender}
          avatar={msg.avatar}
          timestamp={msg.timestamp}
          isOwn={msg.isOwn}
          isMarkdown={msg.isMarkdown}
        />
      ))}
      {isTyping && (
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-xs font-medium text-gray-700">AI</span>
          </div>
          <div className="bg-gray-200 rounded-lg">
            <TypingIndicator />
          </div>
        </div>
      )}
    </div>
  )
}