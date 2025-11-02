export interface ModelResponse {
  model_name: string
  role: string
  content: string
  reason?: string
  input_tokens: number
  output_tokens: number
  response_time_ms: number
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}