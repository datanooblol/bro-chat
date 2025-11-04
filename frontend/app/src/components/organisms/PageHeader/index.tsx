'use client'
import { useState } from 'react'
import { Text, Button } from '../../atoms'
import { CreateProjectForm } from '../../molecules'

interface PageHeaderProps {
  title: string
  onCreateProject: (name: string, description: string) => void
  loading: boolean
}

export function PageHeader({ title, onCreateProject, loading }: PageHeaderProps) {
  const [showCreateForm, setShowCreateForm] = useState(false)

  const handleCreateProject = async (name: string, description: string) => {
    try {
      await onCreateProject(name, description)
      setShowCreateForm(false)
    } catch (error) {
      console.error('Failed to create project:', error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Text className="text-3xl font-bold text-gray-900">{title}</Text>
        <Button onClick={() => setShowCreateForm(!showCreateForm)}>
          {showCreateForm ? 'Cancel' : 'Create Project'}
        </Button>
      </div>

      {showCreateForm && (
        <div className="max-w-md">
          <CreateProjectForm onSubmit={handleCreateProject} loading={loading} />
        </div>
      )}
    </div>
  )
}