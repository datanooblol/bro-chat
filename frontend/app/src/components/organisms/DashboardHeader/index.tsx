'use client'
import { useState } from 'react'
import { Text, Button } from '../../atoms'
import { StatsCard, CreateProjectForm } from '../../molecules'

interface DashboardHeaderProps {
  projectCount: number
  onCreateProject: (name: string, description: string) => void
  loading: boolean
}

export function DashboardHeader({ projectCount, onCreateProject, loading }: DashboardHeaderProps) {
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
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <Text className="text-4xl font-bold text-gray-900">Your Projects</Text>
        <Text className="text-gray-600">Manage your data projects and start conversations</Text>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 inline-block">
        <StatsCard title="Total Projects" count={projectCount} />
      </div>

      <div className="space-y-4">
        <Button 
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="px-8 py-3"
        >
          {showCreateForm ? 'Cancel' : 'Create New Project'}
        </Button>

        {showCreateForm && (
          <div className="max-w-md mx-auto">
            <CreateProjectForm onSubmit={handleCreateProject} loading={loading} />
          </div>
        )}
      </div>
    </div>
  )
}