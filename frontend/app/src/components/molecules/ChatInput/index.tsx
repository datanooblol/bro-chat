'use client'

import { useState, useRef, useEffect } from 'react'
import { Input, Button } from '../../atoms'

interface ChatInputProps {
  onSend: (message: string) => void
  placeholder?: string
  disabled?: boolean
}

export function ChatInput({ 
  onSend, 
  placeholder = "Type a message...",
  disabled = false 
}: ChatInputProps) {
  const [message, setMessage] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim())
      setMessage('')
    }
  }

  useEffect(() => {
    if (!disabled && inputRef.current) {
      inputRef.current.focus()
    }
  }, [disabled])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex gap-2 p-4 border-t border-gray-200">
      <div className="flex-1">
        <Input
          ref={inputRef}
          value={message}
          onChange={setMessage}
          placeholder={placeholder}
          disabled={disabled}
          onKeyPress={handleKeyPress}
        />
      </div>
      <Button 
        onClick={handleSend}
        disabled={disabled || !message.trim()}
      >
        Send
      </Button>
    </div>
  )
}