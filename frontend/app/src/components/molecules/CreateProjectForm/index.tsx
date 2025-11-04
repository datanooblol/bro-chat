'use client'
import { useState } from 'react'
import { Input, Button } from '../../atoms'

interface CreateProjectFormProps {
  onSubmit: (name: string, description: string) => void
  loading: boolean
}

export function CreateProjectForm({ onSubmit, loading }: CreateProjectFormProps) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      onSubmit(name.trim(), description.trim())
      setName('')
      setDescription('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Project name"
        value={name}
        onChange={setName}
      />
      
      <Input
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={setDescription}
      />
      
      <Button
        type="submit"
        disabled={loading || !name.trim()}
        className="w-full"
      >
        {loading ? 'Creating...' : 'Create Project'}
      </Button>
    </form>
  )
}