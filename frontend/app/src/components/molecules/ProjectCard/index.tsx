'use client'
import { useState } from 'react'
import { Card, Text, Badge, IconButton } from '../../atoms'

interface ProjectCardProps {
  name: string
  description: string
  fileCount: number
  sessionCount: number
  onDelete: () => void
}

export function ProjectCard({ name, description, fileCount, sessionCount, onDelete }: ProjectCardProps) {
  const [showConfirm, setShowConfirm] = useState(false)

  const handleDeleteClick = () => {
    setShowConfirm(true)
  }

  const handleConfirmDelete = () => {
    onDelete()
    setShowConfirm(false)
  }

  const handleCancel = () => {
    setShowConfirm(false)
  }

  if (showConfirm) {
    return (
      <Card className="flex flex-col space-y-4">
        <div className="text-center space-y-4">
          <Text className="text-lg font-semibold text-gray-900">Delete Project?</Text>
          <Text className="text-sm text-gray-600">
            Are you sure you want to delete "{name}"? This action cannot be undone.
          </Text>
          <div className="flex gap-3 justify-center">
            <button
              onClick={handleCancel}
              className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmDelete}
              className="px-4 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="flex flex-col space-y-4">
      {/* HEADER */}
      <div className="flex justify-between items-start">
        <Text className="text-xl font-bold text-gray-900">{name}</Text>
        <IconButton onClick={handleDeleteClick} variant="danger">
          🗑️
        </IconButton>
      </div>
      
      {/* BODY */}
      <Text className="text-sm text-gray-500 flex-1">
        {description || 'No description'}
      </Text>
      
      {/* FOOTER */}
      <div className="flex gap-2">
        <Badge variant="primary">
          {fileCount} files
        </Badge>
        <Badge variant="default">
          {sessionCount} sessions
        </Badge>
      </div>
    </Card>
  )
}