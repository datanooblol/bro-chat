import { api } from './index'

interface ChatMessage {
  message_id: string
  content: string
  role: 'user' | 'assistant'
  created_at: string
}

interface SessionHistoryResponse {
  session_id: string
  messages: ChatMessage[]
}

export const chatApi = {
  getSessionHistory: (sessionId: string): Promise<SessionHistoryResponse> =>
    api.get(`/chat/sessions/${sessionId}/history`)
}