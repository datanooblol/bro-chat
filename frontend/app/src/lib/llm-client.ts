import { ModelResponse, ChatMessage } from './types'

interface APIResponse {
  model: string
  message: {
    role: string
    content: string
    thinking?: string
  }
}

export class LocalOpenAI {
  private modelId: string
  private endpointUrl: string

  constructor(modelId: string = "gpt-oss:20b") {
    this.modelId = modelId
    this.endpointUrl = "http://localhost:11434/api/chat"
  }

  private outputMessage(response: APIResponse, responseTimeMs: number): ModelResponse {
    return {
      model_name: response.model,
      role: response.message.role,
      content: response.message.content,
      reason: response.message.thinking,
      input_tokens: 0,
      output_tokens: 0,
      response_time_ms: responseTimeMs
    }
  }

  async run(systemPrompt: string, messages: ChatMessage[]): Promise<ModelResponse> {
    const startTime = Date.now()
    
    const payload = {
      model: this.modelId,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages
      ],
      stream: false
    }

    const response = await fetch(this.endpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })

    const responseTimeMs = Date.now() - startTime
    const data = await response.json()
    
    return this.outputMessage(data, responseTimeMs)
  }
}