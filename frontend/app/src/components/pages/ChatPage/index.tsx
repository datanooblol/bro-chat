import { ChatLayout } from '../../templates'
import { ChatContainer } from '../../organisms'

export function ChatPage() {
  return (
    <ChatLayout title="AI Chat">
      <ChatContainer 
        currentUser="You"
      />
    </ChatLayout>
  )
}