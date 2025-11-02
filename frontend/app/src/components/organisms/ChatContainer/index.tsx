'use client'

import { useState } from 'react'
import { MessageList } from '../MessageList'
import { ChatInput } from '../../molecules'
import { LocalOpenAI } from '../../../lib/llm-client'

interface Message {
  id: string
  message: string
  sender: string
  avatar?: string
  timestamp: string
  isOwn: boolean
  isMarkdown?: boolean
}

interface ChatContainerProps {
  initialMessages?: Message[]
  currentUser: string
}

export function ChatContainer({ 
  initialMessages = [], 
  currentUser 
}: ChatContainerProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [isLoading, setIsLoading] = useState(false)
  const llmClient = new LocalOpenAI()

  const handleSendMessage = async (message: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      message,
      sender: currentUser,
      timestamp: new Date().toLocaleTimeString(),
      isOwn: true
    }
    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      const chatHistory = messages.map(msg => ({
        role: msg.isOwn ? 'user' as const : 'assistant' as const,
        content: msg.message
      }))
      
      const response = await llmClient.run(
        "You are a helpful AI assistant in a chat application.",
        [...chatHistory, { role: 'user', content: message }]
      )

      console.log('LLM Response Content:', response.content)
      console.log('LLM Response Content (raw):', JSON.stringify(response.content))

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        message: response.content,
        sender: 'AI Assistant',
        timestamp: new Date().toLocaleTimeString(),
        isOwn: false,
        isMarkdown: true
      }
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error getting AI response:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-full bg-white">
      <MessageList messages={messages} isTyping={isLoading} />
      <ChatInput onSend={handleSendMessage} disabled={isLoading} />
    </div>
  )
}